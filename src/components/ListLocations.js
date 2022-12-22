import createElement from "../utils/createElement";
import { Location } from "./Location.js";

export default function ListLocations(locations) {
    const template = createElement({
        tagName: 'div',
        classList: ['location-page']
    });
    locations.forEach( async (location) => template.append( await Location(location)));

    return template;
}
