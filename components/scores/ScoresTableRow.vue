<template>
  <div class="top-score__list-item">
    <strong> {{ person.name }} </strong>
    <span> {{ person.score | percentage }} </span>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
