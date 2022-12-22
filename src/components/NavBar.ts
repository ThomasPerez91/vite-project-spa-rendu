import createElement from '../utils/createElement';

const NavBar = () =>
    createElement({
        tagName: 'nav',
        id: 'navBar',
        children: [
            {
                tagName: 'article',
                id: 'navBarLinks',
                children: [
                    {
                        tagName: 'ul',
                        children: [
                            {
                                tagName: 'li',
                                classList: ['nav-item'],
                                children: [
                                    {
                                        tagName: 'a',
                                        text: 'Characters',
                                        classList: ['nav-link'],
                                        attributes: {
                                            href: '/characters',
                                        },
                                    },
                                ],
                            },
                            {
                                tagName: 'li',
                                classList: ['nav-item'],
                                children: [
                                    {
                                        tagName: 'a',
                                        text: 'Locations',
                                        classList: ['nav-link'],
                                        attributes: {
                                            href: '/locations',
                                        },
                                    },
                                ],
                            },
                            {
                                tagName: 'li',
                                classList: ['nav-item'],
                                children: [
                                    {
                                        tagName: 'a',
                                        text: 'Episodes',
                                        classList: ['nav-link'],
                                        attributes: {
                                            href: '/episodes',
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                tagName: 'article',
                id: 'navBarSearch',
                children: [
                    {
                        tagName: 'input',
                        type: 'search',
                        id: 'searchInput',
                        attributes: {
                            placeholder: 'Search for...',
                        },
                    },
                    {
                        tagName: 'button',
                        type: 'button',
                        id: 'searchButton',
                        text: 'Search',
                    },
                ],
            },
        ],
    });

export default NavBar;
