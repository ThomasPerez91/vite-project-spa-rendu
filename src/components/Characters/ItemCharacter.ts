import createElement from '../../utils/createElement';

const ItemCharacter = ({ name, gender, image, origin, species, status, type }: Character) =>
    createElement({
        tagName: 'div',
        attributes: {
            classList: ['character'],
        },
        children: [
            {
                tagName: 'img',
                attributes: {
                    src: image,
                    alt: `${name}'s avatar`,
                },
            },
            {
                tagName: 'div',
                attributes: {
                    classList: ['details'],
                },
                children: [
                    {
                        tagName: 'p',
                        attributes: {
                            textContent: 'Name ' + name,
                        },
                    },
                    {
                        tagName: 'p',
                        attributes: {
                            textContent: 'Status ' + status,
                        },
                    },
                    {
                        tagName: 'p',
                        attributes: {
                            textContent: 'Type ' + type,
                        },
                    },
                    {
                        tagName: 'p',
                        attributes: {
                            textContent: 'Gender ' + gender,
                        },
                    },
                    {
                        tagName: 'a',
                        attributes: {
                            textContent: 'Origin ' + origin.name,
                            href: origin.url,
                        },
                    },
                    {
                        tagName: 'p',
                        attributes: {
                            textContent: 'Species ' + species,
                        },
                    },
                ],
            },
        ],
    });

export default ItemCharacter;
