const URL = `https://restcountries.com/v3.1`


export const fetchCountries = name => {
return fetch(`${URL}/name/${name}?fields=name,capital,population,flags,languages`).then(response => {
   if(response.ok){
    return response.json();
   
   }
 return Promise.reject('error, not found');
})

};