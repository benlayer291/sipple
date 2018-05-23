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

  </main>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  components: {
    SvgIcon,
  }
}
</script>