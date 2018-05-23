<template>
  <footer class="Footer">
    <div class="Footer__inner  wrapper">
      <div class="grid  grid--rigid">
        
        <div class="grid__item  u-1/3@md">
          <div class="Footer__item">
            <h4>Find us on social</h4>
            <ul class="Footer__social">
              <li>
                <a href="">
                  <SvgIcon className="i-social" title="Facebook" file="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="">
                  <SvgIcon className="i-social" title="instagram" file="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <SvgIcon className="i-social" title="twitter" file="icon-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid__item  u-1/3@md">
          <div class="Footer__item">
            <h4>Keep me posted</h4>
            <p class="t-small">We promise not to spam you or share your data. That’s not our style.</p>
            <form class="Footer__form  t-small" action="">
              <div class="Footer__field">
                <input class="Footer__input" type="text" placeholder="Name" autocorrect="off" spellcheck="false" required>
              </div>
              <div class="Footer__field">
                <input class="Footer__input" type="email" placeholder="Email" autocorrect="off" spellcheck="false" required>
              </div>
              <button class="Footer__button  button  button--ghost" type="submit">Sign me up</button>
            </form>
          </div>
        </div>
        <div class="grid__item  u-1/3@md">
          <div class="Footer__item">
            <h4>Sipple hydration</h4>
            <address class="t-small">
              35/36 New Covent Garden Market<br>
              London SW8 5EE, United Kingdom<br>
              +44 (0)203 948 6786
            </address>
            <p class="t-small"><a href="mailto:hello@sipplehydration.com">hello@sipplehydration.com</a></p>
          </div>
        </div>

      </div>

      <p class="Footer__meta">&copy; Copyright {{ new Date().getFullYear() }} Sipple. Water without the waste.</p>
    </div>
  </footer>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  components: {
    SvgIcon
  }

}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.Footer {
  color: var(--white);
  background-color: var(--blue);

  &__inner {
    padding-top: var(--bsu-lg);
    padding-bottom: var(--bsu-lg);
  }

  &__item {
    max-width: 300px;
    margin-bottom: var(--bsu-lg);
  }

  &__social {

    & li {
      display: inline-block;
      margin-right: 10px;
    }

    & a {
      display: block;
      border: thin solid currentColor;
      border-radius: 50%;
      transition: 
        color var(--trans),
        border var(--trans),
        background-color var(--trans);

      &:hover {
        color: var(--blue);
        border-color: var(--white);
        background-color: var(--white);
      }
    }

    & .i-social {
      width: 32px;
      height: 32px;
    }
  }

  &__input {
    display: block;
    width: 100%;
    padding: 5px 0;
    border-bottom: thin solid var(--turquoise);
    margin-bottom: var(--bsu);
    transition: border var(--trans);

    &:hover {
      border-color: color(var(--turquoise) a(50%));
    }

    &:focus {
      border-color: var(--turquoise);
    }

    &::placeholder {
      color: var(--white);
      transition: color var(--trans);
    }

    &:focus::placeholder {
      color: var(--blue);
    }
  }

  &__button {
    margin-top: var(--bsu);
  }

  &__meta {
    font-size: 10px;
    line-height: calc(18/10);
    margin-top: var(--bsu-xl);
    margin-bottom: 0;
  }
}

</style>


