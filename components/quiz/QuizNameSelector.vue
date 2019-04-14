<template>
  <div v-parallax="0.3" class="field">
    <h1>Hey, what's your name?</h1>
    <input
      :value="name"
      class="field-text"
      placeholder="Type your name here..."
      type="text"
      @input="setName"
    />
    <v-button v-if="name" @click="$emit('nextQuestionScroll', 1)">
      Ok
    </v-button>
  </div>
</template>

<script>
export default {
  name: 'QuizNameSelector',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    setName(e) {
      this.$emit('setName', e.target.value)
    }
  }
}
</script>
