import React, { Component } from 'react'

export default class SpreadPassigUnknow extends Component {
render() {
const{titlel, ...restValue}=this.props;

return (
<div>
  <h1>Titile is {this.props.title1}</h1>
<input {...restValue}></input>
</div>)
}}