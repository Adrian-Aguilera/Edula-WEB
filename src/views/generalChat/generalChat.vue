<template>
    <ChatBox :messages="messages" :currentUser="currentUser" @send-message="handleSendMessage" />
    <form method="post">
        <SubmitContent @action="onSubmit"></SubmitContent>
    </form>
</template>

<script>
    import ChatBox from '@components/box/ChatBox.vue';
    import SubmitContent from  '@components/Submit/SubmitComponent.vue'
    export default {
        name: 'generalChat',
        components: {
            ChatBox,
            SubmitContent
        },
        data() {
            return {
            messages: [
                { user: 'Alice', text: 'Hello!' },
                { user: 'Bob', text: 'Hi there!' }
            ],
            currentUser: 'Alice'
            }
        },
        methods: {
            handleSendMessage(message) {
            this.messages.push(message);
            },
            onSubmit(){
                console.log('enviado')
            },
        },
    }
</script>