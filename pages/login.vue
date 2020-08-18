<template>
  <div>
    <form @click="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
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
        this.$axios.defaults.xsrfCookieName = 'csrftoken'
        this.$axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
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