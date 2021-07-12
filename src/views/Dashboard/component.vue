<template>
    <div>
        <navbar />

        <v-container class="my-8">

            <!-- breadcrumbs -->

            <v-breadcrumbs class="rabar-font" :items="bread"></v-breadcrumbs>

            <!-- end breadcrumbs -->

            <!-- title -->
            <v-row class="my-8">
                <v-col cols="" md="">
                    <p class="rabar-font">پۆستەکان</p>
                </v-col>
            </v-row>


            <!-- card post  -->
            <v-row class="d-flex justify-center">
                <v-col lg="3" cols="10" md="3" sm="5" xs="4" v-for="(item, index) in items=8" :key="index">
                    <v-card class="mx-auto  radius-10 rabar-font" max-width="344">

                        <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                        <v-card-title>گەردوونی</v-card-title>

                        <v-card-text>
                            <v-row align="center" class="mx-0">
                                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14">
                                </v-rating>

                                <div class="grey--text ms-4">
                                    5.0 (11k)
                                </div>
                            </v-row>

                            <div class="my-4">
                                باشترین فرەیمۆرکی باکێند
                            </div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn class="deep-purple darken-2" text dark>
                                زیاتر ببینە
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <!-- end card post -->


            <!-- pagination -->
            <v-row>
                <v-col cols="" md="">
                    <template>
                        <div class="text-center">
                            <v-pagination v-model="page" :length="5" circle></v-pagination>
                        </div>
                    </template>
                </v-col>
            </v-row>

            <!-- end pagination -->


            <!-- parallax -->

            <v-row class="my-8">
                <v-col cols="" md="">
                    <v-parallax height="320" class="radius-10" dark
                        src="https://directlinedev.com/media/services/service/background/background_20_hD8OPbD.wide.jpeg">
                        <v-row align="center" justify="center">
                            <v-col class="text-center rabar-font" cols="12">
                                <h1 class=" font-weight-thin mb-4 yellow--text">
                                    گەردوونی
                                </h1>
                                <h4 class="subheading">
                                    باشترین فرەیمۆرکی باکێند !
                                </h4>
                            </v-col>
                        </v-row>
                    </v-parallax>
                </v-col>
            </v-row>

            <!-- end parallax -->


            <!-- tabs -->

            <v-row class="my-16">
                <v-col cols="" md="">
                    <v-tabs color="indigo" class="rabar-font" centered>
                        <v-tab>بابەتە نوێییەکان</v-tab>
                        <v-tab>جۆراوجۆر</v-tab>
                        <v-tab>زۆرترین بینراوەکان</v-tab>

                        <v-tab-item v-for="n in 3" :key="n">
                            <v-container fluid>
                                <v-row>
                                    <v-col v-for="i in 6" :key="i" cols="12" md="4">
                                        <v-img :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                                            :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                                            aspect-ratio="1"></v-img>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-tab-item>
                    </v-tabs>
                </v-col>
            </v-row>


            <!-- end tabs -->


            <!-- carousel -->

            <v-row class="my-16 d-flex justify-center" >
                <v-col cols="12" lg="11">
                <v-carousel  :cycle="true" height="500" hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet :color="colors[i]" height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="text-h2">
                                    {{ slide }} Slide
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                </v-col>
            </v-row>
            <!-- end carousel -->


            <!-- slide group -->
            <v-row class="my-16">

                <v-sheet class="mx-auto slider-group" max-width="1100">
                    <v-slide-group v-model="model" class="pa-4" show-arrows>
                        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
                            <v-card class="ma-4 rabar-font" height="280" width="220" @click="toggle">
                                <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                                <v-card-title>گەردوونی</v-card-title>

                                <v-card-text>
                                    <v-row align="center" class="mx-0">
                                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14">
                                        </v-rating>

                                        <div class="grey--text ms-4">
                                            5.0 (11k)
                                        </div>
                                    </v-row>

                                    <div class="my-4">
                                        باشترین فرەیمۆرکی باکێند
                                    </div>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn class="deep-purple darken-2" text dark>
                                        زیاتر ببینە
                                    </v-btn>
                                </v-card-actions>

                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>

            </v-row>
            <!-- slide group -->


       




        </v-container>

<v-bottom-navigation
    v-model="value"
    dark
   class="bottom-nav"
  >
    <v-btn :to="nav.link" class="rabar-font" v-for="(nav,index) in bottom_nav" :key="index">
      <span class="my-1">{{nav.title}}</span>
      <v-icon :color="nav.color">{{nav.icon}}</v-icon>
    </v-btn>

  </v-bottom-navigation>


        <br><br><br>

        <dashboardFooter />

    </div>
</template>

<script>
    import navbar from '../../layout/Dashboard/nav.vue'
    import dashboardFooter from '../../layout/Dashboard/dashboardFooter.vue'
    export default {
        data() {
            return {
                value:1,
                model: null,
                selection: 1,
                page: 1,
                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ],
                slides: [
                    'First',
                    'Second',
                    'Third',
                    'Fourth',
                    'Fifth',
                ],
                bread: [{
                        text: 'سەرەتا',
                        disabled: false,
                        to: '/Dashboard/home',
                    },
                    {
                        text: 'کۆمپۆنێنت',
                        disabled: true,
                        to: '/Dashboard/component',
                    },
                   
                ],
                bottom_nav: [{
          title: 'سەرەتا',
          icon: 'mdi-view-dashboard',
          link: '/Dashboard/home',
          color: 'deep-purple darken-1'

        },

        {
          title: 'ئەدمینەکان',
          icon: 'mdi-account-plus',
          link: '/Dashboard/users',
          color: 'teal darken-1'
        },
        {
          title: 'بابەتەکان',
          icon: 'mdi-post',
          link: '/Dashboard/posts',
          color: 'pink darken-1'
        },
        {
          title: 'کۆمپۆنێنت',
          icon: 'mdi-hammer-wrench',
          link: '/Dashboard/component',
          color: 'orange darken-1'
        },
        {
          title: 'ڕێکخستن',
          icon: 'mdi-cog',
          link: '/Dashboard/setting',
          color: 'grey '
        },
      ],
            }
        },
        components: {
            navbar,
            dashboardFooter
        }
    }
</script>
<style>

</style>