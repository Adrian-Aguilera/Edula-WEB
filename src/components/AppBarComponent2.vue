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
        <v-btn rounded="xl" size="x-large" @click="Logout">Cerrar Sesion</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppBarComponent2",
    data: () => ({
    }),
    methods: {
        changeTheme() {
            this.$store.dispatch('setTheme', this.$store.getters.theme === 'light' ? 'dark' : 'light')
        },
        Logout(){
            localStorage.clear();
            this.$router.push('/');
        }
    },
}
</script>