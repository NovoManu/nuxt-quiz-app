<template>
  <div v-parallax="0.3" class="field">
    <h1>Hey, what's your name?</h1>
    <input
      v-model="name"
      class="field-text"
      placeholder="Type your name here..."
      type="text"
    />
    <v-button v-if="name" @click="$emit('nextQuestionScroll', 1)">
      Ok
    </v-button>
  </div>
</template>

<script>
export default {
  name: 'QuizNameSelector',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    scroll() {
      this.$scrollTo(`#question-${1}`, 500, {
        easing: 'ease-out'
      })
    }
  }
}
</script>
