import  getData  from "../helpers/getData.js";
import printCards from "../modules/printCards.js";

const url = 'https://rickandmortyapi.com/api/character';

const main = document.getElementById('main');

let cards;

document.addEventListener( 'DOMContentLoaded', async() => {
    cards = await getData( url );
    printCards( cards, main );
} );

