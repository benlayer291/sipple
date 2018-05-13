<template>
  <main>

    <!-- Hero -->
    <Hero 
      p-text="<h1 class='t-lede'>The smarter way to hydrate on-the-go without the plastic waste</h1>"
    />

    <!-- Split -->
    <Split
      p-image="1.png"
      p-color="#fff"
      p-background-color="#59a0e6"
      :p-cta="{ text: 'Our Story', theme: 'white', link: 'https://vuejs.org/' }"
      p-text="
        <p>Sipple Hydration Stations serve freshly filtered, UV purified water, either cool or cold temperature.</p>
        <p>We’re the sustainable alternative to bottled water.</p>
      "
      :p-reverse="false"
    />

    <Split
      p-image="2.jpg"
      p-background-color="#fff"
      :p-cta="{ text: 'Find Out More', theme: '', link: 'https://vuejs.org/' }"
      p-text="
        <h3>Our solution</h3>
        <p>How do Sipple Hydration Stations work?</p>
      "
      :p-reverse="false"
    />

    <Split
      p-color="#fff"
      p-image="3.jpg"
      p-background-color="#53565a"
      :p-cta="{ text: 'Contact', theme: 'white', link: 'https://vuejs.org/' }"
      p-text="
        <h3>Say Hello</h3>
        <p>Drop us a line to find out where to find us.</p>
      "
      :p-reverse="false"
    />

    <Split
      p-image="4.jpg"
      p-background-color="#fff"
      p-text="
        <h3>What’s better than recycling?</h3>
        <p>Having nothing to recycle.</p>
        <p>Our water refills use zero packaging which means zero waste to dispose of.</p>
      "
      :p-reverse="true"
    />

    <!-- Full -->
    <Full 
      p-background-color="#53565a"
      p-color="white"
      :p-cta="{ text: 'The problem', theme: 'white', link: 'https://vuejs.org/' }"
      p-text="
        <h1>Plastic ain’t fantastic</h1>
        <p>Single-use plastic bottles suck.<br>They trash our planet and that’s not okay.</p>
      "
    />

    <Full 
      p-background-color="#59a0e6"
      p-color="white"
      :p-cta="{ text: 'Join the movement', theme: 'white', link: 'https://vuejs.org/' }"
      p-text="
        <h3>Our mission</h3>
        <p>Our goal is to change the way the UK hydrates, eliminate excessive waste and protect the planet.</p> 
        <p>Anyone can join us.</p>
      "
    />

    <!-- Feature -->
    <Feature 
      p-background-color="#ccc"
      p-image=""
      p-intro=""
      :p-reverse="false"
      p-text="sdfsdf"
      p-title="sdfsd"
    />


    <!-- Signoff -->
    <Signoff 
      p-background-color="#ccc"
      :p-cta="{ text: 'Button', theme: 'white', link: 'https://vuejs.org/' }"
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