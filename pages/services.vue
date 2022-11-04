<template>
  <div class="services">
    <div class="wrapper services__main">
      <div class="d-flex">
        <div class="services__main__left">
          <div class="vector d-flex">
            <div class="vector-img"></div>
            <nuxt-link to="/" class="vector-text"> {{ $t('header_services') }}</nuxt-link>
          </div>
          <div class="services__style">
            <h1 class="services__style__h1">
              {{ $t('services_h1') }}
            </h1>
            <p class="services__style__p">
               {{ $t('services_p') }}
            </p>
            <Button></Button>
            <div class="social">
            <!--<a href="">
              <button class="social__instagram social__size"></button>
            </a>-->
            <a href="https://wa.me/79956107577/?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.+%D0%9C%D0%B5%D0%BD%D1%8F+%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82+%D1%82%D1%80%D1%83%D0%B4%D0%BE%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE+%D0%BC%D0%B5%D0%B4%D0%B8%D0%BA%D0%BE%D0%BC+%D0%B2+%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8E." target="_blank">
                <button class="social__whatsapp social__size"></button>
              </a>
              <a href="tg://resolve?domain=Medormed" target="_blank">
                <button class="social__telegram social__size"></button>
              </a> 
            </div>
          </div>
        </div>
        <div class="services__main__right">
          <div class="services__images__doctors"></div>
        </div>
      </div>
    </div>
    <div>
      <Information />
    </div>
    <div class="services__text">
      <p class="services__text__p" >
        {{ $t('services_p1') }}
      </p>
      <p>
        {{ $t('services_p2') }}
        <ul type="circle" class="services__text__ul">
          <li>
            {{ $t('services_li-1') }}
          </li>
          <li>
            {{ $t('services_li-2') }}
          </li>
          <li>
            {{ $t('services_li-3') }}
          </li>
        </ul>
      </p>
    </div>
    <div>
      <Carousel />
    </div>
    <div class="services__base">
      <h3 class="h3">
         {{ $t('services_h3') }}
      </h3>
      <hr class="services__style__hr">
      <div class="d-flex services__base__container">
        <div class="services__style__bg">
          <h5 class="services__style__h5">
            {{ $t('services_h5-1') }}
          </h5>
          <p class="services__style__p-base">
           {{ $t('services_text1') }} 
          </p>
        </div>
        <div class="services__style__bg">
          <h5 class="services__style__h5">
            {{ $t('services_h5-2') }}
          </h5>
          <p class="services__style__p-base">
           {{ $t('services_text2') }}
          </p>
        </div>
        <div class="services__style__bg">
          <h5 class="services__style__h5">
            {{ $t('services_h5-3') }}
          </h5>
          <p class="services__style__p-base">
            {{ $t('services_text3') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>  
import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import Information from '@/components/Information';
export default {
	components: {
		Button,
    Carousel,
    Information
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/carousel';
@import '@/assets/styles/vector';
.services {
  max-width: 100%;
  height: auto;

  &__base {
    height: 100%;
    margin-top: 200px;
    margin-bottom: 50px;
    width: 100%;
    @media all and (max-width: 800px){
      margin-top: 15px;
    }
    &__container {
      @media all and (max-width: 800px) {
        align-items: center;
        flex-direction: column-reverse;
      } 
    }
  }
  &__main {
    background: #D4EBFF;
    width: 100%;
    height: 100%;
    @media all and (max-width: 800px) {
      padding-left: 10px;
      padding-top: 100px;
    }

    &__left {
      height: 100%;
      width: 100%;
      @media all and (max-width:800px) {
        width: 150px;
      }
    }

    &__right {
      height: 100%;
      width: 100%;
    }
  }

  &__images {
    &__doctors {
      background: url(~assets/images/services.png) 100% 100% no-repeat;
      background-size: contain;
      width: 800px;
      height: 700px;

      @media all and (max-width: 600px) {
        width: 100%;
        height: 320px;
      }
    }
  }
  &__style {
    &__bg {
      width: 307px;
      height: 519px;
      padding: 10px 10px;
      margin: 0 auto;
      @media all and (max-width: 800px) {
        background: #cde9f7;
        height: 100%;
        margin: 5px 0;
        width: 100%;
      }
    }

    &__h1 {
      color: #000;
      font-style: normal;
      font-weight: 900;
      font-size: 33px;
      line-height: 109.84%;
      letter-spacing: 0.02em;
      @media all and (max-width: 800px) {
        font-size: 15px;
      }
    }

    &__h5 {
      color: #000;
      font-style: normal;
      font-weight: 900;
      font-size: 25px;
      line-height: 109.84%;
      letter-spacing: 0.02em;
      text-align: center;
      @media all and (max-width: 800px) {
        font-size: 15px;
      }
    }
    &__hr {
      border-color: #D4EBFF;
      box-shadow: 0 0 26px  #D4EBFF;
      width: 90%;
    }
    &__p {
      color: #000;
      font-style: normal;
      font-weight: 300;
      font-size: 17px;
      line-height: 136.34%;
      margin-top: 47px;
      @media all and (max-width: 800px) {
        font-size: 10px;
        margin-top: 10px;
      }
    }
    &__p-base {
      color: #000;
      font-style: normal;
      font-weight: 300;
      font-size: 17px;
      line-height: 140%;
      text-align: center;
      @media all and (max-width: 800px) {
        font-size: 10px;
        margin-top: 10px;
      }
    }
  }
  &__text {
    background: linear-gradient(146.89deg, #8DF5FF -5.57%, #00B3C4 32.31%, #00B3C4 83.53%);
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 200.8%;
    padding: 20px;
    margin: 50px 0;
    text-align: center;
      @media all and (max-width: 800px) {
        font-size: 10px;
        line-height: 15px;
        margin: 20px 0;
        padding:0 10px;
        text-align: left;
    }

    &__ul {
      font-weight: bold;
      margin: 0 auto;
      text-align: left;
      width: 900px;
      @media all and (max-width: 800px) {
        width: 100%;
    }
    }
  }
}
</style>
