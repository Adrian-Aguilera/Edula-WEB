<template>
    <v-app-bar
        :order="order"
        color="red-darken-2"
        flat
    >
        <v-img
            class="ml-8 bg-white"
            rounded
            max-width="50"
            src="https://www.itca.edu.sv/wp-content/themes/elaniin-itca/images/favicon.png"
            height="50"
            contain
        />
        <template v-slot:append>
            <v-chip
                class="ma-2"
                :color=" this.$store.getters.theme === 'light' ? 'orange' : 'black'"
                @click="changeTheme"
                variant="flat"
            >
                <v-icon :icon=" this.$store.getters.theme === 'light' ? 'bi bi-brightness-high-fill' : 'bi bi-moon-stars-fill'" :color=" this.$store.getters.theme === 'light' ? 'white' : 'orange'"></v-icon>
                <span class="ml-2">{{ this.$store.getters.theme === 'light' ? 'Dark' : 'Light' }}</span>
            </v-chip>
        </template>
        <v-toolbar-title>Bienvenido a Edula</v-toolbar-title>
        <v-btn rounded="xl" size="x-large" @click="Login">Iniciar Sesion</v-btn>
    </v-app-bar>
</template>

<script>
// Importa useTheme de Vuetify
import { useTheme } from 'vuetify'; 

export default {
    name: "AppBarComponent",
    data: () => ({
        // No necesitas definir nada aquí a menos que tengas datos locales
    }),
    
    // Método `mounted()` para iniciar la lógica de observación del tema
    mounted() {
        // 1. Obtén la instancia del tema de Vuetify
        // Nota: useTheme() solo se puede llamar en el hook setup() o mounted()/created()
        this.vuetifyTheme = useTheme();

        // 2. Observa el estado del tema en Vuex
        this.$watch(
            () => this.$store.getters.theme,
            (newVuexTheme) => {
                // 3. Mapea el estado de Vuex al nombre del tema definido en vuetify.js
                // 'dark' en Vuex corresponde a 'miTemaOscuroGris' en Vuetify
                const vuetifyThemeName = newVuexTheme === 'dark' ? 'miTemaOscuroGris' : 'miTemaClaro';
                
                // 4. Actualiza el tema activo global de Vuetify
                this.vuetifyTheme.global.name.value = vuetifyThemeName;
            },
            { immediate: true } // Ejecuta el observador inmediatamente al montar para establecer el tema inicial
        );
    },

    methods: {
        changeTheme() {
            // Este método solo necesita despachar la acción de Vuex para cambiar el estado.
            // La lógica de 'mounted()' se encargará de actualizar Vuetify.
            const newTheme = this.$store.getters.theme === 'light' ? 'dark' : 'light';
            this.$store.dispatch('setTheme', newTheme);
        },
        Login(){
            this.$router.push('/Login');
        }
    },
}
</script>