import createElement from "../utils/createElement";

export default function PageNotFound() {
    return createElement({
        tagName: 'div',
        classList: ['center'],
        text: 'Page not found'
    });
}
