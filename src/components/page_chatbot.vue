<template>
  <Head_Block />
  <Header_Block />
  <div class="flex bg-red-800 md:hidden my-8 max-h-2">
    <hr style="height: 100vh;">
  </div>
  <div class="flex flex-col justify-center align-middle col-span-1 text-center mb-12 lg:mt-16 xl:mt-0">
    <div class="flex justify-center text-center">
      <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">¡BIENVENIDO A TU ASISTENTE VIRTUAL EDULA ITCA!</h1>
    </div>
    <div class="flex bg-red-800 max-h-2 mt-6">
      <hr style="height: 100vh;">
    </div>
    <div class="flex justify-center text-center mt-4">
      <h1 class="text-white text-base md:text-lg lg:text-xl font-bold">Nuestra Inteligencia artificial te asistirá con la consulta que tengas:</h1>
    </div>
    <!-- Aquí ajustamos el margen superior del contenedor del chat -->
    <div class="flex flex-col mt-8 justify-between md:h-96 rounded-xl border border-red-800" id="chat_section">
      <div class="flex items-end align-bottom text-left justify-center p-4" style="height: 90%;">
        <p class="align-bottom text-white font-bold">
          Tú: Buen día, ¿Cómo puedo inscribirme a ITCA?
          <br>
          <br>
          ITCA: Buen día, puedes inscribirte utilizando el formulario que encontrarás en nuestra página web. Lo encontrarás en la sección "Nuevo Ingreso" y siguiendo los pasos de inscripción. En esta sección también encontrarás más información relevante para el proceso de inscripción.
          <br>
          <br>
          Puedes utilizar este para ir directamente: <a href="https://www.itca.edu.sv/nuevo-ingreso/" style="text-decoration: underline;">https://www.itca.edu.sv/nuevo-ingreso/</a> 
          <br>
          <br>
          Espero esta información haya sido de tu ayuda. Si necesitas asistencia con otra duda, estoy a tu disposición.
        </p>
      </div>
      <form action="" method="">
        <input type="text" class="min-h-8 rounded-md font-semibold" placeholder="Haz una pregunta" style="padding-left: 4px; width: 70%;">
        <input type="submit" value="Enviar" class="font-semibold" id="btnEnviar">
      </form>
    </div>
  </div>
  <Footer_Block />
</template>

<script>
  import Header_Block from './header_block.vue'
  import Head_Block from './head_block.vue'
  import Footer_Block from './footer_block.vue'

  export default {
      name: 'Page_ChatBot',
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