<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by5">
        <img :src="anime.image_url" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-6">
          {{ anime.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    anime: {
      default: () => {},
      type: Object
    }
  }
}
</script>
