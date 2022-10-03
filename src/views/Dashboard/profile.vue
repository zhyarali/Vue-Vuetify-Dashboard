<template>
    <div>
        <navbar />

        <v-container class="my-8">

            <div v-for="(user,index) in users" :key="index">

                <v-row class="d-flex justify-center mb-4">
                    <v-col cols="" md="">
                        <v-img width="140" height="140" class="mx-auto radius-circle" :src="user.logo"></v-img>
                    </v-col>
                </v-row>

                <v-row class="my-2">
                    <v-col cols="" md="" class="d-flex justify-center">
                        <v-icon>mdi-account</v-icon>
                        <h3 class="mx-3">{{user.name}}</h3>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="" md="" class="d-flex justify-center">
                        <v-icon>mdi-email</v-icon>
                        <h4 class="mx-3">{{user.email}}</h4>
                    </v-col>
                </v-row>

                <v-row class="my-8 rabar-font">
                    <v-col cols="12" md="" class="d-flex justify-center flex-wrap">
                        <div class="mx-16">
                            <p>ژمارەی پۆستەکان : {{user.post}}</p>
                        </div>

                        <div class="mx-16">
                            <p>دەسەڵات : {{user.role}}</p>
                        </div>

                    </v-col>
                </v-row>

            </div>




            <v-row style="display:flex;justify-content:center">
   

   <v-col class="col-11 col-sm-10 col-md-6 col-lg-4 col-xl-6 m-auto text-center">
   <v-card class="px-5 py-5 rounded-lg">
     <v-form
       ref="form"
       lazy-validation
       class="text-center"
     >
       <v-text-field
         v-model="name"
         label="Name"
         required
       ></v-text-field>
   
       <v-btn
       small
         color="deep-purple"
         class="m-auto white--text"
         
       >
         Change Name
       </v-btn>
   
     </v-form>
   </v-card>
   </v-col>
   
   
   <v-col class="col-11 col-sm-10 col-md-6 col-lg-4 col-xl-6 m-auto text-center">
   <v-card class="px-5 py-5 rounded-lg">
     <v-form
       ref="form"
       lazy-validation
       class="text-center"
     >
       <v-text-field
         v-model="email"
         label="Email"
         required
       ></v-text-field>
   
       <v-btn
       small
         color="deep-purple"
         class="m-auto white--text"
        
       >
         Change Email
       </v-btn>
   
     </v-form>
   </v-card>
   </v-col>
   
   
   <v-col class="col-11 col-sm-10 col-md-6 col-lg-4 col-xl-6 m-auto text-center">
   <v-card class="px-5 py-5 rounded-lg">
     <v-form
      @submit.prevent=""
       ref="form"
       lazy-validation
       class="text-center"
     >
       <v-file-input
         v-model="avatar"
         id="profileAvatar"
         name="avatar"
        label="Avatar"
         required
         prepend-icon="mdi-camera"
       ></v-file-input>
   
       <v-btn
       :disabled="avatar==null"
       small
       type="submit"
         color="deep-purple"
         class="m-auto white--text"
       >
          Change Avatar
       </v-btn>
   
     </v-form>
   </v-card>
   </v-col>
   
   
   
   <v-col class="col-11 col-sm-10 col-md-6 col-lg-6 col-xl-6 m-auto text-center">
   <v-card class="px-5 py-5 rounded-lg">
     <v-form
       ref="form"
       lazy-validation
       class="text-center"
     >
       <v-text-field
         v-model="oldpassword"
        label="Old Password"
         required
       ></v-text-field>
   
       <v-text-field
         v-model="newpassword"
         label="New Password"
         required
       ></v-text-field>
       <v-btn
       small
         color="deep-purple"
         class="m-auto white--text"
         
       >
         <!-- {{langkeyword('CHANGE_PASSWORD')}} -->
         Change Password
       </v-btn>
   
     </v-form>
   </v-card>
   </v-col>
   
   </v-row>



        </v-container>


    </div>
</template>


<script>
    import navbar from '../../layout/Dashboard/nav.vue'
    export default {
        data() {
            return {
                edit_dialog: false,
                show: false,
                defaultButtonText: 'وێنە بگۆڕە',
                selectedFile: null,
                isSelecting: false,
                icon: 'mdi-cloud-upload',
                url: ''
            }
        },
        components: {
            navbar
        },
        computed: {
            buttonText() {
                return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
            },
            users() {
                let user = this.$store.getters.getUser
                let search = localStorage.getItem("storedData")
                return user.filter(function (product) {
                    return product.token == search;
                });

            },
            
        },

        methods: {
            onButtonClick() {
                this.isSelecting = true
                window.addEventListener('focus', () => {
                    this.isSelecting = false
                }, {
                    once: true
                })

                this.$refs.uploader.click()
            },
            onFileChanged(e) {

                this.selectedFile = e.target.files[0]
                let file = e.target.files[0]
                this.users[0].logo = URL.createObjectURL(file);

                // do something
            },
            update_profile(){
                // code in here
                this.edit_dialog=false
            }
        }
    }
</script>
<style>
    .image-file::file-selector-button {
        background: black !important;
        padding: 20px;
        visibility: hidden;
        border: none !important;
        content-visibility: hidden;
    }
</style>