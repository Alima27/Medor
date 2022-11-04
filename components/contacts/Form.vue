<template>
  <div class="form d-flex">
    <div class="form__img__left"></div>
    <div class="form__right">
      <div class="form__row d-flex">
        <div class="form__row__text">
          <h5 class="form__style__h5">
            {{ $t('form_h5') }}
          </h5>
          <p class="form__style__p">
            {{ $t('form_p') }}
          </p>
        </div>
        <div class="form__img__logo"></div>
      </div>
      <div class="form__forms">
        <form v-if="!submitted" target="_blank" @submit.prevent="validate">
          <div class="form-group">
            <div class="d-flex form__input__style">
              <div class="input-group-prepend">
                <span class="input-group-text bg-white">
                  <i class="form__img__name"></i>
                </span>
              </div>
              <input v-if="$i18n.locale == 'ru'" v-model="name" name="name" type="name" placeholder="Имя" class="form-control border-left-0" required>
              <input v-if="$i18n.locale == 'de'" v-model="name" name="name" type="name" placeholder="Name" class="form-control border-left-0" required>
            </div>
          </div>

          <div  class="form-group">
            <div class="form__input__style d-flex">
              <div class="input-group-prepend">
                <span class="input-group-text bg-white">
                  <i class="form__img__email"></i>
                </span>
              </div>
              <input 
                v-if="$i18n.locale == 'ru'"
                v-model="email" 
                :class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}"
                type="email"
                placeholder="Почта" 
                class="form-control border-left-0" 
                @blur="emailBlured = true">
              <input 
                v-if="$i18n.locale == 'de'"
                v-model="email" 
                :class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}"
                type="email"
                placeholder="Email" 
                class="form-control border-left-0" 
                @blur="emailBlured = true">
              <div class="invalid-feedback">{{ $t('form_required') }}</div>
            </div>
          </div>

          <div class="form-group d-flex">
            <i class="form__img__comm"></i>
            <textarea v-if="$i18n.locale == 'ru'" v-model="message" class="form-control" rows="5" placeholder="Комментарий" required></textarea>
            <textarea v-if="$i18n.locale == 'de'" v-model="message" class="form-control" rows="5" placeholder="Nachricht" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary float-right">
            <i class="fa fa-paper-plane"></i> 
            {{ $t('form_send') }}
          </button>
        </form>
      </div>
      <div class="form__btn"></div>
      <div v-if="loading" class="preloader">
        <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
        return {
            loading: false,
            email : "",
            message: '',
            name:'',
            emailBlured : false,
            submitted : false
        }
    },
  methods : {
    validate(){
      this.emailBlured = true;
       if( this.validEmail(this.email)){
          this.send()
       }
    },
    validEmail(email) {
        const re = /(.+)@(.+){2,}\.(.+){2,}/;
        return re.test(email.toLowerCase());
    },
    async send() {
      this.loading = true
      const payload = {
        from: this.email,
        name: this.name,
        text: this.message
      }
      try {
        const response = await this.$axios.$post('http://med-or.de:5000/v1/text-mail', payload)
        this.loading = false
        this.submitted = true
      } catch (error) {
        this.loading = false
      }
      },
      submit() {
        this.validate();
          if(this.valid){
         // THIS IS WHERE YOU SUBMIT DATA TO SERVER
          this.submitted = true;
        }
    }
    },
}
</script>
<style lang="scss" scoped>
.preloader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 99;
  position: fixed;
  background: rgba(#fff, 0.5);
  top: 0;
  left: 0;
}
.form {
  @media all and (max-width: 800px) {
    align-items: center;
    flex-direction: column;
  }

  &__forms {
    margin-top: 40px;
  }

  &__img {
    &__logo {
      background: url(~assets/images/logo.svg) 100% 100% no-repeat;
      background-size: contain;
      width: 175px;
      height: 91px; 
      @media all and (max-width: 800px) {
        height: 56px;
        width: 100px;
        background-size: cover;
      }      
    }

    &__left {
      background: url(~assets/images/form.png) 100% 100% no-repeat;
      background-size: contain;
      width: 714px;
      height: 511px;
      @media all and (max-width: 800px) {
        height: 214px;
        width: 100%;
        background-size: cover;
      }
    }

    &__name {
        background: url(~assets/images/man.png) no-repeat;
        background-size: contain;
        width: 21px;
        height: 21px;
        @media all and (max-width: 800px) {
          height: 18px;
          width: 18px;
        }
    }

    &__email {
        background: url(~assets/images/letter2.png) no-repeat;
        background-size: contain;
        width: 23px;
        height: 23px;
        @media all and (max-width: 800px) {
          height: 20px;
          width: 20px;
        }
    }

    &__comm {
        background: url(~assets/images/comment.png) no-repeat;
        background-size: contain;
        margin: 0.375rem 0.75rem;
        width: 24px;
        height: 24px;
        @media all and (max-width: 800px) {
          height: 21px;
          width: 21px;
        }
    }
  }

  &__row {
    justify-content: space-between ;
  }

  &__right {
    margin-left: 60px;
    padding-top: 40px;
    padding-bottom: 68px;
    @media all and (max-width: 800px) {
      height: 100%;
      width: 100%;
      margin-left: 0px;
      padding-top: 20px;
      padding:25px 10px;
    }
  }

  &__style {
    &__h5 {
      font-style: normal;
      font-weight: bolder;
      font-size: 20px;
      line-height: 145.3%;
      letter-spacing: 0.005em;
      color: #000000;
      margin: 11px  0;
      @media all and (max-width: 800px) {
        font-size: 14px;
      }  
    }
    &__p {
      font-style: normal;
      font-weight: 100;
      font-size: 17px;
      line-height: 145.3%;
      letter-spacing: 0.005em;
      color: #000000;
      @media all and (max-width: 800px) {
        font-size: 12px;
      }  
    }
  }
}
</style>

<style lang="scss">

.form {
  .btn {
    width: 130px;
    height: 50px;
    background: #00B3C4;
    border-radius: 11px;
    box-shadow: 3px 3px 11px 0px #07c5d7;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 145.3%;
    @media all and (max-width:800px) {
      font-size: 13px;
      width: 100px;
      height: 40px;
    }
  }
  .btn-primary {
    border-color:  #00B3C4;;
  }
  .input-group-text {
    border: none;
    border-radius: 11px;
  }
  .form-control {
    border: none;
    border-radius: 11px;
  }
  .form-group {
    background: #FFFFFF;
    border: 1px solid #D4EBFF;
    box-sizing: border-box;
    border-radius: 11px;
    box-shadow: 0px 11px 26px 0px   #D4EBFF;
    margin-bottom:32px;
    width: 618px;
    @media all and (max-width: 800px) {
      width: 100%;
      }  
  }
  .form-control:focus {
    box-shadow: none;
  }
  input::placeholder,
  textarea::placeholder {
    font-style: normal;
    font-weight: 100;
    font-size: 18px;
    line-height: 145.3%;
    letter-spacing: 0.005em;
    color: #A7A7A7;
    @media all and (max-width: 800px) {
      font-size: 14px;
  }
  }
}
</style>