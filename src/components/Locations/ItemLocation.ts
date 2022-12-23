import { CharacterApi } from '../../utils/Api.js';
import createElement from '../../utils/createElement';

export async function ItemLocation({ name, type, dimension, residents }: LocationType) {
    const residentsData = residents.length !== 0 ? await new CharacterApi().getBulk(residents) : [];

    const tableTitle = createElement({
        tagName: 'tr',
        attributes: {
            classList: ['table-location-header-row'],
        },
        children: [
            {
                tagName: 'th',
                attributes: {
                    classList: ['table-location-name'],
                    colspan: '3',
                },
                children: [
                    {
                        tagName: 'div',
                        attributes: {
                            classList: ['table-location-name-text'],
                            colspan: '3',
                            textContent: `${name} (Type: ${type}) (Dimension: ${dimension}) (${residentsData.length} resident(s))`,
                        },
                    },
                ],
            },
        ],
    });

    const tableColumnsName = createElement({
        tagName: 'tr',
        attributes: {
            classList: ['table-header-row'],
        },
        children: [
            {
                tagName: 'th',
                attributes: {
                    classList: ['table-header'],
                    textContent: 'Resident Name',
                },
            },
            {
                tagName: 'th',
                attributes: {
                    classList: ['table-header'],
                    textContent: 'Status',
                },
            },
            {
                tagName: 'th',
                attributes: {
                    classList: ['table-header'],
                    textContent: 'Profile',
                },
            },
        ],
    });

    const tableBody =
        residentsData.length > 0
            ? residentsData.map(createTableRowLocation)
            : [
                  createElement({
                      tagName: 'tr',
                      children: [
                          {
                              tagName: 'td',
                              attributes: {
                                  colspan: '3',
                                  textContent: 'No resident',
                              },
                          },
                      ],
                  }),
              ];

    const container = createElement({
        tagName: 'table',
        attributes: {
            classList: ['location-table'],
        },
        children: [
            {
                tagName: 'thead',
                children: [tableTitle, tableColumnsName],
            },
            {
                tagName: 'tbody',
                children: tableBody,
            },
        ],
    });

    return container;
}

const createTableRowLocation = ({ name, status, url }) =>
    createElement({
        tagName: 'tr',
        children: [
            {
                tagName: 'td',
                attributes: {
                    classList: 'td',
                    textContent: name,
                },
            },
            {
                tagName: 'td',
                attributes: {
                    classList: 'td',
                    text: status,
                },
            },
            {
                tagName: 'a',
                attributes: {
                    classList: 'td',
                    href: url,
                    textContent: url,
                },
            },
        ],
    });
