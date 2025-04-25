const accountId = 123;
let accountName = "kalyani";
var accountPassword = "kalyani@0904";

/*not to use var because issue in block scope and functin scope */
accountPassword = "12121212";
accountName = "guddu0904"
city = "yavatmal";
// accountId = 2 ; not allowed


console.log(accountId);
console.table([accountName,accountId,accountPassword,city]);
