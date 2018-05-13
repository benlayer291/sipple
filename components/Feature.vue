<template>
  <section class="Feature"></section>
</template>

<script>
export default {
  props: {
    pBackgroundColor: {
      type: String,
      required: false,
      default: '#503bd2',
    },
    pImage: {
      type: String,
      required: false,
    },
    pIntro: {
      type: String,
      required: false,
    },
    pReverse: {
      type: Boolean,
      required: true,
      default: false
    },
    pText: {
      type: String,
      required: false,
    },
    pTitle: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      backgroundStyle: {
        backgroundColor: this.pBackgroundColor,
      },
      image: this.pImage,
      intro: this.pIntro,
      reverse: this.pReverse,
      text: this.pText,
      title: this.pTitle,
    }
  },
}
</script>

<style lang="postcss">

</style>
