<template>
    <v-layout class="rounded-md">
        <AppBarComponent2 />
        <v-main class="align-center justify-center d-flex" style="min-height: 100vh;">
            <v-container>
                <v-row>
                    <!-- Columna izquierda (Contenido existente) -->
                    <v-col cols="12" md="6" class="d-flex flex-column">
                        <div>
                            <div class="d-flex justify-center mb-11">
                                <v-img src="@/assets/logo-itca.avif" width="300" height="120" contain></v-img>
                            </div>
                            <div class="d-flex justify-end" style="width: 84%;">
                                <div>
                                    <v-chip class="mr-2" variant="tonal" :color="isActivo ? 'green-darken-4' : 'red'"
                                        @click="isActive">
                                        {{ isActivo ? 'En línea' : 'Desconectado' }}
                                        <template v-slot:append>
                                            <v-icon class="ml-2" icon="bi bi-diamond-fill"
                                                :color="isActivo ? 'green-lighten-1' : 'red'"></v-icon>
                                        </template>
                                    </v-chip>
                                    <span v-if="!loading">
                                        <v-icon icon="bi bi-slack" color="orange-darken-4"></v-icon>
                                    </span>
                                    <v-progress-circular v-else color="red" indeterminate></v-progress-circular>
                                </div>
                            </div>

                            <div id="goto-container-example" class="mx-auto overflow-auto custom-scrollbar"
                                :class="{ 'chat-theme-light': this.$store.getters.theme === 'light', 'chat-theme-dark': this.$store.getters.theme === 'dark' }"
                                style="height: 400px; margin-top: 10px;">
                                <div v-if="UsuarioHistorial.length === 0" class="no-conversation-message">
                                    <p class="pstyle">Inicie una nueva conversación</p>
                                </div>

                                <div>
                                    <div v-for="(historial, index) in UsuarioHistorial" :key="index"
                                        class="message-pair">
                                        <div class="mx-auto custom-card" style="max-width: 100%">

                                            <v-card v-if="historial.usuario && historial.usuario.trim() !== ''"
                                                class="CardUser mb-5"
                                                :class="{ 'CardUser-light': this.$store.getters.theme === 'light', 'CardUser-dark': this.$store.getters.theme === 'dark' }"
                                                style="margin-left: 45px;" flat>
                                                <p>{{ historial.usuario }}</p>
                                            </v-card>

                                            <v-card v-if="historial.ia && historial.ia.trim() !== ''"
                                                class="CardEduIA mb-5"
                                                :class="{ 'CardEduIA-light': this.$store.getters.theme === 'light', 'CardEduIA-dark': this.$store.getters.theme === 'dark' }"
                                                style="margin-right: 45px;" title="EduIA" flat elevation="5">
                                                <p>{{ historial.ia }}</p>
                                            </v-card>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <v-form fast-fail ref="form">
                                <v-row class="mx-auto custom-inputs">
                                    <v-col>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field v-model="InputMessage" label="Pregunta algo!"
                                                        type="text" variant="outlined" color="orange-darken-4" rounded
                                                        clearable autofocus base-color="orange-darken-4">
                                                        <template v-slot:append>
                                                            <v-icon v-if="!loading" @click="sendMessage" icon="mdi-send"
                                                                color="orange-darken-4"></v-icon>
                                                            <v-progress-circular v-else indeterminate
                                                                color="orange-darken-4" size="24"></v-progress-circular>
                                                        </template>
                                                        <template v-slot:prepend>
                                                            <v-tooltip location="start"
                                                                text="Powered by ITCA-FEPADE AI">
                                                                <template v-slot:activator="{ props }">
                                                                    <v-icon v-bind="props" icon="mdi-robot"
                                                                        color="orange-darken-4"></v-icon>
                                                                </template>
                                                            </v-tooltip>
                                                        </template>
                                                    </v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </div>
                    </v-col>

                    <!-- Columna derecha (Iframe) -->
                    <v-col cols="12" sm="12" md="6" lg="6" class="d-flex">
                        <div style="width: 100%; height: 100%; position: relative;">
                            <div>
                                <!-- Selector de temas -->
                                <v-select v-model="selectedTema" :items="temas" label="Selecciona un tema"
                                    variant="outlined" color="orange-darken-4" class="mb-4"></v-select>
                            </div>

                            <iframe
                                :src="`http://localhost/clases/${selectedTema === 'Introducción' ? 'tema 0' : 'tema ' + selectedTema}/index.html`"
                                frameborder="" allowfullscreen style="width: 100%; height: 95%; border: 1px;"></iframe>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script>
import AppBarComponent2 from '@/components/AppBarComponent2.vue';
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex'; // Importa mapGetters y mapActions

export default {
    name: "ChatHomeComponent",
    components: {
        AppBarComponent2,
    },
    data: () => ({
        temas: ['Introducción', ...Array.from({ length: 9 }, (_, i) => (i + 1).toString())],
        selectedTema: "Introducción",
        InputMessage: '',
        UsuarioHistorial: [],
        loading: false,
        // Las reglas de validación se usan con <v-form ref="form">
        rules: {
            required: (value) => {
                return !!value || "Este campo es requerido";
            },
            min: (value) => {
                return value && value.length >= 1 || "El mensaje debe tener al menos 1 caracter";
            },
        },
        order: 0,
        // No necesitamos 'tokens' ni 'id_estudiante' en data si los obtenemos del Vuex store
        // tokens: {
        //     access: process.env.VUE_APP_ACCESS_TOKEN, // <-- ¡Esto se eliminará!
        // },
        // id_estudiante: localStorage.getItem('id_estudiante'), // <-- ¡Esto se eliminará!
        isActivo: false, // Propiedad para el estado del chatbot
    }),
    computed: {
        // Mapear getters del módulo de autenticación del store
        ...mapGetters('auth', ['accessToken', 'refreshToken', 'userId', 'temporaryUsername', 'isAuthenticated', 'authHeader']),

        // Necesitas una referencia al formulario para la validación de Vuetify
        // Asegúrate de que tu template tenga <v-form ref="messageForm">
        messageForm: {
            get() {
                return this.$refs.messageForm;
            },
            set() {
                // Setter vacío o no implementado si solo es para acceso
            }
        }
    },
    methods: {
        // Mapear acciones del módulo de autenticación del store
        ...mapActions('auth', ['logout']),

        // Método para validar el formulario (del v-form)
        async ValidateCampos() {
            // Asume que tienes un <v-form ref="messageForm"> en tu template
            if (this.$refs.messageForm) {
                const { valid } = await this.$refs.messageForm.validate();
                return valid;
            }
            return false; // Si no hay formulario, la validación falla
        },

        async sendMessage() {
            this.loading = true; // Activa el loading

            // 1. Verificar autenticación al inicio
            if (!this.isAuthenticated) {
                console.error("Usuario no autenticado. Redirigiendo a login.");
                this.logout(); // Limpia los datos de auth y redirige
                this.loading = false;
                return;
            }

            // 2. Validar campos
            const valid = await this.ValidateCampos();
            if (!valid) {
                // Vuetify debería mostrar los mensajes de error en el campo,
                // así que la alerta redundante se puede quitar.
                // alert("Debes escribir un mensaje");
                this.loading = false;
                return;
            }

            try {
                this.UsuarioHistorial.push({ usuario: this.InputMessage, ia: '' });
                await this.$nextTick(); // Espera a que el DOM se actualice
                this.scrollToBottom(); // Asegúrate de que esta función existe y desplaza correctamente

                const lastMessage = this.UsuarioHistorial[this.UsuarioHistorial.length - 1];

                const json = {
                    id_estudiante: this.userId, // Obtiene del store
                    pregunta: this.InputMessage,
                    username: this.temporaryUsername, // Obtiene del store
                };
                console.log('JSON to send:', json);

                const headers = {
                    Authorization: this.authHeader, // Obtiene del store
                    'Content-Type': 'application/json',
                };

                // Realiza la petición a la API
                const response = await axios.post(`${process.env.VUE_APP_BASE_URL}EduAsistente/api/asistente/chat`, json, { headers });

                if (response.status === 200) {
                    lastMessage.ia = response.data.data.respuesta.Edula_IA;
                    this.InputMessage = '';
                    await this.$nextTick();
                    this.scrollToBottom();
                } else {
                    alert("Error al enviar el mensaje"); // Considera usar un sistema de alertas más robusto
                }
            } catch (error) {
                console.error('Error al enviar el mensaje:', error);
                if (error.response && error.response.status === 401) {
                    alert("Su sesión ha expirado. Por favor, inicie sesión de nuevo.");
                    this.logout(); // Llama a la acción logout del store
                } else {
                    alert("Hubo un problema al comunicarse con el asistente. Intenta de nuevo."); // Mensaje genérico de error de red/servidor
                }
            } finally {
                this.loading = false; // Desactiva el loading
            }
        },

        async LoadHistory() {
            // 1. Verificar autenticación al inicio
            if (!this.isAuthenticated) {
                console.error("Usuario no autenticado. No se puede cargar el historial.");
                this.logout(); // Limpia los datos de auth y redirige
                return;
            }

            try {
                // Obtener el historial de conversaciones
                // Asumo que el historial se carga con un POST que incluye id_estudiante y username
                const payload = {
                    id_estudiante: this.userId, // Obtiene del store
                    username: this.temporaryUsername, // Obtiene del store
                };
                const headers = {
                    Authorization: this.authHeader, // Obtiene del store
                    'Content-Type': 'application/json',
                };
                console.log('LoadHistory - payload:', payload);

                // CAMBIO: Si el historial requiere POST con payload, ajustamos aquí.
                // Si es GET con id_estudiante en la URL y NO necesita username, revertir a axios.get
                // y eliminar el payload de username.
                const response = await axios.post(`${process.env.VUE_APP_BASE_URL}EduAsistente/api/asistente/historial`, payload, { headers });
                // const response = await axios.get(`${process.env.VUE_APP_BASE_URL}EduAsistente/api/asistente/historial/${this.userId}`, { headers }); // Si fuera GET

                if (response.status === 200) {
                    this.UsuarioHistorial = response.data.data || [];
                } else {
                    console.error("Error al cargar el historial:", response.status, response.data);
                }
            } catch (error) {
                console.error('Error al cargar el historial:', error);
                if (error.response && error.response.status === 401) {
                    alert("Su sesión ha expirado. Por favor, inicie sesión de nuevo.");
                    this.logout(); // Llama a la acción logout del store
                } else {
                    alert("Hubo un problema al cargar el historial. Intenta de nuevo.");
                }
            }
        },

        // Función de ejemplo para el scroll, si no la tienes, añádela
        scrollToBottom() {
            const chatBox = this.$refs.chatBox; // Asegúrate de tener ref="chatBox" en tu contenedor de mensajes
            if (chatBox) {
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        },
        isActive() {
            // Lógica para verificar el estado del chatbot.
            // Esto podría implicar una petición a otra API o simplemente setear un valor por defecto.
            this.isActivo = true; // Por ejemplo, asume que siempre está activo al cargar la página
        }
    },

    created() {
        this.isActive();
        // Verificar autenticación al inicio
        if (this.isAuthenticated) {
            this.LoadHistory().then(() => {
                // Asegurarse de que el scroll ocurra después de cargar el historial
                this.scrollToBottom();
            });
        } else {
            console.warn("Usuario no autenticado al crear el componente. Redirigiendo a login.");
            this.logout(); // Llama a la acción logout del store, que redirige
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
/* Si vas a usar Roboto, también impórtala si no lo has hecho globalmente */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');


/* ------------------------------------- */
/* ESTILOS DE TEMA: CLARO / OSCURO       */
/* ------------------------------------- */

/* Contenedor principal del chat */
.chat-theme-light {
    background-color: rgba(187, 187, 187, 0.253);
    /* Color para el modo claro */
    color: #333;
    /* Color de texto general para el modo claro */
}

.chat-theme-dark {
    background-color: #333;
    /* Color oscuro para el fondo del chat */
    color: #eee;
    /* Color de texto general para el modo oscuro */
}

/* Fondo general de la aplicación (usado en .background) */
.background-light {
    background-color: white;
    /* Color de fondo claro */
}

.background-dark {
    background-color: #121212;
    /* Color de fondo oscuro */
    color: #f5f5f5;
    /* Color de texto para el fondo oscuro, si aplica a elementos que no son chat */
}

/* Estilos para las tarjetas de usuario (CardUser) */
.CardUser-light {
    border: 1px solid #6b6b6b;
    /* Color del texto del usuario en modo claro */
    box-shadow: 0 0 15px #919191 !important;
    background-color: transparent !important;
    /* Para asegurar que el fondo sea transparente en modo claro */
}

.CardUser-dark {
    border: 1px solid #c2c2c2;
    /* Un rojo más brillante para el modo oscuro */
    color: #ffebee;
    /* Texto blanco/claro para el modo oscuro */
    background-color: #525252 !important;
    /* Fondo más oscuro para la tarjeta de usuario */
    box-shadow: 0 0 15px #9eb1bb !important;
    /* Sombra que contraste */
}

/* Estilos para las tarjetas de la IA (CardEduIA) */
.CardEduIA-light {
    border: 1px solid #6b6b6b;
    /* Color del texto de IA en modo claro */
    box-shadow: 0 0 15px #919191 !important;
    background-color: transparent !important;
    /* Para asegurar que el fondo sea transparente en modo claro */
}

.CardEduIA-dark {
   border: 1px solid #c2c2c2;
    /* Un rojo más brillante para el modo oscuro */
    color: #ffebee;
    /* Texto blanco/claro para el modo oscuro */
    background-color: #525252 !important;
    /* Fondo más oscuro para la tarjeta de IA */
    box-shadow: 0 0 15px #cae8f7 !important;
    /* Sombra que contraste */
}


/* ------------------------------------- */
/* ESTILOS GENERALES (EXISTENTES Y MEJORADOS) */
/* ------------------------------------- */

.CardEduIA {
    /* Estas propiedades son la base, pero serán anuladas por las clases de tema si se aplican */
    /* No necesitan background-color: transparent; aquí si CardEduIA-light/dark ya lo manejan */
    border-radius: 10px;
    font-family: "Roboto", Arial, sans-serif;
    /* Preferencia a Roboto, con Arial/sans-serif como fallback */
}

.cardInputs {
    background-color: rgba(187, 187, 187, 0.253);
    border-radius: 20px;
}

.CardUser {
    /* Estas propiedades son la base, pero serán anuladas por las clases de tema si se aplican */
    /* No necesitan background-color: transparent; aquí si CardUser-light/dark ya lo manejan */
    border-radius: 10px;
    font-family: "Roboto", Arial, sans-serif;
    /* Preferencia a Roboto, con Arial/sans-serif como fallback */
    margin-top: 15px !important;
    /* Mantener este margen si es necesario */
}

.Menu {
    position: relative;
    background-color: transparent;
    width: auto;
    height: auto;
    margin-top: 5px;
    border-radius: 10px;
}

.background {
    position: relative;
    /* background-color: white; REMOVIDO, ahora lo controlan .background-light/.dark */
    min-height: 100vh;
    padding: 16px;
    background-size: cover;
    background-position: center;
    z-index: 1;
}

.custom-card {
    background-color: transparent !important;
    /* Esto es importante si tus v-cards no son transparentes y quieres el fondo del chat */
}

.custom-scrollbar {
    max-width: 70%;
    border-radius: 20px;
    box-shadow: 0 0 15px #666666;
    /* Podrías hacer que esta sombra también cambie con el tema */
}

.custom-scrollbar::-webkit-scrollbar {
    width: 7px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #5e5e5e !important;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #bd9235;
}

.custom-inputs {
    max-width: 70%;
    background-color: transparent;
    margin-top: 5px;
}

.chip-input {
    width: 100%;
    border-radius: 20px;
    color: rgb(255, 255, 255);
    font-family: "Roboto", sans-serif;
}

.custom-btn {
    background-color: #bd9235 !important;
    color: aliceblue;
    margin: 5px;
    border: 1px solid #bd9235;
}

p {
    margin: 0;
    /* Ajustado a 0, el padding lo controla .CardEduIA p, .CardUser p */
    font-family: "Roboto", Arial, sans-serif;
    /* Usando Roboto como preferencia */
    line-height: 1.5;
    /* Añadido para mejor legibilidad */
}

/* Padding para el texto dentro de las tarjetas */
.CardEduIA p,
.CardUser p {
    padding: 10px;
    /* Añade un padding interno al texto del mensaje */
    /* margin: 0; ya se define en 'p' globalmente */
}

.pstyle {
    margin: 10px;
    /* Mantener este margen para el mensaje "Inicie una nueva conversación" */
    text-align: center !important;
    font-family: "Roboto", Arial, sans-serif;
    /* Asegurar que también use Roboto */
    /* El color de este p también se adaptará si el padre .chat-theme-dark tiene color: #eee; */
}

.message-pair {
    margin-bottom: 15px;
    /* Ajusta este valor para la separación entre pares */
    padding-left: 10px;
    /* Opcional: para que los mensajes no toquen el borde izquierdo */
    padding-right: 10px;
    /* Opcional: para que los mensajes no toquen el borde derecho */
}

v-form {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 10px;
}

/* ------------------------------------- */
/* ESTILOS DE SCROLL (NO RELACIONADOS CON TEMA) */
/* ------------------------------------- */

/* Este bloque es el mismo que tenías, pero lo agrupo para claridad */
/* Puedes dejarlo así o moverlo a un lugar más apropiado si tienes un archivo CSS de utilidades */
.chat-messages-container {
    /* NOTA: Esta clase fue removida del HTML en la última actualización para evitar conflicto
             con el scroll en #goto-container-example. Si la estás usando en otra parte,
             mantenla. Si no, puedes considerarla obsoleta para el chat principal.
             El scroll es manejado por #goto-container-example directamente. */
    max-height: calc(100vh - 200px);
    /* Ajusta según tus necesidades */
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column-reverse;
}

.chat-messages-container .message-pair:first-child {
    margin-top: auto;
}
</style>
