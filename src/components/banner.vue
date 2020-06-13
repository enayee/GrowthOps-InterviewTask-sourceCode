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
.banner-root {
  width: 100%;
  height: 100%;
  position: relative;
}
.banner-background {
  width: 100%;
  // position: absolute;
  // top: 0;
  // left: 0
}
</style>