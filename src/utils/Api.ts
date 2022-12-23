const API_URL_BASE = 'https://rickandmortyapi.com/api';

class BaseApi {
    private baseUrl: string;

    constructor(baseUrl: string) {
        if (!baseUrl) {
            throw new Error('Missing base URL to fetch');
        }

        this.baseUrl = baseUrl;
    }

    async request(pathname: string) {
        if (!pathname) {
            throw new Error('Pathname is missing');
        }

        const request = await fetch(this.baseUrl + pathname, { method: 'GET' });
        return await request.json();
    }
}

interface CharacterApiPaginatedResponse {
    info: ApiResponseInfo;
    results: Character[];
}
class CharacterApi extends BaseApi {
    constructor() {
        super(API_URL_BASE);
    }

    getAll = async (pageId: string = '1'): Promise<CharacterApiPaginatedResponse> =>
        await this.request('/character?page=' + pageId);

    getBulk = async (characters: string[] = []): Promise<Character[]> => {
        if (characters.length === 0 || !('length' in characters)) {
            throw new Error('Missing characters');
        }
        const charactersIds = characters.map((character) => {
            const { pathname } = new URL(character);
            const characterId = pathname.substring(1).split('/').pop();
            return characterId;
        });
        const request = await this.request(`/character/${charactersIds.join(',')}`);

        if (charactersIds.length > 1) {
            return request;
        }

        return charactersIds.length === 1 ? [request] : request;
    };

    getById = async (id = null): Promise<LocationType> => {
        if (!id) {
            throw new Error('Missing character id');
        }

        return await this.request(`/character/${id}`);
    };

    search = async (name: string): Promise<CharacterApiPaginatedResponse> => {
        if (!name) {
            throw new Error('Missing name');
        }

        return await this.request(`/character/?name=${name}`);
    };
}

interface LocationApiPaginatedResponse {
    info: ApiResponseInfo;
    results: LocationType[];
}
class LocationApi extends BaseApi {
    constructor() {
        super(API_URL_BASE);
    }

    getAll = async (pageId: string = '1'): Promise<LocationApiPaginatedResponse> =>
        await this.request('/location?page=' + pageId);

    getById = async (id = null): Promise<LocationType> => {
        if (!id) {
            throw new Error('Missing location id');
        }

        return await this.request(`/location/${id}`);
    };

    search = async (name: string): Promise<LocationApiPaginatedResponse> => {
        if (!name) {
            throw new Error('Missing name');
        }

        return await this.request(`/location/?name=${name}`);
    };
}

interface EpisodeApiPaginatedResponse {
    info: ApiResponseInfo;
    results: Episode[];
}
class EpisodeApi extends BaseApi {
    constructor() {
        super(API_URL_BASE);
    }

    getAll = async (): Promise<EpisodeApiPaginatedResponse> => await this.request('/episode');

    getById = async (id = null): Promise<Episode> => {
        if (!id) {
            throw new Error('Missing episode id');
        }

        return await this.request(`/episode/${id}`);
    };

    search = async (name: string): Promise<EpisodeApiPaginatedResponse> => {
        if (!name) {
            throw new Error('Missing name');
        }

        return await this.request(`/episode/?name=${name}`);
    };
}

export { CharacterApi, LocationApi, EpisodeApi };
