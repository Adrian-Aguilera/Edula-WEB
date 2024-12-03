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
      return this.$store.getters.theme
    },
  },
}
</script>


