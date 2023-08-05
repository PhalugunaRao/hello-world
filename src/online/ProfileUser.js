import React from 'react'
import '../App.css';
import { useState } from 'react';
import MyButton from './MyButton';
import PassButton from './PassButton';



const user ={
  name: 'Geethu',
  imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize:90
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ProfileUser() {

  const [count,setCount] = useState(0);

  function handleClickPass(){
    setCount(count + 1);
  }

  function handleClick2(){
    setCount(count+1);
  }
  function handleReset(){
    setCount(0)
  }

  function handleClick(){
    alert('You clicked me!')
  }

  const listItem= products.map(product =>
    <li 
    key={product.id}
    style={{
      color:product.isFruit?'magenta':'darkgreen'
    }}
    >
      {product.title}
    </li>
  );
  return (
    <>
   <ul>{listItem}</ul>
    <h2>{user.name}</h2>
    <img
      className="avatar"
      src={user.imageUrl}
      alt={'Photo of '+user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}

    />
    <button onClick={handleClick}>Click me</button>
    <button onClick={handleClick2}>Clicked {count} times </button>
    <button onClick={handleReset}>Reste Count</button>
    <MyButton/>
    <MyButton/>
    <h1>Counters that update together</h1>
    <PassButton count={count} onClick={handleClickPass}/>
    <PassButton count={count} onClick={handleClickPass}/>
    
    
    </>
  )
}

export default ProfileUser