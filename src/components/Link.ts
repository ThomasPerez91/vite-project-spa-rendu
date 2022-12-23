import { tabManager } from '../main';
import createElement, { createElementProps } from '../utils/createElement';

export default function Link(attributes: createElementProps['attributes']) {
    if (!('href' in attributes)) {
        throw new Error('Missing href');
    } else if (typeof attributes['href'] !== 'string') {
        throw new Error('Link href string expected but received: ' + typeof attributes['href']);
    }

    const element = createElement({
        tagName: 'a',
        attributes,
    });

    element.addEventListener('click', (event) => {
        event.preventDefault();
        history.pushState({}, '', attributes['href'] as string);
        const path = location.pathname.substring(1).split('?')[0];
        tabManager.openTabById(path as string);
    });

    return element;
}
