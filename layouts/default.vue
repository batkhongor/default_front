<template>
    
    <body >
    <div>
      <TheHeader />
      <main class="lg:block relative pt-16 lg:pt-24">
        <Nuxt />
      </main>
      
    
    <TheFooter />
    </div>
    </body>
</template>


<script>
import NavBarPointing from "~/components/NavBar.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";

//import SuiVue from 'semantic-ui-vue';

/* ... */

//Vue.use(SuiVue);


export default {
  components: {
    TheHeader,
    TheFooter,
    NavBarPointing
  },
  data () {
    return {
      title: 'Royal Marketing agency'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
};
</script>



<style lang="scss">
  @import '../assets/scss/style.scss'
</style>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

</style>
