<template>
  <section class="Full" :style="backgroundStyle">
    
    <div v-if="text" class="Full__content" :style="`color: ${color}`">
      <div class="Full__text" v-html="text"></div>
      <a v-if="cta" :href="cta.link" class="Full__button  button" :class="'button--' + cta.theme">{{ cta.text }}</a>
    </div>
    
    <img v-if="image" :src="`/imgs/${image}`" alt="Sipple">
      
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
  text-align: center;

  @media(--sm) {
    
  }

  & img {
    width: 100%;
  }

  &__content {
    padding: 10%;

    @media(--sm) {
      padding: 10% var(--bsu-lg);
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

  &__large {
    font-size: 2.571428571em;
    display: inline-block;

    & + .Full__small {
      margin-top: .525em;
    }

  }

  &__small {
    display: inline-block;

    & + .Full__large {
      margin-top: .16em;
    }
  }

  &__button {
    margin-top: var(--bsu);
  }

}

</style>
