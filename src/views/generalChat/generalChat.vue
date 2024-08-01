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
    import optionRequests from '@utils/generalUtils/getResponse.js'
    const {
        getRequest,
    } = optionRequests

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
            async onSubmit(){
                const message = this.formProps.message
                try {
                    const response = await getRequest('api/general/chat', message)
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