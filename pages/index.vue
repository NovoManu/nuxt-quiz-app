<template>
  <section class="container">
    <div class="start-page">
      <div class="start-page__content">
        <img src="~/static/img/finalMap.png" />
        <h1>Vocabulary Quiz</h1>
        <p>Ready to test your knowledge and learn some new words?</p>
        <Button />
      </div>
    </div>
    <div class="questions-page">
      <div class="questions-page__block">
        <div class="field">
          <h1>Hey, what's your name?*</h1>
          <input
            class="field-text"
            placeholder="Type your answer here..."
            type="text"
          />
          <Button />
        </div>
      </div>
      <div class="questions-page__block">
        <div class="field">
          <h1>Question 1</h1>
          <div class="field-group">
            <div class="field-group__item">
              <div class="key">
                <span class="invisible">Key</span>
                <span class="visible">A</span>
              </div>
              Answer 1
            </div>
            <div class="field-group__item">
              <div class="key">
                <span class="invisible">Key</span>
                <span class="visible">B</span>
              </div>
              Answer 2
            </div>
            <div class="field-group__item success-answer">
              <div class="key">
                <span class="invisible">Key</span>
                <span class="visible">C</span>
              </div>
              Answer 3
            </div>
            <div class="field-group__item error-answer">
              <div class="key">
                <span class="invisible">Key</span>
                <span class="visible">D</span>
              </div>
              Answer 4
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '~/elements/Button.vue'

export default {
  components: {
    Button
  }
}
</script>
