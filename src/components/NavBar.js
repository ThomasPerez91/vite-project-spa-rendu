import createElement from "../utils/createElement";

const NavBar = ({text = '', tagName = 'li'} = {}) => createElement(
    {
        tagName: 'nav',
        elementId: 'navBar',
        children: [
            {
                tagName: 'article',
                elementId: 'navBarLinks',
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
                                        }
                                    }
                                ]
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
                                        }
                                    }
                                ]
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
                                        }
                                    }
                                ]
                            },
                        ]
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
    }
)

export default NavBar