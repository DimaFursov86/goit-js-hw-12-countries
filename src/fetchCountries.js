
export default function fetchCountries(searchQuery) {
    
    // const query = searchQuery.target.value;
   
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then((response) => {
            return response.json();
        }).then(allCountries => {
            return allCountries
        });
             
}
