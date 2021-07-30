<template>
  <v-app id="inspire" :style="cssProps">
    <v-main>
       <router-view></router-view>
    </v-main>

  </v-app>
</template>


<script>
export default {
  computed:{
      cssProps(){
       
        localStorage['bg']=this.$store.getters.navbar_color;
       return {'--bg-change-setting':this.$store.getters.navbar_color}
     }
  },
  mounted(){
     localStorage.setItem('bg','#27293d')
  }
}
</script>


<style>
  @font-face {
    font-family: "rabar";
    src: local("rabar"),
      url(/assets/fonts/Rabar_039.ttf) format("truetype");
  }

  @font-face {
    font-family: "rudaw";
    src: local("rudaw"),
      url(/assets/fonts/rudawregular2.ttf) format("truetype");
  }

#inspire{
  overflow: hidden;
}



.v-btn{
  letter-spacing: 0 !important;
}

.v-dialog{
  box-shadow: none !important;
}

.v-overlay__scrim{
background: #1e1e2f  !important;
}
.rabar-font{
  font-family: "rabar" !important;
}

.rudaw-font{
  font-family: "rudaw" !important;
}

.radius-10{
  border-radius: 10px !important;
}
.radius-15{
  border-radius: 15px !important;
}
.radius-20{
  border-radius: 20px !important;
}

.radius-circle{
  border-radius: 50% !important;
}

.v-tab {
  letter-spacing:normal !important;
}






</style>


