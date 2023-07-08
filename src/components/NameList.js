import React from 'react'
import Person from './Person'

 function NameList() {

  const persons = [
    {
      id: 1,
      name: 'PHALU',
      age: 30,
      skill: 'GEETHU'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Anitha',
      age: 28,
      skill: 'Vue'
    }
  ]

  const personList = persons.map(person => <Person person = {person}/>)

  //Simple array with map 
  // const names = ['Geethi','ANith','Dad','bro']
  // const nameList = names.map(name =><h2>{name}</h2>)
  return (
    <div>
     {
      personList
     }
    </div>
  )
}
export default NameList