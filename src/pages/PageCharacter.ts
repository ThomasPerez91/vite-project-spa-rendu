import ListCharacters from '../components/Characters/ListCharacters';

import { CharacterApi } from '../utils/Api';
import createElement from '../utils/createElement';
import { Pagination } from '../utils/Pagination';

const PageCharacter = async () => {
    const pageId = Pagination.getPageId(location.href) || '1';

    const characterApi = new CharacterApi();
    const { info, results: characters } = await characterApi.getAll(pageId);

    const pagination = new Pagination(info, pageId);

    return createElement({
        tagName: 'div',
        attributes: {
            classList: ['character-page'],
        },
        children: [
            pagination.render({ path: '/characters?pageId=' }),
            characters
                ? ListCharacters(characters)
                : createElement({
                      tagName: 'p',
                      attributes: {
                          textContent: 'No characters',
                      },
                  }),
        ],
    });
};

export default PageCharacter;
