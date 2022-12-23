import createElement from '../../utils/createElement';
import {ItemEpisode} from './ItemEpisode.js';

export default function ListEpisodes(episodes: Episode[]) {
    const tableBody = createElement( {
        tagName: 'tbody',
        attributes: {
            classList: ['table-body'],
        },
    });

    const template = createElement({
        tagName: 'div',
        attributes: {
            classList: ['episode-page'],
        },
        children: [{
            tagName: 'table',
            attributes: {
                classList: ['episode-table'],
            },
            children: [
                {
                    tagName: 'thead',
                    attributes: {
                        classList: ['table-header'],
                    },
                    children: [
                        {
                            tagName: 'tr',
                            attributes: {
                                classList: ['table-header-row'],
                            },
                            children: [
                                {
                                    tagName: 'th',
                                    attributes: {
                                        classList: ['table-header'],
                                        textContent: 'Name',
                                    }
                                },
                                {
                                    tagName: 'th',
                                    attributes: {
                                        classList: ['table-header'],
                                        textContent: 'Release Date',
                                    }
                                },
                                {
                                    tagName: 'th',
                                    attributes: {
                                        classList: ['table-header'],
                                        textContent: 'Episode',
                                    }
                                },
                                {
                                    tagName: 'th',
                                    attributes: {
                                        classList: ['table-header'],
                                        textContent: 'Character\'s count',
                                    }
                                },
                            ]
                        },
                    ]
                },
                tableBody
            ]
        }],
    });

    episodes.forEach(async (episode) => tableBody.append(await ItemEpisode(episode)));

    return template;
}
