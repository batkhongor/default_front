<template>
  <div>
    <form @click="contactReq">
      <div>
        <label>Name</label>
        <input type="text" v-model="contact_info.name" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" v-model="contact_info.email" />

        <label>phone</label>
        <input type="text" v-model="contact_info.phone" />

        <label>detail</label>
        <input type="text" v-model="contact_info.detail" />
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
      contact_info: {
        name: '',
        phone: '',
        detail: '',
        email: ''
      }
    }
  },
  methods: {
    async contactReq() {

      console.log("Submit Contact info")
      //console.log(this.$cookiz.get('csrftoken'))
      //console.log(this.$axios.defaults)

      try {
        //this.$axios.setHeader('csrftoken',this.$cookiz.get('csrftoken'))
        this.$axios.defaults.xsrfCookieName = 'csrftoken'
        this.$axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        let response = await this.$axios.post('/contact/', this.contact_info)
        

        console.log(response)
        
      } catch (err) {
        console.log("Error")
        console.log(err)
      }
    }
  }
}
</script>