import createElement from '../../utils/createElement';
import { ItemLocation } from './ItemLocation.js';

export default function ListLocations(locations: LocationType[]) {
    const template = createElement({
        tagName: 'div',
        attributes: {
            classList: ['location-page'],
        },
    });
    locations.forEach(async (location) => template.append(await ItemLocation(location)));

    return template;
}
