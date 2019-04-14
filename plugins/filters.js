import Vue from 'vue'

export const percentage = number => `${number}%`

const filters = {
  percentage
}
export default filters

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
