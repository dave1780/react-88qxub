import React from "react"
const Header=(props)=>{
   const name=props.name
   if(name){
     return(
       <h1>Hello! {name} </h1>
     )
   }else{
     return (
       <h1>Hello!</h1>
     )
   }
 }
 export default Header;