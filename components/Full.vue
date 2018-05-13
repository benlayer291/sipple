<template>
  <section class="Full"></section>
</template>

<script>
export default {
 props: {
   pBackgroundColor: {
      type: String,
      required: true,
      default: '#ffffff',
    },
    pBackgroundImage: {
      type: String,
      required: false,
    },
    pCenter: {
      type: Boolean,
      required: false,
    },
    pColor: {
      type: String,
      required: false,
    },
    pCta:{
      type: Object,
      required: false
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
    data() {
    return {
      backgroundStyle: {
        backgroundColor: this.pBackgroundColor,
        backgroundImage: this.pBackgroundImage,
      },
      cta: this.pCta,
      reverse: this.pReverse,
      text: this.pText,
    }
  },
 }
}
</script>

<style lang="postcss">

</style>
