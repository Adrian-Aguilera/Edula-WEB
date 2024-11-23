<template>
    <div class="background" >
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
        <v-row aling="center" justify="center">
            <v-col cols="12" sm="6" md="4">
               
            </v-col>
        </v-row>

        <div class="text-subtitle-1 text-medium-emphasis">Carnet: </div>
  
        <v-text-field
          density="compact"
          placeholder="Carnet"
          prepend-inner-icon="bi bi-person-badge-fill"
          variant="outlined"
          v-model="carnet"
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
          v-model="password"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          <v-card-text class="text-medium-emphasis text-caption alerta" >
           Solo estudiates de Itca Fepade pueden acceder a nuestra plataforma. Si no eres de Itca Fepade, no podrás acceder a la plataforma.
           <v-chip color="red" :href="urlReferencia" target="_blank" class="ma-2">
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
          @click="onSubmit"
        >
          Iniciar Sesion
        </v-btn>
      </v-card>
     
    </div>
  </template>
  
  <script>
    export default {
      name: "LoginView",
        props: {
            urlReferencia: String,
        },  

      data: () => ({
        visible: false,
        carnet: "",
        password: "",
        
      }),  
    
      methods:{
        async onSubmit(){
            console.log(this.carnet)
            console.log(this.password)
        }

      }, 

    }
  </script>
  
  <style scoped>
  .custom-border {
    border: 1px solid #ff1c07;
  
  }
  .background{
    position: relative;
    background-image: url("@/assets/pc.jpg");
    min-height: 100vh;
    padding: 16px;
    background-size: cover;
    background-position: center;
    z-index: 1;

  }
  .background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(36, 36, 36, 0.5); /* Ajusta el color y la opacidad aquí */
    z-index: -1; /* Coloca esta capa detrás del contenido */
  }
  </style>
  