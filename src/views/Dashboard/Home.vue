<template>
  <div>
    <navbar></navbar>
    <v-container grid-list-xs>
      <v-layout row>

        <v-card class="mx-auto mt-4 py-4 radius-rounded" width="220" v-for="(item, index) in services" :key="index">
          <v-list-item three-line>
            <v-list-item-content>
              <div class=" mb-4 rabar">
                {{item.name}}
              </div>
              <v-list-item-title class="text-h6 mb-1">
                {{item.num}}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="40">
              <v-icon :color="item.color" x-large>{{item.icon}}</v-icon>

            </v-list-item-avatar>
          </v-list-item>


        </v-card>

      </v-layout>

      <!--  -->
    </v-container>

      <dashboardFooter/>

  </div>
</template>

<script>
  import navbar from '../../layout/Dashboard/nav.vue'
  import dashboardFooter from '../../layout/Dashboard/dashboardFooter.vue'
  export default {
    data() {
      return {
        services: [{
            name: 'ئەدمینەکان',
            icon: 'mdi-account',
            num: '2',
            color: 'deep-purple darken-1'
          },
          {
            name: 'بابەتەکان',
            icon: 'mdi-post',
            num: '10',
            color: 'orange darken-2'
          },
          {
            name: 'کۆمێنتەکان',
            icon: 'mdi-comment',
            num: '23',
            color: 'teal darken-1'
          },
          {
            name: 'سەردانیکەران',
            icon: 'mdi-eye',
            num: '100',
            color: 'grey darken-1'
          },

        ]
      }
    },
    components: {
      navbar,dashboardFooter
    },
    mounted() {

      // if (
      //   localStorage.getItem("storedData") == null
      // ) {
      //   this.$router.push("/Dashboard/login");
      // }

    }
  }
</script>


<style>
  @font-face {
    font-family: "rabar";
    src: local("rabar"),
      url(../../assets/fonts/Rabar_039.ttf) format("truetype");
  }

  .radius-rounded {
    border-radius: 20px !important;
  }

  .rabar {
    font-family: "rabar" !important;
  }
</style>