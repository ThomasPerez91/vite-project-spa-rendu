import ListEpisodes from '../components/Episodes/ListEpisodes';

import { EpisodeApi } from '../utils/Api';
import createElement from '../utils/createElement';
import { Pagination } from '../utils/Pagination';

const PageEpisode = async () => {
    const pageId = Pagination.getPageId(location.href) || '1';

    const episodeApi = new EpisodeApi();
    const { info, results: episodes } = await episodeApi.getAll(pageId);

    const pagination = new Pagination(info, pageId);

    return createElement({
        tagName: 'div',
        attributes: {
            classList: ['episode-page'],
        },
        children: [
            pagination.render({ path: '/episodes?pageId=' }),
            episodes
                ? ListEpisodes(episodes)
                : createElement({
                    tagName: 'p',
                    attributes: {
                        textContent: 'No episodes',
                    },
                }),
        ],
    });
};

export default PageEpisode;
