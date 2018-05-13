<template>
  <main>
    <section class="block  wrapper">

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>

      <hr>

      <p class="t-lede">Lorem ipsum dolor sit amet, <a href="#">consectetur adipisicing elit.</a> Voluptatibus culpa porro placeat, doloremque ex aliquid, dolorem ut animi veritatis fugit, corrupti laudantium obcaecati debitis praesentium doloribus voluptate officia minima. Dolorum!</p>

      <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipisicing elit.</a> Voluptatibus culpa porro placeat, doloremque ex aliquid, dolorem ut animi veritatis fugit, corrupti laudantium obcaecati debitis praesentium doloribus voluptate officia minima. Dolorum!</p>

      <hr>

      <button type="button" class="button">
        <span>I'm a button</span>
      </button>

      <hr>

      <SvgIcon title="Logo" file="logo" />

    </section>

    <!-- Feature -->
    <Feature 
      p-background-color="#ccc"
      p-image=""
      p-intro=""
      :p-reverse="false"
      p-text=""
      p-title=""
    />

    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>The smarter way to hydrate on-the-go without the plastic waste</h1>"
    />

    <!-- Split -->
    <Split 
      p-background-color="#ccc"
      p-background-image=""
      :p-cta="{ text: 'Button', theme: 'primary', link: 'https://vuejs.org/' }"
      p-text="
        <h3>Better than recycling</h3>
        <p>What’s better than recycling? Having nothing to recycle.</p>
        <p>Our water refills use zero packaging which means zero waste to dispose of</p>
      "
      :p-reverse="false"
    />

    <!-- Full -->
    <Full 
      p-background-color="#ccc"
      p-background-image=""
      :p-center="false"
      p-color="#000000"
      :p-cta="{ text: 'Button', theme: 'primary', link: 'https://vuejs.org/' }"
      p-text="
        <h3>Better than recycling</h3>
        <p>What’s better than recycling? Having nothing to recycle.</p>
        <p>Our water refills use zero packaging which means zero waste to dispose of</p>
      "
      :p-reverse="false"
    />

    <!-- Signoff -->
    <Signoff 
      p-background-color="#ccc"
      :p-cta="{ text: 'Button', theme: 'primary', link: 'https://vuejs.org/' }"
      p-image=""
      p-text=""
      p-title=""
    />

    <!-- Testimonial -->
    <Testimonial 
      p-author=""
      p-background-color="#ccc"
      p-image=""
      p-quote=""
    />

  </main>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
import Feature from '@/components/Feature'
import Full from '@/components/Full'
import Hero from '@/components/Hero'
import Signoff from '@/components/Signoff'
import Split from '@/components/Split'
import Testimonial from '@/components/Testimonial'

export default {
  components: {
    SvgIcon,
    Feature,
    Full,
    Hero,
    Signoff,
    Split,
    Testimonial,
  }
}
</script>