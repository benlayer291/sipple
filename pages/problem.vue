<template>
  <main>
  
    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>People know plastic is bad for the environment.</h1><p class='t-lede'>But exactly how bad?</p>"
    />

    <!-- Full -->
    <Full 
      p-background-color="#53565a"
      p-color="white"
      p-text="
        <p class='t-h2'>Globally, we use</p>
        <p class='t-h1'>One million</p>
        <p class='t-h2'>Plastic drink bottles</p>
        <p class='t-h1'>Every minute</p>
      "
    />

    <!-- Split -->
    <Split
      p-image="8.jpg"
      p-color="#53565a"
      p-background-color="#fff"
      p-text="
        <h3>That's a heck of a lot</h3>
        <p>To put it into perspective that’s another 100,000 or so by the time you reach the end of this sentence. The majority are thrown into landfill or end up in the ocean, and the rest (at best) will be recycled.</p>
        <p>In the UK alone 7.7 billion plastic water bottles will be used this year and 66% will be lost into the ecosystem.</p>
      "
      :p-reverse="false"
    />

    <!-- Full -->
    <Full 
      p-background-color="#e65a5a"
      p-color="white"
      p-text="
        <p class='t-h1'>8 million</p>
        <p class='t-h1'>Tonnes</p>
        <p class='t-h2'>Of plastic end up in the ocean</p>
        <p class='t-h1'>Every year</p>
      "
    />

    <!-- Full -->
    <Full 
      p-image="problem1.jpg"
    />

    <!-- Split-text -->
    <Split-text
      p-color-a="#fff"
      p-background-color-a="#53565a"
      p-text-a="
        <h3 class='t-h2'>Transporting bottled waters generates 30,100 tonnes of CO2</h3>
      "
      p-color-b="#53565a"
      p-background-color-b="#fff"
      p-text-b="
        <p class='t-lede'>If that wasn't enough, lorries transporting heavy bottles of water around the UK has an enormous carbon footprint.</p>
      "
    />

    <!-- Split -->
    <Split
      p-image="10.png"
      p-color="#53565a"
      p-background-color="#ebebeb"
      p-text="
        <p>Throwing it away doesn’t mean it goes away. Plastic products take over 450 years to degrade and plastic bottles wash up on beaches and end up floating in vast mid-ocean trash islands.</p>
        <p>Anyone who’s seen Blue Planet has seen the damage ocean pollution is doing to sea-birds, turtles, whales and other marine life.</p>
      "
      :p-reverse="false"
    />

    <!-- Split -->
    <Split
      p-image="11.jpg"
      p-color="#fff"
      p-background-color="#e65a5a"
      p-text="
        <h3 class='t-h2'>If we don’t change our habits by 2050 there’ll be more plastic in the ocean than fish</h3>
      "
      :p-reverse="false"
    />

    <!-- Testimonial -->
    <Testimonial />

    <!-- Full -->
    <Full-image 
      p-background-color="#6eafff"
      p-background-image="problem2.jpg"
      p-image="problem2.jpg"
      :p-cta="{ text: 'Our solution', theme: 'white', link: '/solution' }"
    />

  </main>
</template>

<script>
import Full from '@/components/Full'
import FullImage from '@/components/Full-image'
import Hero from '@/components/Hero'
import Split from '@/components/Split'
import SplitText from '@/components/Split-text'
import Testimonial from '@/components/Testimonial'

export default {
  components: {
    Full,
    FullImage,
    Hero,
    Split,
    SplitText,
    Testimonial,
  },
}
</script>