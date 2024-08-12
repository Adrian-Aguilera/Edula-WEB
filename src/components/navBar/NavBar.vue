<template>
  <div class="bg-white text-black p-2 rounded-lg shadow-md">
    <div class="flex">
      <div style="width: 230px;">
        <img :src="urlImage" alt="ITCA FEPADE" width="100%">
      </div>
      <div class="ml-4 mr-2 nav_item__TGdUC">
        <a :href="linkOne" class="Resize"> {{ textFirst  }} </a>
      </div>
      <div class="ml-4 mr-2 nav_item__TGdUC">
        <a :href="secondLink" class="Resize"> {{ textSecond }} </a>
      </div>
      <div class="ml-4 mr-2 nav_item__TGdUC">
        <a :href="treeLink" :class="isStudent ? 'original-button':' Resize'"> {{ textTree }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "NavBar",
  props: {
    urlImage: String,
    linkOne: String,
    textFirst: String,
    secondLink: String,
    textSecond: String,
    treeLink:String,
    textTree: String,
    isStudent: {
      type: Boolean,
      required: true
    }
  },

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
  font-weight: 800 !important;
  display: flex !important;
  flex-direction: column !important;
  text-align: left !important;
  justify-content: center;
  font-family: "ABeeZee", sans-serif !important;
}
.Resize{
  font-size: 18px !important;
  text-align: center;
}

.nav_item__TGdUC:hover{
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
  width: 180px;
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
