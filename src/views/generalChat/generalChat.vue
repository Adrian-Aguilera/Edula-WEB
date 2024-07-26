<template>
    <ChatBox :messages="messages" :currentUser="currentUser" @send-message="handleSendMessage" />
</template>

<script>
    import ChatBox from '@components/box/ChatBox.vue';
    export default {
        name: 'generalChat',
        components: {
            ChatBox
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
            }
        },
    }
</script>