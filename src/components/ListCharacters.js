import { Character } from "./Character";

export default function ListCharacters(characters) {
    const template = document.querySelector('#listOfElement');
    const element = template.content.cloneNode(true);
    console.log(characters);

    characters.forEach((character) => {
        element.querySelector('div').appendChild(Character(character));
    });

    return element;
}
