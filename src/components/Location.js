import { LocationApi } from "../utils/Api.js";
import createElement from "../utils/createElement";

export async function Location({ name, type, dimension, residents }) {
    const residentsData = (residents.length !== 0) ? await new LocationApi().getBulk(residents) : [];

    const tableTitle = {
        tagName: 'tr',
        classList: ['table-location-header-row'],
        children: [
            {
                tagName: 'th',
                classList: ['table-location-name'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['table-location-name-text'],
                        colspan: 3,
                        text: `${name} (Type: ${type}) (Dimension: ${dimension}) (${residentsData.length} resident(s))`
                    }
                ]
            }
        ]
    };

    const tableColumnsName = {
        tagName: 'tr',
        classList: ['table-header-row'],
        children: [
            {
                tagName: 'th',
                classList: ['table-header'],
                text: 'Resident Name'
            },
            {
                tagName: 'th',
                classList: ['table-header'],
                text: 'Status'
            },
            {
                tagName: 'th',
                classList: ['table-header'],
                text: 'Profile'
            }
        ]
    };

    const container = createElement({
        tagName: 'table',
        classList: ['location-table'],
        children: [
            {
                tagName: 'thead',
                children: [
                    tableTitle,
                    tableColumnsName
                ]
            },
            {
                tagName: 'tbody',
                children: residentsData.length > 0
                    ? residentsData.map(createTableRowLocation)
                    : [{
                        tagName: 'tr',
                        children: [{
                            tagName: 'td',
                            colspan: "3",
                            text: 'No resident',
                        }]
                    }]
            }
        ]
    });

    return container;
}

const createTableRowLocation = ({ name, status, url }) => ({
    tagName: 'tr',
    children: [
        {
            tagName: 'td',
            classList: 'td',
            text: name,
        }, {
            tagName: 'td',
            classList: 'td',
            text: status,
        }, {
            tagName: 'a',
            classList: 'td',
            href: url,
            text: url,
        }
    ]
});
