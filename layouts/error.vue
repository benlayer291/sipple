<template>
  <main>
    <section class="Error">
      <h1 v-if="error.statusCode === 404" class="Error__message  t-lede">Page cannot be found</h1>
      <h1 v-else class="Error__message  t-lede">An error occurred</h1>
      <nuxt-link to="/" class="Full__button  button  button--ghost">Back to Homepage</nuxt-link>
    </section>
  </main>
</template>

<style lang="postcss">
@import "../assets/css/settings/vars";

.Error {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  width: 100%;
  min-height: 90vh;
  padding: var(--bsu-lg);
  color: var(--white);

  &__message {

    @media(--sm) {
      margin-bottom: var(--bsu-lg);
    }
  }
}

</style>

<script>
export default {
  props: ['error'],
}
</script>


