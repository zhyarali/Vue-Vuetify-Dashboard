<template lang="">
    <div class="body">

        <v-container grid-list-xs>


            <center>
                <v-layout column class="form">
                    <v-flex>

                        <v-col cols="12" lg="4" sm="6" class="card-layout radius-10 py-8 px-8" elevation="20">
                            <div class="text-center ">
                                <center>
                                    <v-alert v-if="this.$store.getters.success_reset" dense border="left" text class="alert" color="white"  dismissible>
                                        بەسەرکەوتوویی وشەی نهێنی گۆڕا
                                    </v-alert>
                                    
                                        <span class="orange--text rabar-font" color="primary">{{error_auth}}</span>
                                        <v-img contain class="my-4 indigo radius-circle" max-height="154"
                                            max-width="110" src="../../../assets/login.svg">
                                        </v-img>
                                </center>

                                <span dark class="d-inline-block mb-8 my-3 text-style">بەخێربێیت</span>
                            </div>

                            <v-form @submit.prevent="next" >

                                <v-text-field append-icon="mdi-email" label=" ئیمەیڵ بنووسە" dark required ref="input"
                                    v-model="identifier" class="mb-4 rabar-font email-label" :disabled="disabled"
                                    :error-messages="error">
                                </v-text-field>

                                <v-text-field dark class="mb-14 rabar-font" v-model="password"
                                    :append-icon="show ? 'mdi-eye-off-outline' : 'mdi-eye-outline'" label="وشەی نهێنی"
                                    name="password" :type="show ? 'input' : 'password'" hide-details="auto"
                                    @click:append="show = !show" :error-messages="passErr" ref="pass" />


                            </v-form>


                            <div class="d-flex justify-space-between ">


                                <v-btn small class="  radius-10 py-5 text-none rabar-font" dark color="indigo darken-2"
                                    @click="next">
                                    چوونە ژورەوە

                                </v-btn>

                                <v-btn class="text-forget rabar-font letter-spacing-0" style="margin-left: -16px;"
                                    color="orange" text @click="$router.push('/Dashboard/forget')">
                                    وشەی نهێنیت لەبیرکردووە ؟
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
                } else {
                    this.error = null
                    if (this.password == "") {
                        this.passErr = 'تکایە بەبەتاڵی جێی مەهێڵە'
                        this.$refs.pass.focus()
                    } else {
                        this.users.forEach(element => {
                            if (this.identifier === element.email && this.password === element.password) {
                                localStorage.setItem('storedData', element.token)
                                this.$router.push('/Dashboard/Home')
                            } else {
                                this.error_auth = 'ئیمەیڵ و وشەی نهێنی هەڵەیە !'
                            }
                        });

                    }
                }


                // this.$router.push({ name: 'password' })
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
            password(value) {
                if (value !== "") {
                    this.passErr = null
                }
            }
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

    .alert{
         font-family: "rabar" !important;
         font-size: 12px !important;
    }

    .v-label {
        font-size: 14px !important;
    }

    .form {
        padding: 100px 0px;
    }

    .radius-10 {
        border-radius: 10px !important;
    }

    .radius-15 {
        border-radius: 15px !important;
    }

    .radius-circle {
        border-radius: 45% !important;
        padding: 25px 8px !important;

    }

    .text-forget {
        font-size: 10px !important;
    }

    @media only screen and (max-width: 600px) {
        .form {
            padding: 53px 0px !important;
        }
    }
</style>