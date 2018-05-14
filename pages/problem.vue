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
        <h2>
          <span class='Full__small'>Globally we use<br></span>
          <span class='Full__large'>one million<br></span>
          <span class='Full__small'>plastic drink bottles<br></span>
          <span class='Full__large'>every minute</span>
        </h2> 
      "
    />

    <!-- Split -->
    <Split
      p-image="8.jpg"
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
        <h2>
          <span class='Full__large'>8 million tonnes<br></span>
          <span class='Full__small'>of plastic end up in the ocean<br></span>
          <span class='Full__large'>every year</span>
        </h2> 
      "
    />

    <!-- Full -->
    <Full 
      p-image="problem2.jpg"
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
    <Testimonial 
      p-background-color="#fff"
      p-image="testimonial1.jpg"
      p-image-title="Sir David Attenborough"
      p-quote="
        <p>Action on plastics should be taken immediately. Humanity holds the future of the planet in the palm of its hands</p>
      "
      p-author="Sir David Attenborough"
    />

  </main>
</template>

<script>
import Hero from '@/components/Hero'
import Full from '@/components/Full'
import Split from '@/components/Split'
import Testimonial from '@/components/Testimonial'

export default {
  components: {
    Hero,
    Full,
    Split,
    Testimonial,
  },
}
</script>