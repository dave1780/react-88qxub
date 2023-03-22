import React from "react"
const Header=(props)=>{
   const name=props.name
   if(name){
     return(
       <h1>hello {name}</h1>
     )
   }
 }
 export default Header;