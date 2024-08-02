<template>
  <div>
    <ChatBox :messages="messages" :currentUser="currentUser" :isError="isError"/>

    <form @submit.prevent="onSubmit" method="post">
      <input type="text" class="bg-blue-500" v-model="formProps.message" />
      <SubmitContent type="submit"></SubmitContent>
    </form>
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
      isError:false
    };
  },
  methods: {
    async onSubmit() {
      const message = this.formProps.message;
      if (message.trim() === "") return;

      this.messages.push({ user: this.currentUser, text: message });

      try {
        const response = await getRequest("api/general/chat", { message });
        if (response.status === 200) {
          const responseData = response.data;
          if (responseData.data.error){
            this.isError = true
            console.log('error input')
          }
          console.log(responseData)
          this.messages.push({
            user: "Edula",
            text: responseData.data.response,
          });
          this.formProps.message = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
