import cloneDeep from 'lodash/cloneDeep'

export const state = () => ({
  questions: [],
  results: [],
  answers: []
})
export const actions = {
  async fetchQuestions({ commit }) {
    const questions = await this.$api.fetchQuestions()
    commit(
      'fetchQuestions',
      questions.map(question =>
        Object.assign(question, { correctAnswer: null })
      )
    )
  },
  async getAnswer({ commit }, question) {
    const { answerIndex } = await this.$api.getAnswer(question.id)
    commit('setAnswer', { id: question.id, answer: answerIndex })
    return answerIndex
  },
  async fetchResults({ commit }) {
    const results = await this.$api.fetchResults()
    commit('fetchResults', results)
  },
  async createResult({ commit }, result) {
    await this.$api.createResult(result)
  }
}
export const mutations = {
  fetchQuestions(state, questions) {
    state.questions = questions
  },
  setAnswer(state, { id, answer }) {
    const question = state.questions.find(question => question.id === id)
    if (question) question.correctAnswer = answer
  },
  addAnswer(state, answer) {
    state.answers.push(answer)
  },
  fetchResults(state, results) {
    state.results = results
  }
}
export const getters = {
  getSortedResults: state => {
    const results = cloneDeep(state.results)
    return results
      .sort((a, b) => Number(a.score) - Number(b.score))
      .reverse()
      .slice(0, 10)
  },
  getCorrectAnswersPercentage: state => {
    const correct = state.answers.filter(answer => answer).length
    const incorrect = state.answers.filter(answer => !answer).length
    return Math.ceil((correct * 100) / (correct + incorrect)) || 0
  }
}
