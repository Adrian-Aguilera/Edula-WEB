<template>
    <div>
        <MenuCompChatG />
        <ChatComponent />
    </div>
</template>

<script>
import ChatComponent from '@/components/ChatComponent.vue';
import MenuCompChatG from '@/components/MenuCompChtG.vue';

export default {
    name: "ChatView",
    components: {
        ChatComponent,
        MenuCompChatG,
    },
}

</script>
<style scoped>
</style>