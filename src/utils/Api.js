const API_URL_BASE = 'https://rickandmortyapi.com/api';

class BaseApi {
    #baseUrl = '';
    constructor(baseUrl = null) {
        if (!baseUrl) {
            throw new Error('Missing base URL to fetch');
        }

        this.#baseUrl = baseUrl;
    }

    async request(pathname = null) {
        if (!pathname) {
            throw new Error('Pathname is missing');
        }

        const request = await fetch(this.#baseUrl + pathname, { method: 'GET' });
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
    }
}

class LocationApi extends BaseApi {
    constructor() {
        super(API_URL_BASE);
    }

    getAll = async () => await this.request('/location');

    getById = async (id = null) => {
        if (!id) {
            throw new Error('Missing location id');
        }
    }
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
    }
}

export { CharacterApi, LocationApi, EpisodeApi };
