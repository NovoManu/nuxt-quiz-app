<template>
  <button v-bind="$attrs" type="button" class="btn btn-info" v-on="$listeners">
    <div class="btn__content">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  inheritAttrs: false
}
</script>
