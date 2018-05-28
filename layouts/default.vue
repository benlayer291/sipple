<template>
  <div>
    <Svgs />
    <Header />
    <div class="Main">
      <nuxt/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Svgs from '@/components/Svgs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Svgs,
    Header,
    Footer,
  },
  data() {
    return {
      headerOpen: false,
    }
  },
  head() {
    return {
      htmlAttrs: {
          class: this.headerOpen ? 'has-nav' : ''
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', (e) => {
      this.$bus.$emit('scroll', window.scrollY)
    })
    this.$bus.$on('header::toggle', (headerOpen) => {
      this.headerOpen = headerOpen
      console.log(headerOpen)
    })
  }
}
</script>