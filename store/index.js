export const state = () => ({
  questions: []
})
export const actions = {
  async fetchQuestions({ commit }) {
    const data = await this.$api.fetchQuestions()
    commit(
      'fetchQuestions',
      data.map(question => Object.assign(question, { correctAnswer: null }))
    )
  },
  async getAnswer({ commit }, question) {
    const { answerIndex } = await this.$api.getAnswer(question.id)
    commit('setAnswer', { id: question.id, answer: answerIndex })
    return answerIndex
  }
}
export const mutations = {
  fetchQuestions(state, questions) {
    state.questions = questions
  },
  setAnswer(state, { id, answer }) {
    const question = state.questions.find(question => question.id === id)
    if (question) question.correctAnswer = answer
  }
}
export const getters = {}
