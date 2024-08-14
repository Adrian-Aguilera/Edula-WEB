<template>
  <div class="mx-4 sm:mx-8 lg:mx-36">
    <div class="flex flex-col mt-8 justify-between rounded-2 min-w-full p-4 rounded-lg border-gray-200 border-dashed " id="chat_section" :style="{ height: '650px' }">
      <div class="flex mb-3">
        <div class="rounded-full flex target-size" >
          <div class="flex items-center ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>
          </div>
          <p class="infoText text-xs sm:text-base">Para Clientes</p>
        </div>
      </div>
      <div class="flex flex-col p-4 overflow-y-auto h-full b-color" :style="{ height: 'calc(100% - 50px)' }" ref="messageContainer">
        <div v-for="(message, index) in messages" :key="index" class="flex items-start gap-2.5 mb-4">
          <img v-if="message.user !== currentUser" class="w-8 h-8 rounded-full" :src="require('@assets/EdulaBot.jpg')" alt="User image">
          <div :class="{'flex-row-reverse': message.user === currentUser, 'flex-row': message.user !== currentUser}" class="flex items-start gap-2.5 w-full">
            <div :class="{'bg-gray-100 bgm-response text-f': message.user !== currentUser, 'bgm-orange text-white text-f leading-1.5 w-auto': message.user === currentUser}" class="flex flex-col leading-1.5 p-4 rounded-xl">
              <div class="flex space-x-2">
                <span class="text-sm font-semibold">{{ message.user === currentUser ? 'Tú' : 'EdulaBot' }}</span>
              </div>
              <p class="text-sm font-normal text-justify">{{ message.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3" v-if="isLoading === true">
        <div class="py-2.5 px-5 me-2 text-sm font-medium animate-pulse text-gray-300 rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
          <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
          </svg>
          Cargando respuesta
        </div>
      </div>
    </div>
    <div class="mt-2">
      <button @click="scrollToBottom" type="button" class="text-white animate-bounce bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V5m0 14-4-4m4 4 4-4"/>
        </svg>
      </button>
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
    isError:Boolean,
    isLoading: Boolean,
  },
  methods:{
    scrollToBottom(){
      const container = this.$refs.messageContainer;
      container.scrollTop = container.scrollHeight;
    }
  }
}
</script>

<style scoped>
#chat_section {
  /*background-color: #0e0f2ed0;*/
  background-color: #F5F7FB;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.15);
}
.target-size{
  background-color: #ff5600;
  width: 215px;
}
.infoText {
  padding: 9px;
  font-size: 16px !important;
  text-align: center;
  font-weight: 700 !important;
  font-family: "Montserrat", sans-serif !important;
}

@media (min-width: 640px) {
  .infoText {
    font-size: 18px !important;
  }
}

.b-color {
  /*border: #d22424b4 solid;*/
  border: #2b2059 solid;
  border-radius: 9px;
}

.text-f {
  font-weight: 500 !important;
  font-family: "ABeeZee", sans-serif !important;
}

.text-black {
  color: #000;
}

.bgm-orange {
  background-color: #ff5600 !important;
}

.bgm-response {
  background-color: #e4e3e2 !important;
}

/* Ajustes responsivos para el padding y tamaños de fuente en diferentes dispositivos */
@media (min-width: 640px) {
  .infoText {
    font-size: 18px !important;
    padding: 12px;
  }
  .b-color {
    border-radius: 10px;
  }

  .text-f {
    font-size: 16px !important;
  }
}

@media (min-width: 768px) {
  .infoText {
    font-size: 20px !important;
    padding: 14px;
  }
  
  .text-f {
    font-size: 18px !important;
  }
}

@media (min-width: 1024px) {
  .infoText {
    font-size: 18px !important;
    padding: 16px;
  }
  
  .b-color {
    border-radius: 12px;
  }

  .text-f {
    font-size: 20px !important;
  }
}
</style>
