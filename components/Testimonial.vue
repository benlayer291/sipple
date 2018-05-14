<template>
  <section class="Testimonial" :style="backgroundStyle">
    <div class="Testimonial__image">
      <div class="Testimonial__media  media  media--square">
        <img :src="`/imgs/${image}`" :alt="imageTitle">
      </div>
    </div>
    <blockquote class="Testimonial__quote  t-h3" v-html="quote"></blockquote>
    <cite class="Testimonial__author  t-para">&mdash; {{author}}</cite>
  </section>
</template>

<script>
export default {
  props: {
    pBackgroundColor: {
      type: String,
      required: false,
      default: '#503bd2',
    },
    pImage: {
      type: String,
      required: false,
    },
    pImageTitle: {
      type: String,
      required: false,
    },
    pQuote: {
      type: String,
      required: false,
    },
    pAuthor: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      backgroundStyle: {
        backgroundColor: this.pBackgroundColor,
      },
      image: this.pImage,
      imageTitle: this.pImageTitle,
      quote: this.pQuote,
      author: this.pAuthor,
    }
  },
}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.Testimonial {
  text-align: center;
  padding: 10%;

  @media(--sm) {
    padding: 20% 10%;
  }

  &__image {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  &__media {
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: var(--bsu-lg);
  }

  &__quote {
    max-width: 19em;
    margin-left: auto;
    margin-right: auto;

    & p {
      font: inherit;
      letter-spacing: inherit;
    }
  }

  &__author {
    display: block;
    margin-top: 3em;
  }
}

</style>
