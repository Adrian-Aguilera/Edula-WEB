<template>
    <div class="background">
      <div class="Menu">
          <MenuComp/>
      </div>
      <div
        id="goto-container-example"
        class="overflow-auto custom-scrollbar"
        style="max-height: 400px; margin-top: 25px"
      >
        <div class="mx-auto pa-12 pb-8 custom-card elevated"
          style="max-width: 70%">
          <v-card class="CardEduIA" style="margin-right: 45px;"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
          title="EduIA"
          flat
          elevation="5"
        ></v-card><br>
          <v-card class="CardUser" style="margin-left: 45px;"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
          title="Usuario"
          flat
        ></v-card><br>
        <v-card class="CardEduIA" style="margin-right: 45px;"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
          title="EduIA"
          flat
        ></v-card>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MenuComp from '@/components/MenuComp.vue';
  export default {
    name: "GeneralChat",
    components: {
      MenuComp,
    },
  }
  </script>
  
  <style scoped>
  .CardEduIA{
    background-color: rgba(66, 66, 66, 0.253);
    border: 1px solid #707070;
    border-radius: 10px;
    color: white;
  }
  .CardUser{
    background-color: rgba(84, 104, 117, 0.253);
    border: 1px solid #707070;
    border-radius: 10px;
    color: white;
  }
  .Menu{
    position: relative;
    background-color: transparent;
    width: auto;
    height: auto;
    margin-top: 15px;
    border-radius: 10px;
  }
  .elevated {
  box-shadow: 4px 0 6px 5px rgba(0, 0, 0, 0.4);
}
  .background{
    position: relative;
    background-color: rgb(32, 34, 44);
    min-height: 100vh;
    padding: 16px;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
  .custom-card {
    background-color: rgba(66, 66, 66, 0.253);
    max-height: 50%;
  }
  .custom-scrollbar::-webkit-scrollbar {
    width: 7px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #5e5e5e;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #bd9235;
  }
  </style>
  