<template>
    <div>
        <navbar />
        <v-container class="mt-5 mb-7">
            <v-row class="d-flex justify-center">
                <v-col cols="11">

                    <v-data-table :headers="headers" :search="search" :items="desserts" sort-by="calories"
                        class="elevation-1 rabar-font radius-15">

                        <template v-slot:top>
                            <v-toolbar flat>

                                <v-row>
                                    <v-col cols="12" md="10">
                                        <v-text-field dark class="rabar-font " v-model="search"
                                            append-icon="mdi-magnify" label="بگەڕێ" hide-details></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-spacer></v-spacer>
                                <v-dialog v-model="dialog" max-width="500px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn color="white" style="color:black;" class="mb-2 radius-15  rabar-font"
                                            v-bind="attrs" v-on="on">
                                            زیادکردنی بابەت
                                        </v-btn>



                                    </template>

                                    <v-card class="radius-15">
                                        <v-card-title>
                                            <span class="rabar-font">{{ formTitle }}</span>
                                        </v-card-title>

                                        <v-card-text class="radius-15">
                                            <v-container>

                                                <v-form>
                                                    <v-text-field class="rabar-font" append-icon="mdi-format-title"
                                                        v-model="editedItem.title" label="تایتڵ">
                                                    </v-text-field>


                                                    <v-text-field class="rabar-font" label="نرخ"
                                                        v-model="editedItem.price" append-icon="mdi-currency-usd">
                                                    </v-text-field>

                                                    <!-- <v-file-input :rules="rules" v-model="editedItem.image"
                                                        accept="image/png, image/jpeg, image/bmp"
                                                        placeholder="وێنەیەک هەڵبژێرە" prepend-icon=""
                                                        append-icon="mdi-camera" label="وێنە" class="rabar-font">
                                                    </v-file-input> -->
                                                    
                                                     <v-text-field class="rabar-font" append-icon="mdi-camera"
                                                        v-model="editedItem.image" label="لینکی وێنە">
                                                    </v-text-field>

                                                    <v-img  max-height="300"
                                                        max-width="212" :src="editedItem.image">
                                                    </v-img>

                                                    <v-textarea append-icon="mdi-message-text"
                                                        class="rabar-font mt-2 textarea" name="input-7-1"
                                                        label="درێژەی پۆست" auto-grow v-model="editedItem.desc">
                                                    </v-textarea>

                                                </v-form>
                                            </v-container>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="close">
                                                Cancel
                                            </v-btn>
                                            <v-btn color="blue darken-1" text @click="save">
                                                Save
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                    <v-card>
                                        <v-card-title class="text-h5">Are you sure you want to delete this item?
                                        </v-card-title>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                            <v-spacer></v-spacer>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-toolbar>
                        </template>
                        <template v-slot:item.edit="{ item }">
                            <v-icon small class="mr-2" @click="editItem(item)">
                                mdi-pencil
                            </v-icon>

                        </template>
                        <template v-slot:item.delete="{item}">
                            <v-icon small @click="deleteItem(item)">
                                mdi-delete
                            </v-icon>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>

        </v-container>
        
        <dashboardFooter/>
    </div>
</template>




<script>
    import navbar from '../../layout/Dashboard/nav.vue'
    import dashboardFooter from '../../layout/Dashboard/dashboardFooter.vue'
    export default {
        components: {
            navbar,dashboardFooter
        },
        data: () => ({
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
            search: '',
            dialog: false,
            dialogDelete: false,
            headers: [{
                    text: 'تایتڵ',
                    align: 'start',
                    sortable: false,
                    value: 'title',
                },
                {
                    text: 'نرخ',
                    value: 'price'
                },
                {
                    text: 'درێژە',
                    value: 'desc'
                },
                {
                    text: 'ئەدمین',
                    value: 'postby',
                    sortable: false
                },

                {
                    text: 'گۆڕانکاری',
                    value: 'edit',
                    sortable: false
                },
                {
                    text: 'سڕینەوە',
                    value: 'delete',
                    sortable: false
                },

            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                title: '',
                comment: 0,
                viewer: 0,
                price: 0,
                image: '',
                desc: '',
                postby:null,
            },
            defaultItem: {
                title: '',
                comment: 0,
                viewer: 0,
                price: 0,
                image: '',
                desc: '',
                postby:null,
            },
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'زیادکردنی بابەت' : 'گۆڕانکاری '
            },
             getUsername(){
        let user=this.$store.getters.getUser
        let search=localStorage.getItem("storedData")
        let item=user.filter(function(product) {
         return product.token == search;});
         let username=null
         item.forEach(element => {
             username=element.name
         });
         return username
      }
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            dialogDelete(val) {
                val || this.closeDelete()
            },
        },

        created() {
            this.initialize()
        },

        methods: {
            initialize() {
                this.desserts = [{
                        title: 'news in canada',
                        comment: 20,
                        viewer: 100,
                        price: 200,
                        image: 'https://t3.ftcdn.net/jpg/04/06/60/94/360_F_406609490_6XTEHYNqcfqNbkQjN5B2kOy1yIYE5nD1.jpg',
                        desc: 'lorem ipsum',
                        postby: 'zhyar',
                    },
                    {
                        title: 'news in france',
                        comment: 30,
                        viewer: 20000,
                        price: 300,
                        image: '1.jpg',
                        desc: 'lorem ipsum',
                        postby: 'garduny',
                    },

                ]
            },

            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialogDelete = true
            },

            deleteItemConfirm() {
                this.desserts.splice(this.editedIndex, 1)
                this.closeDelete()
            },

            close() {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            closeDelete() {
                this.dialogDelete = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save() {
                if (this.editedIndex > -1) {
                    
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.editedItem.postby=this.getUsername
                    this.desserts.push(this.editedItem)
                }
                this.close()
            },
        },
       
    }
</script>

<style>
    @font-face {
        font-family: "rabar";
        src: local("rabar"),
            url(../../assets/fonts/Rabar_039.ttf) format("truetype");
    }

    .rabar-font {
        font-family: "rabar" !important;
    }

    .radius-15 {
        border-radius: 15px !important;
    }

    .textarea {
        font-size: 15px !important;
    }
</style>