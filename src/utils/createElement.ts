export interface createElementProps {
    tagName: keyof HTMLElementTagNameMap;
    children?: (HTMLElement | createElementProps)[];
    attributes?: Record<string, string | string[] | boolean>;
}

const createElement = ({
    tagName,
    children = [],
    attributes = {},
}: createElementProps): HTMLElement => {
    const element = document.createElement(tagName);

    Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'classList') {
            const classList = typeof value === 'string' ? value : (value as string[]).join(' ');
            element.classList.add(classList);
        } else if (key === 'textContent') {
            element.textContent = value as string;
        } else {
            element.setAttribute(key, value as string);
        }
    });
    children.forEach((child) =>
        element.appendChild(child instanceof HTMLElement ? child : createElement(child))
    );

    return element;
};

export const createBulkElement = (elements) => elements.map((element) => createElement(element));
export default createElement;
