<template>
  <Head_Block />
  <Header_User />
  <div class="container flex flex-wrap mx-auto h-auto lg:mt-10 lg:mb-28 md:mt-28 md:mb-28">
    <div class="flex bg-red-800 md:hidden my-8 max-h-2">
      <hr style="height: 100vh;">
    </div>
    <div class="flex flex-col justify-center align-middle min-w-full col-span-1 text-center mb-12 lg:mt-16 xl:mt-0">
      <div class="flex justify-center text-center">
        <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">HERRAMIENTA DE APOYO ESTUDIANTIL EDULA</h1>
      </div>
      <div class="flex bg-red-800 max-h-2 mt-6">
        <hr style="height: 100vh;">
      </div>
      <div class="flex justify-center text-center mt-4">
        <h1 class="text-white text-base md:text-lg lg:text-2xl font-bold">Haz consultas que tengas sobre el contenido visto en clase:</h1>
      </div>
      <!-- Aquí ajustamos el margen superior del contenedor del chat -->
      <div class="flex flex-col mt-8 justify-between md:h-96 rounded-xl min-w-full border border-red-800" id="chat_section">
        <div class="flex items-end align-bottom text-left justify-center p-4" style="height: 90%;">
          <p class="align-bottom text-white font-bold">
            Tú: Tengo dudas sobre el contenido visto en la clase de "Tablas de verdad"
            <br>
            <br>
            EduLA: Buen día, puedes encontrar material de apoyo sobre la clase que mencionas en el siguiente enlace
            <br>
            <br>
            Haz clic para ir directamente: <router-link to="/Clases" class="underline">Tablas de verdad</router-link>
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
  </div>
  <Footer_Block />
</template>

<script>
  import Header_User from './header_user.vue'
  import Head_Block from './head_block.vue'

  export default {
      name: 'Page_ChatBot',
      components: {
        Header_User,
        Head_Block,
      },
      props: {
        msg: String
      }
    }
  </script>