<template>
  <div class="scores-page">
    <div class="scores-page__content">
      <div class="text-center">
        <img src="~/static/img/star.png" />
        <h1>
          Your Score:
          {{ $store.getters.getCorrectAnswersPercentage | percentage }}
        </h1>
        <v-button @click="$nuxt.$router.push('/quiz')">
          Start new game
        </v-button>
      </div>
    </div>
    <div class="scores-page__top-score">
      <h1>Top 10</h1>
      <div class="top-score__list">
        <TableRow v-for="person in results" :key="person.id" :person="person" />
      </div>
    </div>
  </div>
</template>

<script>
import TableRow from '~/components/scores/ScoresTableRow.vue'

export default {
  layout: 'main',
  components: {
    TableRow
  },
  computed: {
    results() {
      return this.$store.getters.getSortedResults
    }
  },
  async fetch({ store }) {
    await store.dispatch('fetchResults')
  }
}
</script>
