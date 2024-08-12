<template>
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