<template>
  <nav class="flex justify-between">
    <div class="flex space-x-4">
      <div class="ltr" >
        <div class="bg-white text-black p-2 rounded-lg shadow-md">
          <div class="flex">
            <div style="width: 230px;">
              <img :src="require('@/assets/Logo55Web_1700x379.svg')" alt="ITCA FEPADE" width="100%">
            </div>
            <div class="ml-6 mr-4 nav_item__TGdUC">
              <a class="Resize">Institucion</a>
            </div>
            <div class="ml-6 mr-4 nav_item__TGdUC">
              <a class="Resize">Portal Estudiantil</a>
            </div>
            <div class="ml-3 mr-4 nav_item__TGdUC">
              <a class="Resize">Biblioteca</a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="flex space-x-4">
      <div class="ltr" >
        <div class="bg-white text-black p-2 rounded-lg shadow-md">
          <div class="flex">
            <div style="width: 230px;">
              <img :src="require('@/assets/favicon.png')" alt="ITCA FEPADE" width="100%">
            </div>
            <div class="ml-6 mr-4 nav_item__TGdUC">
              <a class="Resize">Institucion</a>
            </div>
            <div class="ml-6 mr-4 nav_item__TGdUC">
              <a class="Resize">Moodle</a>
            </div>
            <div class="ml-6 mr-4 nav_item__TGdUC">
              <a class="original-button">Estudiante</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "NavBar",
  props: {},

  setup() {
    const router = useRouter();
    const drawerOpen = ref(false);
    const toggleDrawer = () => {
      drawerOpen.value = !drawerOpen.value;
    };
    return {
      routes: router.options.routes,
      drawerOpen,
      toggleDrawer,
    };
  },
};
</script>
<style>
.flex-contents {
  display: contents !important;
}
.bg-nav {
  background-color: brown;
}
nav{
  margin-top: 29px;
  margin-left: 37px;
  margin-right: 37px;
}
.nav_item__TGdUC {
  width: 100% !important;
  border-radius: 6px !important;
  color: #17100e !important;
  font-weight: 700 !important;
  display: flex !important;
  flex-direction: column !important;
  text-align: left !important;
  justify-content: center;
}
.Resize{
  padding: 9px ;
  font-size: 22px !important;
  text-align: center;
}

.Resize:hover{
  background-color: #f4f3ec;
  border-radius: 0.5rem;
}

.original-button {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: #333333;
  font-size: 18px;
  border-radius: 0px;
  width: 200px;
  height: 40px;
  font-weight: bold;
  border: 2px solid #333333;
  transition: 0.3s;
  box-shadow: -5px 5px 0px 0px rgba(51, 51, 51, 1);
  background-color: #ffffff;
}

.original-button:hover {
  box-shadow: 0 0 #333;
  color: #fff;
  background-color: #333;
}

</style>
