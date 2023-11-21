import React from 'react'

export default function FList1() {

  const fruits = ['mango','apple','banana'];
  const fruit = fruits.map((name)=>{
    return <h3><li>{name}</li></h3>;
  });
  return (
    <div>
      <h1>Fruits name:</h1>
      {fruit}
    </div>
  )
}
