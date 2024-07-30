<template>
    <div>
        <button @click="submitForm">Enviar</button>
    </div>
</template>

<script>
export default {
    name:'SubmitContent',
    methods:{
        submitForm() {
            this.$emit('action')
        }
    }
}
</script>

<style>
button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>