interface createElementProps {
    tagName: keyof HTMLElementTagNameMap;
    id?: string;
    text?: string;
    children?: HTMLElement | createElementProps[];
    classList?: string[];
    type?: string;
    href?: string;
    src?: string;
    alt?: string;
    title?: string;
    attributes?: {
        [key: string]: any; // le any ici est nécessaire :)
    };
}
const createElement = (props: createElementProps): HTMLElement => {
    if (!props) {
        throw new Error('Missing props');
    }

    const { tagName, ...rest } = props;
    const element = document.createElement(tagName) as HTMLInputElement &
        HTMLImageElement &
        HTMLAnchorElement;

    // todo: refacto, peut-être via Object.assign ?
    if ('id' in rest) {
        element.id = rest.id;
    }

    if ('type' in rest) {
        element.type = rest.type;
    }

    if ('classList' in rest) {
        element.classList.add(...rest.classList);
    }

    if ('href' in rest) {
        element.href = rest.href;
    }

    if ('src' in rest) {
        element.src = rest.src;
    }

    if ('alt' in rest) {
        element.alt = rest.alt;
    }

    if ('title' in rest) {
        element.title = rest.title;
    }

    if ('text' in rest) {
        element.textContent = rest.text;
    }

    if ('attributes' in rest) {
        for (const [key, value] of Object.entries(rest.attributes)) {
            element.setAttribute(key, value);
        }
    }

    if ('children' in rest) {
        (rest.children as createElementProps[]).forEach((child) =>
            element.appendChild(child instanceof HTMLElement ? child : createElement(child))
        );
    }

    return element;
};

export const createBulkElement = (elements) => elements.map((element) => createElement(element));

export default createElement;
