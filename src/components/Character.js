import createElement from "../utils/createElement";

export function Character({ name, gender, image, origin, species, status, type, url }) {
    const container = createElement({
        tagName: 'div',
        classList: ['character'],
        children: [{
            tagName: 'img',
            src: image,
            alt: `${name}'s avatar`
        }, {
            tagName: 'div',
            classList: ['details'],
            children: [{
                tagName: 'p',
                text: name
            }, {
                tagName: 'p',
                text: 'Status ' + status
            }, {
                tagName: 'p',
                text: 'Type ' + type
            }, {
                tagName: 'p',
                text: 'Gender ' + gender
            }, {
                tagName: 'a',
                href: origin.url,
                text: 'Origin ' + origin.name
            }, {
                tagName: 'p',
                text: 'Species ' + species
            }]
        }]
    });

    return container;
}
