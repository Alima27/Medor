<template>
  <div class="home">
    <div class="wrapper home__main d-flex">
      <div class="home__main__left">
        
        <div class="home__style">
          <h1 class="home__style__h1">
            {{ $t('home_main_h1') }}
          </h1>
          <p class="home__style__p">
           {{ $t('home_main_p') }}
          </p>
          <Button text="Консультация"></Button>
          <div class="social">
            <!--<a href="">
              <button class="social__instagram social__size"></button>
            </a>-->
            <a v-if="$i18n.locale == 'ru'" href="https://wa.me/79956107577/?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.+%D0%9C%D0%B5%D0%BD%D1%8F+%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82+%D1%82%D1%80%D1%83%D0%B4%D0%BE%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE+%D0%BC%D0%B5%D0%B4%D0%B8%D0%BA%D0%BE%D0%BC+%D0%B2+%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8E." target="_blank">
              <button class="social__whatsapp social__size"></button>
            </a>
            <a v-if="$i18n.locale == 'ru'" href="tg://resolve?domain=Medormed" target="_blank">
              <button class="social__telegram social__size"></button>
            </a> 
            <a v-if="$i18n.locale == 'de'" href="tg://resolve?domain=Riedel_O" target="_blank">
              <button class="social__telegram social__size"></button>
            </a> 
          </div>
        </div>
      </div>
      <div class="home__main__right">
        <div class="home__images__girl"></div>
      </div>
    </div>
    <div v-if="$i18n.locale == 'ru'" class="home__reviews">
      <div class="home__reviews__text">
        <h2 class="home__style__h2">
          {{ $t('home_reviews_h2') }}
        </h2>
        
        <p class="home__style__p-reviews">
          {{ $t('home_reviews_p') }}
        </p>
      </div>
      <div class="home__reviews__div d-flex">
        <div>
          <div class="home__reviews__div__white-left home__reviews__div__style">
            <div class="d-flex">
              <div class="home__reviews__div__chat"></div>
              <div>
                <h6 class="home__style__h6">Айзада, 23 года</h6>
                <span class="home__style__city">Бишкек</span>
              </div>
            </div>
            <p class="home__style__text">
              Здравствуйте. Работаю в Германии в доме престарелых, приехала с Бишкека через Medor. Работа нормальная, я привыкла. Сначала были сложности с языком и с уходом за пациентами. Но я работы не боюсь, со всеми дружу, начальство хорошо относится. Кто не готов мыть пациентов, чистить зубы, кормить, помогать и ухаживать, не получиться нормально работать. 
            </p>
          </div>
          <div class="home__reviews__div__blue-left home__reviews__div__style">
            <div class="d-flex">
              <div class="home__reviews__div__chat"></div>
              <div>
                <h6 class="home__style__h6">Елена, 34 года</h6>
                <span class="home__style__city">Медсестра</span>
              </div>
            </div>
            <p class="home__style__text">
              Спасибо Оливии и команде Medor за помощь и поддержку практически 24/7! Даже и не верилось, что возможно вот так попасть в Германию, страну, о которой мечтала ещё в детстве. Работаю в доме престарелых в Саксонии. В принципе всем довольна, обязанности понятные - уход, присмотр и помощь, всё стандартно. Я и в России в доме престарелых работала. Отдельное спасибо за помощь в поиске квартиры.
            </p>
          </div>
        </div>
        <div>
          <div class="home__reviews__div__blue-right home__reviews__div__style">
            <div class="d-flex">
              <div class="home__reviews__div__chat"></div>
              <div>
                <h6 class="home__style__h6">Ирина</h6>
                <span class="home__style__city">Караганда</span>
              </div>
            </div>
            <p class="home__style__text">
              Пишет вам та самая пугливая медсестра Ирина из Караганды. Совсем я замучила вас вопросами и тревогами - всё-таки боязно было устраиваться на работу в другую страну, да ещё и через Интернет! Но всё прошло отлично. Продолжаю изучение «разговорного» немецкого языка уже в Германии, страх разговора уже проходит. Работу в доме престарелых, считаю нормальным стартом, а дальше посмотрим. 
            </p>
          </div>
          <div class="home__reviews__div__white-right home__reviews__div__style">
            <div class="d-flex">
              <div class="home__reviews__div__chat"></div>
              <div>
                <h6 class="home__style__h6">Иван, 22 года</h6>
                <span class="home__style__city">Медбрат</span>
              </div>
            </div>
            <p class="home__style__text">
              Работаю в Саксонии, Дрезден в доме престарелых. Самое сложное - язык.  Но всё решаемо, учу и на курсах, и самостоятельно, и вообще стараюсь полностью погрузиться в обучение - планирую остаться в Германии на ПМЖ. Работа как работа, для меня же  ничего нового и слишком сложного нет, ноооо белоручкам в это сфере в Германии делать нечего. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button';
export default {
	components: {
		Button
	}
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/button';
@import '~assets/styles/social';
@import '~assets/styles/variables';
.home {
  max-width: 100%;
  height: auto;

  &__main {
    background: #D4EBFF;
    width: 100%;
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
    &__girl {
      background: url(~assets/images/doc1.png) 100% 100% no-repeat;
      background-size: contain;
      width: 800px;
      height: 700px;

      @media all and (max-width: 600px) {
        width: 100%;
        height: 320px;
      }
    }
  }

  &__reviews {
    background: #ffffff;
    margin-bottom: 50px;
    padding-left: 70px;
    padding-top: 15px;
    width: 100%;
    @media all and (max-width: 800px) {
      padding-left: 10px;
      padding-top: 5px;
    }
    &__div {
      margin-left: 90px;
      @media all and (max-width: 800px) {
        flex-direction: column;
        margin: 0;
        padding: 10px;        
      }

      &__style {
        border: 0.931327px solid #D4EBFF;
        border-radius: 35.3904px;
        padding: 10px 22px;
      }

      &__chat {
        background: url('~assets/images/chat.svg') 100% 100% no-repeat;
        background-size: contain;
        width: 56.81px;
        height: 54.02px;
        margin-right: 13px;
        @media all and (max-width: 1100px) {
          width: 30px;
          height: 27px;
        }
      }

      &__blue-left {
        background: #D4EBFF;
        width: 596.05px;
        height: 281.26px;
        @media all and (max-width: 1100px) {
          height: 100%;
          width: 100%;
          margin: 10px 0;
        }
      }

      &__blue-right {
        background: #D4EBFF;
        width: 626.78px;
        height: 307.34px;
        margin-bottom: 53px;
        margin-top: -50px;
        margin-left: -20px;
        @media all and (max-width: 1100px) {
          height: 100%;
          width: 100%;
          margin: 10px 0;
        }
      }
      &__white-left {
        border: 3.72531px solid #D4EBFF;
        border-radius: 35.3904px;
        width: 600.71px;
        height: 277.54px;
        margin-bottom: 83px;
        @media all and (max-width: 1100px) {
          height: 100%;
          width: 100%;
          margin: 10px 0;
        }
      }

      &__white-right {
        border: 3.72531px solid #D4EBFF;
        border-radius: 35.3904px;
        margin-left: -20px;
        width: 573.7px;
        height: 291.51px;
        @media all and (max-width: 1100px) {
          height: 100%;
          width: 100%;
          margin: 10px 0;
        }
      }
    }
    &__text {
      width: 600px;
      @media all and (max-width: 1100px) {
        width: 100%;
      }
    }
  }
  &__style {
    &__city {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 18.6265px;
      line-height: 22px;
      letter-spacing: 0.045em;
      color: #00B3C4;
      @media all and (max-width: 800px) {
        font-size: 12px;
        line-height: 11px;
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
    &__h2 {
      text-align: center;
      font-style: normal;
      font-weight: 800;
      font-size: 50px;
      line-height: 65px;
      color: #000000;
      @media all and (max-width: 800px) {
        font-size: 20px;
        line-height: 40px;
      }
    }
    &__h6 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 19.5579px;
      line-height: 23px;
      letter-spacing: 0.045em;
      color: #000000;
      @media all and (max-width: 800px) {
        font-size: 15px;
        line-height: 10px;
      }
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
    &__p-reviews {
      font-style: normal;
      font-weight: 500;
      font-size: 30.0943px;
      line-height: 35px;
      color: #000000;
      @media all and (max-width: 800px) {
        font-size: 10px;
        line-height: 5px;
        text-align: center;
      }
    }
    &__text {
      color: #000000;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 19.5579px;
      line-height: 23px;
      padding: 10px 0;
        @media all and (max-width: 768px) {
          font-size: 10px;
        }
    }
  }
}
</style>
