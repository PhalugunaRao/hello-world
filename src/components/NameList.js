import React from 'react'
import Person from './Person'

 function NameList() {

  const persons = [
    {
      id: 1,
      name: 'PHALU',
      age: 30,
      skill: 'Geethika'
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
  const personList = persons.map(person => <Person  key = {person.id} 
    
  person = {person}/>)

  const names = ['Phalu','Geethu','Anitha','Babu']
  const nameList = names.map((name,index) => <h2> key={index} {name}  </h2>)

    


  //Simple array with map 
  // const names = ['Geethi','ANith','Dad','bro']
  // const nameList = names.map(name =><h2>{name}</h2>)
  return (
    <div>
     {
      nameList
     }
    </div>
  )
}
export default NameList