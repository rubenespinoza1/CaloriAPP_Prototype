import axios from 'axios';
const baseURL = 'http://localhost:9000/api/'

class ApiService {
    constructor() {
        this.resource = axios.create({
            baseURL,
        });
    }

    getAllAlimentos() {
        return this.resource.get('alimentos/');
    }

    getUserById(id) {
        return this.resource.get('usuarios/' + id);
    }

    updateCaloriesOfUser(id, plusCalories) {
        const response = this.getUserById(id);

        response.then(({ data }) => {
            const user = data;
            user.caloriasDia += plusCalories;
            this.resource.put('usuarios/' + id, user);
        })

    }

    createDailyCalories(caloriasRegistro, idUsuario){
        const dailyCalories = {
            id: 7,
            calorias: caloriasRegistro,
            idUsuario: idUsuario,
        }

        this.resource.post('caloriasdiarias/guardar/', dailyCalories);
    }



}

export default new ApiService();
