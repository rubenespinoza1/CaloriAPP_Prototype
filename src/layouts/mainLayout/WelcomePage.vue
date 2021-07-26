<template>
  <div id="welcome-main-div">
    <router-view></router-view>
    <div id="bienvenida">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Bienvenido(a) a CaloriAPP</h1>
          <p class="lead text-muted">
            Tan solo debes ingresar que los alimentos que consumas y la pagina
            hara el resto. De esta forma podras llevar registro de cuantas
            calorias has consumido
          </p>
          <!--<p class="spacer">
            <router-link to="/register">
              <a class="btn btn-primary my-2 spacer"> Quiero Empezar </a>
            </router-link>
            <router-link to="/login">
              <a class="btn btn-secondary my-2 spacer"> Ya tengo cuenta </a>
            </router-link>
          </p>-->
        </div>
      </section>
      <hr />
      <section class="info-container">
        <div class="container">
          <h1 class="jumbotron-heading spacer">Que es CaloriAPP?</h1>
          <p class="lead text-muted spacer">
            CaloriAPP es una aplicacion web que te permite llevar un registro de
            cuantas calorias consumes segun que alimentos has consumido
          </p>
        </div>
        <div>
          <h1 class="jumbotron-heading spacer">Por que CaloriAPP?</h1>
          <p class="lead text-muted spacer">
            Ya que es una de las aplicaciones mas cercanas al usuario, esto
            significa que no es necesario un conocimiento extenso de salud para
            poder ocupar esta plataforma
          </p>
        </div>
        <div>
          <h1 class="jumbotron-heading spacer">
            Que beneficios supone ocupar CaloriAPP
          </h1>
          <p class="lead text-muted spacer">
            Con CaloriAPP podras en pocos clicks monitorizar tu situacion
            nutricional, y sin tramites extra, tan solo registrate en la pagina
            y registra los alimentos que consumiste.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/layouts/main/main.css";
export default {
  name: "WelcomePage",
};
</script>

<style>
#bienvenida {
  background-color: aliceblue;
  padding: 30px;
  align-items: center;
}

.to-end-of-page {
  height: 430px;
}

.info-container {
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 5px;
}



.spacer {
  padding: 5px;
  margin: 5px;
}
</style>