<template lang="html">

  <div ui grid center aligned stackable>
    <h2 class="subtitle">
        Багийн гишүүд 
    </h2>

    <sui-card-group :items-per-row="3" class="ui grid link  center aligned stackable">
      <sui-card class="four wide column"
        v-for="member in team_members"
        :key="member.username"
        > 
        <sui-image src="/images/avatar/matthew.png" />
        <sui-card-content>
          <sui-card-header>{{ member.email }}</sui-card-header>
          <sui-card-meta>Friends</sui-card-meta>
          <sui-card-description>
            Matthew is an interior designer living in New York.
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="user" /> 75 Friends
          <span slot="right">Joined in 2013</span>
        </sui-card-content>
      </sui-card>

      <sui-card class="four wide column">
        <sui-image src="/images/avatar/elliot.jpg" />
        <sui-card-content>
          <sui-card-header>Molly</sui-card-header>
          <sui-card-meta>Coworker</sui-card-meta>
          <sui-card-description>
            Molly is a personal assistant living in Paris.
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="user" /> 35 Friends
          <span slot="right">Joined in 2011</span>
        </sui-card-content>
      </sui-card>
      <sui-card class="four wide column">
        <sui-image src="static/images/avatar/large/elyse.png" />
        <sui-card-content>
          <sui-card-header>Elyse</sui-card-header>
          <sui-card-meta>Coworker</sui-card-meta>
          <sui-card-description>
            Elyse is a copywriter working in New York.
          </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="user" /> 151 Friends
          <span slot="right">Joined in 2014</span>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>


<script>
import Logo from '~/components/Logo.vue'

export default {
  name: 'TeamMembers',
  components: {
    Logo
  },
  mounted() {
    this.getIncidents()
  },
  computed: {
     team_members () {
       console.log("team_members")
       console.log(this.$store.state.team_members)
      return this.$store.state.team_members
    }
  },
  methods: {
    async getIncidents() {
      let res = await this.$store.dispatch("getIP")
      
      console.log("this is result data")

      console.log(res.data)
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