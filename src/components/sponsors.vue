<template>
  <div class="sponsors-root">
    <div class="sponsors-container">
      <div class="button-container">
        <button class="slider-button" @click="previous()">◄</button>
        <button class="slider-button" @click="next()">►</button>
      </div>
      <flickity ref="flickity" class="carousel" :options="flickityOptions">
        <div 
          class="slide-item"
          :index="index" v-for="(item,index) in sponsorList"
          :key="index">
        <img :src="item.image">
      </div>
      </flickity>
    </div>
  </div>
</template>

<script>
import flickity from 'vue-flickity';
import burnabox from '@/assets/Images/burnabox.png'
import hobnob from '@/assets/Images/hobnob.png'
import scenthound from '@/assets/Images/scenthound.png'
import vividways from '@/assets/Images/vividways.png'
export default {
  name: 'sponsors',
  components: {
    flickity
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        setGallerySize: false,
        cellAlign: 'left',
        contain: true,
        percentPosition: false
      },
      sponsorList: [
        {
          image: burnabox,
        },
        {
          image: hobnob,
        },
        {
          image: scenthound,
        },
        {
          image: vividways,
        },
        {
          image: hobnob,
        },
      ]
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/theme.scss';
  .sponsors-root {
    margin:  auto;
    width: 100%;
    position: relative;
    background: $background-black-color;
    padding: 90px 0;
    @media (max-width: $below-ipad-size) {
      padding: 40px 0;
    }
  }
  .sponsors-container {
    margin: auto;
    width: 80%;
    max-width: $content-max-width + 60px; // for slider button
    position: relative;
  }
  .carousel {
    height: 170px;
    width: 90%;
    margin: auto;
    @media (max-width: $below-ipad-size) {
      height: 300px
    }
    @media (max-width: 500px) {
      height: 170px
    }
  }
  .slide-item {
    width: 280px;
    z-index: 2;
    img {
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      opacity: 0.4;
      transition: all 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
    @media (max-width: $below-ipad-size) {
      width: 100%;
      margin: 0px;
    }
  }
  .button-container {
    position: absolute;
    top: 40px;
    width: 100%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .slider-button {
      @include Slider-button($text-light-grey-color, $main-theme-color) //dark
    }
  }
</style>