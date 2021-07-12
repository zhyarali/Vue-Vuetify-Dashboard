<template>

  <div>
    <navbar></navbar>

    <v-container>
      <p>{{addUser.role}}</p>

      <!-- add button -->
      <v-row>
        <v-col cols="12" md="">
          <v-dialog v-model="add_dialog" persistent max-width="400px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="rabar-font" color="primary" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-account-edit</v-icon>
                زیادکردنی ئەدمین
              </v-btn>
            </template>
            <v-card class="radius-10">
              <v-card-title>
                <span class="rabar-font">گۆڕانکاری</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>

                    <v-col cols="12">
                      <v-text-field label="ناو" v-model="addUser.name" class="rabar-font">
                      </v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field label="ناوی بەکارهێنەر" v-model="addUser.username" class="rabar-font">
                      </v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field label="ئیمەیڵ" v-model="addUser.email" required class="rabar-font"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="وشەی نهێنی" class="rabar-font" required v-model="addUser.password"
                        :append-icon="show ? 'mdi-eye-off-outline' : 'mdi-eye-outline'" name="password"
                        :type="show ? 'input' : 'password'" hide-details="auto" @click:append="show = !show">

                      </v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-select v-model="addUser.role" :items="['admin','user']" class="rabar-font" filled label="دەسەڵات" dense></v-select>
                    </v-col>

                   

                  </v-row>
                </v-container>

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="add_dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="add_user">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <!--  end add button -->


      <v-row class="d-flex justify-center">
        <v-col cols="10" md="4" sm="4" lg="4" v-for="(user,index) in users" :key="user.id">

          <!-- users card -->
          <v-card class="rabar radius-15 ">

            <!-- menu dropdown -->
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <!-- lists -->
              <v-list>

                <!-- Edit list item -->

                <v-list-item link>
                  <v-list-tile>
                    <v-dialog v-model="edit_dialog" persistent max-width="400px">
                      <template v-slot:activator="{ on, attrs }">
                        <p v-bind="attrs" v-on="on" class="rabar-font btn-action">
                          <v-icon>mdi-account-edit</v-icon>
                          گۆڕانکاری
                        </p>
                      </template>
                      <v-card class="rabar-font">
                        <v-card-title>
                          <span class="rabar-font">گۆڕانکاری</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>

                              <v-col cols="12">
                                <v-text-field label="ناو" v-model="user.name" class="rabar-font">
                                </v-text-field>
                              </v-col>

                              <v-col cols="12">
                                <v-text-field label="ناوی بەکارهێنەر" v-model="user.username" class="rabar-font">
                                </v-text-field>
                              </v-col>

                              <v-col cols="12">
                                <v-text-field label="ئیمەیڵ" v-model="user.email" required class="rabar-font">
                                </v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field label="وشەی نهێنی" v-model="user.password" class="rabar-font" required
                                  :append-icon="show ? 'mdi-eye-off-outline' : 'mdi-eye-outline'" name="password"
                                  :type="show ? 'input' : 'password'" hide-details="auto" @click:append="show = !show">

                                </v-text-field>
                              </v-col>

                              <v-col cols="12">
                                  <v-select v-model="user.role" :items="['admin','user']" class="rabar-font" filled label="دەسەڵات" dense></v-select>
                             </v-col>

                            </v-row>
                          </v-container>

                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="edit_dialog = false">
                            Close
                          </v-btn>
                          <v-btn color="blue darken-1" text @click="update_user(index)">
                            Save
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-list-tile>
                </v-list-item>

                <!-- end Edit List item -->


                <!-- delete list item -->
                <v-list-item link>
                  <v-list-item-title>
                    <v-dialog v-model="delete_dialog" persistent max-width="290">
                      <template v-slot:activator="{ on, attrs }">
                        <p v-bind="attrs" v-on="on" class="rabar-font btn-action">
                          <v-icon>mdi-delete</v-icon>

                          سڕینەوە
                        </p>
                      </template>
                      <v-card class="rabar-font">
                        <v-card-title class="text-h5">
                          ئاگاداربە !
                        </v-card-title>
                        <v-card-text>ئایا دڵنیایی دەتەوێ ئەم بەکارهێنەرە بسڕیتەوە ؟</v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="red darken-1" text @click="delete_dialog = false">
                            نەخێر
                          </v-btn>
                          <v-btn color="green darken-1" text @click="delete_user(user.id)">
                            بەڵێ
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-list-item-title>
                </v-list-item>
                <!-- end delete list item -->


              </v-list>
              <!-- end list -->
            </v-menu>
            <!--  end menu dropdown -->

            <div class="d-flex justify-center">
              <v-icon x-large color="deep-purple">mdi-account</v-icon>
            </div>

            <v-card-title class="d-flex justify-center" style="font-size:15px">

              {{user.name}}
            </v-card-title>
            <v-card-text class="text-center">
              <v-icon color="blue-grey">mdi-email</v-icon>
              {{user.email}}
            </v-card-text>
            <br>

          </v-card>

          <!-- end card -->

        </v-col>
      </v-row>

      <v-row>
        <v-col cols="" md="">
          <!-- <p>{{test}}</p>
           <h4>{{this.$store.state.users}}</h4> -->
        </v-col>
      </v-row>
    </v-container>
      <br><br><br><br>
    <dashboardFooter/>
  </div>
</template>


<script>
  import navbar from '../../layout/Dashboard/nav.vue'
    import dashboardFooter from '../../layout/Dashboard/dashboardFooter.vue'
  export default {
    data() {
      return {
        users: this.$store.getters.getUser,
        add_dialog:false,
        delete_dialog: false,
        edit_dialog: false,
        show: false,
        test: [],
        addUser: {
          'id': 3,
          'name': '',
          'username': '',
          'email': '',
          'password': '',
          'token': 'user',
          'post': 0,
          'role': ''
        }

      }
    },
    components: {
      navbar,dashboardFooter
    },
    methods: {
      delete_user(id) {
        this.users = this.users.filter(x => x.id != id)
        this.users.splice(id)
      },
      update_user(id) {
        this.$store.state.users[id] = this.users[id]
        this.edit_dialog=false
      },
      add_user() {
        let user = this.addUser
        this.users.push(user)
        this.add_dialog=false
      }
    },
  }
</script>
<style>
  .btn-action {
    font-size: 12px !important;
    position: relative;
    top: 9px
  }
</style>