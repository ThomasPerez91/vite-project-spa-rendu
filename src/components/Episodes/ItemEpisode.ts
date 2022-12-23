import createElement from '../../utils/createElement';
import {EpisodeApi} from "../../utils/Api";

export async function ItemEpisode({name, air_date, episode, characters}: Episode) {
    const charactersData = characters.length !== 0 ? await new EpisodeApi().getBulk(characters) : [];

    return createElement({
        tagName: 'tr',
        attributes: {
            classList: ['table-body-row'],
        },
        children: [
            {
                tagName: 'td',
                attributes: {
                    classList: ['table-body'],
                    textContent: name,
                }
            },
            {
                tagName: 'td',
                attributes: {
                    classList: ['table-body'],
                    textContent: air_date,
                }
            },
            {
                tagName: 'td',
                attributes: {
                    classList: ['table-body'],
                    textContent: episode,
                }
            },
            {
                tagName: 'td',
                attributes: {
                    classList: ['table-body-count'],
                    textContent: charactersData.length,
                }
            },
        ]
    });
}