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
                                style="height: 400px; margin-top: 10px; background-color: rgba(187, 187, 187, 0.253);">

                                <div v-if="UsuarioHistorial.length === 0" class="no-conversation-message">
                                    <p class="pstyle">Inicie una nueva conversación</p>
                                </div>

                                <div>
                                    <div v-for="(historial, index) in UsuarioHistorial" :key="index"
                                        class="message-pair">
                                        <div class="mx-auto custom-card" style="max-width: 100%">

                                            <v-card v-if="historial.usuario && historial.usuario.trim() !== ''"
                                                class="CardUser mb-5" style="margin-left: 45px;" flat>
                                                <p>{{ historial.usuario }}</p>
                                            </v-card>

                                            <v-card v-if="historial.ia && historial.ia.trim() !== ''"
                                                class="CardEduIA mb-5" style="margin-right: 45px;" title="EduIA" flat
                                                elevation="5">
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

export default {
    name: "ChatHomeComponent",
    components: {
        AppBarComponent2,
    },
    data: () => ({
        // Temas disponibles
        temas: ['Introducción', ...Array.from({ length: 9 }, (_, i) => (i + 1).toString())], // ["Introducción", "1", "2", ..., "9"]
        selectedTema: "Introducción", // Tema por defecto
        InputMessage: '',
        UsuarioHistorial: [], // Asegurarse de que es un array vacío
        loading: false,
        rules: {
            required: (value) => {
                console.log('Validating required:', value);
                return !!value || "Este campo es requerido";
            },
            min: (value) => {
                console.log('Validating min:', value);
                return value && value.length >= 1 || "El mensaje debe tener al menos 1 caracteres";
            },
        },
        order: 0,
        tokens: {
            access: process.env.VUE_APP_ACCESS_TOKEN,
        },
        isActivo: false,
        id_estudiante: localStorage.getItem('id_estudiante'),
    }),
    methods: {
        async sendMessage() {
            this.loading = true; // Activa el loading
            console.log('sendMessage called. InputMessage:', this.InputMessage);
            const valid = await this.ValidateCampos();
            console.log('Validation result:', valid);

            if (valid) {
                try {
                    // Agregar solo el mensaje del usuario inicialmente
                    this.UsuarioHistorial.push({ usuario: this.InputMessage, ia: '' });

                    // Obtener referencia del último mensaje en el historial
                    const lastMessage = this.UsuarioHistorial[this.UsuarioHistorial.length - 1];

                    const json = {
                        id_estudiante: this.id_estudiante,
                        pregunta: this.InputMessage,
                    };
                    console.log('JSON to send:', json);

                    const headers = {
                        Authorization: `Bearer ${this.tokens.access}`,
                        'Content-Type': 'application/json',
                    };

                    // Realiza la petición a la API
                    const response = await axios.post(`${process.env.VUE_APP_BASE_URL}EduAsistente/api/asistente/chat`, json, { headers });

                    if (response.status === 200) {
                        // Agrega la respuesta de la IA al historial
                        lastMessage.ia = response.data.data.respuesta.Edula_IA;
                        this.InputMessage = '';
                    } else {
                        alert("Error al enviar el mensaje");
                    }
                } catch (error) {
                    console.error('Error al enviar el mensaje:', error);
                } finally {
                    this.loading = false; // Desactiva el loading
                }
            } else {
                alert("Debes escribir un mensaje");
                this.loading = false; // Desactiva el loading
            }
        },
        async LoadHistory() {
            try {
                // Obtener el historial de conversaciones
                const id_estudiante = localStorage.getItem('id_estudiante');
                const headers = {
                    Authorization: `Bearer ${this.tokens.access}`,
                    'Content-Type': 'application/json',
                };
                console.log('LoadHistory - id_estudiante:', id_estudiante);

                const response = await axios.get(`${process.env.VUE_APP_BASE_URL}EduAsistente/api/asistente/historial/${id_estudiante}`, { headers });

                if (response.status === 200) {
                    this.UsuarioHistorial = response.data.data || [];
                }
            } catch (error) {
                console.error('Error al cargar el historial:', error);
            }
        },
        async ValidateCampos() {
            const { valid } = await this.$refs.form.validate();
            return valid;
        },
        isActive() {
            // hacer una peticion a la api si esta activo el chatbot
            this.isActivo = !this.isActivo;
        }
    },

    created() {
        this.isActive();
        this.LoadHistory();
    },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');

.CardEduIA {
    background-color: transparent;
    border: 3px solid #e2a522;
    border-radius: 10px;
    color: #e2a522;
    box-shadow: 0 0 15px #63450f !important;
    font-family: "Playwrite GB S", cursive;
}

.cardInputs {
    background-color: rgba(187, 187, 187, 0.253);
    border-radius: 20px;
}

.CardUser {
    background-color: transparent;
    border: 3px solid #bb1010;
    border-radius: 10px;
    color: #bb1010;
    box-shadow: 0 0 15px #552b2b !important;
    font-family: "Playwrite GB S", cursive;
    margin-top: 15px !important;
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
    background-color: white;
    min-height: 100vh;
    padding: 16px;
    background-size: cover;
    background-position: center;
    z-index: 1;
}

.custom-card {
    background-color: transparent !important;
}

.custom-scrollbar {
    max-width: 70%;
    border-radius: 20px;
    box-shadow: 0 0 15px #666666;
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
    font-family: "Playwrite GB S", cursive;
}

.custom-btn {
    background-color: #bd9235 !important;
    color: aliceblue;
    margin: 5px;
    border: 1px solid #bd9235;
}

p {
    margin: 10px;
    font-family: "Playwrite GB S", cursive;
}

.pstyle {
    margin: 10px;
    font-family: "Playwrite GB S", cursive;
    text-align: center !important;
}

v-form {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 10px;
}

.chat-messages-container {
    max-height: calc(100vh - 200px);
    /* Ajusta esta altura según sea necesario */
    /* Ejemplo: 100vh - (altura_appbar + altura_input_area + padding_inferior) */
    overflow-y: auto;
    /* Permite el desplazamiento vertical */
    padding: 10px;
    /* Opcional: padding para los mensajes */
    /* background-color: #f0f0f0; /* Opcional: para visualizar el área */
    display: flex;
    /* Para asegurar que el scroll se aplique correctamente a los elementos flexibles */
    flex-direction: column-reverse;
    /* Para que los últimos mensajes aparezcan abajo */
}

/* Opcional: Para asegurar que el scroll inicie al final */
.chat-messages-container .message-pair:first-child {
    margin-top: auto;
    /* Empuja el primer mensaje hacia arriba, los nuevos se apilan abajo */
}

.CardEduIA p,
.CardUser p {
    padding: 10px;
    /* Añade un padding interno al texto del mensaje */
    margin: 0;
    /* Resetea el margen predeterminado del párrafo */
}

.message-pair {
    margin-bottom: 15px;
    /* Ajusta este valor para la separación entre pares */
    padding-left: 10px;
    /* Opcional: para que los mensajes no toquen el borde izquierdo */
    padding-right: 10px;
    /* Opcional: para que los mensajes no toquen el borde derecho */
}
</style>
