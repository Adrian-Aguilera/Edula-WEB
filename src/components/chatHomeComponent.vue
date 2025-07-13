<template>
    <v-layout class="rounded-md">
        <AppBarComponent2 />
        <v-main class="align-center justify-center d-flex" style="min-height: 100vh;">
            <v-container>
                <v-row>
                    <!-- Columna izquierda (Contenido existente) -->
                    <v-col cols="12" md="6" class="d-flex flex-column">
                        <div>
                            <div class="d-flex justify-end" style="width: 98%;">
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
                                style="height: 372px; margin-top: 10px;">
                                <div v-if="UsuarioHistorial.length === 0" class="no-conversation-message">
                                    <p class="pstyle">Inicie una nueva conversación</p>
                                </div>

                                <div>
                                    <div v-for="(historial, index) in UsuarioHistorial" :key="index"
                                        class="message-pair">
                                        <div class="mx-auto custom-card" style="max-width: 100%">
                                            <div class="d-flex justify-end">
                                                <!-- Contenedor flex alineado a la derecha -->
                                                <v-card v-if="historial.usuario && historial.usuario.trim() !== ''"
                                                    class="CardUser mb-5" :class="{
                                                        'CardUser-light': $store.getters.theme === 'light',
                                                        'CardUser-dark': $store.getters.theme === 'dark'
                                                    }" flat style="max-width: 70%;">
                                                    <p class="pa-2 mb-0">{{ historial.usuario }}</p>
                                                </v-card>
                                            </div>
                                            <div class="d-flex justify-start">
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
                            </div>

                            <v-form fast-fail ref="form" @submit.prevent>
                                <v-row class="mx-auto custom-inputs">
                                    <v-col>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-textarea v-model="InputMessage" label="Pregunta algo!"
                                                        variant="outlined" color="orange-darken-4" rounded clearable
                                                        autofocus rows="1" no-resize @keydown="handleKeyDown"
                                                        class="chat-message-input" hide-details>
                                                        <template v-slot:append>
                                                            <v-icon v-if="!loading" @click="sendMessage" icon="mdi-send"
                                                                color="orange-darken-4"></v-icon>
                                                            <v-progress-circular v-else indeterminate
                                                                color="orange-darken-4" size="24"></v-progress-circular>
                                                        </template>
                                                    </v-textarea>
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
                        <div style="width: 100%; height: 80%; position: relative; margin-top: 5px;">
                            <iframe
                                :src="`http://localhost/clases/${selectedTema === 'Introducción' ? 'tema 0' : 'tema ' + selectedTema}/index.html`"
                                frameborder="" allowfullscreen style="width: 100%; height: 97%; border: 1px;"></iframe>
                            <!-- Selector de temas -->
                            <div ref="selectContainer" style="position: relative;">
                                <v-select v-model="selectedTema" :items="temas" label="Selecciona un tema"
                                    variant="outlined" color="orange-darken-4" class="mb-4" style="margin-top: 4%;"
                                    :menu-props="menuProps" @update:menu="checkPosition"></v-select>
                            </div>
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
        UsuarioHistorial: [],
        initialHistoryLoaded: false, // Bandera para controlar carga inicial
        loading: false,
        menuProps: {
            offsetY: true,
            positionStrategy: 'connected'
        },
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
        isActivo: false,
        id_estudiante: localStorage.getItem('id_estudiante'),
    }),
    methods: {
        handleKeyDown(event) {
            if (event.key === 'Enter' && !event.shiftKey && !this.loading) {
                event.preventDefault();
                this.sendMessage();
            }
            // Shift+Enter permite saltos de línea internos sin cambiar el tamaño del campo
        },
        checkPosition(isOpen) {
            if (isOpen) {
                const rect = this.$refs.selectContainer.getBoundingClientRect();
                const nearBottom = window.innerHeight - rect.bottom < 300; // 300px del borde inferior

                this.menuProps = {
                    ...this.menuProps,
                    bottom: nearBottom,
                    top: !nearBottom
                };
            }
        },
        async sendMessage() {
            if (!this.InputMessage.trim()) {
                alert("Debes escribir un mensaje");
                return;
            }

            this.loading = true;

            try {
                // Agregar mensaje de usuario inmediatamente (optimistic update)
                const newMessage = {
                    usuario: this.InputMessage,
                    ia: '',
                    timestamp: new Date().toISOString()
                };
                this.UsuarioHistorial.push(newMessage);

                const response = await axios.post(
                    `${process.env.VUE_APP_BASE_URL}EduAsistente/api/asistente/chat`,
                    {
                        id_estudiante: this.id_estudiante,
                        pregunta: this.InputMessage,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );

                if (response.status === 200) {
                    // Actualizar solo el último mensaje con la respuesta
                    this.UsuarioHistorial[this.UsuarioHistorial.length - 1].ia =
                        response.data.data.respuesta.Edula_IA;
                }
            } catch (error) {
                console.error('Error al enviar mensaje:', error);
                // Opcional: Mostrar error al usuario en la UI
                this.UsuarioHistorial[this.UsuarioHistorial.length - 1].ia =
                    "Error al obtener respuesta. Intenta nuevamente.";
            } finally {
                this.InputMessage = '';
                this.loading = false;
            }
        },
        async loadHistoryIfNeeded() {
            if (this.UsuarioHistorial.length === 0 && !this.initialHistoryLoaded) {
                await this.LoadHistory();
                this.initialHistoryLoaded = true;
            }
        },
        async LoadHistory() {
            try {
                const response = await axios.get(
                    `${process.env.VUE_APP_BASE_URL}EduAsistente/api/asistente/historial/${this.id_estudiante}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );

                if (response.status === 200) {
                    // Agregar al inicio sin perder los mensajes actuales
                    this.UsuarioHistorial = [
                        ...(response.data.data || []),
                        ...this.UsuarioHistorial
                    ];
                }
            } catch (error) {
                console.error('Error al cargar historial:', error);
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
/* ------------------------------------- */
/* IMPORTACIONES DE FUENTES              */
/* ------------------------------------- */
@import url('https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* ------------------------------------- */
/* VARIABLES Y ESTILOS BASE              */
/* ------------------------------------- */
:root {
    --border-radius: 10px;
    --box-shadow: 0 0 15px;
    --transition: all 0.3s ease;
    --input-height: 56px;
}

/* ------------------------------------- */
/* ESTILOS DE TEMA                       */
/* ------------------------------------- */
/* Contenedor principal del chat */
.chat-theme-light {
    background-color: rgba(187, 187, 187, 0.253);
    color: #333;
}

.chat-theme-dark {
    background-color: #333;
    color: #eee;
}

/* Fondo general */
.background-light {
    background-color: white;
}

.background-dark {
    background-color: #121212;
    color: #f5f5f5;
}

/* Tarjetas de usuario */
.CardUser-light {
    box-shadow: var(--box-shadow) #919191 !important;
    background-color: #cecece71 !important;
}

.CardUser-dark {
    color: #ffebee;
    background-color: #525252 !important;
    box-shadow: var(--box-shadow) #9eb1bb !important;
}

/* Tarjetas de IA */
.CardEduIA-light {
    background-color: transparent !important;
    
    box-shadow: var(--box-shadow) #cae8f7 !important;
}

.CardEduIA-dark {
    color: #ffebee;
    background-color: transparent !important;
    box-shadow: var(--box-shadow) #cae8f7 !important;
}

/* ------------------------------------- */
/* ESTILOS COMPARTIDOS                   */
/* ------------------------------------- */
.CardEduIA,
.CardUser {
    font-family: "Roboto", Arial, sans-serif;
}

.CardUser {
    border-radius: 15px;
    margin-top: 5px !important;
}
.CardUser p,
.CardEduIA p {
    white-space: pre-wrap;
    word-break: break-word; /* Opcional: asegura que las palabras muy largas se rompan si no caben */
}

/* ------------------------------------- */
/* COMPONENTES ESPECÍFICOS               */
/* ------------------------------------- */
.custom-card {
    background-color: transparent !important;
}

.custom-scrollbar {
    max-width: 98%;
    border-radius: 20px;
    box-shadow: var(--box-shadow) #666666;
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
    max-width: 90%;
    background-color: transparent;
    margin-top: 5px;
}
/* ------------------------------------- */
/* INPUT DE MENSAJES (SOLUCIÓN FINAL)    */
/* ------------------------------------- */
.chat-message-input {
    --input-height: 56px;
}

.chat-message-input .v-field {
    min-height: var(--input-height) !important;
    max-height: var(--input-height) !important;
    transition: none !important;
}

.chat-message-input .v-field__input {
    /* We keep the container for the input fixed height and ensure it doesn't overflow */
    height: var(--input-height) !important;
    padding-top: 12px !important;
    align-items: center !important;
    overflow: hidden !important; 
}

.chat-message-input textarea {
    line-height: 1.5 !important;
    white-space: pre-wrap !important;
    
    /* Changed from hidden to auto: allows vertical scrolling when content exceeds the max-height */
    overflow-y: auto !important; 
    
    resize: none !important;
    min-height: 24px !important;
    max-height: 40px !important; /* Fixed height for the text area content */
    margin-top: 0 !important;
    padding-top: 0 !important;
    
    /* Keep scrollbar hidden for a clean look, but the content can still scroll */
    scrollbar-width: none; 
}

.chat-message-input textarea::-webkit-scrollbar {
    display: none;
}

.chat-message-input .v-field--variant-outlined .v-field__outline {
    height: var(--input-height) !important;
}

/* Adjustments for the label positioning (existing CSS) */
.chat-message-input .v-label {
    top: 50% !important;
    transform: translateY(-50%) !important;
    transition: all 0.2s ease !important;
}

.chat-message-input .v-field--focused .v-label,
.chat-message-input .v-field--persistent .v-label {
    top: 8px !important;
    transform: scale(0.75) translateY(-50%) !important;
}

/* ------------------------------------- */
/* TIPOGRAFÍA Y ELEMENTOS DE TEXTO       */
/* ------------------------------------- */
p {
    margin: 0;
    font-family: "Roboto", Arial, sans-serif;
    line-height: 1.5;
}

.CardEduIA p,
.CardUser p {
    padding: 10px;
}

.pstyle {
    margin: 10px;
    text-align: center !important;
    font-family: "Roboto", Arial, sans-serif;
}

/* ------------------------------------- */
/* MENSAJES Y FORMULARIO                 */
/* ------------------------------------- */
.message-pair {
    margin-bottom: 15px;
    padding: 0 10px;
}

/* ------------------------------------- */
/* BOTONES Y ELEMENTOS INTERACTIVOS      */
/* ------------------------------------- */
.custom-btn {
    background-color: #bd9235 !important;
    color: aliceblue;
    margin: 5px;
    border: 1px solid #bd9235;
    transition: var(--transition);
}

.custom-btn:hover {
    opacity: 0.9;
    transform: scale(1.02);
}

/* ------------------------------------- */
/* AJUSTES RESPONSIVE                    */
/* ------------------------------------- */
@media (max-width: 768px) {
    .custom-scrollbar {
        max-width: 100%;
        border-radius: 10px;
    }

    .message-pair {
        padding: 0 5px;
    }

    .chat-message-input .v-field {
        min-height: 48px !important;
        max-height: 48px !important;
    }
}
</style>
