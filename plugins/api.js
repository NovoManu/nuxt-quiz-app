const apiFactory = axios => ({
  fetchQuestions() {
    return axios.get(`questions/`).then(res => res.data)
  },
  getAnswer(questionId) {
    return axios.get(`answers/${questionId}/`).then(res => res.data)
  },
  fetchResults() {
    return axios.get(`results/`).then(res => res.data)
  },
  createResult(result) {
    return axios.post(`results/`, result).then(res => res.data)
  }
})

export default ({ $axios }, inject) => {
  const api = apiFactory($axios)
  inject('api', api)
}
