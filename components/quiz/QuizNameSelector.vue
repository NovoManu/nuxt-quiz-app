<template>
  <div class="field">
    <h1>Hey, what's your name?*</h1>
    <input
      v-model="name"
      class="field-text"
      placeholder="Type your name here..."
      type="text"
    />
    <v-button v-if="name">Ok</v-button>
    <v-button-key v-if="name"> Enter </v-button-key>
  </div>
</template>

<script>
export default {
  name: 'QuizNameSelector',
  data() {
    return {
      name: ''
    }
  }
}
</script>
