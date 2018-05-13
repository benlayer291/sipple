<template>
  <main>
    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>The future’s not disposable.</h1>"
    />

    <!-- Split -->
    <Split
      p-image="story1.jpg"
      p-background-color="#fff"
      p-text="
        <p>Forty years ago, plastic was a new wonder material. Lightweight, durable and cheap. We all got so excited we threw parties about tupperware.</p>
        <p>Common sense at the time said selling water in a plastic bottle was a terrible idea. But someone sensed a buck to be made and did it anyway.</p>
      "
      :p-reverse="true"
    />

    <!-- Full -->
    <Full 
      p-background-color="#E6E6E6"
      p-text="
        <p class='t-lede'>An oil-chugging global monster was born. And the rest, as they say, is history. Billions of plastic bottles spewed into the oceans and landfills, microplastics in our food and an island of trash three times the size of France floating in the Pacific.</p>
      "
    />

    <Full 
      p-image="mission1.jpg"
    />

    <Full 
      p-image="story2.jpg"
    />

    <!-- Split -->
    <Split
      p-image="story3.jpg"
      p-background-color="#fff"
      p-text="
        <p>Today, there’s a stirring around disposable plastics. Their impact is under scrutiny. It’s being discussed on TV, in the news and in government. Uncomfortable questions are being asked. People haven’t been given much choice.</p>
        <p>Until now.</p>
      "
      :p-reverse="false"
    />

    <!-- Full -->
    <Full 
      p-background-color="#E6E6E6"
      p-text="
        <h3>Introducing Sipple</h3>
        <p>Sipple Hydration Stations are a sustainable way to drink fresh, filtered water while you’re out and about. Our system doesn’t create waste and it doesn’t harm the planet.</p>
        <p>We’re starting a movement on the shared belief that a cleaner tomorrow is urgent. No guilt trips, just the right tools to make a difference.</p>
        <p>Disposable packaging is killing the planet. But it doesn’t have to.</p>
      "
      :p-cta="{ text: 'Our solution', theme: 'white', link: 'https://vuejs.org/' }"

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
