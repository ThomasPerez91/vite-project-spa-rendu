import createElement from '../utils/createElement';

const PageNotFound = async () =>
    createElement({
        tagName: 'div',
        attributes: {
            classList: ['center'],
            textContent: 'Page not found',
        },
    });

export default PageNotFound;
