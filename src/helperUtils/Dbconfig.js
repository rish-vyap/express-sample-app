const { Pool } = require("pg");

class Database {
  constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "postgres",
      password: "Risan1601@",
      port: 5432,
      max: 20,
      idleTimeoutMillis: 30000
    });
      
    // for handling unexpected errors
    this.pool.on("error", (err, client) => {
      console.error("Unexpected error on idle client", err);
      process.exit(-1);
    });
  }

  async query(text, params) {
    const start = Date.now();
    const res = await this.pool.query(text, params);
    const duration = Date.now() - start;
    console.log("executed query", { text, duration, rows: res.rowCount });
    return res;
  }

  async getClient() {
    try{    const client = await this.pool.connect();
      const query = client.query;
      const release = client.release;
  
      // set a timeout of 5 seconds, after which we will log this client's last query
      const timeout = setTimeout(() => {
        console.error("A client has been checked out for more than 5 seconds!");
        console.error(`The last executed query on this client was: ${client.lastQuery}`);
      }, 5000);
  
      // monkey patch the query method to keep track of the last query executed
      client.query = (...args) => {
        client.lastQuery = args;
        return query.apply(client, args);
      };
  
      client.release = () => {
        // clear our timeout
        clearTimeout(timeout);
  
        // set the methods back to their old un-monkey-patched version
        client.query = query;
        client.release = release;
  
        return release.apply(client);
      };
  
      return client;
    }
    catch(e){
      console.log(`the error in connection ${e}`);
    }

  }
}

module.exports = new Database();
