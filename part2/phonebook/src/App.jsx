import { useState, useEffect } from 'react'
import personServices from './services/persons'
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons';

const App = () => {
  
  const [persons, setPersons] = useState([]) 
  
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');
 
  useEffect(() => {
    personServices
      .getAll()
      .then( initialData => setPersons(initialData))
    }, []);

  const handleChangeFilter = (event) => {
       setFilter(event.target.value)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
}

const handleNewPhone = (event) => {
  setNewPhone(event.target.value)
}

  const handleClickAdd = (event) => {
    event.preventDefault()
    
    if(newName) {
      
      if(persons.find((item) => item.name === newName)) 
        alert(`${newName} is already added to phonebook`)
      else {
        personServices
          .create({name: newName, number: newPhone})
          .then(returnedData => setPersons(persons.concat(returnedData)))
      }
        
      setNewName('')
      setNewPhone('')
      setFilter('')
    }
 }

 const showPersons = filter 
    ? persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={filter} 
        handleChangeFilter={handleChangeFilter} 
      />
      <h3>Add a new</h3>
      <PersonForm 
        name={newName}
        phone={newPhone}
        handleNewName={handleNewName}
        handleNewPhone={handleNewPhone}
        handleClickAdd={handleClickAdd}
      />
      <h2>Numbers</h2>
      <Persons persons={showPersons}/>
    </div>
  )
}

export default App