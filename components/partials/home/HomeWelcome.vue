<template>
  <div class="ui grid center aligned stackable">
    <div class="ten wide column left aligned ">
            
    </div>
    <div class="ten wide column subtitle">
      <p class="left_aligned"> Бид таны бизнесийн үнэ цэнийг зах зээлд  <br>
                таниулж, зорилгодоо хүрэхэд тань тусална. </p>
    </div>        
    
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  name: 'HomeWelcome',
  components: {
    Logo
  },
  computed: {
    show() {
            
            return this.$store.state.counter%2==0;
        }
  },
  methods: {
    changeInc () {
      this.$store.commit ('increment');
    }
  }
  
};
</script>


<style lang="scss" >
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>