<template>
  <main>
  
    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>People already know plastic is bad for the environment. But exactly how bad?</p>"
    />

    <!-- Full -->
    <Full 
      p-background-color="#e65a5a"
      p-color="#fff"
      p-text="
        <h2 class='fitDouble'>
          <span class='fitDouble__small'>Globally, we use</span>
          <span class='fitDouble__large'>1 million</span>
          <span class='fitDouble__small'>plastic drink bottles</span>
          <span class='fitDouble__large'>every minute</span>
        </h2>
      "
    />

    <!-- Split -->
    <Split
      p-image="rubbish-heap.jpg"
      p-background-color="#fff"
      p-text="
        <h3>That’s a heck<br>of a lot</h3>
        <p>The majority are thrown into landfill or end up in the ocean, and the rest (at best) will be recycled.</p>
        <p>In the UK alone 7.7 billion plastic water bottles will be used this year and 66% will be lost into the ecosystem.</p>
      "
      :p-reverse="true"
    />

    <!-- Full -->
    <Full 
      p-background-color="#53565a"
      p-color="white"
      p-text="
        <h2 class='fitDouble'>
          <span class='fitDouble__large'>8 million<br>tonnes</span>
          <span class='fitDouble__small'>of plastic end up in the ocean</span>
          <span class='fitDouble__large'>every year</span>
        </h2>
      "
    />

    <!-- Full -->
    <Full 
      p-image="sea-bottles.jpg"
    />

    <!-- Split-text -->
    <Split-text
      p-color-a="#fff"
      p-background-color-a="#e65a5a"
      p-text-a="
        <h2 class='fitDouble  fitDouble--small  fitDouble--split'>
          <span class='fitDouble__small'>Transporting bottled<br>water generates</span>
          <span class='fitDouble__large'>30,100<br>tonnes</span>
          <span class='fitDouble__small'>of CO<sub>2</sub></span>
        </h2>
      "
      p-background-color-b="#ebebeb"
      p-text-b="
        <p class='t-lede'>If that wasn’t enough, lorries transporting heavy bottles of water around the UK has an enormous carbon footprint.</p>
      "
    />

    <!-- Split -->
    <Split
      p-image="bottle-float.png"
      p-color="#fff"
      p-background-color="#503bd2"
      p-text="
        <h3>Throwing it away doesn’t mean it goes away</h3>
        <p>Plastic bottles take over 450 years to degrade and wash up on beaches or end up floating in vast mid-ocean trash islands.</p>
        <p>Anyone who’s seen Blue Planet has seen the damage ocean pollution is doing to sea-birds, turtles, whales and other marine life.</p>
      "
      :p-reverse="false"
      p-swapped="image"
    />

    <!-- Full -->
    <Full 
      p-background-color="#53565a"
      p-color="#fff"
      p-text="
        <h2 class='fitDouble  fitDouble--small'>
          <span class='fitDouble__small'>If we don’t change our habits by 2050,</span>
          <span class='fitDouble__large'>there’ll be more plastic than fish in the sea</span>
          <span class='fitDouble__small'>this speaks for itself</span>
        </h2>
      "
    />

    <!-- Full -->
    <Full 
      p-image="sea-bottle.jpg"
    />

    <!-- Testimonial -->
    <Testimonial 
      p-background-color="#fff"
      p-image="testimonial1.jpg"
      p-image-title="Sir David Attenborough"
      p-quote="
        <p>Action on plastics should be taken immediately. Humanity holds the future of the planet in the palm of its hands</p>
      "
      p-author="Sir David Attenborough"
    />

    <!-- Signoff -->
    <Signoff
      p-background-color="#6eafff"
      p-image="lets-do.png"
      :p-cta="{ text: 'Our mission', theme: 'white', link: '/mission' }"
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
import Signoff from '@/components/Signoff'

export default {
  components: {
    Full,
    FullImage,
    Hero,
    Split,
    SplitText,
    Testimonial,
    Signoff,
  },
  data () {
    return {
      title: 'The problem | Sipple'
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