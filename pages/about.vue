<template>
  <main>
  
    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>The story of Sipple.</h1>"
    />

    <!-- Split -->
    <Split
      p-image="bottle-pile.jpg"
      p-background-color="#fff"
      p-text="
        <p>Forty years ago, plastic was a new wonder material. Lightweight, durable and cheap. We all got so excited we threw parties about tupperware.</p>
        <p>Common sense at the time said selling water in a plastic bottle was a terrible idea. But someone sensed money to be made and did it anyway.</p>
      "
      :p-reverse="true"
    />

    <!-- Full -->
    <Full 
      p-background-color="#ebebeb"
      p-text="
        <p class='t-lede'>
          An oil-chugging global monster was born. And the rest, as they say, is history: billions of plastic bottles spewed into the oceans and landfills, microplastics in our food and an island of trash three times the size of France floating in the Pacific.
        </p>
      "
    />

    <!-- Full -->
    <Full 
      p-image="bottles-pollution.jpg"
    />

    <!-- Full -->
    <Full 
      p-background-color="#503bd2"
      p-background-image="but-tide.png"
    />

    <!-- Split -->
    <Split
      p-image="bottle-sparkle.jpg"
      p-color="#53565a"
      p-background-color="#fff"
      p-text="
        <p>Today, there’s a stirring around disposable plastics. Their impact is under scrutiny. It’s being discussed on TV, in the news and in government. Uncomfortable questions are being asked.</p>
        <p>People haven’t been given much choice. Until now.</p>
      "
      :p-reverse="true"
    />

    <!-- Full -->
    <Full 
      p-background-color="#e65a5a"
      p-color="white"
      p-text="
        <h2 class='fitDouble'>
          <span class='fitDouble__small'>Disposable packaging is</span>
          <span class='fitDouble__large'>killing the planet</span>
          <span class='fitDouble__small'>but it doesn’t have to</span>
        </h2>
      "
    />

    <!-- Split -->
    <Split
      p-color="#fff"
      p-background-color="#6eafff"
      p-text="
        <h3>Introducing<br>Sipple</h3>
        <p>Sipple Hydration Stations are a sustainable alternative. Our system doesn’t create plastic waste and doesn’t harm the planet.</p>
        <p>We’re starting a movement on the shared belief that a cleaner tomorrow is urgent.</p>
      "
      p-image="station-cape.png"
      :p-cta="{ text: 'Our solution', theme: 'white', link: '/solution' }"
      :p-reverse="false"
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
