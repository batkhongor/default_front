<template>
  
  <div class="ui grid center aligned stackable container" >
    <div class="sixteen wide column ">
    
      <HomeWelcome />
      <div>
        <logo />
        <h1 class="title">
          royal_front
        </h1>
        <h2 class="subtitle">
          royal marketing agency
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>

import Logo from '~/components/Logo.vue';
import HomeWelcome from '~/components/partials/home/HomeWelcome.vue';



export default {
  components: {
    Logo,
    HomeWelcome
  },
  mounted() {
    this.getIncidents()
  },
  methods: {
    async getIncidents() {
      let res = await this.$store.dispatch("getIP")
      console.log(res)
      console.log("this is result data")

      console.log(res.data)
    }
  }

};


</script>



