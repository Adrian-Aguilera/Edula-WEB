<template>
  <div class="flex flex-col mt-8 justify-between md:h-96 rounded-xl min-w-full border border-red-800" id="chat_section">
    <div class="flex items-end align-bottom text-left justify-center p-4" style="height: 90%;">
      <p class="align-bottom text-white font-bold">
        Tú: Tengo dudas sobre el contenido visto en la clase de "Tablas de verdad"
        <br>
        <br>
        EduLA: Buen día, puedes encontrar material de apoyo sobre la clase que mencionas en el siguiente enlace
        <br>
        <br>
        Haz clic para ir directamente: <router-link to="/Clases" class="underline">Tablas de verdad</router-link>
        <br>
        <br>
        Espero esta información haya sido de tu ayuda. Si necesitas asistencia con otra duda, estoy a tu disposición.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBox',
  props: {
    messages: {
      type: Array,
      required: true,
      default: () => []
    },
    currentUser: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      newMessage: ''
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.$emit('send-message', {
          user: this.currentUser,
          text: this.newMessage.trim()
        });
        this.newMessage = '';
      }
    }
  }
}
</script>