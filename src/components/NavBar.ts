import createElement from '../utils/createElement';

const NavBar = () => {
    const links = ['characters', 'locations', 'episodes'];
    const linkElements = links.map((link) => ({
        tagName: 'li',
        classList: ['nav-item'],
        attributes: {
            'data-tabId': link,
        },
        children: [
            {
                tagName: 'a',
                text: link,
                classList: ['nav-link'],
                attributes: {
                    href: `/${link}`,
                },
            },
        ],
    }));

    return createElement({
        tagName: 'nav',
        id: 'navBar',
        children: [
            {
                tagName: 'article',
                id: 'navBarLinks',
                children: [
                    {
                        tagName: 'ul',
                        children: linkElements,
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
};

export default NavBar;
