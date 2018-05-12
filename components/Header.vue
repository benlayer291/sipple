<template>
  <header class="Header" :class="{ 'is-open': isOpen }">

    <button class="Header__switch" type="button" @click="toggleNav">
      Menu
    </button>

    <nav class="Header__nav">
      <div class="Header__scroll">
        <ul class="Header__list  t-lede">
          <li class="Header__item">
            <nuxt-link to="/" class="Header__link">Our story</nuxt-link>
          </li>
          <li class="Header__item">
            <nuxt-link to="/problem" class="Header__link">The problem</nuxt-link>
          </li>
          <li class="Header__item">
            <nuxt-link to="/solution" class="Header__link">The solution</nuxt-link>
          </li>
          <li class="Header__item">
            <nuxt-link to="/technology" class="Header__link">Our technology</nuxt-link>
          </li>
          <li class="Header__item">
            <nuxt-link to="/mission" class="Header__link">Our mission</nuxt-link>
          </li>
          <li class="Header__item">
            <nuxt-link to="/contact" class="Header__link">Contact</nuxt-link>
          </li>
          <li class="Header__item">
            <nuxt-link to="/styleguide" class="Header__link">Styleguide</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z1);

  &__switch {
    position: absolute;
    top: 0;
    left: 0;
    padding: var(--bsu-lg);
    z-index: var(--z2);
    color: #ccc;

    .Header.is-open & {
      color: var(--grey1);
    }
  }

  &__nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    background-color: var(--pink);
    transform: translateX(-100%) translateZ(0);
    backface-visibility: hidden;
    transition: transform var(--trans);

    .Header.is-open & {
      transform: translateX(0) translateZ(0);
    }
  }

  &__scroll {
    padding-top: var(--bsu-xl);
    padding-bottom: var(--bsu-xl);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  &__list {
    margin-bottom: 0;
    padding: var(--bsu-lg);
    font-weight: 300;
    text-transform: none;
    
    @media(--smMax) {
      overflow: hidden;
    }

  }

  &__item {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-10px) translateZ(0);
    transition: 
      opacity var(--trans),
      visibility var(--trans),
      transform var(--trans) .25s;

    @nest .Header.is-open & {
      opacity: 1;
      visibility: visible;
      transform: translateX(0) translateZ(0);
      transition: 
        opacity var(--trans),
        visibility var(--trans),
        transform var(--trans);

      &:nth-child(1) {transition-delay: .25s;}
      &:nth-child(2) {transition-delay: .3s;}
      &:nth-child(3) {transition-delay: .35s;}
      &:nth-child(4) {transition-delay: .4s;}
      &:nth-child(5) {transition-delay: .45s;}
      &:nth-child(6) {transition-delay: .5s;}
      &:nth-child(7) {transition-delay: .55s;}
    }
  }

  &__link {
    display: inline-block;
    padding: .25em 0;
  }
}

</style>


