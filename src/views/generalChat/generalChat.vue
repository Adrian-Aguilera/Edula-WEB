<template>
<div class="text-center md:hidden">
  <button class="bg-white focus:ring-2 focus:ring-gray-200 rounded-lg text-sm p-2.5 dark:text-gray-400  focus:outline-none dark:focus:ring-gray-600" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="currentColor" d="M5 9a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM5 16a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM5 23a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"></path></svg>
    <span class="sr-only">Open main menu</span>
  </button>
</div>

<!-- drawer component -->
<div id="drawer-navigation" class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
  <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
  <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
    <span class="sr-only">Close menu</span>
  </button>
  <div class="py-4 overflow-y-auto">
    <ul class="space-y-2 font-medium">
      <li>
        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
          </svg>
          <span class="ms-3">Dashboard</span>
        </a>
      </li>
    </ul>
  </div>
</div>
  <div class="flex flex-col min-h-screen">
    <div class="mt-24">
      <InformativeContent
        contenido="Nuestra Inteligencia artificial te asistirá con cualquier consulta"
      />
    </div>
    <div class="mt-14">
      <ChatBox :messages="messages" :currentUser="currentUser" :isError="isError" :isLoading="isLoading"/>
    </div>
    <div class="mt-2">
      <form @submit.prevent="onSubmit" method="post" class="flex items-center w-2/5 mx-auto">
        <div class="relative w-full">
          <input type="text" id="simple-search" v-model="formProps.message" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  borderInput dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Pregunta algo..." required />
          <SubmitContent type="submit"></SubmitContent>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ChatBox from "@components/box/ChatBox.vue";
import SubmitContent from "@components/Submit/SubmitComponent.vue";
import optionRequests from "@utils/generalUtils/getResponse.js";
import InformativeContent from '@components/ContainerText/InformativeContent.vue';

const { getRequest } = optionRequests;

export default {
  name: "generalChat",
  components: {
    ChatBox,
    SubmitContent,
    InformativeContent,
  },
  data() {
    return {
      formProps: {
        message: "",
      },
      messages: [],
      currentUser: "Usuario",
      isError:false,
      isLoading: false,
    };
  },
  methods: {
    async onSubmit() {
      const message = this.formProps.message;
      if (message.trim() === "") return;

      this.messages.push({ user: this.currentUser, text: message });
      this.isLoading = true
      try {
        const response = await getRequest("EduGeneral/general/chat", message );
        this.isLoading = false
        if (response.status === 200) {
          const responseData = response.data;
          if (responseData.data.error){
            this.isError = true
            this.formProps.message = "";
          }else{
            this.messages.push({
              user: "Edula",
              text: responseData.data.response,
            });
            this.formProps.message = "";
          }
          this.formProps.message = "";
        }
      } catch (error) {
        this.isLoading = false
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.borderInput{
  border-color: brown;
}

.borderInput:focus{
  border-color: brown !important;
}
</style>