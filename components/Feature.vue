<template>
  <section class="Feature">
    <div class="grid">
      <div class="grid__item  u-1/2@sm">
        <img src="/imgs/solution1.jpg" alt="">
      </div>
      <div class="grid__item  u-1/4@sm">
        
      </div>
      <div class="grid__item  u-1/4@sm"></div>
    </div>

  </section>
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
