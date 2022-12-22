import NavBar from './src/components/NavBar.js';
import TabManager from './src/utils/TabManager';

import PageCharacter from './src/pages/PageCharacter';
import PageNotFound from './src/pages/PageNotFound';

import './src/styles/character.css';
import './src/styles/navbar.css';
import './src/styles/style.css';

const headerElement = document.querySelector('header');
headerElement.appendChild(NavBar());
const footerElement = document.querySelector('footer');
const rootElement = document.querySelector('#app');

const tabManager = new TabManager(rootElement, {
    characters: {
        component: PageCharacter,
        params: []
    },
    notFound: {
        component: PageNotFound,
        params: []
    }
});

document.querySelectorAll('[data-tabId]').forEach(element => {
    element.addEventListener('click', () => {
        tabManager.openTabById(element.getAttribute('data-tabId'));
    });
});

const path = location.pathname.substring(1).split('?')[0];
if (!path || ['characters'].includes(path)) {
    tabManager.openTabById(path || 'characters');
} else {
    tabManager.openTabById('notFound');
}
