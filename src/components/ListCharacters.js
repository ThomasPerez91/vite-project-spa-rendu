import createElement from "../utils/createElement";
import { Character } from "./Character";

export default function ListCharacters(characters) {
    const template = createElement({
        tagName: 'div',
        classList: ['character-page']
    });
    characters.forEach((character) => template.append(Character(character)));

    return template;
}
