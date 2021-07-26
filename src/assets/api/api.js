import axios from 'axios';
const baseURL = 'http://localhost:9000/api/alimentos'

class FoodApi {
    constructor() {
        this.resource = axios.create({
            baseURL,
        });
    }

    getAllAlimentos() {
        return this.resource.get('/');
    }

}

export default new FoodApi();
