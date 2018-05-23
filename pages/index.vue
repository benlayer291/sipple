<template>
  <main>
    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>The smarter way to hydrate on-the-go without the plastic waste.</h1>"
    />

    <!-- Split -->
    <Split
      p-color="#fff"
      p-background-color="#6eafff"
      p-text="
        <p>Sipple Hydration Stations serve freshly filtered, UV purified water, either cool or icy cold.</p> 
        <p>We are the sustainable alternative to bottled water.</p>
      "
      p-image="station-cape.png"
      :p-cta="{ text: 'About us', theme: 'white', link: '/about' }"
      :p-reverse="false"
    />

    <!-- Split-text -->
    <Split-text
      p-color-a="#fff"
      p-background-color-a="#e65a5a"
      p-text-a="
        <h2 class='fitDouble  fitDouble--split'>
          <span class='fitDouble__large'>Water</span>
          <span class='fitDouble__small'>without the</span>
          <span class='fitDouble__large'>waste</span>
        </h2>
      "
      p-background-color-b="#fff"
      p-text-b="
        <h3>Better than recycling</h3>
        <p class='t-small'>What's better than recycling? Having nothing to recycle.</p>
        <p class='t-small'>Our water refills use zero packaging which means zero waste to dispose of.</p>
      "
    />

    <!-- Full -->
    <Full 
      p-background-color="#53565a"
      p-background-image="bottle-bg.png"
      p-color="white"
      :p-cta="{ text: 'The problem', theme: 'white', link: '/problem' }"
      p-text="
        <h2 class='fit'>
          <span class='fit__large'> Plastic ain’t fantastic</span>
        </h2>
        <p>Single-use plastic bottles suck.<br>They trash our planet and that’s not okay.</p>
      "
    />

    <!-- Split -->
    <Split
      p-background-color="#fff"
      p-image="pour-bottle.png"
      p-background-color-alt="#ebebeb"
      p-text="
        <h3>The smarter alternative</h3>
        <p>How do Sipple Hydration Stations work?</p>
      "
      :p-cta="{ text: 'Our solution', theme: '', link: '/solution' }"
      :p-reverse="false"
    />

    <!-- Full -->
    <Full 
      p-color="white"
      p-background-color="#6eafff"
      p-background-image="finger-bottle.png"
      p-text="
        <h3>Our future’s not disposable</h3>
        <p>Our goal is to change the way the nation drinks water, eliminate excessive waste and protect the planet.</p>
      "
      :p-cta="{ text: 'Join the movement', theme: 'white', link: 'https://vuejs.org/' }"
    />

    <!-- Split -->
    <Split
      p-color="#fff"
      p-image="cloud-tele.jpg"
      p-background-color="#53565a"
      :p-cta="{ text: 'Contact', theme: 'white', link: 'https://vuejs.org/' }"
      p-text="
        <h3>Say hi</h3>
        <p>Drop us a line about where to find us.</p>
      "
      :p-reverse="false"
    />

    <!-- Full -->
    <Full 
      p-background-color="#6eafff"
      p-background-image="join-movement.png"
    />

  </main>
</template>

<script>
import Hero from '@/components/Hero'
import Full from '@/components/Full'
import Split from '@/components/Split'
import SplitText from '@/components/Split-text'

export default {
  components: {
    Hero,
    Full,
    Split,
    SplitText,
  }
}
</script>
