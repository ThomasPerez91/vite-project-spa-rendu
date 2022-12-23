import createElement from '../../utils/createElement';
import ItemCharacter from './ItemCharacter';

const ListCharacters = (characters: Character[]) => {
    return createElement({
        tagName: 'ul',
        attributes: {
            classList: ['list-character'],
        },
        children: characters.map((character) => ItemCharacter(character)),
    });
};

export default ListCharacters;
