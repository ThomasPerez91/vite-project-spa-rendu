import createElement from '../../utils/createElement';
import ItemCharacter from './ItemCharacter';
import showCharacter from './DetailModal';

const ListCharacters = (characters: Character[]) => {
    return createElement({
        tagName: 'ul',
        attributes: {
            classList: ['list-character'],
        },
        children: characters.map((character) => {
            const item = ItemCharacter(character)
            item.addEventListener('click', () =>
                showCharacter(character.id.toString())
            )
            return item
        })
    });
};

export default ListCharacters;
