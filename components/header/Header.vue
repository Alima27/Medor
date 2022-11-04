<template>
	<header class="header">
		<div>
      <b-nav class="navbar navbar-expand-md header_navbar">
        <nuxt-link to="/" class="header__img__logo" />
        <b-navbar-toggle target="navbar-toggle-collapse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
            >
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="localePath('/')" class="header__nav__link">
              {{ $t('header_main') }}
            </b-nav-item>
            <b-nav-item :to="localePath('/about-us')" class="header__nav__link">
              {{ $t('header_about-us') }}
            </b-nav-item>
            <b-nav-item :to="localePath('/services')" class="header__nav__link">
              {{ $t('header_services') }}
            </b-nav-item>
            <b-nav-item :to="localePath('/contacts')" class="header__nav__link">
              {{ $t('header_contacts') }}
            </b-nav-item>
            <b-nav-item :to="localePath('/')" class="header__nav__link d-flex">
              <div v-if="$i18n.locale == 'de'"  class="d-flex"  @click="clickTel">
                <div class="header__img__phone"></div>
                  +49 173 37 38 226
              </div>
              <div v-if="$i18n.locale == 'ru'"  class="d-flex"  @click="clickTelRu">
                <div class="header__img__phone"></div>
                  +49 160 434 83 43
              </div>
            </b-nav-item>
            <b-nav-item>
              <language-switcher />
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-nav>
		</div>
	</header>
</template>

<script>
import LanguageSwitcher from '@/components/header/LanguageSwitcher.vue'
export default {
  components: {
    LanguageSwitcher
  },
  methods: {
    clickTel () {
      window.open('tel:+491733738226')
    },
    clickTelRu () {
      window.open('tel:+491604348343')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';
.header {
	position: fixed;
	left: 0;
	top: 0;
  margin-bottom: 20px;
	width: 100%;
	z-index: 9;
	background: #D4EBFF;
  &__img {
    &__logo {
      display: block;
      width: 250px;
      height: 110px;
      background: url('~assets/images/logo.svg') no-repeat 50% 50% / contain;
      @media all and (max-width: 800px) {
        width: 133px;
        height: 68px;
      }
	  }
    &__phone {
      background: url('~assets/images/phone.svg') no-repeat 50% 50% / contain;
      width: 20px;
      height: 20px;
      margin-right: 6px;
    }
    &__ru {
      background: url('assets/images/ru.svg') no-repeat 100% 100%;
      width: 19px;
      height: 19px;
    }
    &__de {
      background: url('assets/images/ru.svg') no-repeat 100% 100%;
      width: 19px;
      height: 19px;
    }
  }
	&__nav {
		&__link {
			font-size: 15px;
			line-height: 19px;
			&:hover {
				text-decoration: none;
			}
		}
	}

}
</style>

<style lang="scss">
.header {
  a {
    color: #000;
  }
  .navbar {
    margin: 5px 0;
    padding: 0 5px !important;
  }
  .navbar-collapse {
    margin: 10px 0;

    @media screen and (max-width: 768px) {
      border-top: 1px solid #fafafa;
    }
  }
  .navbar-expand-md .navbar-nav .nav-link {
    @media (min-width: 768px) {
      padding-left: 60px !important;
      padding-right:  60px !important;
    }
  }
}
</style>
