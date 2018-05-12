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

      <span class="u-logo-diamond">
        <!-- <SvgIcon title="Logo" file="logo-mask2" /> -->
      </span>

      <span class="u-logo-Copy">
        <!-- <SvgIcon title="Logo" file="logo-Copy" /> -->
      </span>

    </section>

    <!-- Feature -->
    <Feature />

    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>The smarter way to hydrate on-the-go without the plastic waste</h1>"
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