<template>
  <div class="dropdown" @change="changeLocale">
    <div class="dropdown d-flex">
      <nuxt-link :to="switchLocalePath('de')"  class="language__flag-de"></nuxt-link>
      <nuxt-link :to="switchLocalePath('ru')"  class="language__flag-ru"></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLocale (e) {
      this.switchLocalePath(e.target.value)
      this.$router.push(this.switchLocalePath(e.target.value))
    }
  }
}
</script>

<style lang="scss" scoped>
.language {
  &__flag-de {
    background: url('~assets/images/flag_de.svg') 100% 100% no-repeat;
    display: block;
    width: 19px;
    height: 19px;
    margin: 0 8px;
  }
  &__flag-ru {
    background: url('~assets/images/flag_ru.svg') 100% 100% no-repeat;
    display: block;
    width: 19px;
    height: 19px;
  }
}

</style>