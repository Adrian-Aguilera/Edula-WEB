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
            <v-btn icon @click="changeTheme">
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
        </template>
        <v-toolbar-title>Bienvenido a Edula</v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppBarComponent",
    data: () => ({
        
    }),
    methods: {
        changeTheme() {
            this.$store.dispatch('setTheme', this.$store.getters.theme === 'light' ? 'dark' : 'light')
        },
    },
}
</script>