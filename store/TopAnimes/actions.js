export default {
  async fetchTopAnimes({ commit }) {
    const { top } = await this.$axios.$get('https://api.jikan.moe/v3/top/anime')
    commit('updateTopAnimes', top)
  }
}
