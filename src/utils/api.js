const api = (() => {
    const BASE_URL = 'https://dashboard.gurucoding.cartera.my.id/api';

    async function getDataMaps() {
        const response = await fetch(`${BASE_URL}/maps`);
        const responJson = await response.json();
        return responJson.data;
    }

    async function searchMentorsInMaps({ search, latitude, longitude, radius }) {
        const url = new URL(`${BASE_URL}/maps/search`);
        const params = { search, latitude, longitude, radius };
        Object.keys(params).forEach((key) => {
            if (params[key]) {
                url.searchParams.append(key, params[key]);
            }
        });

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseJson = await response.json();
        return responseJson.data;
    }

    return {
        getDataMaps,
        searchMentorsInMaps
    };
})();

export default api;
