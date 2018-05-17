<template>
  <section class="Split" :class="{'is-reverse': reverse}" :style="backgroundStyle">
    <div class="grid">
      <div class="Split__item  is-content  grid__item  u-1/2@sm">
        <div class="Split__content" :style="`color: ${color}`">
          <div class="Split__text" v-html="text"></div>
          <a v-if="cta" :href="cta.link" class="Split__button  button" :class="'button--' + cta.theme">{{ cta.text }}</a>
        </div>
      </div>
      <div class="Split__item  is-image  grid__item  u-1/2@sm" :style="`background-image: url(/imgs/${image})`">
        <div class="Split__image  media  media--portrait"></div>
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
    pBackgroundImage: {
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
    }
  },
  data() {
    return {
      color: this.pColor,
      image: this.pImage,
      cta: this.pCta,
      reverse: this.pReverse,
      text: this.pText,
    }
  },
  computed: {
    backgroundStyle() {
      const style = {}

      style.backgroundColor = this.pBackgroundColor

      if (this.pBackgroundImage) {
        style.backgroundImage = this.pBackgroundImage
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


    &.is-content {

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
    }
  }

  &__content {
    width: 100%;
    padding: 10%;
    text-align: center;

    & h3,
    & h4 {
      max-width: 14em;
      margin-left: auto;
      margin-right: auto;
    }

    & p {
      max-width: 13em;
      margin-left: auto;
      margin-right: auto;
    }

    & p.t-small {
      max-width: 19em;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__button {
    margin-top: var(--bsu);
  }
}
</style>



