<template>
    <div>
       
        <studentChatComponent />
    </div>
</template>

<script>


import StudentChatComponent from '@/components/StudentChatComponent.vue';

export default {
  name: "homeView",
  components: {
    
    StudentChatComponent,
 
  },
};
</script>