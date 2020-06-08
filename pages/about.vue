<template>
  
  <div class="ui grid center aligned stackable">
      
      <div class="ten wide column left aligned">
      </div>

      <div class="eight wide column left aligned">
        <p >
          Рояал маркетинг агентлаг 2018 оноос эхлэн үйл ажиллагаа явуулж байна.
        </p>
      </div>
      
      <div class="ten wide column">
        <TeamMembers />
      </div>
      <div class="ten wide column left aligned">
      </div>
  </div>
</template>


<script>

import Logo from '~/components/Logo.vue'
import HomeWelcome from '~/components/partials/home/HomeWelcome.vue'
import TeamMembers from '~/components/partials/about/TeamMembers.vue'



export default {
  
  components: {
    Logo,
    TeamMembers
  }
}
</script>




