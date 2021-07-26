<template>
  <div id="register">
    <router-view></router-view>
    <div class="container register-form">
      <div class="form">
        <div class="note">
          <p>Ingrese los siguientes datos para completar su registro</p>
        </div>

        <div class="form-content">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Numero telefonico"
                  value=""
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Contraseña"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Confirme la contraseña"
                  value=""
                />
              </div>
            </div>
          </div>
          <router-link to="/">
            <button type="button" class="btnSubmit">Entrar</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterUser",
};
</script>

<style>
.note {
  text-align: center;
  height: 80px;
  background: -webkit-linear-gradient(left, #0072ff, #8811c5);
  color: #fff;
  font-weight: bold;
  line-height: 80px;
}
.form-content {
  padding: 5%;
  border: 1px solid #ced4da;
  margin-bottom: 2%;
}
.form-control {
  border-radius: 1.5rem;
}
.btnSubmit {
  border: none;
  border-radius: 1.5rem;
  padding: 1%;
  width: 20%;
  cursor: pointer;
  background: #0062cc;
  color: #fff;
}
</style>