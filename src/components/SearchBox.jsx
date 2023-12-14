import React from "react";

export default function SearchBox(props){
  return(
    <>
      <h3 style={{marginLeft:'100px',fontSize:'27px'}}>Search</h3>
      <input onChange={e=>{props.handleSearch(e)}}  type="search"style={{borderColor:'black',marginLeft:'100px',marginBottom:'20px'}}></input>
    </>
  )
}