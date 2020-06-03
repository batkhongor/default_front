var cookie = require('cookie');

//store/index.js
export const state = () => ({
    locales: ['mn', 'en'],
    locale: 'mn',
    counter: 0
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
  }
}