<template>
  <div class="item news">
      <a class="ui medium image"
        :href="'news/'+id"
        >
        <img :src="image" />
      </a>

      <div class="content left_aligned">  
        <a class="header "> {{title}} Stevie Feliciano</a>
        <div class="extra ">
          <i class="small eye icon">{{views}}</i>
        </div>
        <div class="description ">
            <p> its ID is : {{id}} </p>
            <p>{{ description }}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["title", "owner", "description","id", "image", "views"]
};
</script>


<style lang="scss" >
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.item.news {
  background-color: ghostwhite !important;

  border-radius: 10px !important;
  margin-bottom: 20px !important;
  padding-top: 20px;
}
.news img{
  border-radius: 10px !important;
}

</style>