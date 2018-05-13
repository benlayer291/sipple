<template>
  <main>
  
    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>The future's not disposable</h1>"
    />

    <!-- Split -->
    <Split
      p-image="6.jpg"
      p-color="#53565a"
      p-background-color="#fff"
      p-text="
        <p>Forty years ago, plastic was a new wonder material. Lightweight, durable and cheap. We all got so excited we threw parties about tupperware.</p>
        <p>Common sense at the time said selling water in a plastic bottle was a terrible idea. But someone sensed a buck to be made and did it anyway.</p>
      "
      :p-reverse="true"
    />

    <!-- Split -->
    <Split
      p-image="7.jpg"
      p-color="#53565a"
      p-background-color="#fff"
      p-text="
        <p>Today there's a stirring around disposable plastics. Their impact is under scrutiny. It's being discussed on TV, in the news and in government. Uncomfortable questions are being asked. People haven't been given much choice.</p>
        <p>Until now.</p>
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