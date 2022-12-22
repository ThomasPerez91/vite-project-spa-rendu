import PageCharacter from './pages/PageCharacter';
import TabManager from './utils/TabManager';
import NavBar from './components/NavBar';

import './styles/style.css';
import './styles/navbar.css';
import './styles/character.css';

const rootElement = document.querySelector('#app') as HTMLElement;
if (rootElement) {
    const headerElement = document.querySelector('header');
    headerElement.appendChild(NavBar());

    const footerElement = document.querySelector('footer');
    footerElement.textContent = 'Footer';

    const tabManager = new TabManager(rootElement, {
        characters: {
            component: PageCharacter,
            params: [],
        },
    });

    tabManager.openTabById('characters');
    window['tabManager'] = tabManager;
}
