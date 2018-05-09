<template>
  <main>

    <!-- Feature -->
    <Feature />

    <!-- Hero -->
    <Hero 
      p-background-color="red"
      p-background-image=""
      p-text="<h1>This is a Hero component</h1>"
    />

    <!-- Full -->
    <Full />

    <!-- Signoff -->
    <Signoff />

    <!-- Split -->
    <Split 
      p-background-color="blue"
      p-background-image=""
      :p-cta="{ text: 'Button', theme: 'primary', link: 'https://vuejs.org/' }"
      p-text="<h1>This is a Split component</h1>"
      :p-reverse="false"
    />

    <!-- Testimonial -->
    <Testimonial />

  </main>
</template>

<script>
import Feature from '@/components/Feature'
import Full from '@/components/Full'
import Hero from '@/components/Hero'
import Signoff from '@/components/Signoff'
import Split from '@/components/Split'
import Testimonial from '@/components/Testimonial'

export default {
  components: {
    Feature,
    Full,
    Hero,
    Signoff,
    Split,
    Testimonial,
  }
}
</script>