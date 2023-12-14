import React, { Component } from "react";

export default class TotalCalori extends Component{
  render(){
    return(
      <div style={{display:'flex',paddingLeft:'40px'}}>
        <h3>{`${this.props.count}  ${this.props.name} = ${this.props.totalCal} calories`}</h3>
      </div>
    )
  }
}