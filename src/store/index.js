import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{
        'id': 1,
        'name': 'Zhyar',
        'username': 'zhyarali',
        'email': 'zhyar@gmail.com',
        'password': '1234',
        'token': 'user1212',
        'post': 10,
        'role': 'admin',
        'logo':'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png'
      },
      {
        'id': 2,
        'name': 'Garduny',
        'username': 'garduny',
        'email': 'garduny@gmail.com',
        'password': '1234',
        'token': 'user1213',
        'post': 10,
        'role': 'user',
        'logo':'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png'
      },

    ],
    success_reset: false,
    email_forget: '',
    selectFont:'rabar'
  },
  getters: {
    getUser: state => {
      return state.users
    },
    success_reset: state => {
      return state.success_reset
    },
    email_forget: state => {
      return state.email_forget
    },
    selectFont:state=>{
      return state.selectFont
    }
  },


})