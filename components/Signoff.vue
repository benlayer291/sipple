<template>
  <section class="Signoff" :style="backgroundStyle">
    
    <img v-if="image" :src="`/imgs/${image}`" alt="Sipple">
    
    <div v-if="text" class="Signoff__content">
      <div class="Signoff__text" v-html="text"></div>
      <a v-if="cta" :href="cta.link" class="Signoff__button  button" :class="'button--' + cta.theme">{{ cta.text }}</a>
    </div>
    
      
  </section>
</template>

<script>
export default {
  props: {
    pBackgroundColor: {
      type: String,
      required: false,
      default: '#ffffff',
    },
    pCta:{
      type: Object,
      required: false
    },
    pText: {
      type: String,
      required: false,
    },
    pTitle: {
      type: String,
      required: false,
    },
    pImage: {
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
@import "../assets/css/settings/vars";

.Signoff {

  &__content {
    text-align: center;
    padding: 5% 10% 10% 10%;

    & h3 {
      max-width: 12em;
      margin-left: auto;
      margin-right: auto;
    }

    & p {
      max-width: 20em;
      margin-left: auto;
      margin-right: auto;
    }
  }

}

</style>
