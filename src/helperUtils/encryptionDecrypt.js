const bcrypt = require('bcrypt');
const saltRounds = 10; // you can adjust this number based on your security level requirement
const myPlaintextPassword = 'myPassword123';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password database.
        console.log(hash);
    });
});


const submittedPassword = 'myPassword123'; // password submitted by user trying to log in

bcrypt.compare(submittedPassword, hash, function(err, result) {
    if(result) {
        // If the password is correct, result will be true
        console.log('Password is correct');
    } else {
        // If the password is incorrect, result will be false
        console.log('Password is incorrect');
    }
});
