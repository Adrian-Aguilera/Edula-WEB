<template>
  <div >
    <v-img
      class="mx-auto my-6"
      max-width="700"
      src="@/assets/logoItca.png"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8 custom-border"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Carnet: </div>

      <v-text-field
        density="compact"
        placeholder="Carnet"
        prepend-inner-icon="bi bi-person-badge-fill"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Contraseña

        <a
          class="text-caption text-decoration-none text-red-accent-3"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
          
        >
          Olvidaste tu contraseña?</a>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Ingresa tu contraseña"
        prepend-inner-icon="bi bi-key"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption alerta" >
         Solo estudiates de Itca Fepade pueden acceder a nuestra plataforma. Si no eres de Itca Fepade, no podrás acceder a la plataforma.
         <v-chip color="red" href="https://www.itca.edu.sv/" target="_blank">
          Mas información a cerca de inscripción aqui
        </v-chip>
        </v-card-text>
      </v-card>

      <v-btn
        class="mb-8"
        color="red"
        size="large"
        variant="tonal"
        block
      >
        Iniciar Sesion
      </v-btn>

      
    </v-card>
   
  </div>
  
</template>

<script>

  export default {
    data: () => ({
      visible: false,
      
    }),

    
  }
  
</script>

<style scoped>

.custom-border {
  border: 1px solid #ff1c07;

}




</style>
