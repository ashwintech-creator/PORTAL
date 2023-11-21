import React from 'react'

class PropdDea extends React.Component {
  render(){ return (
      <h1>en peruuu {this.props.name} </h1>
  )}
}

PropdDea.defaultProps ={
  name:"Meena kumari"
}
export default PropdDea;
