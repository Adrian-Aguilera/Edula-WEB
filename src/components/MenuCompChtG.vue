<template>
  <div class="center">
    <div class="menuStyle">
      
      <v-btn class="custom-btn" @click="goToITCA">
        Itca fepade
      </v-btn>
      <v-btn class="custom-btn" @click="goToPortal">
        Portal estudiantil
      </v-btn>
      <v-btn class="custom-btn" @click="goToBiblio">
        Biblioteca
      </v-btn>
      <v-btn class="custom-btn" @click="goToLogin">
        Iniciar sesión
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComp",
  methods: {
    goToITCA() {
      window.location.href = "https://www.itca.edu.sv/";
    },
    goToPortal() {
      window.location.href = "https://apps.itca.edu.sv/portalestudiantil/";
    },
    goToBiblio() {
      window.location.href = "http://aplicaciones.itca.edu.sv/portal-erecursos/";
    },
    goToLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}

.menuStyle {
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se acomoden en múltiples filas */
  width: auto;
  height: auto;
  background-color: rgba(133, 26, 26, 0.849);
  border: 1px solid #707070;
  border-radius: 10px;
  justify-content: center;
  padding: 10px;
}

.custom-btn {
  background-color: transparent !important;
  border-radius: 10px;
  height: 2rem;
  color: aliceblue;
  margin: 5px;
  border: 1px solid #bd9235;
}

.custom-btn:hover {
  background-color: #bd9235 !important;
  border: 1px solid #ffffff;
}

/* Responsividad para pantallas pequeñas */
@media (max-width: 768px) {
  .menuStyle {
    flex-direction: column; /* Cambia la orientación a vertical */
    align-items: center;
  }

  .custom-btn {
    width: 90%; /* Ocupa casi todo el ancho disponible */
    text-align: center;
  }

  v-img {
    width: 80px; /* Ajusta el tamaño del logo */
    margin-bottom: 10px;
  }
}
</style>
