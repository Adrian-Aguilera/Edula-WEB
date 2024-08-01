<template>
  <div class="flex flex-col mt-8 justify-between md:h-96 rounded-xl min-w-full border border-red-800" id="chat_section">
    <div class="flex flex-col p-4 overflow-y-auto" style="height: 90%;">
      <div v-for="(message, index) in messages" :key="index" class="mb-2">
        <p :class="{'text-right': message.user === currentUser, 'text-left': message.user !== currentUser}" class="text-white font-bold">
          {{ message.user === currentUser ? 'Tú' : 'Bot' }}: {{ message.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBox',
  props: {
    messages: {
      type: Array,
      required: true
    },
    currentUser: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
#chat_section {
  background-color: #1a202c;
}
.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}
</style>
