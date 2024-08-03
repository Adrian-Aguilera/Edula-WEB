<template>
  <div>
    <ChatBox :messages="messages" :currentUser="currentUser" :isError="isError" :isLoading="isLoading"/>
    <div class="mt-6">
      <form @submit.prevent="onSubmit" method="post"  class="flex items-center max-w-sm mx-auto">
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
              </svg>
          </div>
          <input type="text" id="simple-search" v-model="formProps.message"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pregunta algo..." required />
        </div>
        <SubmitContent type="submit"></SubmitContent>
      </form>
    </div>
  </div>
</template>

<script>
import ChatBox from "@components/box/ChatBox.vue";
import SubmitContent from "@components/Submit/SubmitComponent.vue";
import optionRequests from "@utils/generalUtils/getResponse.js";
const { getRequest } = optionRequests;

export default {
  name: "generalChat",
  components: {
    ChatBox,
    SubmitContent,
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
        const response = await getRequest("general/chat", message );
        this.isLoading = false
        if (response.status === 200) {
          const responseData = response.data;
          if (responseData.data.error){
            this.isError = true
            this.formProps.message = "";
          }else{
            console.log(responseData)
            this.messages.push({
              user: "Edula",
              text: responseData.data.response,
            });
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
