<template>
  <div class="information">
    <VueSlickCarousel :arrows="true" :dots="true"  v-bind="settings" class="information__vueslick" >
      <div class="information__container">
        <h3 class="h3">
          {{ $t('information_slide1-h3') }}
        </h3>
        <p class="information__text__p">
          {{ $t('information_slide1-text') }}
        </p>
      </div>
      <div class="information__container">
        <h3 class="h3">
          {{ $t('information_slide2-h3') }} 
        </h3>
        <ul class="information__text__ul">
          <li  class="information__text__p">
            {{ $t('information_slide2-text1') }}
          </li>
          <li  class="information__text__p">
            {{ $t('information_slide2-text2') }}
          </li>
          <li  class="information__text__p">
            {{ $t('information_slide2-text3') }}
          </li>
            </ul>
      </div>
      <div class="information__container">
        <h3 class="h3">
          {{ $t('information_slide3_h3') }}
        </h3>
        <ul class="information__text__ul">
          <li  class="information__text__p">
            {{ $t('information_slide3-text1') }}
          </li>
          <li  class="information__text__p">
            {{ $t('information_slide3-text2') }}
          </li>
          <li  class="information__text__p">
           {{ $t('information_slide3-text3') }}
          </li>
          <li  class="information__text__p">
           {{ $t('information_slide3-text4') }}
          </li>
          <li  class="information__text__p">
            {{ $t('information_slide3-text5') }}
          </li>
          <li  class="information__text__p">
            {{ $t('information_slide3-text6') }}
          </li>
        </ul>
      </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    components: { 
      VueSlickCarousel 
    },
    data() {
      return {
        settings: {
          adaptiveHeight: true,
          centerMode:true,
        }
      }
    }
  }
</script> 

<style lang="scss" scoped>
.information {
  margin: 50px 0;

  &__text {
    &__ul {
      margin:5px 20px;
      @media all and (max-width: 800px) {
        margin: 2px 5px;
      }
    }
    &__p {
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 25px;
      padding:0 40px;
      @media all and (max-width: 800px) {
        font-size: 10px;
        line-height: 15px;
        padding:0 10px;
    }
    }
  }
}
</style>

<style lang="scss">
@import '@/assets/styles/carousel';
.information {
  .slick-next:before {
    color: #00B3C4;
  }
  .slick-track.slick-center {
    height: 250px;
    @media all and (max-width: 800px) {
      height: 100%;
      width: 100%;
    }  
  }
}
</style>
