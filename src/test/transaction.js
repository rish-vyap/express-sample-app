const db = require("./Database"); // assuming Database.js is in the same directory

app.post("/api/some_route", async (req, res) => {
  const client = await db.getClient();

  try {
    await client.query("BEGIN");
    const result = await client.query("INSERT INTO your_table (column) VALUES ($1) RETURNING *", ["value"]);
    await client.query("COMMIT");

    res.json(result.rows[0]);
  } catch (err) {
    await client.query("ROLLBACK");

    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  } finally {
    client.release();
  }
});
// post-gres gives promisified connections