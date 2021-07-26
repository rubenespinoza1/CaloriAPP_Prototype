<template>
  <v-card class="mx-auto profileComp" width="50%" height="70%" shaped color="#FF5733">
<!--    <v-card-title>Gráfico Calorías Histórico</v-card-title>-->
    <canvas id="historia"></canvas>
  </v-card>
</template>

<script>
import Chart from 'chart.js';
import ApiService from "@/assets/api/api";
import axios from "axios";
export default {
  name: "HistoryGraphComponent",
  async mounted(){
    let url = 'http://localhost:9000/api/caloriasdiarias/';
    let caloriasJSON=await axios.get(url);
    let calData = caloriasJSON.data;
    console.log(calData);
    for(let i=0; i<calData.length; i++){
      this.titulos.push('Jornada '+(i+1));
      this.calorias.push(calData[i].calorias);
    }
    let grafico = document.getElementById('historia').getContext('2d');
    new Chart(grafico, {
      type: 'bar',
      data: {
        labels:this.titulos,
        datasets:[
          {
            label: ' Evolución histórica de calorías por jornada',
            backgroundColor:'#e51b23',
            data:this.calorias,
          }
        ]

      }
    });
  },
  data() {
    return {
      caloriasDiarias:   [],
      titulos: [],
      calorias: [],
    }
  },
  methods: {
    async obtenerCaloriasDiarias() {
      const response = ApiService.getAllCalorias();
      response.then(({ data }) => {
        this.caloriasDiarias = data;
      });
    },
    test(){
      this.obtenerCaloriasDiarias();
      console.log(this.caloriasDiarias);
    }
  }
}
</script>

<style scoped>

</style>