<template>
  <Head_Block />
  <Header_Block />
  <div class="container flex flex-wrap mx-auto h-auto lg:mt-10 lg:mb-28 md:mt-28 md:mb-28">
    <div class="flex items-center justify-center align-middle md:w-full xl:w-1/2" id="info_section">
      <div class="justify-center items-center col-span-1 text-center">
        <div class="flex items-center justify-center mb-4">
          <img class="h-5" id="vieneta_body" src="img/vineta_itca.png" alt="logo">
          <h4 class="ml-2 md:text-lg lg:text-xl xl:text-2xl font-bold tracking-widest text-white uppercase">¿Eres un estudiante de ITCA-FEPADE?</h4>
        </div>
        <h1 class="mb-8 text-4xl md:text-4xl lg:text-6xl xl:text-sm font-extrabold text-yellow-400">Ingresa ya a tus herramientas virtuales</h1>
        <p class="mb-6 md:text-base lg:text-xl leading-7 text-white font-bold">
          Como estudiante de ITCA-FEPADE tienes acceso a diversas herramientas virtuales exclusivas para impulsar tu aprendizaje ¡Échales un vistazo!
        </p>
        <div class="flex flex-col items-center gap-4 py-3">
          <router-link to="/Classes">
            <button class="flex items-center py-4 font-bold text-white text-lg px-7 bg-red-800 hover:bg-red-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">
              Ingresar
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex bg-red-800 xl:hidden max-h-2 mt-6 min-w-full mb-6 lg:mb-0">
        <hr style="height: 100vh;">
    </div>
    <div class="justify-center align-middle col-span-1 text-center mb-12 lg:mt-6 md:w-full xl:w-1/2" id="chat_block">
      <div class="flex justify-center text-center">
        <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">¡BIENVENIDO A TU ASISTENTE VIRTUAL EDULA ITCA!</h1>
      </div>
      <div class="flex bg-red-800 max-h-2 mt-6">
        <hr style="height: 100vh;">
      </div>
      <div class="flex justify-center text-center mt-4">
        <h1 class="text-white text-base md:text-lg lg:text-2xl font-bold">Nuestra Inteligencia artificial te asistirá con la consulta que tengas:</h1>
      </div>
      <!-- Aquí ajustamos el margen superior del contenedor del chat -->
      <div class="flex flex-col mt-8 justify-between md:h-96 rounded-xl border border-red-800" id="chat_section">
        <div class="flex items-end align-bottom text-left justify-center p-4" style="height: 90%;">
          <p class="align-bottom text-white font-bold lg:text-md">
            Tú: Buen día, ¿Cómo puedo inscribirme a ITCA?
            <br>
            <br>
            ITCA: Buen día, puedes inscribirte utilizando el formulario que encontrarás en nuestra página web. Lo encontrarás en la sección "Nuevo Ingreso" y siguiendo los pasos de inscripción. En esta sección también encontrarás más información relevante para el proceso de inscripción.
            <br>
            <br>
            Puedes utilizar este link para ir directamente: <a href="https://www.itca.edu.sv/nuevo-ingreso/" style="text-decoration: underline;">https://www.itca.edu.sv/nuevo-ingreso/</a> 
            <br>
            <br>
            Espero esta información haya sido de tu ayuda. Si necesitas asistencia con otra duda, estoy a tu disposición.
          </p>
        </div>
        <form action="" method="" class="my-1">
          <input type="text" class="min-h-8 rounded-md font-semibold" placeholder="Haz una pregunta" style="padding-left: 4px; width: 70%;">
          <input type="submit" value="Enviar" class="font-semibold" id="btnEnviar">
        </form>
      </div>
    </div>
  </div>
  <Footer_block />
</template>

<script>
import Header_Block from './header_block.vue'
import Head_Block from './head_block.vue'
import Footer_block from './footer_block.vue';

export default {
  name: 'Page_General',
  components: {
    Header_Block,
    Head_Block,
    Footer_block
  },
  props: {
    msg: String
  }
}
</script>

