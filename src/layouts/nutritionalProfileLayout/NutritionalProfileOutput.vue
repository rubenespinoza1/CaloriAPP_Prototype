<template>
  <v-card class="mx-auto my-5" width="50%" height="65%" shaped color="#FF5733">
    <v-card-title class="profileHeader">
      Perfil Nutricional
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-row>
              <v-col cols="12">
                <v-card
                    class="mt-3 mb-3 text-center"
                    outlined
                    height="36px"
                >
                  Nombre
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card
                    class="mt-3 mb-3 text-center"
                    outlined
                    height="36px"
                >
                  Altura
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card
                    class="mt-3 mb-3 text-center"
                    outlined
                    height="36px"
                >
                  Peso
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card
                    class="mt-3 mb-3 text-center"
                    outlined
                    height="36px"
                >
                  IMC
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-card
                    class="mt-3 mb-3 text-center"
                    outlined
                    height="36px"
                >
                  Calorías Hoy
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-card
                    class="pa-2 mt-3 text-center"
                    outlined
                    height="36px"
                >
                  Email
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card
                    class="pa-2 mt-3 text-center"
                    outlined
                    height="36px"
                >
                  Email
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-img
                height="450"
                width="400"
                src="https://www.independent.com/wp-content/uploads/2019/03/07/icons6_KMAv3Bp.png"
            ></v-img>
            <b-button class="submit" variant="danger">
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
export default {
  name: "NutritionalProfileOutput"
}
</script>

<style scoped>

</style>