<template>
  <div>
    <Head_Block />
    <Header_User />
    <link rel="shortcut icon" href="/clases-unity/TemplateData/favicon.ico">
    <link rel="stylesheet" href="/clases-unity/TemplateData/style.css">
    <div class="unity-container-wrapper">
      <div id="unity-container" ref="unityContainer" class="unity-desktop">
        <canvas id="unity-canvas" width="1000" height="600"></canvas>
        <div id="unity-loading-bar">
          <div id="unity-logo"></div>
          <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full"></div>
          </div>
        </div>
        <div id="unity-warning"></div>
        <div id="unity-footer">
          <div id="unity-webgl-logo"></div>
          <div id="unity-fullscreen-button"></div>
          <div id="unity-build-title"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="w-full mt-16 mb-8">
        <div class="flex bg-red-800 md:hidden my-8 max-h-2">
          <hr style="height: 100vh;">
        </div>
        <div class="flex flex-col justify-center align-middle text-center mb-12 lg:mt-16 xl:mt-0">
          <div class="flex justify-center text-center">
            <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">¿Tienes alguna pregunta sobre el contenido?</h1>
          </div>
          <div class="flex bg-red-800 max-h-2 mt-6">
            <hr style="height: 100vh;">
          </div>
          <div class="flex justify-center text-center mt-4">
            <h1 class="text-white text-base md:text-lg lg:text-xl font-bold">Nuestra Inteligencia artificial te asistirá con la consulta que tengas:</h1>
          </div>
          <div class="flex flex-col mt-4 justify-between md:h-96 rounded-xl border border-red-800" id="chat_section">
            <div class="flex items-end align-bottom text-left justify-center p-4" style="height: 90%;">
            </div>
            <div class="text-center mb-2">
              <form action="" method="POST">
                <input type="text" class="min-h-8 rounded-md font-semibold" placeholder="Haz una pregunta" style="padding-left: 4px; width: 70%;">
                <input type="submit" value="Enviar" class="font-semibold" id="btnEnviar">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer_Block />
  </div>
</template>

<script>
/* global createUnityInstance */
import Header_User from './header_user.vue';
import Head_Block from './head_block.vue';

export default {
  name: 'Page_Classes',
  data() {
    return {
      loading: true
    };
  },
  mounted() {
  var container = this.$refs.unityContainer;
  var canvas = container.querySelector("#unity-canvas");
  var loadingBar = container.querySelector("#unity-loading-bar");
  var progressBarFull = container.querySelector("#unity-progress-bar-full");
  var fullscreenButton = container.querySelector("#unity-fullscreen-button");
  var warningBanner = container.querySelector("#unity-warning");

  function unityShowBanner(msg, type) {
    function updateBannerVisibility() {
      warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
    }
    var div = document.createElement('div');
    div.innerHTML = msg;
    warningBanner.appendChild(div);
    if (type == 'error') div.style = 'background: red; padding: 10px;';
    else {
      if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
      setTimeout(function() {
        warningBanner.removeChild(div);
        updateBannerVisibility();
      }, 5000);
    }
    updateBannerVisibility();
  }

  const buildUrl = '/clases-unity/Build/';
  const loaderUrl = `${buildUrl}prueba.loader.js`;
  const config = {
    dataUrl: `${buildUrl}prueba.data`,
    frameworkUrl: `${buildUrl}prueba.framework.js`,
    codeUrl: `${buildUrl}prueba.wasm`,
    streamingAssetsUrl: `${buildUrl}StreamingAssets/`,
    companyName: "DefaultCompany",
    productName: "invesweb",
    productVersion: "0.1",
    showBanner: unityShowBanner,
  };

  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
    document.getElementsByTagName('head')[0].appendChild(meta);
    container.className = "unity-mobile";
    canvas.className = "unity-mobile";
    unityShowBanner('WebGL builds are not supported on mobile devices.');
  } else {
    canvas.style.width = "960px";
    canvas.style.height = "600px";
  }

  loadingBar.style.display = "block";

  var script = document.createElement("script");
  script.src = loaderUrl;
  script.onload = () => {
    console.log("Script cargado correctamente");
    createUnityInstance(canvas, config, (progress) => {
      console.log(`Progreso: ${progress * 100}%`);
      progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance) => {
      console.log("Instancia de Unity creada");
      loadingBar.style.display = "none";
      fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
      };
    }).catch((message) => {
      console.error("Error al crear la instancia de Unity:", message);
      alert(message);
    });
  };
  document.body.appendChild(script);
},
  components: {
    Header_User,
    Head_Block,
  }
};
</script>

<style>
.unity-container-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.unity-container {
  width: 100%;
  height: 100%;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
}
</style>
