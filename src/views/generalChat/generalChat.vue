<template>
    <ChatBox :messages="messages" :currentUser="currentUser" @send-message="handleSendMessage" />

    <form @submit.prevent="onSubmit" method="post">
        <input type="text" v-model="formProps.message">
        <SubmitContent type="submit"></SubmitContent>
    </form>
</template>

<script>
    import ChatBox from '@components/box/ChatBox.vue';
    import SubmitContent from  '@components/Submit/SubmitComponent.vue'
    import axios from 'axios'
    export default {
        name: 'generalChat',
        components: {
            ChatBox,
            SubmitContent
        },
        data() {
            return {
                //campos necesarios del formulario (chat)
                formProps: {
                    message: "",
                },
            }
        },
        methods: {
            handleSendMessage(message) {
            this.messages.push(message);
            },
            async onSubmit(){
                const jsonData = {
                    type_engine : {
                        EngineGeneral: true
                    },
                    mesage : this.formProps.message,
                }
                try {
                    const response = await axios.post('https://127.0.0.1:8000/api/general/chat', jsonData)
                    console.log(response.status)
                } catch (error) {
                    console.log(error)
                }
            },
        },
    }
</script>