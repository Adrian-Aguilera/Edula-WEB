<template>
    <v-container fluid class="bg-surface-variant ConGeneral">
        <v-row no-gutters class="h-100">
            <v-col class="Con1" cols="12" md="4" lg="4" xl="4" xxl="4">
                <v-sheet class="pa-0 ma-0 h-100 d-flex align-center justify-center">
                    <v-card class="pa-6 pb-8 cardForm" elevation="1" max-width="400" rounded="lg">
                        <v-img
                            class="mx-auto my-6"
                            max-width="120"
                            src="@/assets/logo-itca.avif"
                        ></v-img>

                        <div class="text-subtitle-1 text-medium-emphasis">
                            <strong class="text-orange-darken-3">Carnet</strong> 
                        </div>

                        <!-- Campo para el carnet con validación -->
                        <v-text-field
                            v-model="carnet"
                            class="text-orange-darken-4"
                            density="compact"
                            placeholder="Carnet"
                            prepend-inner-icon="bi bi-person-vcard-fill"
                            variant="outlined"
                            type="text"
                            :rules="[carnetRules]"
                            maxlength="6"
                            @input="validateCarnet"
                        ></v-text-field>

                        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                            <strong class="text-orange-darken-3">Contraseña</strong> 
                        </div>

                        <!-- Campo para la contraseña con visibilidad dinámica -->
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

                        <v-card
                            class="mb-12"
                            color="surface-variant"
                            variant="tonal"
                        >
                            <v-card-text class="text-medium-emphasis text-caption alerta">
                                Solo estudiantes de Itca Fepade pueden acceder a nuestra plataforma. Si no eres de Itca Fepade, no podrás acceder a la plataforma.
                            </v-card-text>
                        </v-card>

                        <!-- Botón para enviar la solicitud de inicio de sesión -->
                        <v-btn
                            class="mb-4 bi bi-door-open"
                            color="orange-darken-4"
                            size="large"
                            variant="tonal"
                            block
                            @click="onSubmit" 
                            :disabled="!isFormValid" 
                        >
                            Iniciar Sesion
                        </v-btn>
                        <v-btn
                            class="mb-4 bi bi-door-open"
                            color="orange-darken-4"
                            size="large"
                            variant="tonal"
                            block
                            @click="createCount" 
                            
                        >
                            No tienes una cuenta?
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
    name: 'LoginView',

    data() {
        return {
            carnet: "", // Inicializa el carnet vacío
            password: "", // Inicializa la contraseña vacía
            visible: false, // Controlar visibilidad de la contraseña
            alert: {
                visible: false,
                title: "",
                message: "",
            },
        };
    },

    computed: {
        // Computado para habilitar/deshabilitar el botón de enviar
        isFormValid() {
            return this.carnet.length === 6 && this.password.length > 0;
        }
    },

    methods: {
        // Validación para permitir solo números en el carnet
        validateCarnet() {
            // Eliminar cualquier carácter que no sea un número
            this.carnet = this.carnet.replace(/[^0-9]/g, '');
        },
        createCount(){
            this.$router.push('/CreateAccount');
        },
        // Método llamado cuando el botón de iniciar sesión es presionado
        async onSubmit() {
    // Verificar si se ingresaron las credenciales
    if (!this.carnet || !this.password) {
        this.showAlert("Error", "Por favor, ingresa tu carnet y contraseña.");
        return;
    }

    // Preparar los datos para enviar en la solicitud POST
    const data = {
        carnet: this.carnet,
        password: this.password,
    };

    try {
        // Realizar la solicitud POST a la API
        const response = await axios.post(`${process.env.VUE_APP_BASE_URL}LoginMetodos/api/login`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.data.data) {
            const id_estudiante = response.data.data.id;
            localStorage.setItem('id_estudiante', id_estudiante);
            // Si la respuesta contiene los tokens de acceso y refresh
            this.showAlert("Éxito", "Inicio de sesión exitoso.");

            // Esperar un momento para mostrar la alerta antes de redirigir
            setTimeout(() => {
                this.$router.push('/home'); // Redirigir a la página de inicio
            }, 2000); // 2000 ms = 2 segundos
        } else {
            this.showAlert("Error", "Credenciales incorrectas.");
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        this.showAlert("Error", "Hubo un error al intentar iniciar sesión. Intenta nuevamente.");
    }
},

        // Método para mostrar alertas
        showAlert(title, message) {
            this.alert.title = title;
            this.alert.message = message;
            this.alert.visible = true;
        },
    },

    // Reglas de validación para el campo carnet
    validations: {
        carnet: {
            required: true,
            length: (value) => value.length === 6,
            numeric: (value) => /^[0-9]+$/.test(value),
        },
    }
};
</script>

<style scoped>
.ConGeneral {
    height: 100vh;
    padding: 0;
}

.caja2 {
    background-image: url("@/assets/login.jpeg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.cardForm {
    border: solid 1px #d18469;
}

/* Media query para ocultar el segundo v-col en pantallas menores a 900px */
@media (max-width: 960px) {
    .hide-on-small {
        display: none;
    }
}
</style>
