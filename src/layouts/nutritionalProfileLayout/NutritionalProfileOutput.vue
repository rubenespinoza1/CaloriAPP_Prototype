<template>
  <v-card class="mx-auto profileComp" width="50%" height="70%" shaped color="#FF5733">
    <router-view />
    <v-card-title class="profileHeader">
      Perfil Nutricional
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-col cols="12">
                <v-card-subtitle class="mb-0 formHeader">Nombre</v-card-subtitle>
                <v-card
                    class="text-center"
                    outlined
                    height="36px"
                    id="nombre"
                >
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card-subtitle class="mb-0 formHeader">Email</v-card-subtitle>
                <v-card
                    class= "text-center"
                    outlined
                    height="36px"
                    id="email"
                >
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-card-subtitle class="mb-0 formHeader">Altura</v-card-subtitle>
                <v-card
                    class="text-center"
                    outlined
                    height="36px"
                    id="altura"
                >
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card-subtitle class="mb-0 formHeader">Peso</v-card-subtitle>
                <v-card
                    class="text-center"
                    outlined
                    height="36px"
                    id="peso"
                >
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card-subtitle class="mb-0 formHeader">IMC</v-card-subtitle>
                <v-card
                    class=" mx-auto text-center"
                    outlined
                    height="36px"
                    width="20%"
                    id="imc"
                >
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card-subtitle class="mb-0 formHeader">Calorías Hoy</v-card-subtitle>
                <v-card
                    class="mx-auto text-center"
                    outlined
                    height="36px"
                    width="20%"
                    id="calorias"
                >
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-img
                class="img"
                height="450"
                width="400"
                src="https://www.independent.com/wp-content/uploads/2019/03/07/icons6_KMAv3Bp.png"
            ></v-img>
            <b-button @click="guardarCaloriasRegistro()" class="submit" variant="danger">
              Guardar calorías
            </b-button>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import "../../assets/styles/layouts/main/main.css";
import ApiService from "../../assets/api/api";
import axios from "axios";
export default {
  name: "NutritionalProfileOutput",
  async mounted(){
    let id_usuario=1; /// evolución previsible: obtener desde sesión
    let url = 'http://localhost:9000/api/usuarios/'+id_usuario;
    let usuarioJSON=await axios.get(url);
    let usuarioData = usuarioJSON.data;
    this.usuario.set('nombre', usuarioData.nombre);
    this.usuario.set('email', usuarioData.email);
    this.usuario.set('peso', usuarioData.peso);
    this.usuario.set('altura', usuarioData.altura);
    this.usuario.set('caloriasDia', usuarioData.caloriasDia);
    document.getElementById('nombre').innerHTML = this.usuario.get('nombre');
    document.getElementById('email').innerHTML = this.usuario.get('email');
    document.getElementById('peso').innerHTML = this.usuario.get('peso');
    document.getElementById('altura').innerHTML = this.usuario.get('altura');
    document.getElementById('calorias').innerHTML = this.usuario.get('caloriasDia');
    let peso = this.usuario.get('peso');
    let altura = this.usuario.get('altura');
    let imc = peso/(altura*altura);
    document.getElementById('imc').innerHTML=imc.toFixed(2);
  },
  fetchOnServer: true,
  data(){
    return {
      usuario: new Map(),
    }
  },
  methods: {
    guardarCaloriasRegistro(){

      console.log('Se estan guardando las calorias')
      const caloriasDiarias = document.getElementById('calorias').innerHTML;
      
      ApiService.createDailyCalories(caloriasDiarias, 1);
      ApiService.updateCaloriesOfUser(1, caloriasDiarias * -1);

      setTimeout(() => { this.$router.go();  }, 3000);
    }
  }
}
</script>

<style scoped>

</style>