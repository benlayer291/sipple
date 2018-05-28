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
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  padding: var(--bsu-lg);
  color: var(--white);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    height: 11vh;
    background-color: inherit;
    animation: resize .5s var(--in-out) .5s both;
    backface-visibility: hidden;
  }

  &__text {
    position: relative;
    z-index: 1;
    text-align: center;
    margin: auto;
    opacity: 0;
    animation: fadeIn .5s var(--in-out) .5s both;
    backface-visibility: hidden;

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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10vh) translateZ(0);
  }
  to {
    opacity: 1;
    transform: translateY(0px) translateZ(0);
  }
}

@keyframes resize {
  from {
    transform: translateY(100%) translateZ(0);
  }
  to {
    transform: translateY(0) translateZ(0);
  }
}
</style>



