<template>
  <div>
    <v-card
      class="mx-auto my-5"
      width="50%"
      height="65%"
      shaped
      color="#FF5733"
    >
      <select
        class="form-select"
        aria-label="multiple select example"
        id="select"
        onfocusout="addFoodToTable()"
      >
        <option
          v-for="alimento_c in alimentos_comunes"
          :key="alimento_c.id"
          :value="alimento_c.calorias"
          :id="alimento_c.id"
        >
          {{ alimento_c.nombre }}
        </option>
      </select>
    </v-card>

    <div id="div_boton">
      <button type="button" class="btn btn-primary spacer" @click="addFoodToTable()">
        Agregar alimento a tabla
      </button>
      <button type="button" class="btn btn-success spacer" @click="guardarRegistro()">
        Guardar registro
      </button>
    </div>

    <v-card
      class="mx-auto my-5"
      width="50%"
      height="65%"
      shaped
      color="#FF5733"
    >
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Alimento</th>
            <th scope="col">Numero de Calorias</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(alimento, index) in alimentos_seleccionados"
            :key="alimento.id"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ alimento.nombre }}</td>
            <td>{{ alimento.calorias }}</td>
          </tr>
        </tbody>
      </table>
    </v-card>
  </div>
</template>

<script>
import FoodApi from "../../assets/api/api";
export default {
  data() {
    return {
      alimentos_comunes: [
      ],
      alimentos_seleccionados: [],
      calorias_registro: 0,
      id_usuario: 0,
    };
  },
  mounted() {
    this.cargarAlimentos();
  },
  methods: {
    addFoodToTable() {
      this.num_alimentos++;
      let index = document.getElementById("select").selectedIndex;
      this.alimentos_seleccionados.push(this.alimentos_comunes[index]);
      this.calorias_registro += this.alimentos_comunes[index].calorias;
      console.log(this.calorias_registro);
    },
    cargarAlimentos() {
      const response = FoodApi.getAllAlimentos();
      response.then(({ data }) => {
        this.alimentos_comunes = data;
      });
      
    },
    guardarRegistro() {
        
    }
  },
};
</script>

<style>
#div_boton {
  transform: translateX(35%);
  margin: 30px;
}

.spacer {
  padding: 10px;
  margin: 10px;
}
</style>