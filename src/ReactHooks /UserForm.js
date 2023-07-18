import React,{useState} from 'react'
import useInputs from './useInputs'

function UserForm() {
  const [firstName,bindFirtName,resetFirstName] = useInputs('')
  const [lastName,bindLastName,resetLastName] = useInputs('')

  const submitHandler = e =>{
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name</label>
          <input 
          {...bindFirtName}
           type='text'/>
        </div>
        <div>
          <label>Last name</label>
          <input 
          {...bindLastName}
          type='text'/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm