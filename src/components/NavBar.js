import createElement from "../utils/createElement";

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
                }
            }
        ]
    }));

    return createElement({
        tagName: 'nav',
        elementId: 'navBar',
        children: [
            {
                tagName: 'article',
                elementId: 'navBarLinks',
                children: [
                    {
                        tagName: 'ul',
                        children: linkElements
                    },
                ]
            },
            {
                tagName: 'article',
                elementId: 'navBarSearch',
                children: [
                    {
                        tagName: 'input',
                        type: 'search',
                        elementId: 'searchInput',
                        attributes: {
                            placeholder: 'Search for...',
                        }
                    },
                    {
                        tagName: 'button',
                        type: 'button',
                        elementId: 'searchButton',
                        text: 'Search',
                    }
                ]
            }
        ],
    })
}

export default NavBar
