<template>
  <main>

    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>Sipple was founded to combat the environmental damage caused by the bottled water industry.</h1>"
    />

    <!-- Full -->
    <Full 
      p-background-color="#e65a5a"
      p-color="white"
      p-text="
        <h2>Our mission is ending our<br>
        <span class='t-h1'>cultural<br>addiction</span><br>
        to single-use plastics</h2>
      "
    />

    <Full 
      p-image="mission1.jpg"
    />

    <!-- Split -->
    <Split
      p-image="mission2.jpg"
      p-color="#fff"
      p-background-color="#503bd2"
      :p-cta="{ text: 'Our Solution', theme: 'white', link: 'https://vuejs.org/' }"
      p-text="
        <p>Reversing the environmental dammage we’ve already done is no small task .But together we’re making a start.</p>
        <p>One bottle at a time.</p>
      "
      :p-reverse="false"
    />

    <!-- Signoff -->
    <Signoff
      p-image="mission3.jpg"
      p-background-color="#fff"
      p-text="
        <h3>Sipple one world foundation</h3>
        <p>10% of our profits go to the Sipple One World Foundation, which is used to support our environmental partners to keep the planet healthy and awesome.</p>
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
