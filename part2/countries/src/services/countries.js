import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'
const iconUrl = 'https://openweathermap.org/img/wn/'

const api_key = import.meta.env.VITE_SOME_KEY

const getCountriesNames = (searchValue) => {
    return axios
        .get(`${baseUrl}all`)
        .then( response => { 
            const data = response.data.filter( item => item.name.common.toLowerCase().includes(searchValue.toLowerCase()))
            //console.log('Data Length: ', data.length);
            if(data.length > 10) 
                return 'Too many matches, specify another filter'
            if(data.length > 1) 
                return data.map( item => item.name.common)
            if(data.length === 1) {
                return {
                    name: data[0].name.common,
                    capital: data[0].capital[0],
                    area: data[0].area,
                    languages: {...data[0].languages},
                    flag: data[0].flags.svg
                }
            }
            return 'No matches found, specify another filter'
        })
}

const getCountry = (country) => {
    return axios
        .get(`${baseUrl}name/${country}`)
        .then(response => {
            return {
                name: response.data.name.common,
                capital: response.data.capital[0],
                area: response.data.area,
                languages: {...response.data.languages},
                flag: response.data.flags.svg
            }
        })
}

const getWeather = (capital) => {
    
    return axios
        .get(`${weatherUrl}?units=metric&q=${capital}&APPID=${api_key}`)
        .then(response => {
            //console.log('API response: ', response)
            const icon = response.data.weather[0].icon
            
            return {
                temperature: response.data.main.temp,
                wind: response.data.wind.speed,
                urlIcon: `${iconUrl}${icon}.png`,
            }
        })
}

export default {getCountriesNames, getCountry, getWeather}