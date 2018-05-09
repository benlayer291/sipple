<template>
  <section class="Hero" :style="backgroundStyle">
    <div class="Hero__text" v-html="text"></div>
  </section>
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
    pText: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      backgroundStyle: {
        backgroundColor: this.pBackgroundColor,
        backgroundImage: this.pBackgroundImage,
      },
      text: this.pText,
    }
  },
}
</script>

<style lang="postcss">
.Hero {
  height: 100px;
  width: 100%;
  margin-bottom: 20px;
}
</style>



