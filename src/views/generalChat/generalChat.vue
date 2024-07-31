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
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyODM1MTg3LCJpYXQiOjE3MjAyNDMxODcsImp0aSI6IjUyZjNjOGVmMmU3MTRhZjk4ZGI2YTNjMTc4NjljMDdiIiwidXNlcl9pZCI6Mn0.hUUaAXFNfTWJDGuIs8exzJkTiMaeuSYl0YyKi29i5hk'
                const configAuth = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
                try {
                    const response = await axios.post('http://127.0.0.1:8000/api/general/chat', jsonData, configAuth)
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