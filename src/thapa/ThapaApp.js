import React,{useState} from 'react'
import '../App.css'

function ThapaApp() {

  const [myname,setMyName]=  useState('Thapa Techincal');

  const changeName = () =>{
    // let val = myname;
    // if (val==='Thapa Techincal'){
    //   setMyName('Hi Geethika');
    // }else{
    //   setMyName('Thapa Techincal');
    // }
    let val = myname;
      val==='Thapa Techincal'?
       setMyName('Hi Geethika'): setMyName('Thapa Techincal');

  }
  return (
    <div>
      <h1>{myname}</h1>
      <button className="btn" onClick={changeName}>Click me Please</button>
    </div>
  )
}

export default ThapaApp