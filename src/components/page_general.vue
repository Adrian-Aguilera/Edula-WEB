<template>
  <Head_Block />
  <Header_Block />
  <div class="container mx-auto h-screen lg:mt-28 lg:mb-28 md:mt-28 md:mb-28">
    <div class="flex items-center justify-center w-full h-full my-auto">
      <div class="flex flex-col justify-center items-center col-span-1 text-center">
        <div class="flex items-center justify-center mb-4">
          <img class="h-5" id="vieneta_body" src="img/vineta_itca.png" alt="logo">
          <h4 class="ml-2 md:text-lg lg:text-xl xl:text-2xl font-bold tracking-widest text-white uppercase">¿Eres un estudiante de ITCA-FEPADE?</h4>
        </div>
        <h1 class="mb-8 text-4xl md:text-4xl lg:text-6xl xl:text-sm font-extrabold text-yellow-400">Ingresa ya a tus herramientas virtuales</h1>
        <p class="mb-6 md:text-base lg:text-xl leading-7 text-white font-bold">
          Como estudiante de ITCA-FEPADE tienes acceso a diversas herramientas virtuales exclusivas para impulsar tu aprendizaje ¡Échales un vistazo!
        </p>
        <div class="flex flex-col items-center gap-4 py-3">
          <router-link to="/Chat">
            <button class="flex items-center py-4 text-sm font-bold text-white px-7 bg-red-800 hover:bg-red-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">
              Ingresar
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <Footer_Block />
</template>

<script>
import Header_Block from './header_block.vue'
import Head_Block from './head_block.vue'
import Footer_Block from './footer_block.vue'

export default {
  name: 'Page_General',
  components: {
    Header_Block,
    Head_Block,
    Footer_Block
  },
  props: {
    msg: String
  }
}
</script>

<style>

</style>
