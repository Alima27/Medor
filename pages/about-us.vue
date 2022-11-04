<template>
  <div class="about wrapper">
    <div class="about__first">
      <div class="vector d-flex">
        <div class="vector-img"></div>
        <nuxt-link to="/" class="vector-text">{{ $t('header_about-us') }}</nuxt-link>
      </div>
      <h1 v-if="$i18n.locale == 'ru'" class="about__style__h1">Будни наших медсестрёр</h1>
      <div class="d-flex about__first__container">
        <div class="about__images__img1"></div>
          <p class="about__style__p about__first__style__p">
            {{ $t('about_text1-1') }}
            <br>
            {{ $t('about_text1-2') }}
            <br>
            <span v-show="visible" class="about__visible">
                {{ $t('about_text1-3') }}
                <br>
                {{ $t('about_text1-4') }}
                <br>
               {{ $t('about_text1-5') }}
                <br>
               {{ $t('about_text1-6') }}
            </span>
            <span v-if="$i18n.locale == 'ru'" class="about__style__visible-text" @click="visible=!visible">{{visible?'Скрыть':'Читать дальше'}}</span>
          </p>
      </div>
    </div>
    <div class="about__second d-flex">
      <div class="about__second__text">
        <p class="about__style__p about__second__style__p">
          {{ $t('about_text2-1') }}
          <br>
         {{ $t('about_text2-2') }}
          <span v-show="showmore" class="about__visible">
            <br>
            {{ $t('about_text2-3') }}
            <br>
            {{ $t('about_text2-4') }}
            <br>
            {{ $t('about_text2-5') }}
            <br>
            {{ $t('about_text2-6') }}
          </span>
          <span v-if="$i18n.locale == 'ru'" class="about__style__visible-text" @click="showmore=!showmore">{{showmore?'Скрыть':'Читать дальше'}}</span>       
        </p>
      </div>
      <div class="about__images__img2"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      showmore: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vector';
.about {
  max-width: 100%;
  height: auto;
  @media all and (max-width: 800px) {
    padding: 0 20px;
  }
  &__first {
    padding-top: 30px;
    width: 100%;
    @media all and (max-width: 800px) {
      padding-top: 100px;
    }
    &__container {
      background-color: white;
      padding-top: 10px;
      @media all and (max-width: 800px) {
        align-items: center;
        flex-direction: column;
      }
    }
    &__style {
      &__p {
        width: 607px;
        height: 100%;
        margin-left: 58px;
        @media all and (max-width: 800px) {
          margin-left: 0;
        }
    }
    }
  }
  &__images {
    &__img1 {
      background: url('~assets/images/nurse.png') 100% 40% no-repeat;
      background-size: contain;
      height: 450px;
      width: 630px; 
      @media all and (max-width: 800px) {
        height: 218px;
        width: 100%;
        margin: 0 auto;
      }
    }
    &__img2 {
      background: url('~assets/images/img2.svg') 100% 100% no-repeat;
      background-size: contain;
      width: 681px;
      height: 490px;
      margin-left: -300px;
      margin-top: 0;
      @media all and (max-width: 800px) {
        height: 218px;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
  &__second {
    margin-top: 100px;
    @media all and (max-width: 1100px) {
      align-items: center;
      flex-direction: column-reverse;
      margin-top: 0;
    }
    &__style {
      &__p {
        width: 581px;
        height: 100%;
        @media all and (max-width: 800px) {
        }
      }
    }
    &__text {
      background-color: #D4EBFF;
      width: 1003px;
      height: 100%;
      padding: 50px 30px;
      margin-bottom: 20px;
      @media all and (max-width: 800px) {
        padding: 20px 10px;
        width: 100%;
      }
    }
  }
  &__style {
    &__h1 {
      font-style: normal;
      font-weight: 800;
      font-size: 33px;
      line-height: 71px;
      letter-spacing: 0.005em;
      color: #000000;
      @media all and (max-width: 800px) {
        font-size: 15px;
      }
    }
    &__p {
      color: #000000;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 35px;
      @media all and (max-width: 800px) {
        font-size: 10px;
        line-height: 23px;
        margin: 15px auto;
        width: 100%;
        height: 100%;
      }
    }
    &__visible-text {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 161.3%;
      float: right;
      @media all and (max-width: 800px) {
        font-size: 10px;
      }
    }
  }
  &__visible {
  position: relative;
}
}
</style>