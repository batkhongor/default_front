<template>
  <div class="ui middle aligned center aligned grid">
    <div class="three wide column">
      <form class="ui form" method="post" @submit.prevent="userLogin">

        <div class="ui stacked segment">
          <div class="field">
            <div class="ui center icon input">
              <i class="user icon"></i>
              <input type="text" name="username" v-model="login.username" placeholder="username">
            </div>
          </div>
          <div class="field">
            <div class="ui center icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" v-model="login.password" placeholder="Password">
            </div>
          </div>
          <button class="ui fluid large teal submit button" type="submit">Login</button>
        </div>

        
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {

      console.log("User login")
      //console.log(this.$axios.headers)
      //console.log(this.$axios.defaults)
      try {
        
        //let response = await this.$auth.loginWith('local', { data: this.login })

        //this.$axios.defaults.xsrfCookieName = 'csrftoken'
        //this.$axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        //let res = await this.$store.commit("SET_LANG", 'mn');

        let response = await this.$auth.loginWith('local', { data: this.login })
        
        //console.log(response)
        //console.log("Inside try")
      } catch (err) {
        //console.log("Error")
        console.log(err)
      }
    }
  }
}
</script>