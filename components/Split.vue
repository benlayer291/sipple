<template>
  <section class="Split" :class="{'is-reverse': reverse}" :style="backgroundStyle">
    <div class="Hero__text" v-html="text"></div>
    <a :href="cta.link" class="Hero__button  button" :class="'button--' + cta.theme">{{ cta.text }}</a>
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
    }
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
</script>

<style lang="postcss">
.Split {
  width: 100%;
  margin-bottom: 20px;
}
</style>



