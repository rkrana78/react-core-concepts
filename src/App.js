import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Jashim', 'Salman', 'Alamgir', 'Manna']
  const products=[
    {name: 'Photoshop', price: '$90.00'},
    {name: 'Illustrator', price: '$80.00'},
    {name: 'Premier pro', price: '$190.00'},
    {name: 'Lightroom', price: '$60.00'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        {
          products.map(product => <li>{product.name}</li>)
        }
        {
          products.map(pd => <Product product={pd}></Product>)
        }
       <Product product={products[0]}></Product>
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () =>  setCount(count + 1);
  const handleDecrease = () =>  setCount(count - 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}: {user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props) {
  const productStyle={
    border: '1px solid gray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

export default App;
