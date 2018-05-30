<template>
  <main>

    <!-- Hero -->
    <Hero 
      p-text="
        <h1 class='t-h3'>We’re launching<br>summer 2018.</h1>
        <p>The momentum against disposable plastics is building every day. Join us in creating change. To become a partner, or to stay in the loop as we get ready for take-off, <a href='#contact'>sign-up below<a/></a></p>
      "
    />

    <!-- Full -->
    <Full 
      p-background-color="#53565a"
      p-color="#fff"
      p-text="
        <h3>Our hydration stations</h3>
        <p>Sipple Hydration Stations provide a smarter, greener and cheaper alternative to bottled water.</p>
      "
    />

    <!-- Split -->
    <Split
      p-background-color="#ebebeb"
      p-image="station-cape-alt.png"
      p-background-color-alt="#6eafff"
      p-text="
        <h4>Cool and pure</h4>
        <p class='t-small'>Our Hydration Stations use filters and UV purification to remove any impurities, moments before dispensing, guaranteeing your water is clean, safe and tasting great. Choose to have it cool or icy cold.</p>
        <h4>Supersize me</h4>
        <p class='t-small'>Whatever size thirst needs quenching, you can top up in standard bottle sizes of 500ml, 750ml and one litre.</p>
        <h4>Water that doesn’t cost the earth</h4>
        <p class='t-small'>Our filtered water starts from 35p for 500ml. Not bad when you’re saving the planet too.
        <h4>BYOB</h4>
        <p class='t-small'>Golden rule: bring something to drink from. But if you’ve forgotten, you can buy a reusable, 500ml stainless steel Sipple bottle on the spot, no questions asked.</p>
      "
      :p-reverse="false"
      p-swapped="image"
    />

    <!-- Split -->
    <Split
      p-background-color="#fff"
      p-image="contactless.png"
      p-text="
        <h3>Tap’n’go</h3>
        <p>Hydration Stations have a contactless payment system. So you can pay for your refill with a “tap” of your card or a “wave” of your Apple Pay… did our water puns make a splash?</p>
      "
      :p-reverse="false"
      p-swapped="image"
    />

    <!-- Full -->
    <Full 
      p-background-color="#503bd2"
      p-color="#fff"
      p-text="
        <h3>The Sipple bottle</h3>
        <p>We think bottles should be made to last. Ideally a lifetime.<br>Two if you’re feeling generous.</p>
      "
    />

    <!-- Split -->
    <Split
      p-background-color="#fff"
      p-image="tall-bottle.png"
      p-ratio="tall"
      p-background-color-alt="#f9e0cd"
      p-text="
        <h4>Hey, good lookin’</h4>
        <p class='t-small'>Our stylish Sipple Bottle is designed to look good whether you’re hiking, biking or just sat on your sofa. It’s finished with a high quality coating. And best of all, it saves the environment.</p>
        <h4>Tough and safe</h4>
        <p class='t-small'>Our stylish, reusable Sipple Bottle is made of high-grade stainless steel. It’s tough, non-toxic and completely BPA free and it won’t taint the flavour of what you put inside.</p>
        <h4>Stay cool (or hot)</h4>
        <p class='t-small'>Our bottles use a double wall vacuum technology. Refills stay cold for up to 24 hours so you won’t have to drink disappointing lukewarm water. And if you want to carry tea, coffee or even soup, you can keep it hot for up to 12 hours.</p>
        <h4>Spill-free</h4>
        <p class='t-small'>No one wants to find their laptop has been for a swim in their bag. Our bottle lid is airtight if properly tightened so it won’t spill.</p>

      "
      :p-reverse="true"
    />

    <!-- Split -->
    <Split
      p-background-color="#ebebeb"
      p-image="pour-bottle.png"
      p-text="
        <h3>Care instructions</h3>
        <p>We recommend you rinse regularly between uses, store your bottle with the lid off and wash your bottle occasionally with hot soapy water. And never put it in the dishwasher.</p>
      "
      :p-reverse="false"
      p-swapped="image"
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
  },
  data () {
    return {
      title: 'The solution | Sipple',
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { name: 'og:title', content: this.title },
        { name: 'twitter:title', content: this.title },
      ]
    }
  },
}
</script>
