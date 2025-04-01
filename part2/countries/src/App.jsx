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

  const getCountryWeather = (baseCountry) => {
    return countriesService
      .getWeather(baseCountry.capital)
      .then( response => {
              //console.log('datos del tiempo del pais: ', {...baseCountry, ...response});
              return {...baseCountry, ...response}
      })
  } 

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
          getCountryWeather(response).then(newCountry => setCountry(newCountry))
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
        getCountryWeather(response).then(newCountry => setCountry(newCountry))
      }
    )}


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
