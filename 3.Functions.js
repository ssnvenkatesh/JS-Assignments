//**Task 1:==> Function
/* function userprofile(name)
{
    console.log(`The name of this profile ${name}`);
    
}
userprofile("Venkatesh"); */
//************************************************

//**Task 2:==> Using Arrow function
/* let number=(number1)=>{
    console.log(`Value of number is ${number1}` );
}
number(88); */
//************************************************
//**Task 3:
 (function timeoutfun(timeoutvalue)
{ 
    console.log(`This message display before ${timeoutvalue} seconds`+" Hi"+);
 setTimeout(() => {
    console.log(`This message display after ${timeoutvalue} seconds`+" Bye");
 }, timeoutvalue);
    
})
 (5000);
//************************************************
//**Task 4 Callback function:
/* function getuserData(name,callback)
{
    console.log(`The name of user ${name}`);
    console.log("The time delay")
    setTimeout(() => {
       callback();
    }, 10000);
   
     
}
function userage()
{
    var age=30;
    console.log(`The age of user is ${age}`);
}
getuserData("Peter",userage); */