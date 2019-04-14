<template>
  <div class="quiz-page">
    <div class="quiz-page__block">
      <NameSelector
        :name="name"
        @nextQuestionScroll="nextQuestionScroll"
        @setName="name = $event"
      />
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
    return {
      timeoutDelay: 1300,
      name: ''
    }
  },
  computed: {
    questions() {
      return this.$store.state.questions
    },
    currentScore() {
      return this.$store.getters.getCorrectAnswersPercentage
    }
  },
  async fetch({ store }) {
    await store.dispatch('fetchQuestions')
  },
  methods: {
    nextQuestionScroll(index, timeout = false) {
      if (!this.checkAllAnswersDone()) {
        this.$store.dispatch('createResult', {
          name: this.name || 'New Player',
          score: this.currentScore
        })
        setTimeout(() => {
          this.$nuxt.$router.push('/scores')
        }, this.timeoutDelay)
      }
      if (index >= this.questions.length + 1) return
      if (timeout) {
        setTimeout(() => {
          this.scroll(index)
        }, this.timeoutDelay)
      } else this.scroll(index)
    },
    scroll(index) {
      this.$scrollTo(`#question-${index}`, 500, {
        easing: 'ease-out'
      })
    },
    checkAllAnswersDone() {
      return !!this.questions.find(question => question.correctAnswer === null)
    }
  }
}
</script>
