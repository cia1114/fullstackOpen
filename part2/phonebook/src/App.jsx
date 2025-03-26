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
      const person = persons.find((item) => item.name === newName)
      if(person) {
        const promp = confirm(`${newName} is already added to phonebook, replace the old number with a new one`)
        if(promp) {
          const updatePerson = {...person, number: newPhone}
          personServices
            .update(updatePerson)
            .then(returnedPerson => {
              setPersons(persons.map( item => item.id !== person.id ? item : returnedPerson))
            })
        }
      }
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

  const handleDeleteOf = (person) => {
    const promp = confirm(`Delete ${person.name}?`)
    if(promp) {
      //console.log('Delete ',person);
      personServices
        .deleteOf(person.id)
        .then(() => {
          setPersons(persons.filter( item => item.id !== person.id))
          alert(`${person.name} was deleted`)
        })
        .catch(() =>  alert('Error'))
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
      <Persons persons={showPersons} handleDelete={handleDeleteOf} />
    </div>
  )
}

export default App