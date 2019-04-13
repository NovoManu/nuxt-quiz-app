<template>
  <div v-observe-visibility="visibilityChanged" class="quiz-page__block">
    <div class="field">
      <h1>{{ question.question }}</h1>
      <div class="field-group">
        <div
          v-for="(answer, index) in question.answers"
          :key="index"
          class="field-group__item"
          :class="selectedIndex === index ? answerClass : ''"
          @click="checkAnswer(index)"
        >
          <div class="key">
            <span class="invisible">Key</span>
            <span class="visible">{{ keys[index] }}</span>
          </div>
          {{ answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizQuestion',
  props: {
    question: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      keys: ['A', 'B', 'C', 'D'],
      isVisible: false,
      answerClass: '',
      selectedIndex: null
    }
  },
  mounted() {
    window.addEventListener('keyup', this.getKey)
  },
  methods: {
    getKey(e) {
      if (!this.isVisible) return
      const keyBinding = {
        a: 0,
        b: 1,
        c: 2,
        d: 3
      }
      const key = keyBinding[e.key]
      if (key >= 0) this.checkAnswer(key)
    },
    async checkAnswer(index) {
      if (this.question.correctAnswer !== null) return
      this.selectedIndex = index
      const answer = await this.$store.dispatch(
        'getAnswer',
        this.question,
        index
      )
      if (answer === index) {
        this.answerClass = 'success-answer'
      } else this.answerClass = 'error-answer'
    },
    visibilityChanged(isVisible) {
      this.isVisible = isVisible
    }
  }
}
</script>
