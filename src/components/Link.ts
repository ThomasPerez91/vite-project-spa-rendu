import { tabManager } from '../main';
import createElement from '../utils/createElement';

interface LinkProps {
    textContent: string;
    path: string;
    classList?: string | string[];
}
export default function Link({ textContent = '', path = '', classList = [] }: LinkProps) {
    const element = createElement({
        tagName: 'a',
        attributes: {
            textContent,
            href: `/${path}`,
            classList,
        },
    });

    element.addEventListener('click', (event) => {
        event.preventDefault();
        history.pushState({}, null, path);
        tabManager.openTabById(path);
    });

    return element;
}
