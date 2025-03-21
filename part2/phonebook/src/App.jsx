import { useState } from 'react'
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons';

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');


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
      else 
        setPersons(persons.concat({name: newName, number: newPhone, id: persons.length + 1}))
      
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