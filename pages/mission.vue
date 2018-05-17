<template>
  <main>

    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>Sipple was founded to combat the environmental damage caused by the bottled water industry.</h1>"
    />

    <!-- Full -->
    <Full 
      p-background-color="#e65a5a"
      p-color="#fff"
      p-text="
        <h2 class='fitDouble'>
          <span class='fitDouble__small'>Our mission is ending our</span>
          <span class='fitDouble__large'>cultural addiction</span>
          <span class='fitDouble__small'>to disposable plastics</span>
        </h2>
      "
    />

    <Full 
      p-image="mission1.jpg"
    />

    <!-- Split -->
    <Split
      p-image="station-cape.png"
      p-color="#fff"
      p-background-color="#53565a"
      :p-cta="{ text: 'Our Solution', theme: 'white', link: 'https://vuejs.org/' }"
      p-text="
        <p>Reversing the environmental damage we’ve already done is no small task.</p>
        <p>But together we’re making a start. One bottle at a time.</p>
      "
      :p-reverse="false"
    />

    <!-- Signoff -->
    <Signoff
      p-image="mission3.jpg"
      p-background-color="#fff"
      p-text="
        <h3>A greener planet</h3>
        <p>10% of profits go to support our environmental partners striving to keep the planet healthy and awesome.</p>
      "
    />
  
  </main>
</template>

<script>
import Hero from '@/components/Hero'
import Full from '@/components/Full'
import Split from '@/components/Split'
import Signoff from '@/components/Signoff'

export default {
  components: {
    Hero,
    Full,
    Split,
    Signoff,
  }
}
</script>
