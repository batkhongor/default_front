<template>
  <div class="ui center aligned grid">
  <div class="ui nine wide   column">
  <h1>{{this.news.title}}</h1>
      <div class="ui item">
        <div class="content">
            <div v-html="this.news.text">
            </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
  
  export default {
    async asyncData(context) {
      
      const news = await context.$axios.$get('/v1/news/news/'+context.params.id+"/")
      console.log('/v1/news/news/'+context.params.id)
      
      console.log(news)
      
      return { news }
    }
  }
</script> 
