import ListLocations from '../components/Locations/ListLocations';

import { LocationApi } from '../utils/Api';
import createElement from '../utils/createElement';
import { Pagination } from '../utils/Pagination';

const PageLocation = async () => {
    const pageId = Pagination.getPageId(location.href) || '1';

    const locationApi = new LocationApi();
    const { info, results: locations } = await locationApi.getAll(pageId);

    const pagination = new Pagination(info, pageId);

    return createElement({
        tagName: 'div',
        attributes: {
            classList: ['location-page'],
        },
        children: [
            pagination.render({ path: '/locations?pageId=' }),
            locations
                ? ListLocations(locations)
                : createElement({
                      tagName: 'p',
                      attributes: {
                          textContent: 'No location',
                      },
                  }),
        ],
    });
};

export default PageLocation;
