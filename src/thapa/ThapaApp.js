import React,{useState} from 'react'
import '../App.css'

function ThapaApp() {

  const [myname,setMyName]=  useState('Thapa Techincal');

  const changeName = () =>{
setMyName('Hi Geethika');
  }
  return (
    <div>
      <h1>{myname}</h1>
      <button className="btn" onClick={changeName}>Click me Please</button>
    </div>
  )
}

export default ThapaApp