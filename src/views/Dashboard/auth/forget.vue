<template lang="">
    <div class="body">

        <v-container grid-list-xs>


            <center>
                <v-layout column class="form-forget">
                    <v-flex>
                        <v-col cols="12" lg="4" sm="6" class="card-layout radius-10 py-8 px-8" elevation="20">
                            <div class="text-center ">
                                <center>
                                    <span class="orange--text rabar-font" color="primary">{{error_auth}}</span>
                                    <v-img  contain   max-height="154" max-width="110"
                                        src="../../../assets/forget.svg">
                                    </v-img>
                                </center>

                            </div>

                            <v-form @submit.prevent="next">

                                <v-text-field append-icon="mdi-email" label=" ئیمەیڵ بنووسە" dark required ref="input" v-model="identifier"
                                    class="mb-4 rabar-font my-6 email-label" :disabled="disabled" :error-messages="error">
                                </v-text-field>


                            </v-form>


                            <div class="d-flex justify-space-between ">


                                <v-btn small  class="  radius-10 py-5 text-none rabar-font" dark
                                    color="indigo darken-2" @click="next">
                                    دواتر

                                </v-btn>

                                <v-btn class="text-forget rabar-font letter-spacing-0" style="margin-left: -16px;" color="green"
                                    text @click="$router.push('/Dashboard/login')">
                                     بگەڕێوە بۆ چوونە ژورەوە 
                                </v-btn>

                            </div>
                        </v-col>
                    </v-flex>
                </v-layout>

            </center>



        </v-container>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                error: null,
                passErr: null,
                disabled: false,
                identifier: '',
                password: '',
                num: 0,
                error_auth: null,
                users: this.$store.getters.getUser
            }
        },

        methods: {
            next() {
                if (!this.validEmail(this.identifier)) {
                    this.error = 'ئیمەیڵی دروست بنوسە'
                    this.$refs.input.focus()
                    return
                }
                this.$store.state.email_forget=this.identifier
                this.$router.push('/Dashboard/reset')

            },
            validEmail(email) {
                var re =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return re.test(email)
            },

        },
        watch: {
            identifier(value) {
                if (this.validEmail(value)) {
                    this.error = null
                } else {
                    this.error = 'ئیمەیڵی دروست بنوسە'
                }
            },
           
        },



    }
</script>
<style>
    @font-face {
        font-family: "rabar";
        src: local("rabar"),
            url(/assets/fonts/Rabar_039.ttf) format("truetype");
    }

    .body {
        height: 100vh;
        background: #1e1e2f;
    }

    .card-layout {
        background: #27293d !important;
    }

    .dark-blue {
        background: #1e1e2f !important;
    }

    .text-style {
        font-family: "rabar" !important;
        color: aliceblue !important;
    }

    .rabar-font {
        font-family: "rabar" !important;
    }

    .v-label {
        font-size: 14px !important;
    }

    .form-forget {
        padding: 170px 0px;
    }

    .radius-10 {
        border-radius: 10px !important;
    }

    .radius-15 {
        border-radius: 15px !important;
    }
    .radius-circle{
        border-radius: 45% !important;
        padding: 25px 8px !important;
        
    }
    .text-forget{
        font-size: 10px  !important;
    }

    @media only screen and (max-width: 600px) {
        .form-forget {
            padding: 183px 0px !important;
        }
    }
</style>