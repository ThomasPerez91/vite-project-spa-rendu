import NavBar from './components/NavBar';
import TabManager from './utils/TabManager';

import PageCharacter from './pages/PageCharacter';
import PageLocation from './pages/PageLocation';
import PageEpisode from './pages/PageEpisode';
import PageNotFound from './pages/PageNotFound';

import './styles/style.css';
import './styles/navbar.css';
import './styles/character.css';

const rootElement = document.querySelector('#app') as HTMLElement;
const tabManager = new TabManager(rootElement, {
    characters: {
        component: PageCharacter,
        params: [],
    },
    locations: {
        component: PageLocation,
        params: [],
    },
    episodes: {
        component: PageEpisode,
        params: [],
    },
    notFound: {
        component: PageNotFound,
        params: [],
    },
});

if (rootElement) {
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.appendChild(NavBar());
    }

    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.textContent = 'Footer';
    }

    const path = location.pathname.substring(1).split('?')[0];
    if (!path || ['characters', 'locations', 'episodes'].includes(path)) {
        tabManager.openTabById(path || 'characters');
    } else {
        tabManager.openTabById('notFound');
    }
}

export { tabManager };
