var cookie = require('cookie');

//store/index.js
export const state = () => ({
    locales: ['mn', 'en'],
    locale: 'mn',
    counter: 0,
    test:'',
    team_members:[],
  })
  
  export const mutations = {
    SET_LANG (state, locale) {
      this.$i18n.setLocale(locale);
      
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
        
      }
    },

    increment (state) {
      state.counter++
    },

    SET_TEST(state, test){
        state.test=test
    },
    SET_TEAMMEMBERS(state, members){
      state.team_members=members
    }
  }

export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return this.$auth.user
    }
  }

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    //const { body } = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    //.then(response => response.json())
    //commit('SET_LANG', body)
    if(req) {      
      if (req.headers && req.headers.cookie) {
        const parsed = cookie.parse(req.headers.cookie)
        console.log(parsed)
        try {
          //clocale = parsed.locale
          //console.log(parsed.locale)
          commit('SET_LANG',parsed.locale);
          //this.$axios.setToken(parsed.csrftoken)
          this.$axios.setToken('csrftoken',parsed.csrftoken)
          //this.$router.replace(this.switchLocalePath(parsed.locale));
          
        } catch (err) {
          // No valid cookie found
          console.log(err);
        }
      } 
    }   
  },
  async getIP ({ commit }) {
    //this.$axios.setToken('uRgnk5R0JhWoyL4duzOfVl1RjolgkHTCw1OiD6kRnMR4jznizeNK4UkV91HA5P0p')
    //this.$axios.setToken('csrftoken','m8rLgWgikcRlinDjgcziDH47QbjEA2KriIzVeHAfknwuhUq7GQpH2zX33EqsffcW')


    const ip = await this.$axios.$get('/users/')
    console.log("this is ip")
    console.log(ip)
    console.log(ip.results)
    commit('SET_TEAMMEMBERS', ip)
    return ip
  }
}