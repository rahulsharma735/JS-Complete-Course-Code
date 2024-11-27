/* FILE NAEM FOR THE RUN THIS CODE  = node 01_basics/01_variables.js */
const accountId = 144553
let accountEmail = "rahulkhandal783@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "rahulsharma70133@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])