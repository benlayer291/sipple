<template>
  <section class="Full" :style="backgroundStyle">
    
    <div v-if="text || cta" class="Full__inner" :style="`color: ${color}`">
      <div class="Full__content">
        <div class="Full__text" v-html="text"></div>
        <a v-if="cta" :href="cta.link" class="Full__button  button" :class="'button--' + cta.theme">{{ cta.text }}</a>
      </div>
    </div>
    
    <div class="Full__media">
      <img v-if="image" :src="`/imgs/${image}`" alt="Sipple">
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
    pBackgroundImage: {
      type: String,
      required: false,
    },
    pBackgroundPosition: {
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
    },
    pImage: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      image: this.pImage,
      color: this.pColor,
      cta: this.pCta,
      text: this.pText,
    }
  },
  computed: {
    backgroundStyle() {
      const style = {}

      style.backgroundColor = this.pBackgroundColor

      if (this.pBackgroundImage) {
        style.backgroundImage = `url(/imgs/${this.pBackgroundImage})`
      }

      if (this.pBackgroundPosition) {
        style.backgroundPosition = this.pBackgroundPosition
      }

      return style
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
  min-height: 400px;
  text-align: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: bottom center;

  @media(--sm) {
    min-height: 56.2vw;
  }

  & img {
    width: 100%;

    @supports (object-fit: cover) {

      @media(--smMax) {
        height: 100vw;
        min-height: 400px;
        object-fit: cover;
      }
    }
  }

  &__inner {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    min-height: 400px;
    padding: 14% 10% calc(14% - var(--bsu) );
  }

  &__content {

    & h3 {
      max-width: 14em;
      margin-left: auto;
      margin-right: auto;
    }
    
    & p {
      max-width: 21em;
      margin-left: auto;
      margin-right: auto;
    }

    & p.t-lede {
      max-width: 24.5em;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__button {
    margin-top: 1.75em;
  }

}

</style>
