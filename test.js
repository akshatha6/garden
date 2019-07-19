const bcrypt = require('bcrypt');

const saltRounds = 10;
var encrypt="";
 bcrypt.hash("akshatha", saltRounds, function(err, hash) {
        // Store hash in your password DB.
        console.log("hash for akshatha:: ",hash);
        

    });
    bcrypt.compare("akshatha",hash).then((res )=> {
      
      console.log(res);
    
    });