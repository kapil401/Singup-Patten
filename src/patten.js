import React from "react"
function Patten(){
  let n,j;
let no=prompt("Please provide a number for the no of rows to be print in a pattern...");
for( n=1;n<=no;n++)
{
for(j=1;j<=n;j++)
{
document.write(+j+" ");
}
document.write("<br />");
}
    return(
        <>
        
        </>
    )
}
 export default Patten;
