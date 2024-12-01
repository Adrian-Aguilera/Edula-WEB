<template>
    <div>
        <MenuComp />
        <studentChatComponent />
    </div>
</template>

<script>

import MenuComp from '@/components/MenuComp.vue';
import StudentChatComponent from '@/components/StudentChatComponent.vue';

export default {
  name: "homeView",
  components: {
    MenuComp,
    StudentChatComponent,
 
  },
};
</script>