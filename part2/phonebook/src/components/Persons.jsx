
const Person = ({id, name, number}) => <div key={id}>{name} {number} </div>

export const Persons = ({persons}) => {
  
  return (
    <div>
        {
            persons.map( item => <Person key={item.id} id={item.id} name={item.name} number={item.number} />)
        }
    </div>
  )
}
