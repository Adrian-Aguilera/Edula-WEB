<template>
    <ChatBox :messages="messages" :currentUser="currentUser" @send-message="handleSendMessage" />

    <form @submit.prevent="onSubmit" method="post">
        <input type="text" v-model="formProps.input">
        <SubmitContent type="submit"></SubmitContent>
    </form>
</template>

<script>
    import ChatBox from '@components/box/ChatBox.vue';
    import SubmitContent from  '@components/Submit/SubmitComponent.vue'
    //import axios from 'axios'
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
                    input: "",
                },
            }
        },
        methods: {
            handleSendMessage(message) {
            this.messages.push(message);
            },
            async onSubmit(){
                console.log(this.formProps.input)
            },
        },
    }
</script>