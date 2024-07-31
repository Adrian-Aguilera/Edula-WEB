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
                const token = process.env.VUE_APP_API_TOKEN
                const configAuth = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
                try {
                    const response = await axios.post(`${process.env.VUE_APP_API_URL}api/general/chat`, jsonData, configAuth)
                    if (response.status === 200) {
                        const responseData = await response.data
                        // muestra el contenido de la respuesta
                        console.log(responseData.data.response)
                    }
                } catch (error) {
                    console.log(error)
                }
            },
        },
    }
</script>