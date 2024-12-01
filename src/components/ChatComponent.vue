<template>
    <div class="background">
        <div class="Menu">
            <MenuComp />
        </div>
        <div>
            <div id="goto-container-example" class="mx-auto overflow-auto custom-scrollbar"
                style="height: 400px; margin-top: 10px; background-color: rgba(187, 187, 187, 0.253);">
                <div v-if="UsuarioHistorial.length === 0" class="no-conversation-message">
                    <p class="pstyle">Inicie una nueva conversación</p>
                </div>
                <div class="mx-auto pa-12 pb-8 custom-card" style="max-width: 100%"
                    v-for="(historial, index) in UsuarioHistorial" :key="index">
                    <!-- Mensaje del usuario -->
                    <v-card class="CardUser mb-5" style="margin-left: 45px;" flat>
                        <p>{{ historial.usuario }}</p>
                    </v-card>
                    <!-- Respuesta de la IA -->
                    <v-card class="CardEduIA mb-5" style="margin-right: 45px;" title="EduIA" flat elevation="5">
                        <v-progress-linear v-if="loading" color="orange-darken-3" indeterminate reverse></v-progress-linear>
                        <p>{{ historial.ia }}</p>
                    </v-card>
                </div>
            </div>
            <v-form fast-fail ref="form">
                <v-row class="mx-auto custom-inputs">
                    <v-col>
                        <v-card class="mx-auto cardInputs">
                            <v-card-item>
                                <v-row>
                                    <v-col>
                                        <v-text-field solo hide-details flat class="chip-input"
                                            :style="{ width: '100%', backgroundColor: '#bd9235' }"
                                            v-model="InputMessage" :rules="[rules.required, rules.min]"></v-text-field>
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-btn icon="$collapse" @click="sendMessage" variant="tonal"></v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-form>
        </div>
    </div>
</template>

<script>
import MenuComp from '@/components/MenuComp.vue';
import axios from 'axios';

export default {
    name: "GeneralChat",
    components: {
        MenuComp,
    },
    data: () => ({
        InputMessage: '',
        UsuarioHistorial: [],
        loading: false,
        rules: {
            required: (value) => !!value || "Este campo es requerido",
            min: (value) => value.length >= 1 || "El mensaje debe tener al menos 1 caracteres",
        },
    }),
    methods: {
        async sendMessage() {
            this.loading = true; // Activa el loading
            const valid = await this.ValidateCampos();

            if (valid) {
                try {
                    // Agregar solo el mensaje del usuario inicialmente
                    this.UsuarioHistorial.push({ usuario: this.InputMessage, ia: '' });

                    // Obtener referencia del último mensaje en el historial
                    const lastMessage = this.UsuarioHistorial[this.UsuarioHistorial.length - 1];

                    const access =
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyNDE3ODcxLCJpYXQiOjE3Mjk4MjU4NzEsImp0aSI6Ijc1OThhZjFlYWM5ZDRkYzQ5ODhhMDc4NGEyODYwZjNkIiwidXNlcl9pZCI6MX0.k_f4korDhZL68TfSpyMbuXItvxqEMKTjVnBoaBNKGp8';
                    const json = {
                        "type_engine": { "EngineGeneral": true },
                        "mesage": this.InputMessage,
                    };
                    const headers = {
                        'Authorization': `Bearer ${access}`,
                        'Content-Type': 'application/json',
                    };

                    // Realiza la petición a la API
                    const response = await axios.post('https://08e8-190-87-195-226.ngrok-free.app/api/EduGeneral/general/chat', json, { headers });
                    // Agrega la respuesta de la IA al historial
                    lastMessage.ia = response.data.data.response;
                    this.InputMessage = '';
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
        async ValidateCampos() {
            const { valid } = await this.$refs.form.validate();
            return valid;
        },
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
    max-height: 50%;
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
    color: black !important;
    margin: 10px;
    font-family: "Playwrite GB S", cursive;
}
.pstyle {
    color: black !important;
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
</style>