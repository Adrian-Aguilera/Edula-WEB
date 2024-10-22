<template>
    <v-container fluid class="bg-surface-variant ConGeneral">
        <v-row no-gutters class="h-100">
            <v-col class="Con1" cols="12" md="5">
                <v-sheet class="pa-0 ma-0 bg-purple darken-2 h-100 d-flex align-center justify-center">
                    <v-card class="pa-6 pb-8" elevation="8" max-width="448" rounded="lg">
                        <v-img
                            class="mx-auto my-6"
                            max-width="228"
                            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
                        ></v-img>

                        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

                        <v-text-field
                            density="compact"
                            placeholder="Email address"
                            prepend-inner-icon="mdi-email-outline"
                            variant="outlined"
                        ></v-text-field>

                        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                            Password
                            <a
                                class="text-caption text-decoration-none text-blue"
                                href="#"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Forgot login password?
                            </a>
                        </div>

                        <v-text-field
                            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                            :type="visible ? 'text' : 'password'"
                            density="compact"
                            placeholder="Enter your password"
                            prepend-inner-icon="mdi-lock-outline"
                            variant="outlined"
                            @click:append-inner="visible = !visible"
                        ></v-text-field>

                        <v-card class="my-6" color="surface-variant" variant="tonal">
                            <v-card-text class="text-medium-emphasis text-caption">
                                Warning: After 3 consecutive failed login attempts, your account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
                            </v-card-text>
                        </v-card>

                        <v-btn
                            class="mb-4"
                            color="blue"
                            size="large"
                            variant="tonal"
                            block
                        >
                            Log In
                        </v-btn>

                        <v-card-text class="text-center">
                            <a
                                class="text-blue text-decoration-none"
                                href="#"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                            </a>
                        </v-card-text>
                    </v-card>
                </v-sheet>
            </v-col>
            <v-col class="Con2" cols="12" md="7">
                <v-sheet class="pa-0 ma-0 bg-teal lighten-4 h-100"></v-sheet>
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
</style>
