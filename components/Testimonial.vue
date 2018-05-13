<template>
  <section class="Testimonial"></section>
</template>

<script>
export default {
  props: {
    pAuthor: {
      type: String,
      required: false,
    },
    pBackgroundColor: {
      type: String,
      required: false,
      default: '#503bd2',
    },
    pImage: {
      type: String,
      required: false,
    },
    pQuote: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      author: this.pAuthor,
      backgroundStyle: {
        backgroundColor: this.pBackgroundColor,
      },
      image: this.pImage,
      quote: this.pQuote,
    }
  },
}
</script>

<style lang="postcss">

</style>
