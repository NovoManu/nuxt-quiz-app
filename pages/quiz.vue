<template>
  <div class="quiz-page">
    <div class="quiz-page__block">
      <NameSelector @nextQuestionScroll="nextQuestionScroll" />
    </div>
    <QuizQuestion
      v-for="question in questions"
      :id="`question-${question.id}`"
      :key="question.id"
      :question="question"
      @nextQuestionScroll="nextQuestionScroll"
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
  async fetch({ store }) {
    await store.dispatch('fetchQuestions')
  },
  methods: {
    nextQuestionScroll(index, timeout = false) {
      if (index >= this.questions.length + 1) return
      if (timeout) {
        setTimeout(() => {
          this.scroll(index)
        }, 1300)
      } else this.scroll(index)
    },
    scroll(index) {
      this.$scrollTo(`#question-${index}`, 500, {
        easing: 'ease-out'
      })
    }
  }
}
</script>
