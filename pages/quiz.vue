<template>
  <div class="quiz-page">
    <div class="quiz-page__block">
      <NameSelector />
    </div>
    <QuizQuestion
      v-for="question in questions"
      :key="question.id"
      :question="question"
    />
  </div>
</template>

<script>
import NameSelector from '~/components/quiz/QuizNameSelector.vue'
import QuizQuestion from '~/components/quiz/QuizQuestion.vue'

export default {
  layout: 'main',
  components: {
    NameSelector,
    QuizQuestion
  },
  data() {
    return {}
  },
  computed: {
    questions() {
      return this.$store.state.questions
    }
  },
  watch: {
    questions: {
      handler(val) {
        console.log(val)
      }
    }
  },
  async fetch({ store }) {
    await store.dispatch('fetchQuestions')
  },
  methods: {}
}
</script>
