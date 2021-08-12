import './sass/main.scss';

import { alert, defoulModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
// import { defaults } from 'gh-pages';

// defoulModules.countriesHtml(PNotifyMobile, {});
const refs = {
    input: document.querySelector('.js-input'),
    countriesList: document.querySelector('.js-list-contries')
}
console.log(refs.input)
console.log(refs.countriesList)

refs.input.addEventListener('input', fetchCountries);

export default function fetchCountries(searchQuery) {
    
    const query = searchQuery.target.value;
    if (query) {
        fetch(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`)
            .then((response) => {
                return response.json();
            })
            .then((countries) => {
                
                const countriesHtml = countries.map((country) => `<li>${country.name}</li>`)
                alert({ type: 'notice', text: 'Hello World' });
                refs.countriesList.insertAdjacentHTML('afterbegin', countriesHtml);
            })
            .catch(console.log(error));
    }
}