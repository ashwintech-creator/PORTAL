import React, { Component } from 'react'

export default class StateclassComp extends Component {
    state={name:"SKCET",
    place:"CBT"
}

// changeCollege=()=>{this.setState({name:"Atria"})}

// render() {
// return (
// <div>
// <h1>i am studying at {this.state.name} place {this.state.place}</h1>
// <button onClick={this.changeCollege}>Click me</button>

// </div>)
// }
// }


// render() {
//   return (
//   <div>
//   <h1>i am studying at {this.state.name} place {this.state.place}</h1>
//   <button onClick={()=>{this.setState({name:"Atria"}) }}>Click me</button>
  
//   </div>)

constructor()

{
super();
this. state={name:"SKCET",
place:"CBT"
}
}
changeCollege()
{
this.setState({name:"Atria"})
}
render() {
return (

<div>
<h1>i am studying at {this.state.name} place {this.state.place}</h1>
<button onClick={this.changeCollege.bind(this) }>Click me</button>

</div>
);
}

}