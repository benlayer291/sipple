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
      default: '#503bd2',
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
@import "../assets/css/settings/vars";

.Hero {
  width: 100%;
  height: 100vh;
  margin-bottom: 20px;
  color: var(--white);
}
</style>



