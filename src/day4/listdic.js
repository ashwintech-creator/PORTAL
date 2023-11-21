import React from 'react'
function Names(props){
  return <li>here is your fruit: {props.name}</li>;
}

export default function Listdic() {
  const fruits =[
    {id : 1,name: 'apple'},
    {id : 2,name: 'banana'},
    {id : 3,name: 'orange'},
  ]
  return (
    <ul>{fruits.map((x)=> <Names key={x.id} name={x.name}/>)}</ul>
  )
}
