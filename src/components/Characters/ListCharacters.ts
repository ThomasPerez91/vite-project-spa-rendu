import createElement from '../../utils/createElement';
import ItemCharacter from './ItemCharacter';

const ListCharacters = (characters) =>
    createElement({
        tagName: 'div',
        classList: ['character-page'],
        children: characters.map((character) => ItemCharacter(character)),
    });

export default ListCharacters;
