import API_ENDPOINT from '../globals/api-endpoint';

class RestoApi {
    static async getRestaurants() {
        try {
            const response = await fetch(API_ENDPOINT.LIST);
            if (!response.ok) {
                throw new Error(`Failed to fetch restaurants: ${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            return result.restaurants || [];
        } catch (error) {
            console.error('Error fetching restaurants:', error);
            return [];
        }
    }

    static async getRestaurantDetail(id) {
        try {
            const response = await fetch(API_ENDPOINT.DETAIL(id));
            if (!response.ok) {
                throw new Error(`Failed to fetch restaurant detail: ${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            return result.restaurant;
        } catch (error) {
            console.error('Error fetching restaurant detail:', error);
        }
    }
}

export default RestoApi;