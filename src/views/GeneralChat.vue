<template>
    <div class="background">
        <div class="Menu">
            <MenuComp />
        </div>
        <div v-if="Usmessages.length > 0" id="goto-container-example" class="mx-auto overflow-auto custom-scrollbar" style="max-height: 400px; margin-top: 10px">
      <div class="mx-auto pa-12 pb-8 custom-card" style="max-width: 100%">
        <v-card class="CardEduIA" style="margin-right: 45px;" title="EduIA" flat elevation="5" v-for="(IAmessage, index) in messages" :key="index">
          <p>{{ IAmessage }}</p>
        </v-card>
        <br>
        <v-card class="CardUser" style="margin-left: 45px;" flat v-for="(Umessage, index) in Usmessages" :key="index">
          <p>{{ Umessage }}</p>
        </v-card>
        <br>
      </div>
    </div>
        <v-footer>
            <v-row class="mx-auto custom-inputs">
                <v-col>
                    <v-card class="mx-auto cardInputs">
                        <v-card-item>
                            <v-row>
                                <v-col>
                                    <v-text-field solo hide-details flat class="chip-input"
                                        :style="{ width: '100%', backgroundColor: '#bd9235' }" v-model="message"></v-text-field>
                                </v-col>
                                <v-col cols="auto">
                                    <v-btn icon="$collapse" @click="sendMessage" variant="tonal"></v-btn>
                                </v-col>
                            </v-row>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
import MenuComp from '@/components/MenuComp.vue';
export default {
    name: "GeneralChat",
    components: {
        MenuComp,
    },
    data() {
    return {
        message: '',
        Usmessages: [],
        UserMessage: ''
    };
  },
  methods: {
    sendMessage() {
      this.UserMessage = this.message;
      this.Usmessages.push(this.message);
      this.message = '';
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');

.CardEduIA {
    background-color: transparent;
    border: 3px solid #e2a522;
    border-radius: 10px;
    color: #e2a522;
    box-shadow: 0 0 15px #63450f !important;
    font-family: "Playwrite GB S", cursive;
}

.cardInputs {
    background-color: rgba(187, 187, 187, 0.253);
    border-radius: 20px;
}

.CardUser {
    background-color: transparent;
    border: 3px solid #bb1010;
    border-radius: 10px;
    color: #bb1010;
    box-shadow: 0 0 15px #552b2b !important;
    font-family: "Playwrite GB S", cursive;
    margin-top: 15px !important;
}

.Menu {
    position: relative;
    background-color: transparent;
    width: auto;
    height: auto;
    margin-top: 5px;
    border-radius: 10px;
}

.background {
    position: relative;
    background-color: white;
    min-height: 100vh;
    padding: 16px;
    background-size: cover;
    background-position: center;
    z-index: 1;
}

.custom-card {
    background-color: rgba(187, 187, 187, 0.253);
    max-height: 50%;
}

.custom-scrollbar {
    max-width: 70%;
    border-radius: 20px;
    box-shadow: 0 0 15px #666666;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 7px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #5e5e5e !important;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #bd9235;
}

.custom-inputs {
    max-width: 70%;
    background-color: transparent;
    margin-top: 5px;
}

.chip-input {
    width: 100%;
    border-radius: 20px;
    color: rgb(255, 255, 255);
    font-family: "Playwrite GB S", cursive;
}

.custom-btn {
    background-color: #bd9235 !important;
    color: aliceblue;
    margin: 5px;
    border: 1px solid #bd9235;
}
p{
    color: black !important;
    margin: 10px;
}
</style>