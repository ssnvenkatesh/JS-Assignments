/* //**If-else statements
let browserName;
let lB=function launchbroswer(browserName)
{
    if(browserName=="Chrome")
    {
        console.log("Launched browser is Chrome");
        
    }
    else
    {
        console.log("Launched browser is Otherbrowser than chorme");
    }
} 
lB("Chrome"); */

//**Switch Statments
let testtype;
let rt=function runtests(testtype)
{
    switch(testtype)
    {
        case `smoke`:
            console.log("Test running is a Smoke Testing");
            break;
        case `regression`:
            console.log("Test running is a Regression Testing");
            break;
        case `sanity`:
            console.log("Test running is a Sanity Testing");
            break;
        default:
            console.log("Test Running is Functional Testing");
            break;
    }

} 
rt("Regression");