import React from 'react'

function Likeditems(props) {
  return <li>i like {props.name}</li>;
}

export default function List2(){
  const fruits = ['mango','apple','banana'];
  return(
      <ul>
        {fruits.map((n)=> <Likeditems name={n}/>)}
      </ul>
  );
}
