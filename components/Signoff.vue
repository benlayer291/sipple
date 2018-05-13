<template>
  <section class="Signoff"></section>
</template>

<script>
export default {
  props: {
    pBackgroundColor: {
      type: String,
      required: false,
      default: '#503bd2',
    },
    pCta:{
      type: Object,
      required: false
    },
    pImage: {
      type: String,
      required: false,
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
      cta: this.pCta,
      image: this.pImage,
      text: this.pText,
      title: this.pTitle,
    }
  },
}
</script>

<style lang="postcss">

</style>
