let givennumber;
let numberCheck= function(givennumber)
{
    if(givennumber<0)
    {
       console.log(`The given number ${givennumber} is Negative number`);
        
    }
    else if(givennumber>0)
    {
        console.log(`The given number ${givennumber} is Positive number`);
    }
    else
    {
        console.log(`The given number ${givennumber} is Zero`);
    }
}
numberCheck(0);