<template>
    <div class="container-full">
      <MenuComp />
      <CreateAccountComponent urlReferencia="https://www.itca.edu.sv/" />
    </div>
  </template>
  
  <script>
  import CreateAccountComponent from '@/components/CreateAccountComponent.vue';
  import MenuComp from '@/components/MenuComp.vue';
  
  export default {
    name: "AccountView",
    components: {
      CreateAccountComponent,
      MenuComp,
    },
  };
  </script>
  
  <style scoped>
  
  .container-full {
    height: 100vh; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    margin: 0; 
    padding: 0; 
    overflow: hidden; 
  }
  
  </style>
  