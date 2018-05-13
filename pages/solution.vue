<template>
  <main>

    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-h3'>We're launching<br>summer 2018.</h1><p class='t-lede'>The momentum against disposable plastics is building everyday. Join us in creating change. To find out more about becoming a partner, or stay in the the loop as we get ready for take-off, <a href='#'>sign-up below<a/></a></p>"
    />

    <!-- Split -->
    <Split
      p-image="12.jpg"
      p-color="#fff"
      p-background-color="#2c2c2c"
      p-text="
        <h3>Our hydration stations</h3>
        <br>
        <h4>Cool and pure</h4>
        <p>Our Hydration Stations use filters and UV purification to remove any impurities, moments before dispensing, guaranteeing your water is clean, safe and tasting great. Choose to have it cool or icy cold.</p>
        <br>
        <h4>Supersize me</h4>
        <p>Whatever size thirst needs quenching, you can top up in standard bottle sizes of 500ml, 750ml and one litre.</p>
      "
      :p-reverse="false"
    />

    <!-- Split -->
    <Split
      p-image="13.png"
      p-color="#53565a"
      p-background-color="fff"
      p-text="
        <h4>Water that doesn't cost the earth</h4>
        <p>Our filtered water starts from 35p for 500ml. Not bad when you’re saving the planet too.</p>
        <br>
        <h4>BYOB</h4>
        <p>Golden rule: bring something to drink from. But if you’ve forgotten, you can buy a reusable, 500ml stainless steel Sipple bottle on the spot, no questions asked.</p>
        <br>
        <h4>Tap'n'go</h4>
        <p>Hydration Stations have a contactless payment system. So you can pay for your refill with a “tap” of your card or a “wave” of your Apple Pay… did our water puns make a splash? </p>
      "
      :p-reverse="true"
    />

    <!-- Split -->
    <Split
      p-image="14.png"
      p-color="#53565a"
      p-background-color="#ebebeb"
      p-text="
        <h4>Stay cool (or hot)</h4>
        <p>Our bottles use a double wall vacuum technology. Refills stay cold for up to 24 hours so you won’t have to drink disappointing lukewarm water. And if you want to carry tea, coffee or even soup, you can keep it hot for up to 12 hours.</p>
        <br>
        <h4>Spill-free</h4>
        <p>No one wants to find their laptop has been for a swim in their bag. Our bottle lid is airtight if properly tightened so it won’t spill.</p>
        <br>
        <h4>Care instructions</h4>
        <p>We recommend you rinse regularly between uses, store your bottle with the lid off and wash your bottle occasionally with hot soapy water. And never put it in the dishwasher.</p>
      "
      :p-reverse="false"
    />

  </main>

</template>

<script>
import Hero from '@/components/Hero'
import Split from '@/components/Split'

export default {
  components: {
    Hero,
    Split,
  },
}
</script>