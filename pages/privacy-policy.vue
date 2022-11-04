<template>
  <div class="privacy-policy">
    <h1 class="privacy-policy__style__h1">
      {{ $t('privacy-policy') }}
    </h1>
    <div v-if="$i18n.locale == 'de'">
      <h3 class="privacy-policy__style__h4">Impressum</h3>
      <ul class="privacy-policy__style__p">
        <li>Liehrstr 8 </li>
        <li>01279 Dresden  / Deutschland</li>
        <li>+49 1733738226</li>
        <li>post@med-or.de</li>
      </ul>
      <h4 class="privacy-policy__style__h4">
        Vertreten durch:
      </h4>
      <p class="privacy-policy__style__p">
        Olivia Riedel
      </p>
      <h4 class="privacy-policy__style__h4">
        Verantwortlich für den Inhalt nach §5 TMG:
      </h4>
      <p class="privacy-policy__style__p">
        Olivia Riedel
      </p>  
      <h4 class="privacy-policy__style__h4">
        Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
      </h4>
      <p class="privacy-policy__style__p">
        DE 203/262/06238
      </p>    
    </div>

    <h4 class="privacy-policy__style__h4">
      {{ $t('privacy-policy_h4-1') }}
    </h4>
    <p class="privacy-policy__style__p">
      {{ $t('privacy-policy_p-1') }}
    </p>
    <h4 class="privacy-policy__style__h4">
     {{ $t('privacy-policy_h4-2') }}
    </h4>
    <p class="privacy-policy__style__p">
     {{ $t('privacy-policy_p-2') }}
    </p>
    <h4 class="privacy-policy__style__h4">
       {{ $t('privacy-policy_h4-3') }}
    </h4>
    <p class="privacy-policy__style__p">
      {{ $t('privacy-policy_p-3') }}
    </p>
    <h4 class="privacy-policy__style__h4">
      {{ $t('privacy-policy_h4-4') }}
    </h4>
    <p class="privacy-policy__style__p">
      {{ $t('privacy-policy_p-4') }}
    </p>
    <h4 class="privacy-policy__style__h4">
      {{ $t('privacy-policy_h4-5') }}
    </h4>
    <ul class="privacy-policy__style__p">
      <li>
        www.google.com
      </li>
      <li>
        www.freepik.com
      </li>
      <li>by MONLUXDESIGN</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.privacy-policy {
  padding: 120px;
  @media all and (max-width:800px) {
    padding: 50px 20px;
  }
  &__style {
    &__h1 {
      font-style: normal;
      font-weight: 800;
      font-size: 33px;
      line-height: 71px;
      letter-spacing: 0.005em;
      color: #000000;
      @media all and (max-width:800px) {
        font-size: 15px; 
      }
    }

    &__h4 {
      font-style: normal;
      font-weight: 800;
      font-size:25px;
      line-height: 71px;
      letter-spacing: 0.005em;
      color: #00B3C4;
      @media all and (max-width:800px) {
        font-size:15px ;
      }
    }
    &__p {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 35px;
      color: #000000;
        @media all and (max-width:800px) {
          font-size: 13px;
        }
    }
  }
}
</style>
