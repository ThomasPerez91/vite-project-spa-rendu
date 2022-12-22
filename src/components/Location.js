import createElement from "../utils/createElement";
import {LocationApi} from "../utils/Api.js";

export async function Location({id, name, type, dimension, residents, url}) {

    const residentsData = (residents.length !== 0) ? await new LocationApi().getBulk(residents) : [];
    const mappedResident = residentsData.map(({ name, status, url}) => {
        const nameColumn = {
            tagName: 'td',
            classList: 'td',
            text: name,
        }

        const statusColumn = {
            tagName: 'td',
            classList: 'td',
            text: status,
        }

        const urlColumn = {
            tagName: 'td',
            classList: 'td',
            text: url,
        }

        return [nameColumn, statusColumn, urlColumn];
    });
    const container = createElement({
        tagName: 'table',
        classList: ['location-table'],
        children: [
            {
                tagName: 'thead',
                children: [
                    {
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
                                        text: `${name} (Type: ${type}) (Dimension: ${dimension})`
                                    }
                                ]
                            }
                        ]
                    },
                    {
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
                }
                ]
            },
            {
                tagName: 'tbody',
                children: [
                    {
                        tagName: 'tr',
                        classList: ['table-body-row'],
                        children: (mappedResident.length !== 0) ? mappedResident : 'No residents'
                    }
                ]
            }
        ]
    });

    return container;
}
