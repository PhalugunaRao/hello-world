import React, {useState} from 'react'

function HookCounterThree() {
  const [name, setName] = useState({firstName:'',lastNamee:''})
  return (
    <form>
      <input 
      type="text"
      value={name.firstName}
      onChange={e=>setName({...name , firstName: e.target.value})}
      />
      <input 
      type="text"
      value={name.lastNamee}
      onChange={e => setName({...name, lastNamee: e.target.value})}
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is -{name.lastNamee}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
    
  )
}

export default HookCounterThree