<template>
  
      
  <div class="ui grid center aligned">
    <div class="nine wide column">
      <div class="ui divided items">
          <NewsItem  v-for="news in newss" 
            :key="news.id"
            :id="news.id"
            :title="news.title"
            :description="news.description"
            :image="news.image"
            :views="news.views"
          />
      </div>
    </div>
  </div>

 

</template>

<script>

import Logo from '~/components/Logo.vue';
import HomeWelcome from '~/components/partials/home/HomeWelcome.vue';
import NewsItem from '~/components/partials/news/NewsItem.vue';



export default {
  components: {
    Logo,
    HomeWelcome,
    NewsItem
  },
  mounted() {
    //this.getNews()
  },
  async asyncData(context) {

    var newss="{}"
    
    try{
      newss= await context.$axios.$get('/v1/news/news/')
    } catch (error) {
      console.log("errooorrr on list of news ")
    }
    return {newss} 
  },
  
  methods: {
  }

};


</script>



