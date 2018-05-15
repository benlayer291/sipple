<template>
  <main>
  
    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>People know plastic is bad for the environment.</h1><p class='t-lede'>But exactly how bad?</p>"
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

  </main>
</template>

<script>
import Hero from '@/components/Hero'
import Split from '@/components/Split'
import SplitText from '@/components/Split-text'

export default {
  components: {
    Hero,
    Split,
    SplitText,
  },
}
</script>