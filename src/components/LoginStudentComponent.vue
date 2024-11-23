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

                        <v-text-field
                            class="text-orange-darken-4"
                            density="compact"
                            placeholder="Carnet"
                            prepend-inner-icon="bi bi-person-vcard-fill"
                            variant="outlined"
                        ></v-text-field>

                        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                            <strong class="text-orange-darken-3">Contraseña</strong> 
                        </div>

                        <v-text-field
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

                        <v-btn
                            class="mb-4 bi bi-door-open"
                            color="orange-darken-4"
                            size="large"
                            variant="tonal"
                            block
                        >
                            Iniciar Sesion
                        </v-btn>
                    </v-card>
                </v-sheet>
            </v-col>
            <v-col class="Con2 hide-on-small" cols="12" md="8" lg="8" xl="8" xxl="8">
                <v-sheet class="pa-0 ma-0 h-100 caja2"></v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'YourComponentName', // Asegúrate de cambiar esto a un nombre apropiado
};
</script>

<style scoped>
.ConGeneral {
    height: 100vh;
    padding: 0;
}

.caja2 {
    background-image: url("@/assets/pc.jpg");
    background-size: cover; /* Cambiado a cover para cubrir completamente */
    background-position: center;
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
