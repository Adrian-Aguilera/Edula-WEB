<template>
  <v-app :theme="theme" >
    <v-main>
      <router-view to="/Login" />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
  computed: {
    theme() {
      // Mapea el estado de Vuex ('light' o 'dark') al nombre del tema de Vuetify.
      // Si el estado de Vuex es 'dark', usa el nombre de tu tema gris: 'miTemaOscuroGris'
      return this.$store.getters.theme === 'dark' ? 'miTemaOscuroGris' : 'light';
    },
  },
}
</script>