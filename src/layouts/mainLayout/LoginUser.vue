<template>
  <div id="login">
    <section>
      <router-view></router-view>
      <div class="container register-form">
        <div class="form">
          <div class="note">
            <p>Ingrese sus credenciales de login</p>
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
              </div>
            </div>
            <router-link to="/">
                <button type="button" class="btnSubmit">Entrar</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginUser",
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