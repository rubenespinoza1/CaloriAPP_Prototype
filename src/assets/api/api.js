import axios from 'axios';

export default {
    getAlimentos() {
        let config = {
            headers: {
                'Accept':'application/json'
            }
        };
        const alimentos = axios.get('https://localhost:9000/api/alimentos/',config);
        return alimentos.data;
    }
}
