import React,{useState} from 'react';

function MultipleStatesApp() {

  const [details,setDetails] = useState({
    name:"",
    email:"",
    password:"",
    address:""

  });
  const handleChange =(e)=>{
    const {name,value} = e.target
    setDetails((prev)=>{
      return {...prev,[name]:value}
    });

  };

  const handleSubmit =() =>{
    console.log(details)
  }

  return (
   <form onSubmit={handleSubmit}>
    <h3>Name:</h3><input type="text" name="name" onChange={handleChange}/>
    <h3>Email:</h3><input type="email" name="email" onChange={handleChange}/>
    <h3>Password:</h3>
    <input type="password" name="password" onChange={handleChange}/>
    <h3>Address:</h3><textarea name ="address" onChange={handleChange}></textarea>
    <br></br>
    <button type='submit'>Submit Form</button>
   </form>
  )
}

export default MultipleStatesApp