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

class CharacterApi extends BaseApi {
    constructor() {
        super(API_URL_BASE);
    }

    getAll = async () => await this.request('/character');

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
        const residentsIds = residents.map((resident) => resident.split('/').pop());
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

    getById = async (id = null) => {
        if (!id) {
            throw new Error('Missing episode id');
        }
    };
}

export { CharacterApi, LocationApi, EpisodeApi };
