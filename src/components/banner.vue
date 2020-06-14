<template>
  <div class="banner-root">
    <img class="banner-background" :src="BannerBackground" alt="">
  </div>
</template>

<script>
import BannerBackground from '@/assets/Images/home-bkg.png'
export default {
  name: 'banner',
  data() {
    return {
      BannerBackground,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/theme.scss';
.banner-root {
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: $below-ipad-size) {
    overflow: hidden;
  }
}
.banner-background {
  width: 100%;
  @media (max-width: $below-ipad-size) {
    width: 200%;
    margin-left: -22%;
  }
}
</style>