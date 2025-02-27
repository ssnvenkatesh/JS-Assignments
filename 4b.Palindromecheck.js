let giventext="eyeredividerrefer";
let splittext=giventext.split(" ");
//console.log(splittext);
let clubbedtext1=splittext.join("");
console.log(clubbedtext1);
let reversetxt=splittext.reverse();
let clubbedtext2=reversetxt.join("");
console.log(clubbedtext2);

if(clubbedtext1==clubbedtext2)
{
    console.log("Given text is Palidrome");
    
}

else
{
    console.log("Given text is not a Palidrome");
}








