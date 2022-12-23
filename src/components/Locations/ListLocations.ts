import createElement from '../../utils/createElement';
import { Location } from './Location.js';

export default function ListLocations(locations: Location[]) {
    const template = createElement({
        tagName: 'div',
        attributes: {
            classList: ['location-page'],
        },
    });
    locations.forEach(async (location) => template.append(await Location(location)));

    return template;
}
