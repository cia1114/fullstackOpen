import { useState } from 'react'
import { SearchForm } from './components/SearchForm'
import countriesService from './services/countries'
import { Countries } from './components/Countries'
import { DataCountry } from './components/DataCountry'



function App() {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)
  const [message, setMessage] = useState('')

  

  const handleOnSubmit = (event) => {
    event.preventDefault()
    setCountries([])
    setCountry(null)
    
    countriesService
      .getCountriesNames(searchValue)
      .then(response => {
        if (Array.isArray(response))
          setCountries(response)
        else if (typeof response === "object") 
          setCountry(response)
        else
          setMessage(response)
      }
    )
  }

  const handleOnChange = (event) => {
    setSearchValue(event.target.value)
    setMessage('')
  }

  const handleShow = (name) => {
    setCountries([])
    setSearchValue('')
    countriesService
      .getCountry(name)
      .then(response => {
        //console.log(response)
        setCountry(response)
      }
    )

  }


  return (
    <>
      <SearchForm search={searchValue} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
      {message} 
      <Countries countries={countries} handleShow={handleShow}/>
      <DataCountry country={country} />
    </>
  )
}

export default App
