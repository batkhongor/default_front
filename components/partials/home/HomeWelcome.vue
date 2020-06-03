<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt">
    <div >
        <div class="subtitle">
            <p> <br>
                Бид таны бизнесийн үнэ цэнийг зах зээлд таниулж, <br>
                зорилгодоо хүрэхэд тань туслана.
            </p>
            <button @click="changeInc()">
              Toggle render
            </button>
            <transition name="slide-fade">
              <p v-if="show">hello</p>
            </transition>
            After tra
            <br>
            This is
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWelcome',
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