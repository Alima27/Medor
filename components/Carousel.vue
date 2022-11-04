<template>
  <div class="carousel">
    <h3 class="h3">{{ $t('carousel_h3') }}</h3>
    <VueSlickCarousel v-bind="settings"  :style="{height: '372px'}" class="carousel__VueSlickCarousel">
      <div class="carousel__container">
        <div class="carousel__style__num"> 01</div>
        <p class="carousel__style__p">
          {{ $t('carousel_p1') }}
        </p>
      </div>
      <div class="carousel__container">
        <div class="carousel__style__num">02</div>
        <p class="carousel__style__p">
           {{ $t('carousel_p2') }}
        </p>
      </div>
      <div class="carousel__container">
        <div class="carousel__style__num">03</div>
        <p class="carousel__style__p">
           {{ $t('carousel_p3') }}
        </p>
      </div>
      <div class="carousel__container">
        <div class="carousel__style__num">04</div>
        <p class="carousel__style__p">
          {{ $t('carousel_p4') }}
        </p>
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
          adaptiveHeight: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true
        }
      }
    }
  }
</script> 

<style lang="scss" scoped>
.carousel {
  width: 90%;
  height: 100%;
  margin: auto;

  &__container {
    background: white;
    margin: 5px 0;
    padding: 2.6% 0;
  }
  &__style {
    &__p {
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 161.3%;
      margin-top: 5px;
      text-align: center;
      @media all and (max-width: 800px) {
        font-size: 10px;
        line-height: 148.3%;
      }
    }
    &__num {
      background: url('~assets/images/Ellipse.svg') 100% 100% no-repeat;
      background-size: contain;
      color: #687C7D;
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      height: 31px;
      margin: 0 auto;
      padding: 2% 0;
      line-height: 13px;
      text-align: center; 
      width: 31px;
    }
  }
  &__VueSlickCarousel {
    padding: 10px 10%;
  }
}
</style>

<style lang="scss">
@import '@/assets/styles/carousel';
.carousel{
  ul.slick-dots {
    visibility: hidden;
    display: none
  }
  .slick-prev {
    z-index: 1;
  }
  
  .slick-next:before,
  .slick-prev::before {
    color: #00B3C4;
    font-size: 31px;
  }
}
</style>
