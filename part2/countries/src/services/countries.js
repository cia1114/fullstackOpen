import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

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

export default {getCountriesNames, getCountry}