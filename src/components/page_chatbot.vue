<template>
  <Head_Block />
  <Header_User @toggle-sidebar="toggleSidebar"/>
  <Sidebar_block  :is-sidebar-open="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
  <div class="container flex flex-wrap mx-auto h-auto lg:mt-10 lg:mb-28 md:h-screen" id="main">
    <div class="flex bg-red-800 md:hidden my-8 max-h-2">
      <hr style="height: 100vh;">
    </div>
    <div class="flex flex-col justify-center align-middle min-w-full col-span-1 text-center mb-12 lg:mt-4 xl:mt-0">
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
      <ChatBox />
    </div>
  </div>
  <Footer_block />
</template>

<script>
  import Header_User from './header_user.vue'
  import Head_Block from './head_block.vue'
  import Sidebar_block from './sidebar_block.vue'
  import Footer_block from './footer_block.vue';
  import ChatBox from './box/ChatBox.vue';

  export default {
      name: 'Page_ChatBot',
      components: {
        Header_User,
        Head_Block,
        Sidebar_block,
        Footer_block,
        ChatBox
      },
      props: {
        msg: String
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
    }
</script>

<style>

</style>