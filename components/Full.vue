<template>
  <section class="Full" :style="backgroundStyle">
    
    <div class="Full__content" :style="`color: ${color}`">
      <div class="Full__text" v-html="text"></div>
      <a :href="cta.link" class="Full__button  button" :class="'button--' + cta.theme">{{ cta.text }}</a>
    </div>
      
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
    pColor: {
      type: String,
      required: false,
    },
    pCta:{
      type: Object,
      required: false
    },
    pText: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      color: this.pColor,
      backgroundStyle: {
        backgroundColor: this.pBackgroundColor,
        backgroundImage: this.pBackgroundImage,
      },
      cta: this.pCta,
      text: this.pText,
    }
  }
}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.Full {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  padding: 20% 10%;
  color: var(--white);
  text-align: center;

  @media(--sm) {
    min-height: 90vh;
    padding: var(--bsu-lg);
  }

  &__content {

    & p {
      max-width: 20em;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__button {
    margin-top: var(--bsu);
  }

}

</style>
