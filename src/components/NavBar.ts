import Link from './Link';

import { CharacterApi, EpisodeApi, LocationApi } from '../utils/Api';
import createElement from '../utils/createElement';
import debounce from '../utils/debounce';

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

    const listResult = createElement({
        tagName: 'ul',
    });

    const inputSearch = createElement({
        tagName: 'input',
        attributes: {
            type: 'search',
            id: 'searchInput',
            placeholder: 'Search for...',
        },
    });

    let previousSearch = '';
    inputSearch.addEventListener(
        'keyup',
        debounce(async ({ target }) => {
            const value = target['value'];
            if (!value || value === previousSearch) {
                return;
            }

            previousSearch = value;
            listResult.innerHTML = '';

            const items = await research(value);
            items.forEach(({ name, url }) =>
                listResult.append(
                    createElement({
                        tagName: 'li',
                        children: [
                            Link({
                                textContent: name,
                                href: url,
                            }),
                        ],
                    })
                )
            );
        })
    );

    const buttonSearch = createElement({
        tagName: 'button',
        attributes: {
            type: 'button',
            id: 'searchButton',
            textContent: 'Search',
        },
    });

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
                tagName: 'div',
                attributes: {
                    id: 'navBarSearch',
                },
                children: [inputSearch, buttonSearch, listResult],
            },
        ],
    });
};

interface ResearchResult {
    name: string;
    url: string; // ex: /characters/characterId=42
}
async function research(value: string): Promise<ResearchResult[]> {
    const characterApi = new CharacterApi();
    const locationApi = new LocationApi();
    const episodeApi = new EpisodeApi();

    const { results: searchCharacters } = await characterApi.search(value);
    const { results: searchLocations } = await locationApi.search(value);
    const { results: searchEpisodes } = await episodeApi.search(value);

    const result = [...searchCharacters, ...searchLocations, ...searchEpisodes];
    const sortedResult = result.sort(({ name: nameA }, { name: nameB }) =>
        nameA.localeCompare(nameB)
    );

    return sortedResult.map(({ name, url }) => {
        const charCountToRemove = '/api/'.length;
        const [page, itemId] = new URL(url).pathname.substring(charCountToRemove).split('/');

        return {
            name,
            url: buildLinkUrl(page, itemId),
        };
    });
}

const buildLinkUrl = (page: string, itemId: string) => `/${page}s?${page}Id=${itemId}`;

export default NavBar;
