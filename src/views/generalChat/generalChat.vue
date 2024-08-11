<template>
  <div class="flex flex-col min-h-screen">
    <div class="mt-24">
      <InformativeContent/>
    </div>
    <div class="mt-14">
      <ChatBox :messages="messages" :currentUser="currentUser" :isError="isError" :isLoading="isLoading"/>
    </div>
    <div class="mt-2">
      <form @submit.prevent="onSubmit" method="post" class="flex items-center max-w-sm mx-auto">
        <div class="relative w-full">
          <input type="text" id="simple-search" v-model="formProps.message" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pregunta algo..." required />
          <SubmitContent type="submit"></SubmitContent>
        </div>
      </form>
    </div>
  </div>
  <footerComponent></footerComponent>
</template>

<script>
import ChatBox from "@components/box/ChatBox.vue";
import SubmitContent from "@components/Submit/SubmitComponent.vue";
import optionRequests from "@utils/generalUtils/getResponse.js";
import InformativeContent from '@components/ContainerText/InformativeContent.vue';
import footerComponent from '@components/ContainerText/footerComponent.vue';

const { getRequest } = optionRequests;

export default {
  name: "generalChat",
  components: {
    ChatBox,
    SubmitContent,
    InformativeContent,
    footerComponent,
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
