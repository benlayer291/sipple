<template>
  <main>
    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>The smarter way to hydrate on-the-go without the plastic waste</h1>"
    />

    <!-- Split -->
    <Split
      p-image="1.png"
      p-color="#fff"
      p-background-color="#59a0e6"
      :p-cta="{ text: 'Our Story', theme: 'white', link: '/story' }"
      p-text="
        <p>Sipple Hydration Stations serve freshly filtered, UV purified water, either cool or cold temperature.</p>
        <p>We’re the sustainable alternative to bottled water.</p>
      "
      :p-reverse="false"
    />

    <!-- Split -->
    <Split
      p-image="4.jpg"
      p-background-color="#fff"
      p-text="
        <h3>What’s better than recycling?</h3>
        <p>Having nothing to recycle.</p>
        <p>Our water refills use zero packaging which means zero waste to dispose of.</p>
      "
      :p-reverse="true"
    />

    <!-- Full -->
    <Full 
      p-background-color="#53565a"
      p-color="white"
      :p-cta="{ text: 'The problem', theme: 'white', link: '/problem' }"
      p-text="
        <h1>Plastic ain’t fantastic</h1>
        <p>Single-use plastic bottles suck.<br>They trash our planet and that’s not okay.</p>
      "
    />

    <!-- Split -->
    <Split
      p-image="2.jpg"
      p-background-color="#fff"
      :p-cta="{ text: 'Find Out More', theme: '', link: '/solution' }"
      p-text="
        <h3>Our solution</h3>
        <p>How do Sipple Hydration Stations work?</p>
      "
      :p-reverse="false"
    />

    <!-- Full -->
    <Full 
      p-background-color="#59a0e6"
      p-color="white"
      :p-cta="{ text: 'Join the movement', theme: 'white', link: 'https://vuejs.org/' }"
      p-text="
        <h3>Our mission</h3>
        <p>Our goal is to change the way the UK hydrates, eliminate excessive waste and protect the planet.</p> 
        <p>Anyone can join us.</p>
      "
    />

    <!-- Split -->
    <Split
      p-color="#fff"
      p-image="3.jpg"
      p-background-color="#53565a"
      :p-cta="{ text: 'Contact', theme: 'white', link: 'https://vuejs.org/' }"
      p-text="
        <h3>Say Hello</h3>
        <p>Drop us a line to find out where to find us.</p>
      "
      :p-reverse="false"
    />


  </main>
</template>

<script>
import Hero from '@/components/Hero'
import Full from '@/components/Full'
import Split from '@/components/Split'

export default {
  components: {
    Hero,
    Full,
    Split,
  }
}
</script>
