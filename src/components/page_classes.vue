<template>
  <div>
    <Head_Block />
    <Header_User @toggle-sidebar="toggleSidebar"/>
    <Sidebar_block  :is-sidebar-open="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
    <div class="container">
      <div class="flex justify-center text-center mt-5">
        <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">CLASE 1: TABLAS DE VERDAD</h1>
      </div>
      <div class="flex bg-red-800 max-h-2 mt-6">
        <hr style="height: 100vh;">
      </div>
      <div class="iframe-container">
        <div class="container" id="contenedorUnity">
          <iframe src="/clases-unity/clase_prueba.html" frameborder="0" class="responsive-iframe"></iframe>
        </div>
      </div>
      <div class="flex bg-red-800 max-h-2 mt-6">
        <hr style="height: 100vh;">
      </div>
      <div class="flex justify-center text-center mt-4">
        <h1 class="text-white text-base md:text-lg lg:text-2xl font-bold">Haz consultas que tengas sobre el contenido visto en clase:</h1>
      </div>
      <ChatBox />
    </div>

    <!-- <div class="container">
      <div class="w-full mt-16 mb-8">
        <div class="flex bg-red-800 md:hidden my-8 max-h-2">
          <hr style="height: 100vh;">
        </div>
        <div class="flex flex-col justify-center align-middle text-center mb-12 lg:mt-16 xl:mt-0">
          <div class="flex justify-center text-center">
            <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">¿Tienes alguna pregunta sobre el contenido?</h1>
          </div>
          <div class="flex bg-red-800 max-h-2 mt-6">
            <hr style="height: 100vh;">
          </div>
          <div class="flex justify-center text-center mt-4">
            <h1 class="text-white text-base md:text-lg lg:text-xl font-bold">Nuestra Inteligencia artificial te asistirá con la consulta que tengas:</h1>
          </div>
          <div class="flex flex-col mt-4 justify-between md:h-96 rounded-xl border border-red-800" id="chat_section">
            <div class="flex items-end align-bottom text-left justify-center p-4" style="height: 90%;">
            </div>
            <div class="text-center mb-2">
              <form action="" method="POST">
                <input type="text" class="min-h-8 rounded-md font-semibold" placeholder="Haz una pregunta" style="padding-left: 4px; width: 70%;">
                <input type="submit" value="Enviar" class="font-semibold" id="btnEnviar">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <Footer_block />
  </div>
</template>

<script>
import Header_User from './header_user.vue';
import Head_Block from './head_block.vue';
import Footer_block from './footer_block.vue';
import Sidebar_block from './sidebar_block.vue';
import ChatBox from './box/ChatBox.vue';

export default {
  name: 'Page_Classes',
  components: {
    Header_User,
    Head_Block,
    Footer_block,
    Sidebar_block,
    ChatBox
  },
  data() {
        return {
          isSidebarOpen: false,
        };
      },
      methods: {
        toggleSidebar() {
          this.isSidebarOpen = !this.isSidebarOpen;
        },
      },
};
</script>

<style scoped>

.iframe-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Aspect ratio 16:9, ajusta según necesites */
  height: 0;
  overflow: hidden;
  margin-top: 25px;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Estilos generales (para dispositivos pequeños por defecto) */
.container {
  height: 100%;
  padding-bottom: 35px;
}

/* Dispositivos pequeños (celulares en modo retrato, menos de 576px) */
@media (max-width: 575.98px) {
  .container {
  height: 100%;
  padding-bottom: 35px;
}
}

/* Dispositivos medianos (celulares en modo paisaje y tablets pequeños, de 576px a 767px) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .container {
  height: 100%;
  padding-bottom: 35px;
}
}

/* Dispositivos grandes (tablets grandes y laptops pequeños, de 768px a 991px) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .container {
  height: 100%;
  padding-bottom: 35px;
}
}

/* Dispositivos extra grandes (laptops grandes y desktops pequeños, de 992px a 1199px) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .container {
  height: 100%;
  padding-bottom: 35px;
}
}

/* Dispositivos XXL (desktops grandes, 1200px y mayores) */
@media (min-width: 1200px) {
  .container {
  height: 100%;
  padding-bottom: 35px;
}
}


</style>
