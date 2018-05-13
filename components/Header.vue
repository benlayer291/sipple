<template>
  <header class="Header" :class="{ 'is-open': isOpen }">

    <nuxt-link to="/" class="Header__logo">
      <SvgIcon title="Logo" file="logo" />
    </nuxt-link>

    <button class="Header__switch" type="button" @click="toggleNav">
      <span class="Header__burger"></span>
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
import SvgIcon from '@/components/SvgIcon'

export default {

  components: {
    SvgIcon
  },
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
  text-align: center;

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

  &__logo {
    display: inline-block;
    color: var(--white);
    margin: 0 auto;
    padding: 50px;

    svg {
      width: 180px;
      height: 68px;
    }
  }

  &__burger {
    position: relative;
    margin-top: calc(var(--burger-height) + var(--burger-gutter));
    margin-bottom: calc(var(--burger-height) + var(--burger-gutter));
    user-select: none;

    &, &:before, &:after {
      display: inline-block;
      width: var(--burger-width);
      height: var(--burger-height);
      transform: translate3d(0,0,0) rotate(0deg);
      transform-origin: 50% 50%;
      text-align: left;
      outline: 1px solid transparent;
      background-color: currentColor;
      transition: background-color var(--trans), transform var(--trans), width var(--trans), height var(--trans);
    }
    
    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
    }

    &:before {
      transform: translate3d(0, calc( calc( var(--burger-height) + var(--burger-gutter) ) * -1 ), 0) rotate(0deg);
    }

    &:after {
      transform: translate3d(0, calc(var(--burger-height) + var(--burger-gutter)), 0) rotate(0deg);
    }

    @nest .Header.is-open & {

      &, &:before, &:after {
      }

      & {
        background-color: transparent;
        transform: translate3d(0,0,0) rotate(0deg);
      }

      &:before {
        transform: translate3d(0,0,0) rotate(45deg);
      }

      &:after {
        transform: translate3d(0,0,0) rotate(-45deg);
      }
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
    text-align: left;
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


