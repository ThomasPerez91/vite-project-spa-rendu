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
        const data = await request.json();

        return data;
    }
}

interface CharacterApiGetAllResponse {
    info: ApiResponseInfo;
    results: Character[];
}
class CharacterApi extends BaseApi {
    constructor() {
        super(API_URL_BASE);
    }

    getAll = async (pageId: string = '1'): Promise<CharacterApiGetAllResponse> =>
        await this.request('/character?page=' + pageId);

    getById = async (id = null) => {
        if (!id) {
            throw new Error('Missing character id');
        }

        // todo: fetch by id
    };
}

class LocationApi extends BaseApi {
    constructor() {
        super(API_URL_BASE);
    }

    getAll = async () => await this.request('/location');

    getBulk = async (residents: string[] = []) => {
        if (residents.length === 0 || !('length' in residents)) {
            throw new Error('Missing residents');
        }
        const residentsIds = residents.map((resident) => {
            const { pathname } = new URL(resident);
            const residentId = pathname.substring(1).split('/').pop();
            return residentId;
        });
        const request = await this.request(`/character/${residentsIds.join(',')}`);

        if (residentsIds.length > 1) {
            return request;
        }

        return residentsIds.length === 1 ? [request] : request;
    };

    getById = async (id = null) => {
        if (!id) {
            throw new Error('Missing location id');
        }

        // todo: fetch by id
    };
}

class EpisodeApi extends BaseApi {
    constructor() {
        super(API_URL_BASE);
    }

    getAll = async () => await this.request('/episode');

    getBulk = async (characters: string[] = []) => {
        if (characters.length === 0 || !('length' in characters)) {
            throw new Error('Missing characters');
        }
        const charactersIds = characters.map((character) => character.split('/').pop());
        const request = await this.request(`/character/${charactersIds.join(',')}`);

        if (charactersIds.length > 1) {
            return request;
        }

        return charactersIds.length === 1 ? [request] : request;
    };

    getById = async (id = null) => {
        if (!id) {
            throw new Error('Missing episode id');
        }
    };
}

export { CharacterApi, LocationApi, EpisodeApi };
