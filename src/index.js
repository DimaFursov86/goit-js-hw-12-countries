
import countryCardTpl from './templates/countrycard.hbs';

import './sass/main.scss';
import fetchCountries from './fetchCountries';
import { error} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


const refs = {
    input: document.querySelector('.js-input'),
    countriesList: document.querySelector('.js-list-contries')
    
}

const debounce = require('lodash.debounce');
refs.input.addEventListener('input', debounce(handleInput, 500));

function handleInput(e) {
    
   const searchQuery = e.target.value;

   fetchCountries(searchQuery)
            .then((countries) => {
                
                if (countries !== undefined) {
                    const countriesHtml = countries.map((country) => `<li class="cardList">${country.name}</li>`)
                
                    if (countriesHtml.length > 10) {
                        error({ delay: 1300, width: '310px', text: 'Too many matches found. Please enter more specific query!' });
                        refs.countriesList.innerHTML = ``;                 
                    }             
                    else if (countriesHtml.length === 1) {
                        const markup = countryCardTpl(countries[0])
                        refs.countriesList.innerHTML = `<li class="noMarker">${markup}</li>`;
                    }
                    else if (countriesHtml.length > 1 && countriesHtml.length < 10) {
                        refs.countriesList.innerHTML = countriesHtml;
                    
                    };
                }
            })
                
}
 