import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '52 59193257' 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('');

  const handleClickAdd = (event) => {
    event.preventDefault()
    
    if(newName) {
      
      if(persons.find((item) => item.name === newName)) 
        alert(`${newName} is already added to phonebook`)
      else 
        setPersons(persons.concat({name: newName, phone: newPhone}))
      
      setNewName('')
      setNewPhone('')
    }
 }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>number: <input value={newPhone} onChange={(event) => setNewPhone(event.target.value)} />
        </div>
        <div>
          <button type="submit" onClick={handleClickAdd}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map( item => <div key={item.name}>{item.name} {item.phone} </div>)
      }
    </div>
  )
}

export default App