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

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    //const { body } = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    //.then(response => response.json())
    //commit('SET_LANG', body)
    if(req) {      
      if (req.headers && req.headers.cookie) {
        const parsed = cookie.parse(req.headers.cookie)
        try {
          //clocale = parsed.locale
          //console.log(parsed.locale)
          commit('SET_LANG',parsed.locale);
          //this.$router.replace(this.switchLocalePath(parsed.locale));
          
        } catch (err) {
          // No valid cookie found
          console.log(err);
        }
      } 
    }   
  },
  async getIP ({ commit }) {
    this.$axios.setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTkxNjAzMTA4LCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIn0.cuhSzAJ2TN1yWEy-6DvAw53wWXTHswtCaH2n7btGKPE')
    const ip = await this.$axios.$get('/users/')
    console.log("this is ip")
    console.log(ip.results)
    commit('SET_TEAMMEMBERS', ip.results)
    return ip
  }
}