<template>
  <section class="animes-list container">
    <h2 class="title has-text-centered">
      Top Animes
    </h2>

    <div class="columns is-multiline">
      <div v-for="anime in animes" :key="anime.mal_id" class="column is-one-fifth">
        <AnimeCard :anime="anime" />
      </div>
    </div>
  </section>
</template>

<script>
import AnimeCard from './AnimeCard'

export default {
  components: {
    AnimeCard
  },

  props: {
    animes: {
      default: () => [],
      type: Array
    }
  }
}
</script>
