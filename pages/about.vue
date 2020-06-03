<template>
  
  <div class="container">
    
    <div>
      <HomeWelcome />
      <logo />
      
      <h1 class="title">
        Рояал маркетингийн агентлаг
      </h1>
      <h2 class="subtitle">
        Бидний тухай илүү ихийг мэдхийг хүсвэл 
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
</template>


<script>

import Logo from '~/components/Logo.vue'
import HomeWelcome from '~/components/partials/home/HomeWelcome.vue'



export default {
  
  components: {
    Logo,
    HomeWelcome
  }
}
</script>




