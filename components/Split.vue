<template>
  <section class="Split" :class="{'is-reverse': reverse}" :style="backgroundStyle">
    <div class="grid">
      <div class="Split__item  is-text  grid__item  u-1/2@sm">
        <div class="Split__content" :style="`color: ${color}`">
          <div class="Split__text" v-html="text"></div>
          <a v-if="cta" :href="cta.link" class="Split__button  button" :class="'button--' + cta.theme">{{ cta.text }}</a>
        </div>
      </div>
      <div class="Split__item  is-image  grid__item  u-1/2@sm" :style="backgroundStyleAlt">
        <div :class="`Split__image  media  media--${ratio}`"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pColor: {
      type: String,
      required: false,
    },
    pBackgroundColor: {
      type: String,
      required: true,
      default: '#ffffff',
    },
    pBackgroundColorAlt: {
      type: String,
      required: false,
    },
    pImage: {
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
    pRatio: {
      type: String,
      required: false,
      default: 'portrait',
    }
  },
  data() {
    return {
      color: this.pColor,
      cta: this.pCta,
      reverse: this.pReverse,
      text: this.pText,
      ratio: this.pRatio,
    }
  },
  computed: {
    backgroundStyle() {
      const style = {}

      style.backgroundColor = this.pBackgroundColor

      return style
    },
    backgroundStyleAlt() {
      const style = {}

      style.backgroundColor = this.pBackgroundColorAlt

      if (this.pImage) {
        style.backgroundImage = `url(/imgs/${this.pImage})`
      }

      return style
    }
  }
}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.Split {

  &__item {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &.is-text {

      .Split.is-reverse & {
        order: 1;
      }
    }

    &.is-image {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      margin-bottom: 0;

      @media(--smMax) {
        order: -1;
      }
      
    }
  }

  &__content {
    width: 100%;
    padding: 15.5% 10% calc(15.5% - var(--bsu-sm) );
    text-align: center;

    & h3,
    & h4 {
      max-width: 14em;
      margin-left: auto;
      margin-right: auto;
    }

    & p {
      max-width: 15em;
      margin-left: auto;
      margin-right: auto;
    }

    & p.t-small {
      max-width: 19em;
      margin-left: auto;
      margin-right: auto;
    }

    & p + h4 {
      margin-top: var(--bsu-lg);
    }
  }

  &__button {
    margin-top: var(--bsu);
  }
}
</style>



