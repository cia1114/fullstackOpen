

export const Countries = ({countries, handleShow}) => {
  if( !(countries && Array.isArray(countries) && countries.length > 0))
        return null
 
  return (
    <>
        {
            countries.map( item => {
              return (
              <div key={item}>
                {` ${item} `}
                <button onClick={() => handleShow(item)}>Show</button>
              </div>
              )
            })
        }
    </>
  )
}
