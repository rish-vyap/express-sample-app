 function checkToken (req, res, next) {
    console.log("I am able to use this here on!");
    res.send('hi');
    return;
  }
  
  module.exports ={checkToken} ;
  