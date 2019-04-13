import Vue from 'vue'
import Button from '~/elements/Button.vue'
import ButtonKey from '~/elements/ButtonKey.vue'

const prefix = 'v-'

Vue.component(`${prefix}button`, Button)
Vue.component(`${prefix}button-key`, ButtonKey)
