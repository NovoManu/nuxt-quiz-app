<template>
  <div class="btn-key" v-on="$listeners">
    <span>press</span>
    <strong> <slot /> </strong>
  </div>
</template>

<script>
export default {
  name: 'AppButtonKey'
}
</script>
