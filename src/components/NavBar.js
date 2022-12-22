import createElement from "../utils/createElement";

const NavBar = ({ text = '', tagName = 'li' } = {}) => createElement(
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
                                attributes: {
                                    dataTabId: 'characters',
                                },
                                children: [
                                    {
                                        tagName: 'a',
                                        text: 'Characters',
                                        classList: ['nav-link'],
                                        attributes: {
                                            href: '#',
                                        }
                                    }
                                ]
                            },
                            {
                                tagName: 'li',
                                classList: ['nav-item'],
                                attributes: {
                                    dataTabId: 'locations',
                                },
                                children: [
                                    {
                                        tagName: 'a',
                                        text: 'Locations',
                                        classList: ['nav-link'],
                                        attributes: {
                                            href: '#',
                                        }
                                    }
                                ]
                            },
                            {
                                tagName: 'li',
                                classList: ['nav-item'],
                                attributes: {
                                    dataTabId: 'episodes',
                                },
                                children: [
                                    {
                                        tagName: 'a',
                                        text: 'Episodes',
                                        classList: ['nav-link'],
                                        attributes: {
                                            href: '#',
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
