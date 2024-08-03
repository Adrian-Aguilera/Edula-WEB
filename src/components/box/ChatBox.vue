<template>
  <div class="flex flex-col mt-8 justify-between md:h-96 rounded-xl min-w-full border border-red-800" id="chat_section">
    <div class="flex flex-col p-4 overflow-y-auto">
      <div v-for="(message, index) in messages" :key="index" class="flex items-start gap-2.5 mb-4">
        <img v-if="message.user !== currentUser" class="w-8 h-8 rounded-full" :src="require('@assets/EdulaBot.jpg')" alt="User image">

        <div :class="{'flex-row-reverse': message.user === currentUser, 'flex-row': message.user !== currentUser}" class="flex items-start gap-2.5 w-full">
          <div :class="{'bg-gray-100 dark:bg-gray-700': message.user !== currentUser, 'bg-blue-500 text-white leading-1.5 w-28 text-left': message.user === currentUser}" class="flex flex-col leading-1.5 p-4 rounded-xl">
            <div class="flex space-x-2 ">
              <span class="text-sm font-semibold">{{ message.user === currentUser ? 'Tú' : 'EdulaBot' }}</span>
            </div>
            <p class="text-sm font-normal text-justify">{{ message.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="isError == true">
    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
      <div class="flex">
        <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
        <div>
          <p class="font-bold">Our privacy policy has changed</p>
          <p class="text-sm">Make sure you know how these changes affect you.</p>
        </div>
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
    },
    isError:Boolean
  }
}
</script>

<style scoped>
#chat_section {
  background-color: #1a202c;
}
</style>
