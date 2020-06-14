<template>
  <div class="banner-root">
    <img class="banner-background" :src="BannerBackground" alt="">
    <a class="toggle-down" href="#start"></a>
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
.toggle-down {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 60%;
  left: 32%;
  cursor: pointer;
  @media (max-width: $below-ipad-size) {
    left: 40%;
    width: 80px;
    height: 80px;
  }
}
</style>