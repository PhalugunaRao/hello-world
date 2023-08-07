import React,{useState} from 'react'
import '../App.css'
import RulesHooks from './RulesHooks';
import UseStateArray from './UseStateArray';
import UseStateObject from './UseStateObject';
import BasicTodoList from './BasicTodoList';

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
      {/* <h1>{myname}</h1>
      <button className="btn" onClick={changeName}>Click me Please</button>
      <RulesHooks/> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject/> */}
      <BasicTodoList/>
    </div>
  )
}

export default ThapaApp