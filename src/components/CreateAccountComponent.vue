<template>
    <v-container fluid class="bg-surface-variant ConGeneral">
      <v-row no-gutters class="h-100">
        <v-col class="Con1" cols="12" md="4" lg="4" xl="4" xxl="4">
          <v-sheet class="pa-0 ma-0 h-100 d-flex align-center justify-center">
            <v-card class="pa-6 pb-8 cardForm" elevation="0" max-width="400" rounded="lg">
              <v-img
                class="mx-auto my-6"
                max-width="120"
                src="@/assets/logo-itca.avif"
              ></v-img>
  
              <div class="text-subtitle-1 text-medium-emphasis">
                <strong class="text-orange-darken-3">Carnet</strong>
              </div>
  
              <v-text-field
              v-model="carnet"
              class="text-orange-darken-4"
              density="compact"
              placeholder="Ingrese los 6 digitos de su carnet"
              prepend-inner-icon="bi bi-person-vcard-fill"
              variant="outlined"
              maxlength="6"
              @input="validateCarnet"
              ></v-text-field>
  
              <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                <strong class="text-orange-darken-3">Contraseña</strong>
              </div>
  
              <v-text-field
                v-model="password"
                class="text-orange-darken-4"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Ingresa tu contraseña"
                prepend-inner-icon="bi bi-key-fill"
                variant="outlined"
                @click:append-inner="visible = !visible"
              ></v-text-field>
  
              <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                <strong class="text-orange-darken-3">Confirmar Contraseña</strong>
              </div>
  
              <v-text-field
                v-model="confirmPassword"
                class="text-orange-darken-4"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Repetite tu contraseña"
                prepend-inner-icon="bi bi-key-fill"
                variant="outlined"
                @click:append-inner="visible = !visible"
              ></v-text-field>
  
              <v-card class="mb-12" color="surface-variant" variant="tonal">
                <v-card-text class="text-medium-emphasis text-caption alerta">
                  Solo se podrá crear la cuenta si todos los campos están completos y las contraseñas coinciden.
                </v-card-text>
              </v-card>
  
              <v-btn
                class="mb-4 bi bi-door-open"
                color="orange-darken-4"
                size="large"
                variant="tonal"
                block
                @click="createAccount"
                :disabled="!isFormValid"
              >
                Crear Cuenta
              </v-btn>
              <v-btn
                class="mb-4 bi bi-door-open"
                color="orange-darken-4"
                size="large"
                variant="tonal"
                block
                @click="goToLogin"
              >
                Ya tienes una cuenta?
              </v-btn>
            </v-card>
          </v-sheet>
        </v-col>
  
        <v-col class="Con2 hide-on-small" cols="12" md="8" lg="8" xl="8" xxl="8">
          <v-sheet class="pa-0 ma-0 h-100 caja2"></v-sheet>
        </v-col>
      </v-row>
  
      <!-- Alerta de éxito o error -->
      <v-dialog v-model="alert.visible" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">{{ alert.title }}</v-card-title>
          <v-card-text>{{ alert.message }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="alert.visible = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CreateAccountComponent',
    data() {
      return {
        carnet: '',
        password: '',
        confirmPassword: '',
        visible: false,
        alert: {
          visible: false,
          title: '',
          message: '',
        },
      };
    },
    computed: {
      // Verifica si todos los campos están completos y las contraseñas coinciden
      isFormValid() {
        return (
          this.carnet &&
          this.password &&
          this.confirmPassword &&
          this.password === this.confirmPassword &&
          this.carnet.length === 6
        );
      },
    },
    methods: {
  // Método para validar que solo se ingresen números en el campo de carnet
  validateCarnet() {
    this.carnet = this.carnet.replace(/[^0-9]/g, ''); // Elimina cualquier caracter que no sea número
  },

    goToLogin() {
      this.$router.push('/Login');
    },
  createAccount() {
    // Validación de que el carnet tenga exactamente 6 dígitos
    if (this.carnet.length !== 6) {
      this.showAlert('Error', 'El carnet debe tener exactamente 6 dígitos.');
      return;
    }

    // Validación de que las contraseñas coincidan
    if (this.password !== this.confirmPassword) {
      this.showAlert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    // Preparar los datos para enviar a la API
    const data = {
      carnet: this.carnet,
      password: this.password,
    };

    // Usar axios directamente para hacer la solicitud POST
    axios
      .post('http://127.0.0.1:8000/LoginMetodos/api/Registrar', data)
      .then(() => {
        // Mostrar la alerta de éxito
        this.showAlert('Éxito', 'Cuenta creada exitosamente.');

        // Retrasar la redirección para asegurar que la alerta se vea
        setTimeout(() => {
          this.$router.push('/login'); // Redirigir a la página de login
        }, 2000); // 2 segundos de retraso para permitir que el usuario vea la alerta
      })
      .catch((error) => {
        console.error('Hubo un error al crear la cuenta:', error);
        this.showAlert('Error', 'Hubo un error al crear la cuenta. Intenta nuevamente.');
      });
    },

    // Método para mostrar la alerta
    showAlert(title, message) {
        console.log('Mostrando alerta:', title, message);  // Verifica si está siendo llamada
        this.alert.title = title;
        this.alert.message = message;
        this.alert.visible = true;
    },
    },

  };
  </script>
  
  <style scoped>
  /* El estilo se mantiene igual que el original */
  .ConGeneral {
    padding: 0;
    background-color: transparent;
  }
  
  .caja2 {
    background-image: url('@/assets/create.jpeg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .cardForm {
    border: solid 1px #d18469;
    height: 100%;
  }
  
  /* Media query para ocultar el segundo v-col en pantallas menores a 900px */
  @media (max-width: 960px) {
    .hide-on-small {
      display: none;
    }
  }
  </style>
  