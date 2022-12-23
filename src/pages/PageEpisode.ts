import ListEpisodes from '../components/Episodes/ListEpisodes';
import { EpisodeApi } from '../utils/Api';

const PageEpisode = async () => {
    const episodeApi = new EpisodeApi();
    const episodes = await episodeApi.getAll();
    return ListEpisodes(episodes.results);
};

export default PageEpisode;
