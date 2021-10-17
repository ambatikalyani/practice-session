var readlineSync = require ("readline-sync");
var userAnswerAge = readlineSync.quesion("r u older than 25?");
 console.log(userAge);
if (userAge === "yes"){
   console.log("u r right");
}else{
  console.log("u r wrong");
}