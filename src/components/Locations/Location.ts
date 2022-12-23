import { LocationApi } from '../../utils/Api.js';
import createElement, { createElementProps } from '../../utils/createElement';

export async function Location({ name, type, dimension, residents }) {
    const residentsData = residents.length !== 0 ? await new LocationApi().getBulk(residents) : [];

    const tableTitle: createElementProps = {
        tagName: 'tr',
        attributes: {
            classList: ['table-location-header-row'],
        },
        children: [
            {
                tagName: 'th',
                attributes: {
                    classList: ['table-location-name'],
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
    };

    const tableColumnsName: createElementProps = {
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
    };

    const tableBody =
        residentsData.length > 0
            ? residentsData.map(createTableRowLocation)
            : [
                  {
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
                  },
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

const createTableRowLocation = ({ name, status, url }): createElementProps => ({
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
