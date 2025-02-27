let givenmark;
let gc=function gradecalculation(givenmark)
{
    console.log(`The given mark is  ${givenmark} and type of this variable is `+ typeof givenmark);
   
    /* took reference from web for "true" statement which I understand switch will take all cases for execution*/
    switch (true) 
    {    
        case (givenmark>=75):
            console.log(`Grade for given mark ${givenmark} is Grade-I`);
            break;
        case (givenmark>=50 && givenmark<75):
            console.log(`Grade for given mark ${givenmark} is Grade-II`);
            break;
        default:
            console.log(`Grade for given mark ${givenmark} is Grade-III`);
            break;
    
    }
} 
gc(5);