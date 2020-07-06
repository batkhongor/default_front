<template lang="html">

  <div ui grid center aligned stackable>
    <form class="ui form">
      <div class="field">
        <label>First Name</label>
        <input type="text" name="name" placeholder=" Name">
      </div>
      <div class="field">
        <label>Last Name</label>
        <input type="text" name="email" placeholder="email">
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden">
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button class="ui button" type="submit">Submit</button>
    </form>
  </div>
</template>


<script>
import Logo from '~/components/Logo.vue'

export default {
  name: 'ContactForm',
  components: {
    Logo
  },
  
  
  
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