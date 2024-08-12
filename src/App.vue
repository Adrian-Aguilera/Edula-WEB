<template>
  <nav class="flex justify-between">
    <div class="flex space-x-4">
      <div class="flex space-x-4">
        <NavBar
          :urlImage="require('@/assets/favicon.png')"
          linkOne="https://www.itca.edu.sv/"
          textFirst="Itca fepade"
          secondLink="https://apps.itca.edu.sv/"
          textSecond="Portal estudiantil"
          treeLink="http://aplicaciones.itca.edu.sv/portal-erecursos/"
          textTree="Biblioteca"
          :isStudent="false"
        />
      </div>
    </div>
    <div class="flex space-x-4">
      <div class="flex space-x-4">
        <NavBar
          :urlImage="require('@/assets/favicon.png')"
          linkOne="https://www.itca.edu.sv/"
          textFirst="Institucion"
          secondLink="https://apps.itca.edu.sv/"
          textSecond="Moodle"
          treeLink="http://aplicaciones.itca.edu.sv/portal-erecursos/"
          textTree="Estudiante"
          :isStudent="true"
        />
      </div>
    </div>
  </nav>
  <div id="app">
    <router-view></router-view>
  </div>
  <footerComponent
    year="2024"
    url="https://www.itca.edu.sv/"
    author="Itca Fepade"
  />
</template>

<script>
import footerComponent from '@components/ContainerText/footerComponent.vue';
import NavBar from '@components/navBar/NavBar.vue';

export default {
  name: 'App',
  components:{
    NavBar,
    footerComponent,
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  body{
    /*background-image: url('../src/assets/fondo_content.jpg');*/
    /*background: #17100e;*/
    /*background: linear-gradient(0deg, rgba(181,34,55,1) 0%, rgba(25,25,25,1) 100%);*/
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1031%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(23%2c 16%2c 14%2c 1)'%3e%3c/rect%3e%3cpath d='M189.82 511.93L226.28 511.93L226.28 529.26L189.82 529.26z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M30.51 377.6L45.91 377.6L45.91 392.03L30.51 392.03z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M83.24 92.22L111.54 92.22L111.54 97.65L83.24 97.65z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M921.73 89.44a54.85 54.85 0 1 0 85.91-68.22z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M797.3 308.28L813.23 308.28L813.23 352.25L797.3 352.25z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M829.24 245.14a51.47 51.47 0 1 0-89.41 51.02z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M800.73 187.66L809.69 187.66L809.69 196.62L800.73 196.62z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M480.6 98.32L523.36 98.32L523.36 139.86L480.6 139.86z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1334.87 203.37 a29.81 29.81 0 1 0 59.62 0 a29.81 29.81 0 1 0 -59.62 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1405.51 197.52 a32.47 32.47 0 1 0 64.94 0 a32.47 32.47 0 1 0 -64.94 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1007.76 496.63L1063.11 496.63L1063.11 551.98L1007.76 551.98z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1436.37 340.37L1461.64 340.37L1461.64 365.64L1436.37 365.64z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M770 109.34L780.67 109.34L780.67 120.01L770 120.01z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1182.33 543.94 a32.34 32.34 0 1 0 64.68 0 a32.34 32.34 0 1 0 -64.68 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M706.31 303.07 a28.49 28.49 0 1 0 56.98 0 a28.49 28.49 0 1 0 -56.98 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M368.34 69.67a0.53 0.53 0 1 0 1.06-0.08z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M914.04 219.18 a10.04 10.04 0 1 0 20.08 0 a10.04 10.04 0 1 0 -20.08 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M659.56 550.82a19.58 19.58 0 1 0-36.92-13.06z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M463.6 460.3 a40.51 40.51 0 1 0 81.02 0 a40.51 40.51 0 1 0 -81.02 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M953.24 505.75L954.71 505.75L954.71 507.22L953.24 507.22z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M172.48 217.1a51.77 51.77 0 1 0-92.78-45.95z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M671.35 302.43L720.39 302.43L720.39 349.78L671.35 349.78z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M111.65 551.82 a51.23 51.23 0 1 0 102.46 0 a51.23 51.23 0 1 0 -102.46 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M608.63 299.71 a23.14 23.14 0 1 0 46.28 0 a23.14 23.14 0 1 0 -46.28 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1309.79 451.99a12.51 12.51 0 1 0 23.41-8.84z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M494 465.39L546.87 465.39L546.87 506.07L494 506.07z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M122.22 418.7L164.69 418.7L164.69 461.17L122.22 461.17z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M177.73 49.71 a29.71 29.71 0 1 0 59.42 0 a29.71 29.71 0 1 0 -59.42 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M851.75 303.39L879.85 303.39L879.85 339.23L851.75 339.23z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M806.22 325.14 a48.95 48.95 0 1 0 97.9 0 a48.95 48.95 0 1 0 -97.9 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1002.1 138.67 a22.07 22.07 0 1 0 44.14 0 a22.07 22.07 0 1 0 -44.14 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M729.6 9.31L770.79 9.31L770.79 50.5L729.6 50.5z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1017.29 92.53 a30.55 30.55 0 1 0 61.1 0 a30.55 30.55 0 1 0 -61.1 0z' fill='%23e73635'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1031'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

  }
</style>
