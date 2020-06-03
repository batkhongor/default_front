<template>
  <div >
    <sui-menu pointing secondary>
      <nuxt-link 
        is="sui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        :to="item"
        @click="select(item)" 
      />

      <sui-menu-menu position="right">
        <a
          is="sui-menu-item"
          :active="isActive('Logout')"
          content="Logout"
          @click="select('Logout')"
        />
      </sui-menu-menu>
    </sui-menu>

    
  </div>
</template>

<script>
export default {
  name: 'NavBarPointing',
  data() {
    return {
      active: 'home',
      items: ['home', 'about', 'contact'],
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  },
};
</script>