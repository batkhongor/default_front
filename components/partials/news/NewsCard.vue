<template>
  <v-card class="mx-auto" max-width="400">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
    <v-card-title>{{newsTitle}}</v-card-title>
    <v-card-subtitle>{{newsAuthor}}</v-card-subtitle>
    <v-card-text>{{newsDescription}}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <slot name="button"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["newsTitle", "newsAuthor", "newsDescription"]
};
</script>