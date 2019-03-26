<template>
  <section>
    <AnimesList :animes="topAnimes" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import AnimesList from '@/components/AnimesList'

export default {
  components: {
    AnimesList
  },

  computed: {
    ...mapGetters({
      topAnimes: 'TopAnimes/getUpdatedTopAnimesList'
    })
  },

  async fetch({ store }) {
    await store.dispatch('TopAnimes/fetchTopAnimes')
  }

}
</script>
