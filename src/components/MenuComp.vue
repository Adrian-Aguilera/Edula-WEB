<template>
  <div class="center">

    <div class="menuStyle">
      <div>
        <v-img :width="50" aspect-ratio="4/3" cover
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDEyNjZGMzhFNEQ3MTFFNjkxRDM5RUE3RUE3Q0QxNzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDEyNjZGMzlFNEQ3MTFFNjkxRDM5RUE3RUE3Q0QxNzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMTI2NkYzNkU0RDcxMUU2OTFEMzlFQTdFQTdDRDE3MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMTI2NkYzN0U0RDcxMUU2OTFEMzlFQTdFQTdDRDE3MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt91WvYAAAbwSURBVHja7F1NbBVV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"
        ></v-img>
      </div>
      <v-btn class="custom-btn" @click="goToPage">
        Itca fepade
      </v-btn>
      <v-btn class="custom-btn" @click="goToPage">
        Portal estudiantil
      </v-btn>
      <v-btn class="custom-btn" @click="goToPage">
        Biblioteca
      </v-btn>
      <v-btn class="custom-btn" @click="goToPage">
        Iniciar sesión
      </v-btn>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "MenuComp",
    methods: {
      goToPage() {
        this.$router.push('/Home');
      }
    },
  }
  </script>
  
  <style scoped>
  .center{
    display: flex;
    justify-content: center;
  }
  .menuStyle {
    display: flex;
    width: auto;
    height: auto;
    background-color: rgba(66, 66, 66, 0.253);
    border: 1px solid #707070;
    
    border-radius: 10px;
    justify-content:center;
  }
  .custom-btn {
    background-color: transparent !important;
    border-radius: 10px;
    height: auto;
    color: aliceblue;
  }
  </style>
  