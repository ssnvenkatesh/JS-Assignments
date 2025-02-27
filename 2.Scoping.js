const Name=`venki`;
function namecheck()
{
let Name="Magizh";
if(Name.startsWith("Sangi"))
{
console.log("Name from inside block reference is:"+Name);

}
else{
    console.log("Name got this is difference form Venki or Sangi");
}
    console.log("What we have in let variable is "+ Name);
}
namecheck();
console.log("Name from  globally reference is:"+Name);