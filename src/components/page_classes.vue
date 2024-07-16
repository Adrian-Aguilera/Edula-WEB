<!-- <template>
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
import Header_User from './header_user.vue'
import Head_Block from './head_block.vue'
import Footer_Block from './footer_block.vue'

export default {
  name: 'Page_Classes',
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    const buildUrl = '/clases-unity/Build';
    const loaderUrl = `${buildUrl}/prueba.loader.js`;
    const config = {
      dataUrl: `${buildUrl}/prueba.data`,
      frameworkUrl: `${buildUrl}/prueba.framework.js`,
      codeUrl: `${buildUrl}/prueba.wasm`,
      streamingAssetsUrl: `${buildUrl}/StreamingAssets`,
      companyName: "DefaultCompany",
      productName: "invesweb",
      productVersion: "0.1",
    };

    const container = this.$refs.unityContainer;

    this.loadUnityScript(loaderUrl)
      .then(() => {
        if (typeof createUnityInstance !== 'undefined') {
          return createUnityInstance(container, config);
        } else {
          throw new Error('createUnityInstance is not defined');
        }
      })
      .then((unityInstance) => {
        this.loading = false;
        console.log('Unity instance initialized:', unityInstance);
      })
      .catch((error) => {
        console.error('Failed to initialize Unity:', error);
      });
  },
  methods: {
    loadUnityScript(url) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => {
          if (typeof createUnityInstance !== 'undefined') {
            resolve();
          } else {
            reject(new Error('createUnityInstance is not defined even after script load'));
          }
        };
        script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
        document.body.appendChild(script);
      });
    }
  },
  components: {
    Header_User,
    Head_Block,
    Footer_Block,
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
</style> -->
