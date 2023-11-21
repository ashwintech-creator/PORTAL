import React from 'react';

class ListExample extends React.Component {
  render() {
    const myList = ['Item1', 'Item2', 'Item3'];

    const myListElements = myList.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return (
      <div>
        <h1 style={'bold'}>List of Items:</h1>
        <ul>{myListElements}</ul>
      </div>
    );
  }
}

export default ListExample;
