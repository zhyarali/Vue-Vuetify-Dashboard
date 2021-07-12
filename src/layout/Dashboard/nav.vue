<template lang="">
  <div>


    <v-app-bar app color="zhyar" class="navbar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar flat color="zhyar">


        <v-spacer></v-spacer>

        <v-tooltip bottom >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-for="(user, index) in getUsername" :key="index" to="/Dashboard/profile" icon class="mx-2 account "
              style="width:80px" v-bind="attrs" v-on="on">

              <v-badge bordered bottom color="deep-purple accent-4" dot class="mx-2" offset-x="10" offset-y="10">
                <v-avatar size="30">
                  <v-img :src="user.logo"></v-img>
                </v-avatar>
              </v-badge>
              <span>{{user.name}}</span>
            </v-btn>
          </template>
          <span class="rabar-font">پڕۆفایل</span>
        </v-tooltip>

        <!-- <v-btn to="/Dashboard/setting" icon>
          <v-icon>mdi-cog</v-icon>
        </v-btn> -->


<!-- notification -->

         <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">

          <v-badge
        :content="messages"
        :value="messages"
        color="deep-purple"
        overlap
      >
        <v-icon  v-bind="attrs" dark
        v-on="on">
          mdi-bell
        </v-icon>
      </v-badge>
        
      </template>

      <v-card>
         <v-list three-line>
      <template v-for="(item, index) in notification">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

      </v-card>
    </v-menu>
  </div>


<!-- end notification -->


        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-logout-variant</v-icon>
            </v-btn>
          </template>
          <v-card class="logout">
            <v-card-title class="logout">
              ئاگاداربە !
            </v-card-title>
            <v-card-text>ئایا دڵنیایی دەتەوێ هەژمارەکەت دابخەیتەوە ؟</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialog = false">
                نەخێر
              </v-btn>
              <v-btn color="green darken-1" text @click="logout()">
                بەڵێ
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        

      </v-toolbar>
    </v-app-bar>

    <!-- <v-navigation-drawer
      v-model="drawer"
      app
      right
    >
    
    </v-navigation-drawer> -->

    <v-navigation-drawer v-model="drawer" app right>
      <template v-slot:prepend>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-center">App Name</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider class="my-3"></v-divider>

      <v-list shaped>
        <v-list-item-group v-model="selectedItem">

          <v-list-item :to="item.link" v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="item-title">{{ item.title }}</v-list-item-title>
            </v-list-item-content>


          </v-list-item>

          <v-list-item class="my-5">
            <v-list-item-subtitle class="text-center">Garduny &copy; </v-list-item-subtitle>
          </v-list-item>
        </v-list-item-group>


      </v-list>



    </v-navigation-drawer>




  </div>
</template>


<script>
  export default {
    data:function(){
      return{
      messages:5,
      menu: false,
      hints: true,
      selectedItem: 0,
      drawer: null,
      setFont:[],
      dialog: false,
      items: [{
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
      backcolor: '#8366FC',
      textcolor: '#FFFFFF',
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
      ],


       notification: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],





    }},

    components: {

    },


    methods: {
      darkmode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        localStorage.setItem("darktheme", this.$vuetify.theme.dark.toString());
      },
      logout() {
        localStorage.removeItem("storedData");
        this.$router.push('/Dashboard/login')
      }
    },
    mounted() {
      const theme = localStorage.getItem("darktheme");
      if (theme) {
        if (theme == "true") {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      }
    },
    computed: {
      getUsername() {
        let user = this.$store.getters.getUser
        let search = localStorage.getItem("storedData")
        return user.filter(function (product) {
          return product.token == search;
        });

      },
      getFont(){
         return this.$store.getters.selectFont
      },
      

    }



  }
</script>


<style>
  @font-face {
    font-family: "rabar";
    src: local("rabar"),
      url(../../assets/fonts/Rabar_039.ttf) format("truetype");
  }

  
  @font-face {
    font-family: "rudaw";
    src: local("rudaw"),
      url(../../assets/fonts/rudawregular2.ttf) format("truetype");
  }

  :root {
    --navbar-color: #8366FC;
    --navbar-text: #FFFFFF;
    --purple-color: #8366FC;
    --bgGreyColor: #EEEDF7;
    --grayColor: rgb(0, 0, 0, 54%);
    --bgdarkblue: #1e1e2f;
    --darknavbar: #27293d;
    --another: #27293d;
     --comp: #27293d;
  }

  .account,
  .theme-text,
  .logout {
    font-family: "rabar" !important;
  }

  /* navigation drawer */

  .theme--dark.v-navigation-drawer {
    background: var(--another) !important;
  }

  /* logout */
  .theme--dark.logout {
    background: var(--darknavbar) !important;
  }


  .item-title {
    font-family: "rabar";
  }

  /*  set color for list item text*/
  .theme--light .v-list .v-list-item__title {
    color: var(--grayColor) !important;
  }

  /* when user hover of any list focused and set background  */
  .theme--light.v-list-item--active:hover::before,
  .theme--light.v-list-item--active::before {
    background: #8366FC;
    color: #8366FC;
  }

  .theme--dark.v-list-item--active:hover::before,
  .theme--dark.v-list-item--active::before {
    background: #3a3f51;

  }

  /* card */
  .theme--dark.v-card {
    background: var(--another) !important;
  }



  .theme--light .v-list .v-list-item--active .v-icon {
    color: var(--navbar-color);
  }

  .theme--light .v-list .v-list-item--active .v-list-item__title {
    color: var(--navbar-color) !important;
  }


  .theme--dark.v-data-table {
    background: var(--another) !important;
  }


  /* data table hover row */
  .theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: #3a3f51 !important;
  }

  /* data table radius */
  .v-data-table .v-toolbar__content,
  .v-toolbar__extension {
    border-radius: 15px !important;
  }

  .theme--dark.v-data-table .v-sheet {
    border-radius: 0px !important;
    background: var(--another) !important;
  }

  .v-data-table {
    padding: 15px !important;
  }

  /* body  background */



  .theme--light .v-main {
    background: var(--bgGreyColor) !important;
  }

  .theme--dark .v-main {
    background: var(--bgdarkblue) !important;
  }


  /* navbar background  */

  /* for light mode */
  .theme--light.v-app-bar.v-toolbar.v-sheet,
  .theme--light.v-app-bar .v-toolbar__content,
  .v-toolbar__extension {
    background: var(--another) !important;
  }

  .v-toolbar__extension,
  .theme--light.v-data-table .v-toolbar__content,
  .v-toolbar__extension {
    background: #3a3f51 !important;
  }


  /* for dark mode */
  .theme--dark.v-app-bar.v-toolbar.v-sheet,
  .theme--dark .v-toolbar__content,
  .v-toolbar__extension {
    background: var(--another) !important;
  }

  .theme--light .navbar .v-btn.v-btn--icon {
    color: var(--navbar-text) !important;
  }


  /* pagination */
  .theme--dark.v-pagination .v-pagination__item {
    background: var(--another) !important;
  }

  .theme--dark.v-pagination .v-pagination__item--active {
    background: #0d47a1 !important;
  }

  .theme--dark.v-pagination .v-pagination__navigation {
    background: var(--another) !important;
  }

  /* tabs */

  .theme--dark.v-tabs-items {
    background: var(--another) !important;
    border-bottom-left-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
  }

  .theme--dark.v-tabs>.v-tabs-bar {
    background: #3a3f51 !important;
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
  }


  /* account */
  .account {
    border-radius: 10px !important;
    padding-left: 20px !important;
    padding-right: 10px !important;
    font-size: 12px !important;
  }

  .account::before {
    background: transparent !important;
  }

  .account:hover {
    background: #484c5a !important;
    border-radius: 10px !important;
  }

/* footer */
.theme--light.v-footer{
  background: var(--another) !important;
  color: white !important;
}

.theme--dark.v-footer{
  background: var(--another) !important;
  color: white !important;
}

/* v-sheet */
.theme--dark.slider-group{
  background: var(--bgdarkblue) !important;
}



/* bottom navigation */
.theme--dark.bottom-nav {
  background: var(--another) !important;
}
.theme--light.bottom-nav {
  background: var(--navbar-color) !important;
}


/* skeleton loader background */

.theme--dark.v-skeleton-loader .v-skeleton-loader__actions, .theme--dark.v-skeleton-loader .v-skeleton-loader__article, .theme--dark.v-skeleton-loader .v-skeleton-loader__card-heading, .theme--dark.v-skeleton-loader .v-skeleton-loader__card-text, .theme--dark.v-skeleton-loader .v-skeleton-loader__date-picker, .theme--dark.v-skeleton-loader .v-skeleton-loader__list-item, .theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar, .theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-text, .theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-two-line, .theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line, .theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-three-line, .theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line, .theme--dark.v-skeleton-loader .v-skeleton-loader__table-heading, .theme--dark.v-skeleton-loader .v-skeleton-loader__table-thead, .theme--dark.v-skeleton-loader .v-skeleton-loader__table-tbody, .theme--dark.v-skeleton-loader .v-skeleton-loader__table-tfoot{
  background: var(--another) !important;
}
</style>