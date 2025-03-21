import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('Arturo')

  const handlerClickAdd = (event) => {
    event.preventDefault()
    
    if(newName) {
      
      if(persons.find((item) => item.name === newName)) 
        alert(`${newName} is already added to phonebook`)
      else 
        setPersons(persons.concat({name: newName}))
      
      setNewName('')
    }
 }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={handlerClickAdd}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map( item => <div key={item.name}>{item.name}</div>)
      }
    </div>
  )
}

export default App