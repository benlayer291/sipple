<template>
  <section class="Full" :style="backgroundStyle">
    
    <img v-if="image" :src="`/imgs/${image}`" alt="Sipple">
      
    <div v-if="text || cta" class="Full__content  Full__content--absolute" :style="`color: ${color}`">
      <div class="Full__text" v-html="text"></div>
      <a v-if="cta" :href="cta.link" class="Full__button  button" :class="'button--' + cta.theme">{{ cta.text }}</a>
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
    pColor: {
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
  text-align: center;
  position: relative;

  & img {
    width: 100%;
  }

  &__content {
    padding: 10%;

    @media(--sm) {
      padding: 20% var(--bsu-lg);
    }
    
    & p {
      max-width: 22em;
      margin-left: auto;
      margin-right: auto;
    }

    & p.t-lede {
      max-width: 24.5em;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__content--absolute {
    padding: 0;
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, 0);

    @media(--sm) {
      bottom: 20%;
    }
  }

  &__button {
    margin-top: var(--bsu);
    min-width: 300px;
  }

}

</style>
