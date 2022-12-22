import ListCharacters from './src/pages/ListCharacters';
import TabManager from './src/utils/TabManager';

const rootElement = document.querySelector('#app');

const tabManager = new TabManager(rootElement, {
    characters: {
        component: ListCharacters,
        params: []
    }
});

document.querySelectorAll('[data-tabId]').forEach(element => {
    element.addEventListener('click', () => {
        tabManager.openTabById(element.getAttribute('data-tabId'));
    });
});

tabManager.openTabById('characters');
