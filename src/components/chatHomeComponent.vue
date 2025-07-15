<template>
    <v-layout class="rounded-md">
        <AppBarComponent2 />
        <v-main class="align-center justify-center d-flex" style="min-height: 100vh;">
            <v-container class="chat-container-with-background">
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
                                :class="{ 'chat-theme-light chat-theme-dark': this.$store.getters.theme === 'light', 'chat-theme-dark': this.$store.getters.theme === 'dark' }"
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
                                                <!-- Boton para abrir el diálogo de historial -->
                                                <v-col cols="2">
                                                    <v-btn icon color="primary" @click="openHistoryDialog" class="ml-2">
                                                        <v-icon>mdi-history</v-icon> </v-btn>

                                                    <v-dialog v-model="dialogVisible" max-width="600">
                                                        <v-card>
                                                            <v-card-title class="headline">Historial de
                                                                Conversación</v-card-title>
                                                            <v-card-text>
                                                                <div v-if="historyLoading"
                                                                    class="d-flex justify-center my-4">
                                                                    <v-progress-circular indeterminate
                                                                        color="primary"></v-progress-circular>
                                                                    <span class="ml-2">Cargando historial...</span>
                                                                </div>
                                                                <v-alert v-else-if="errorMessage" type="error" dense
                                                                    dismissible @input="errorMessage = null">{{
                                                                    errorMessage }}</v-alert>
                                                                <div v-else-if="chatHistory.length === 0"
                                                                    class="text-center my-4 text-grey-darken-1">
                                                                    No hay historial disponible para mostrar.
                                                                </div>
                                                                <v-list v-else dense class="overflow-y-auto"
                                                                    style="max-height: 400px;">
                                                                    <v-list-item v-for="(item, index) in chatHistory"
                                                                        :key="index" class="my-2">
                                                                        <div v-if="item.role === 'user' && item.content.trim() !== ''"
                                                                            class="d-flex justify-end mb-1">
                                                                            <v-card class="pa-2 rounded-lg elevation-2"
                                                                                :class="{ 'CardUser-light': $store.getters.theme === 'light', 'CardUser-dark': $store.getters.theme === 'dark' }"
                                                                                style="max-width: 80%; background-color: var(--v-theme-primary-container) !important;">
                                                                                <p class="pre-wrap text-right">{{
                                                                                    item.content }}</p>
                                                                                <span
                                                                                    class="text-caption text-grey-lighten-2 text-right d-block">Tú</span>
                                                                            </v-card>
                                                                        </div>
                                                                        <div v-if="item.role === 'assistant' && item.content.trim() !== ''"
                                                                            class="d-flex justify-start mb-1">
                                                                            <v-card class="pa-2 rounded-lg elevation-2"
                                                                                :class="{ 'CardEduIA-light': $store.getters.theme === 'light', 'CardEduIA-dark': $store.getters.theme === 'dark' }"
                                                                                style="max-width: 80%;">
                                                                                <p class="pre-wrap text-left">{{
                                                                                    item.content }}</p>
                                                                                <span
                                                                                    class="text-caption text-grey-darken-1 text-left d-block">EduIA</span>
                                                                            </v-card>
                                                                        </div>
                                                                    </v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <v-btn color="error" text
                                                                    @click="showConfirmClearDialog"
                                                                    :disabled="historyLoading">
                                                                    <v-icon left>mdi-delete-empty</v-icon></v-btn>
                                                                <v-spacer></v-spacer>
                                                                <v-btn color="primary" text
                                                                    @click="closeHistoryDialog">Cerrar</v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>

                                                    <v-dialog v-model="confirmClearDialogVisible" max-width="400">
                                                        <v-card>
                                                            <v-card-title
                                                                class="headline red--text text--lighten-1">Confirmar
                                                                Limpieza</v-card-title>
                                                            <v-card-text>
                                                                ¿Estás seguro de que deseas eliminar todo el historial
                                                                de conversación? Esta acción
                                                                no se puede deshacer.
                                                            </v-card-text>
                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>
                                                                <v-btn color="grey" text
                                                                    @click="confirmClearDialogVisible = false">Cancelar</v-btn>
                                                                <v-btn color="error" text @click="executeClearHistory"
                                                                    :loading="clearingHistory">Eliminar</v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>

                                                    <v-snackbar v-model="snackbarVisible" :color="snackbarColor"
                                                        :timeout="3000" bottom right>
                                                        {{ snackbarText }}
                                                        <template v-slot:action="{ attrs }">
                                                            <v-btn color="white" text v-bind="attrs"
                                                                @click="snackbarVisible = false">
                                                                Cerrar
                                                            </v-btn>
                                                        </template>
                                                    </v-snackbar>
                                                </v-col>
                                                <v-col cols="10">
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
                                    variant="outlined" color="orange-darken-4" class="mb-4" style="margin-top: 6%;"
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
        temas: ['Introducción', ...Array.from({ length: 9 }, (_, i) => 'Tema: ' + (i + 1))], // Cambiado a "Tema:"
        selectedTema: "Introducción", // Tema por defecto
        InputMessage: '',
        UsuarioHistorial: [], // Historial del chat principal
        initialHistoryLoaded: false, // Bandera para controlar carga inicial del historial principal
        loading: false, // Estado de carga del envío de mensaje

        // Propiedades para el diálogo de historial
        dialogVisible: false,   // Controla si el diálogo del historial está abierto
        historyLoading: false,  // Indica si el historial del diálogo está cargando
        chatHistory: [],        // Almacenará los mensajes del historial del diálogo (obtenidos de la API)
        errorMessage: null,     // Para mostrar errores de la API

        // Nuevas propiedades para la limpieza de historial y notificaciones
        confirmClearDialogVisible: false, // Controla la visibilidad del diálogo de confirmación
        clearingHistory: false,           // Estado de carga para la operación de limpieza
        snackbarVisible: false,           // Controla la visibilidad del snackbar
        snackbarText: '',                 // Texto del snackbar
        snackbarColor: '',                // Color del snackbar
        // Propiedades relacionadas con v-select/v-form (asumimos que se usan en otras partes de tu template no mostradas)
        menuProps: {
            offsetY: true,
            positionStrategy: 'connected'
        },
        rules: {
            required: (value) => {
                return !!value || "Este campo es requerido";
            },
            min: (value) => {
                return value && value.length >= 1 || "El mensaje debe tener al menos 1 caracteres";
            },
        },
        // order: 0, // Esta propiedad no parece usarse, considera eliminarla
        isActivo: false,
        id_estudiante: localStorage.getItem('id_estudiante'), // Se obtiene una vez al inicio
    }),
    methods: {
        handleKeyDown(event) {
            if (event.key === 'Enter' && !event.shiftKey && !this.loading) {
                event.preventDefault();
                this.sendMessage();
            }
        },
        checkPosition(isOpen) {
            // Este método se usa para un v-select que no está completamente en el código.
            // Si tu v-select tiene ref="selectContainer", este método es útil.
            // De lo contrario, puedes eliminarlo si no lo necesitas.
            if (isOpen) {
                const rect = this.$refs.selectContainer.getBoundingClientRect();
                const nearBottom = window.innerHeight - rect.bottom < 300;

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
                const newMessage = {
                    usuario: this.InputMessage, // Para tu historial principal
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
                    this.UsuarioHistorial[this.UsuarioHistorial.length - 1].ia =
                        response.data.data.respuesta.Edula_IA;
                }
            } catch (error) {
                console.error('Error al enviar mensaje:', error);
                this.UsuarioHistorial[this.UsuarioHistorial.length - 1].ia =
                    "Error al obtener respuesta. Intenta nuevamente.";
            } finally {
                this.InputMessage = '';
                this.loading = false;
            }
        },

        /**
         * Método auxiliar para realizar la petición GET al historial de la API.
         * Retorna los datos o lanza un error.
         */
        async _fetchApiHistory(studentId) {
            const baseUrl = process.env.VUE_APP_BASE_URL;
            const apiUrl = `${baseUrl}EduAsistente/api/asistente/historial/${studentId}`;

            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                // La API retorna { "data": [...] }, así que accedemos a response.data.data
                return response.data.data || [];
            } else {
                throw new Error(response.data.message || `Error ${response.status}: No se pudo obtener el historial.`);
            }
        },

        /**
         * Carga el historial de conversación en UsuarioHistorial (para el chat principal).
         * Utilizado para la carga inicial o recargas manuales.
         */
        async LoadHistory() {
            try {
                this.UsuarioHistorial = await this._fetchApiHistory(this.id_estudiante);
            } catch (error) {
                console.error('Error al cargar historial (LoadHistory para chat principal):', error);
                // Opcional: mostrar un mensaje de error en la interfaz de usuario del chat principal
            }
        },

        /**
         * Carga el historial de conversación en chatHistory (para el diálogo).
         * Utilizado al abrir el v-dialog.
         */
        async loadChatHistory() {
            this.historyLoading = true;
            this.errorMessage = null;
            this.chatHistory = [];

            try {
                const id_estudiante = localStorage.getItem('id_estudiante');

                if (!id_estudiante) {
                    throw new Error('ID de estudiante no encontrado en el almacenamiento local.');
                }
                this.chatHistory = await this._fetchApiHistory(id_estudiante);

            } catch (error) {
                console.error('Error al cargar historial (loadChatHistory para diálogo):', error);
                this.errorMessage = 'No se pudo cargar el historial: ' + (error.response?.data?.message || error.message || 'Error desconocido.');
            } finally {
                this.historyLoading = false;
            }
        },

        // Métodos para el diálogo de historial
        openHistoryDialog() {
            this.dialogVisible = true;
            this.loadChatHistory();    // Carga el historial específico del diálogo
        },

        closeHistoryDialog() {
            this.dialogVisible = false;
            this.chatHistory = [];      // Limpia el historial cargado en el diálogo
            this.errorMessage = null;
        },
        // --- Nuevos métodos para limpiar el historial ---
        showConfirmClearDialog() {
            this.confirmClearDialogVisible = true; // Abre el diálogo de confirmación
            this.errorMessage = null; // Limpiar errores previos si los hubiera
        },

        async executeClearHistory() {
            this.clearingHistory = true; // Inicia el estado de carga del botón
            this.errorMessage = null;    // Limpia errores
            
            try {
                const id_estudiante = localStorage.getItem('id_estudiante');

                if (!id_estudiante) {
                    throw new Error('ID de estudiante no encontrado en el almacenamiento local.');
                }

                const baseUrl = process.env.VUE_APP_BASE_URL;
                // Endpoint para limpiar historial
                const apiUrl = `${baseUrl}EduAsistente/api/asistente/historial/limpiar/${id_estudiante}`;

                const response = await axios.get(apiUrl, { // Usamos GET como especificaste
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 200) {
                    // Si la limpieza fue exitosa:
                    this.chatHistory = []; // Limpia el historial mostrado en el diálogo
                    this.UsuarioHistorial = []; // ¡Importante! También limpia el historial del chat principal
                    
                    this.showSnackbar('Historial limpiado exitosamente.', 'success');
                    this.confirmClearDialogVisible = false; // Cierra el diálogo de confirmación
                    this.closeHistoryDialog(); // Cierra el diálogo principal del historial
                } else {
                    throw new Error(response.data.message || `Error ${response.status}: No se pudo limpiar el historial.`);
                }
            } catch (error) {
                console.error('Error al limpiar historial:', error);
                this.errorMessage = 'No se pudo limpiar el historial: ' + (error.response?.data?.message || error.message || 'Error desconocido.');
                this.showSnackbar('Error al limpiar historial.', 'error');
            } finally {
                this.clearingHistory = false; // Finaliza el estado de carga del botón
            }
        },

        showSnackbar(text, color) {
            this.snackbarText = text;
            this.snackbarColor = color;
            this.snackbarVisible = true;
        },
        // --- Fin de nuevos métodos para limpiar el historial ---
        async ValidateCampos() {
            const { valid } = await this.$refs.form.validate();
            return valid;
        },
        isActive() {
            // Lógica para verificar si el chatbot está activo
            this.isActivo = !this.isActivo; // Esto actualmente solo lo invierte. Asegúrate de que haga la petición real si es necesario.
        }
    },
    created() {
        this.isActive(); // Llama a tu función para verificar si el chatbot está activo

        // Carga el historial principal (UsuarioHistorial) si no ha sido cargado.
        // Esto reemplaza la doble llamada de antes.
        if (this.UsuarioHistorial.length === 0 && !this.initialHistoryLoaded) {
            this.LoadHistory();
            this.initialHistoryLoaded = true; // Marca como cargado
        }
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
    background-color: rgba(68, 68, 68, 0.377);
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
    word-break: break-word;
    /* Opcional: asegura que las palabras muy largas se rompan si no caben */
}

/* ------------------------------------- */
/* COMPONENTES ESPECÍFICOS               */
/* ------------------------------------- */
.pre-wrap {
    white-space: pre-wrap;
    word-break: break-word;
    /* Rompe palabras largas si no caben */
}

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
    max-height: 40px !important;
    /* Fixed height for the text area content */
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
/* Estilos para el contenedor principal con la imagen de fondo */
.chat-container-with-background {
  position: relative; /* Necesario para posicionar correctamente el pseudo-elemento */
  overflow: hidden; /* Asegura que la imagen no se desborde del contenedor */
  /* Puedes agregar un padding-top para evitar que el contenido se superponga con la imagen si es muy grande */
  /* padding-top: 50px; */ 
}

.chat-container-with-background::before {
  content: ""; /* Obligatorio para pseudo-elementos */
  position: absolute; /* Permite posicionarlo libremente dentro del contenedor */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/BGIA.jpg'); /* Inserta la imagen como pseudo-elemento */
  background-size: cover; /* Ajusta la imagen para cubrir todo el área del contenedor */
  background-position: center center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  opacity: 0.05; /* Ajusta la transparencia (0.0 es totalmente transparente, 1.0 es totalmente opaco) */
  z-index: -1; /* Envía la imagen detrás del contenido del contenedor */
}

</style>
