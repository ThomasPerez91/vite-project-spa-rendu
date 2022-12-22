import PageCharacter from './src/pages/PageCharacter';
import PageLocation from './src/pages/PageLocation';
import TabManager from './src/utils/TabManager';
import NavBar from "./src/components/NavBar.js";

import './src/styles/style.css';
import './src/styles/navbar.css';
import './src/styles/character.css';

const headerElement = document.querySelector('header');
headerElement.appendChild(NavBar());
const footerElement = document.querySelector('footer');
const rootElement = document.querySelector('#app');

const tabManager = new TabManager(rootElement, {
    characters: {
        component: PageCharacter,
        params: []
    },
    locations: {
        component: PageLocation,
        params: []
    }
});

document.querySelectorAll('[datatabid]').forEach(element => {
    element.addEventListener('click', () => {
        tabManager.openTabById(element.getAttribute('datatabid'));
    });
});

