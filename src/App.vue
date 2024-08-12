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
          linkOne="https://www.itca.edu.sv/nuevo-ingreso/"
          textFirst="Nuevo Ingreso"
          secondLink="https://virtual3.itca.edu.sv/"
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
    /*background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1031%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(23%2c 16%2c 14%2c 1)'%3e%3c/rect%3e%3cpath d='M189.82 511.93L226.28 511.93L226.28 529.26L189.82 529.26z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M30.51 377.6L45.91 377.6L45.91 392.03L30.51 392.03z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M83.24 92.22L111.54 92.22L111.54 97.65L83.24 97.65z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M921.73 89.44a54.85 54.85 0 1 0 85.91-68.22z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M797.3 308.28L813.23 308.28L813.23 352.25L797.3 352.25z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M829.24 245.14a51.47 51.47 0 1 0-89.41 51.02z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M800.73 187.66L809.69 187.66L809.69 196.62L800.73 196.62z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M480.6 98.32L523.36 98.32L523.36 139.86L480.6 139.86z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1334.87 203.37 a29.81 29.81 0 1 0 59.62 0 a29.81 29.81 0 1 0 -59.62 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1405.51 197.52 a32.47 32.47 0 1 0 64.94 0 a32.47 32.47 0 1 0 -64.94 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1007.76 496.63L1063.11 496.63L1063.11 551.98L1007.76 551.98z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1436.37 340.37L1461.64 340.37L1461.64 365.64L1436.37 365.64z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M770 109.34L780.67 109.34L780.67 120.01L770 120.01z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1182.33 543.94 a32.34 32.34 0 1 0 64.68 0 a32.34 32.34 0 1 0 -64.68 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M706.31 303.07 a28.49 28.49 0 1 0 56.98 0 a28.49 28.49 0 1 0 -56.98 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M368.34 69.67a0.53 0.53 0 1 0 1.06-0.08z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M914.04 219.18 a10.04 10.04 0 1 0 20.08 0 a10.04 10.04 0 1 0 -20.08 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M659.56 550.82a19.58 19.58 0 1 0-36.92-13.06z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M463.6 460.3 a40.51 40.51 0 1 0 81.02 0 a40.51 40.51 0 1 0 -81.02 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M953.24 505.75L954.71 505.75L954.71 507.22L953.24 507.22z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M172.48 217.1a51.77 51.77 0 1 0-92.78-45.95z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M671.35 302.43L720.39 302.43L720.39 349.78L671.35 349.78z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M111.65 551.82 a51.23 51.23 0 1 0 102.46 0 a51.23 51.23 0 1 0 -102.46 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M608.63 299.71 a23.14 23.14 0 1 0 46.28 0 a23.14 23.14 0 1 0 -46.28 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1309.79 451.99a12.51 12.51 0 1 0 23.41-8.84z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M494 465.39L546.87 465.39L546.87 506.07L494 506.07z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M122.22 418.7L164.69 418.7L164.69 461.17L122.22 461.17z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M177.73 49.71 a29.71 29.71 0 1 0 59.42 0 a29.71 29.71 0 1 0 -59.42 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M851.75 303.39L879.85 303.39L879.85 339.23L851.75 339.23z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M806.22 325.14 a48.95 48.95 0 1 0 97.9 0 a48.95 48.95 0 1 0 -97.9 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M1002.1 138.67 a22.07 22.07 0 1 0 44.14 0 a22.07 22.07 0 1 0 -44.14 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M729.6 9.31L770.79 9.31L770.79 50.5L729.6 50.5z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1017.29 92.53 a30.55 30.55 0 1 0 61.1 0 a30.55 30.55 0 1 0 -61.1 0z' fill='%23e73635'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1031'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");*/
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1004%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M666.6223108421923 164.79818533869687L531.8920734297859 174.21944131333873 541.3133294044278 308.9496787257451 676.0435668168342 299.5284227511032z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1046.945%2c641.648C1080.1%2c642.676%2c1116.461%2c636.201%2c1133.344%2c607.648C1150.44%2c578.735%2c1139.181%2c543.298%2c1122.249%2c514.289C1105.491%2c485.577%2c1080.156%2c461.135%2c1046.945%2c459.623C1011.241%2c457.998%2c975.804%2c475.436%2c958.753%2c506.848C942.339%2c537.085%2c950.517%2c573.773%2c969.353%2c602.564C986.346%2c628.538%2c1015.921%2c640.686%2c1046.945%2c641.648' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M424.03708143379475 124.49039443536694L399.1555626287618 37.71822636999606 337.2649133684239 149.37191324039986z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1279.9266165328318 196.16914786670185L1406.5911934119224 227.75017385094202 1311.5076425170719 69.50457098761112z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M112.13790842499088 248.153162255997L239.7702804775044 174.46457789416777 166.0816961156752 46.83220584165426 38.44932406316167 120.52079020348349z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M471.567%2c517.762C490.137%2c517.686%2c500.856%2c498.345%2c508.925%2c481.62C515.736%2c467.504%2c516.793%2c451.97%2c510.161%2c437.769C502.168%2c420.652%2c490.421%2c402.812%2c471.567%2c401.623C451.237%2c400.341%2c432.205%2c413.885%2c423.512%2c432.307C415.79%2c448.673%2c424.804%2c466.156%2c433.674%2c481.929C442.807%2c498.169%2c452.935%2c517.839%2c471.567%2c517.762' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1420.4627881077547 42.54695045359418L1304.2636912720618-69.66521300335464 1192.0515278151129 46.53388383233833 1308.250624650806 158.74604728928716z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M704.764%2c54.361C728.198%2c55.35%2c752.63%2c48.57%2c765.229%2c28.786C778.677%2c7.668%2c779.062%2c-20.133%2c765.676%2c-41.291C753.063%2c-61.227%2c728.307%2c-68.282%2c704.764%2c-66.783C683.86%2c-65.452%2c666.395%2c-52.462%2c655.952%2c-34.305C645.544%2c-16.208%2c642.467%2c5.743%2c652.535%2c24.032C662.941%2c42.935%2c683.205%2c53.451%2c704.764%2c54.361' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M486.566%2c11.009C504.045%2c11.414%2c522.8%2c6.817%2c531.519%2c-8.338C540.222%2c-23.464%2c534.928%2c-42.079%2c525.594%2c-56.824C516.983%2c-70.428%2c502.663%2c-79.681%2c486.566%2c-79.355C470.986%2c-79.039%2c458.212%2c-68.653%2c450.184%2c-55.297C441.857%2c-41.444%2c437.311%2c-24.513%2c445.086%2c-10.343C453.104%2c4.269%2c469.903%2c10.622%2c486.566%2c11.009' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-5.571006266933644 604.5215481163336L101.78640572089543 549.8202145166764-60.272339866590855 497.16413612850454z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1004'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");

  }
</style>
