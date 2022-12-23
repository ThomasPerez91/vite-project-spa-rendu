import ListLocations from '../components/Locations/ListLocations';
import { LocationApi } from '../utils/Api';

const PageCharacter = async () => {
    const locationApi = new LocationApi();
    const locations = await locationApi.getAll();
    return ListLocations(locations.results);
};

export default PageCharacter;
