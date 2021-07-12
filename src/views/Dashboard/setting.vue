<template lang="">
    <div >
        <navbar ></navbar>


        <v-row style="display:flex;justify-content:center" >
            <v-col lg="7" sm="10" cols="11" class="py-10 ">

                <v-card class="setting-card">

                    <v-list subheader three-line    >
                        <v-subheader class="theme-text" v-if="$vuetify.theme.dark">دۆخی تاریک</v-subheader>
                        <v-subheader class="theme-text" v-else>دۆخی ڕوناک</v-subheader>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon class="purple darken-4" dark>
                                    mdi-theme-light-dark
                                </v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title></v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-switch @click="darkmode()" v-model="switchBtn"></v-switch>
                            </v-list-item-action>
                        </v-list-item>

                    </v-list>

                    <v-divider></v-divider>

                    <v-list subheader three-line>
                        <v-subheader class="theme-text">فۆنت</v-subheader>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon class="pink darken-1" dark>
                                    mdi-format-font
                                </v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title></v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action>

                                <v-select class="theme-text" :items="fonts" label="فۆنت هەڵبژێرە" v-model="selectFont"></v-select>

                            </v-list-item-action>
                        </v-list-item>

                    </v-list>

                    <v-divider></v-divider>

                    <v-list subheader three-line>
                        <v-subheader class="theme-text">ڕوکاری بەرنامە</v-subheader>
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon class="teal" dark>
                                    mdi-palette
                                </v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title></v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action>


                                <v-swatches  class="mx-5 my-5" elevation="10" :swatches="swatches"
                                    v-model="backcolor"></v-swatches>

                                <v-swatches class="mx-5 " :swatches="swatches" v-model="textcolor"></v-swatches>

                            </v-list-item-action>
                        </v-list-item>

                    </v-list>

                </v-card>

            </v-col>
        </v-row>

        <dashboardFooter/>
    </div>
</template>

<script>
      import VSwatches from 'vue-swatches'
      import 'vue-swatches/dist/vue-swatches.css'

    import navbar from '../../layout/Dashboard/nav.vue'
    import dashboardFooter from '../../layout/Dashboard/dashboardFooter.vue'

    export default {
        props: ['items'],
        data() {
            return {
                switchBtn: false,
                fonts: ['Rabar', 'Rudaw', 'NRT'],
                selectFont: '',
                sfont:'',
                 backcolor: '#8366FC',
                    textcolor: '#EEEDF7',
                    swatches: [
                        "#343A40",
                        "#293B5F",
                        "#DDDDDD",
                        "#16C79A",
                        "#7579E7",  
                        "#52575D",
                        "#1B6CA8",
                        "#30475E",
                        "#4D80E4",
                        "#F35588",
                        "#FFFFFF",
                    ]
            }
        },
        components: {
            navbar,VSwatches,dashboardFooter
        },
        methods: {
            darkmode() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
                localStorage.setItem("darktheme", this.$vuetify.theme.dark.toString());
            }
        },
        mounted() {
            const theme = localStorage.getItem("darktheme");
            if (theme) {
                if (theme == "true") {
                    this.$vuetify.theme.dark = true;
                    this.switchBtn = true;
                } else {
                    this.$vuetify.theme.dark = false;
                    this.switchBtn = false;
                }
            }
        },
        watch:{
            selectFont(value){
                 localStorage.setItem("selectFont",value)
                 this.$store.state.selectFont=localStorage.getItem("selectFont")
                 this.sfont=this.$store.getters.selectFont
            }
        }
       
        
     


    }
</script>

<style>
.setting-card{
    border-radius:10px !important;
    
}

.theme--dark.v-list{
background: var(--another)  !important;
}


</style>



