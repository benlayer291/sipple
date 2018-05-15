<template>
  <section class="Split">
    <div class="grid">
      <div class="Split__item  is-content  grid__item  u-1/2@sm" :style="backgroundStyleA">
        <div class="Split__content" :style="`color: ${colorA}`">
          <div class="Split__text" v-html="textA"></div>
          <a v-if="ctaA" :href="ctaA.link" class="Split__button  button" :class="'button--' + ctaA.theme">{{ ctaA.text }}</a>
        </div>
      </div>
      <div class="Split__item  is-content  grid__item  u-1/2@sm" :style="backgroundStyleB">
        <div class="Split__content" :style="`color: ${colorB}`">
          <div class="Split__text" v-html="textB"></div>
          <a v-if="ctaB" :href="cta.linkB" class="Split__button  button" :class="'button--' + cta.themeB">{{ cta.textB }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pColorA: {
      type: String,
      required: false,
    },
    pBackgroundColorA: {
      type: String,
      required: true,
      default: '#ffffff',
    },
    pBackgroundImageA: {
      type: String,
      required: false,
    },
    pCtaA:{
      type: Object,
      required: false
    },
    pTextA: {
      type: String,
      required: false,
    },
    pColorB: {
      type: String,
      required: false,
    },
    pBackgroundColorB: {
      type: String,
      required: true,
      default: '#ffffff',
    },
    pBackgroundImageB: {
      type: String,
      required: false,
    },
    pCtaB:{
      type: Object,
      required: false
    },
    pTextB: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      colorA: this.pColorA,
      colorB: this.pColorB,
      imageA: this.pImage,
      imageB: this.pImage,
      ctaA: this.pCtaA,
      ctaB: this.pCtaB,
      textA: this.pTextA,
      textB: this.pTextB,
    }
  },
  computed: {
    backgroundStyleA() {
      const style = {}

      style.backgroundColor = this.pBackgroundColorA

      if (this.pBackgroundImageA) {
        style.backgroundImage = this.pBackgroundImageA
      }

      return style
    },
    backgroundStyleB() {
      const style = {}

      style.backgroundColor = this.pBackgroundColorB

      if (this.pBackgroundImageB) {
        style.backgroundImage = this.pBackgroundImageB
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

    &.is-content {
      align-self: center;

      .Split.is-reverse & {
        order: 0;

        @media(--sm) {
          order: 1;
        }
      }
    }

    &.is-image {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      margin-bottom: 0;

      @media(--sm) {
        min-height: 600px;
      }
    }
  }

  &__content {
    padding: 10%;
    text-align: center;

    @media(--sm) {
      padding: 20% 10%;
    }

    & p {
      max-width: 15.5em;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__button {
    margin-top: var(--bsu);
  }
}
</style>