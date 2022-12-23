import createElement from '../utils/createElement';
import Link from './Link';

const NavBar = () => {
    const links = ['characters', 'locations', 'episodes'];
    const linkElements = links.map((link) =>
        createElement({
            tagName: 'li',
            attributes: {
                'data-tabId': link,
                classList: ['nav-item'],
            },
            children: [
                Link({
                    textContent: link,
                    href: link,
                    classList: ['nav-link'],
                }),
            ],
        })
    );

    return createElement({
        tagName: 'nav',
        attributes: {
            id: 'navBar',
        },
        children: [
            {
                tagName: 'article',
                attributes: {
                    id: 'navBarLinks',
                },
                children: [
                    {
                        tagName: 'ul',
                        children: linkElements,
                    },
                ],
            },
            {
                tagName: 'article',
                attributes: {
                    id: 'navBarSearch',
                },
                children: [
                    {
                        tagName: 'input',
                        attributes: {
                            type: 'search',
                            id: 'searchInput',
                            placeholder: 'Search for...',
                        },
                    },
                    {
                        tagName: 'button',
                        attributes: {
                            type: 'button',
                            id: 'searchButton',
                            textContent: 'Search',
                        },
                    },
                ],
            },
        ],
    });
};

export default NavBar;
