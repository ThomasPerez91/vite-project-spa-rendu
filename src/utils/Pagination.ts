import Link from '../components/Link';
import createElement from './createElement';

export interface RenderProps {
    previousText?: string;
    nextText?: string;
    path: string;
}
export class Pagination {
    private previousPageId: string;
    private nextPageId: string;

    private currentPageId: string;

    private itemCount = 0;
    private pageCount = 0;

    constructor(
        { count = 0, pages = 0, next, prev }: ApiResponseInfo,
        currentPageId: string = '1'
    ) {
        this.itemCount = count;
        this.pageCount = pages;

        this.previousPageId = Pagination.getPageId(prev, 'page');
        this.nextPageId = Pagination.getPageId(next, 'page');

        this.currentPageId = currentPageId;
    }

    static getPageId = (url: string, param: string = 'pageId'): null | string => {
        if (!url) {
            return null;
        }

        const { search } = new URL(url);
        const searchParams = new URLSearchParams(search);

        return searchParams.get(param);
    };

    private buidLink = (textContent: string, href: string, pageId: string = '0') =>
        !pageId
            ? createElement({
                  tagName: 'p',
                  attributes: { textContent },
              })
            : Link({
                  textContent: textContent,
                  href: href + pageId,
              });

    render = ({ previousText = 'Previous', nextText = 'Next', path }: RenderProps) => {
        return createElement({
            tagName: 'div',
            attributes: {
                classList: ['pagination-controls'],
            },
            children: [
                {
                    tagName: 'p',
                    attributes: {
                        textContent: this.itemCount
                            ? `${this.currentPageId}/${this.pageCount}`
                            : 'Pagination not available',
                    },
                },
                this.buidLink(previousText, path, this.previousPageId),
                this.buidLink(nextText, path, this.nextPageId),
            ],
        });
    };
}
