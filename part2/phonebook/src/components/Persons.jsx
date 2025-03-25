
const Person = ({person, handleDelete}) => {
  const { name, number } = person
  return (
    <div>
      {`${name} `}
      {`${number} `}
      <button onClick={() => handleDelete(person)}>delete</button>
    </div>
  )
  
}

export const Persons = ({persons, handleDelete}) => {
  //console.log( 'Component Person',persons, handleDelete);
  return (
    <div>
        {
          persons.map( item => <Person key={item.id} person={item} handleDelete={handleDelete} />)
        }
    </div>
  )
}
