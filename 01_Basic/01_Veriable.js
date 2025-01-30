const account_id=144554
let accountEmail="raviranjankumar005@gmail.com"
var password="Ravi@1234"
accountCity="noida"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// account_id=3
accountEmail="Raviranjankumar@hcl.com"
password="1234"
accountCity="Delhi"

console.log(account_id);
console.log(accountEmail);
console.log(password);
console.log(accountCity);

console.table([account_id,accountEmail,password,accountCity,accountState])


