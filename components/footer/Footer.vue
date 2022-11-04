<template>
  <footer class="footer">
    <div class="footer-container d-flex justify-content-between">
      <div class="footer__item">
        <nuxt-link to="/" class="footer-container__svg__logo"> </nuxt-link> 
        <div class="footer-container__svg__law d-flex">MEDOR <div class="footer-container__svg__law-copy"></div> 2021 - {{ $t('law') }}</div>
      </div>
        <div class="footer__item">
          <nuxt-link to="/privacy-policy" class="footer-container__style__link footer-container__style__text">
            {{ $t('privacy-policy') }}
          </nuxt-link>
          <br>
          <div class="footer-container__style__social">
            <!--<a href="">
              <button class="footer-container__social__instagram footer-container__social__size"></button>
            </a>-->
            <a v-if="$i18n.locale == 'ru'" href="https://wa.me/79956107577/?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.+%D0%9C%D0%B5%D0%BD%D1%8F+%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82+%D1%82%D1%80%D1%83%D0%B4%D0%BE%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE+%D0%BC%D0%B5%D0%B4%D0%B8%D0%BA%D0%BE%D0%BC+%D0%B2+%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8E." target="_blank">
              <button class="footer-container__social__whatsapp footer-container__social__size"></button>
            </a>
            <a v-if="$i18n.locale == 'ru'" href="tg://resolve?domain=Medormed" target="_blank">
              <button class="footer-container__social__telegram footer-container__social__size"></button>
            </a> 
            <a v-if="$i18n.locale == 'de'" href="tg://resolve?domain=Riedel_O" target="_blank">
              <button class="footer-container__social__telegram footer-container__social__size"></button>
            </a> 
          </div>
        </div>
        <div class="footer__item">
          <p class="footer-container__style__text" @click="clickAddress">
            Liehrstraße 8, 01279
            <br>
            {{ $t('address') }}
          </p>
          <div class="d-flex">
            <p>
              <a v-if="$i18n.locale == 'ru'" href="tel:+491604348343" class="footer-container__style__p footer-container__style__text">+49 160 434 83 43</a>
              <a v-if="$i18n.locale == 'de'" href="tel:+491733738226" class="footer-container__style__p footer-container__style__text">+49 173 37 38 226</a>
              <span class="footer-container__span">|</span>
              <a v-if="$i18n.locale == 'ru'" href="mailto:med_germany@mail.ru" class="footer-container__style__p footer-container__style__text">med_germany@mail.ru</a>
              <a v-if="$i18n.locale == 'de'" href="mailto:post@med-or.de" class="footer-container__style__p footer-container__style__text">post@med-or.de</a>
            </p>
          </div>
        </div>
    </div>
    <div class="footer-container__svg__by"></div>
  </footer>
</template>

<script>
export default {
  methods: {
    clickAddress () {
      window.open('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20074.288980179397!2d13.834791!3d51.029336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c7d86e058e7f%3A0xc4d696476a5143d4!2sLiehrstra%C3%9Fe%208%2C%2001279%20Dresden%2C%20Deutschland!5e0!3m2!1sde!2sus!4v1632348333915!5m2!1sde!2sus')
    },

  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';
.footer {
  background: #D4EBFF;
  padding: 70px 0;
  width: 100%;

  &__item {
    text-align: left;
  }
}

.footer-container {
  width: 100%;
  padding-left: 5%;
  padding-right: 10%;
  @media all and (max-width: 992px) {
    flex-direction: column;
    padding: 0 10px;
  }

  &__link {
    display:block
  }

  &__social {
    &__size {
      border: none;
      width: 24.13px;
      height: 23.8px;
      margin-right: 10px;
      @media all and (max-width: 800px) {
        width: 12px;
        height: 11xp;
      }
    }
    &__instagram {
      background: url('~assets/images/inst-footer.svg') 100% 100% no-repeat;
      background-size: contain;
    }
    &__telegram {
      background: url('~assets/images/tg-footer.svg') 100% 100% no-repeat;
      background-size: contain;
    }
    &__whatsapp {
      background: url('~assets/images/wa-footer.svg') 100% 100% no-repeat;
      background-size: contain;
    }
  }
  &__style {
    &__link {
      text-decoration: none;
      color: #000000;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: -0.612716px;
      margin-bottom: 2px;
      @media all and (max-width: 800px) {
        font-size: 13px;
        line-height: 23px;
      }
    }

    &__p {
      font-size: 17px !important;
      line-height: 20px !important;
      @media all and (max-width: 800px) {
        font-size: 13px;
        line-height: 17px;
      }
    }
    &__social {
      margin-top: 9px;
      @media all and (max-width: 800px) {
        margin-top: 0;
      }
    }
    &__text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #707070;
      @media all and (max-width: 800px) {
        font-size: 13px;
        line-height: 15px;
      }
    }
    &__text:hover {
      text-decoration: none;
    }
  }

  &__svg {
    &__by {
      background: url('assets/images/by.svg') no-repeat 100% 100%;
      background-size: contain;
      float: right;
      width: 366px;
      height: 20px;
      margin-top: 40px;
      margin-right: 80px;
      @media all and (max-width:800px) {
        width: 236px;
        
      }
    }
    &__law {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #707070;
    }

    &__law-copy {
      background: url('assets/images/copy.svg') no-repeat 100% 100%;
      background-size: contain;
      width: 9px;
      height: 9px;
      margin-right: 2px;
      @media all and (max-width: 800px) {
        width: 7px;
        height: 7px;
      }
    }
    &__logo {
      display: block;
      background: url('assets/images/logo.svg') no-repeat 100% 100%;
      background-size: contain;
      width: 163px;
      height: 71px;
      @media all and (max-width: 800px) {
        width: 150px;
        height: 50px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.col {
  margin-bottom: 30px;
}
</style>
