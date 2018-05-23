<template>
  <section class="Hero" :style="backgroundStyle">
    <div class="Hero__text" v-html="text"></div>
  </section>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  components: {
    SvgIcon
  },
  props: {
    pBackgroundColor: {
      type: String,
      required: false,
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

.Hero {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  padding: var(--bsu-lg);
  color: var(--white);

  &__text {
    text-align: center;
    margin: auto;

    & h1 {
      max-width: 20em;
      margin-right: auto;
      margin-left: auto;
    }

    & p {
      max-width: 22em;
      margin-right: auto;
      margin-left: auto;
    }
  }
}
</style>



