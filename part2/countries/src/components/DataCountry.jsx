

export const DataCountry = ({country}) => {
    if (!country)
        return null
  return (
    <div>
        <h1>{country.name}</h1>
        <div>{`Capital: ${country.capital}`}</div>
        <div>{`Area: ${country.area}`}</div>
        <h2>Languages</h2>
        <ul>
            { 
                Object.entries(country.languages).map( entry => (<li key={entry[0]}>{entry[1]}</li>))
            }
        </ul>
        <img src={country.flag} alt={`${country.name}'s flag`} height="200" width="300"/>
        <h2>Weather in {country.capital}</h2>
        <div>{`Temperature: ${country.temperature} Celsius`}</div>
        <img src={country.urlIcon} alt='temperature icon'/>
        <div>{`Wind: ${country.wind} m/s`}</div>
    </div>
  )
}
