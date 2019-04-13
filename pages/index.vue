<template>
  <div class="start-page">
    <div class="start-page__content">
      <img src="~/static/img/finalMap.png" />
      <h1>Vocabulary Quiz</h1>
      <p>Ready to test your knowledge and learn some new words?</p>
      <v-button @click="$nuxt.$router.push('/quiz')"> Start </v-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main'
}
</script>
