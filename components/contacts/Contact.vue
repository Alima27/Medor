<template>
  <div class="contact">
    <div class="contact__address">
      <div class="d-flex">
        <div class="contact__img__logo"></div>
        <div class="contact__style__name">
          <div class="contact__img__medor"></div>
          <p class="contact__style__p">
            {{ $t('contact_medicine') }}
          </p>
          <p class="contact__style__p-address" @click="clickAddress">
            Liehrstraße 8, Dresden, Germany
          </p>
        </div>       
      </div>
      <hr class="contact__style__hr">
      <div class="contact__address__contacts">
        <div class="d-flex">
          <div class="contact__img__index"></div>
          <p class="contact__style__p-link">
            01279
          </p>
        </div>
        <div v-if="$i18n.locale == 'ru'" class="d-flex"  @click="clickTel1">
          <div class="contact__img__tel"></div>
          <p class="contact__style__p-link">
            +49 160 434 83 43
          </p>
        </div>
        <div v-if="$i18n.locale == 'ru'" class="d-flex"  @click="clickTel2">
          <div class="contact__img__tel"></div>
          <p class="contact__style__p-link">
            +7 995 610 75 77
          </p>
        </div>
        <div v-if="$i18n.locale == 'ru'" class="d-flex"  @click="clickTel3">
          <div class="contact__img__tel"></div>
          <p class="contact__style__p-link">
            +7 771 510 94 01
          </p>
        </div>
        <div v-if="$i18n.locale == 'de'" class="d-flex"  @click="clickTel3">
          <div class="contact__img__tel"></div>
          <p class="contact__style__p-link">
            +49 173 37 38 226
          </p>
        </div>
        <div v-if="$i18n.locale == 'de'" class="d-flex" @click="clickMailDe">
          <div class="contact__img__mail"></div>
          <p class="contact__style__p-link">
            post@med-or.de
          </p>
        </div>
        <div v-if="$i18n.locale == 'ru'"  class="d-flex" @click="clickMail">
          <div class="contact__img__mail"></div>
          <p class="contact__style__p-link">
            med_germany@mail.ru
          </p>
        </div>
      </div>
    </div>
    <div class="contact__gps"></div>
  </div>
</template>

<script>
export default {
  methods: {
    clickAddress () {
      window.open('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20074.288980179397!2d13.834791!3d51.029336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c7d86e058e7f%3A0xc4d696476a5143d4!2sLiehrstra%C3%9Fe%208%2C%2001279%20Dresden%2C%20Deutschland!5e0!3m2!1sde!2sus!4v1632348333915!5m2!1sde!2sus')
    },
    clickTel1 () {
      window.open('tel:+491604348343')
    },
    clickTel2 () {
      window.open('tel:+79956107577')
    },
    clickTel3 () {
      window.open('tel:+77715109401')
    },
    clickMail () {
      window.open('mailto:med_germany@mail.ru')
    },
    clickMailDe () {
      window.open('mailto:post@med-or.de')
    }
  }
}
</script>


<style lang="scss" scoped>
.contact {
  background: url('~assets/images/map.png') 100% 100% no-repeat;
  background-size: cover;
  height: 858px;
  width: 100%;
  @media all and (max-width:800px) {
    height: 324px;
    width: 100%; 
  }
  &__address {
    background: url('~assets/images/bg-map.svg') 100% 100% no-repeat;
    background-size: contain;
    position: absolute;
    width: 532.28px;
    height: 366px;
    left: 188px;
    padding: 45px 16px;
    top: 350px;
    @media all and (max-width:800px) {
      position: absolute;
      width: 300px;
      height: 150px;
      left: -70px;
      padding: 12px 0;
      top: 164px;
    }

    &__contacts {
      padding: 10px 30px;
      @media all and (max-width:800px) {
        padding: 0 0;
        position: absolute;
        left: 105px;
        top: 66px;
      }
    }
  }
  &__gps {
    background: url('~assets/images/gps.svg') 100% 100% no-repeat;
    background-size: contain;
    position: absolute;
    width: 213px;
    height: 362px;
    left: 1107px;
    top: 122px;
    @media all and (max-width:800px) {
      top: 97px;
      height: 77px;
      width: 63px;
      position: absolute;
      left: 43%;
    }
  }

  &__img {
    &__index {
      background: url('~assets/images/index.svg') 100% 100% no-repeat;
      background-size: contain;
      width: 29.62px;
      height: 24.85px;
      margin-right: 25px;      
      @media all and (max-width:800px) {
        height: 12px;
        width: 15px;
      }
    }
    &__logo {
      background: url('~assets/images/LOGO-map.svg') 100% 100% no-repeat;
      background-size: contain;
      width: 240.7px;
      height: 90.26px;
      @media all and (max-width:800px) {
        height: 35px;
        width: 230px;
      }
    }
    &__mail {
      background: url('~assets/images/mail.svg') 100% 100% no-repeat;
      background-size: contain;
      height: 18px;
      width: 26px;
      margin-right: 25px;
      @media all and (max-width:800px) {
        height: 8px;
        width: 13px;
      }
    }
    &__medor {
      background: url('~assets/images/MEDOR.svg') 100% 100% no-repeat;
      background-size: contain;
      background-position-x: left;
      width: 102.93px;
      height: 16.25px;
      @media all and (max-width:800px) {
        height: 7px;
        width: 63px;
      }
    }
    &__tel {
      background: url('~assets/images/tel.svg') 100% 100% no-repeat;
      background-size: contain;
      height: 24px;
      width:24px;
      margin-right: 25px;
      @media all and (max-width:800px) {
        height: 12px;
        width: 12px;
      }
    }
  }

  &__style {
    &__hr {
      border: 0.955614px solid rgba(255, 255, 255, 0.48);
      width: 464.14px;
      margin-top: -9px;
      height: 0px;
      @media all and (max-width:800px) {
        width: 175px;
        position: absolute;
        height: 0px;
        top: 70px;
        left: 103px;
      }
    }
    &__p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 158.3%;
      color: #FFFFFF;
      @media all and (max-width:800px) {
        font-size: 9px;
        line-height: 130%;
        margin-bottom: 5px !important;
      }
    }
    &__p-address {
      font-style: normal;
      font-weight: 500;
      font-size: 17.6064px;
      line-height: 138.3%;
      color: #FFFFFF;
      @media all and (max-width:800px) {
        font-size: 9px;
        line-height: 90%;
      }
    }
    &__p-link {
      font-style: normal;
      font-weight: 500;
      font-size: 16.252px;
      line-height: 138.3%;
      margin-bottom: 10px !important;
      letter-spacing: 0.15em;
      color: #FFFFFF;
      @media all and (max-width:800px) {
        font-size: 8px;
        line-height:70%;
      }
    }
  }
}
</style>