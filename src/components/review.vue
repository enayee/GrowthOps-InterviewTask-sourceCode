<template>
  <div class="review-root">
    <div class="review-container">
      <div class="review-info">
        <div class="review-title">
          <span class="name">{{ memberList[displayIndex].name }}</span>
          <i class="role"> - {{ memberList[displayIndex].role }}</i>
        </div>
        <div class="review-content">
          <span class="quotation-mark">&#8220;</span>
          {{ memberList[displayIndex].quotation }}
          <span class="quotation-mark">&#8221;</span>
        </div>
      </div>
      <div class="button-container">
        <button class="slider-button" :disabled="displayIndex === 0" @click="showDisplay(-1)">&#9664;</button>
        <button class="slider-button" :disabled="displayIndex === memberList.length - 1" @click="showDisplay(1)">&#9654;</button>
      </div>
    </div>
  </div>
</template>

<script>
import memberList from '@/data/memberList.js'
export default {
  name: 'review',
  data() {
    return {
      memberList,
      displayIndex: 0,
    }
  },
  methods: {
    showDisplay(index) {
      if (this.displayIndex + index >= 0 && this.displayIndex + index < this.memberList.length) this.displayIndex += index;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/theme.scss';
.review-root {
  margin:  auto;
  width: 100%;
  position: relative;
  background: $main-theme-color;
  padding: 90px 0;
  &:before {
    content: '';
    width: 54px;
    height: 54px;
    background: $background-black-color;
    position: absolute;
    top: -27px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-radius: 4px;
  }
  &:after {
    content: '';
    width: 20px;
    height: 28px;
    position: absolute;
    color: #e3e3e3;
    top: -10px;
    left: 50%;
    transform: translateX(-60%);
    background: url('~@/assets/Icons/quotes-icon.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }
}
.review-container {
  margin: auto;
  width: 80%;
  max-width: $content-max-width;
}
.review-info {
  margin: auto;
  text-align: center;
  .review-title {
    display: inline-block;
    background-color: $background-light-grey-color;
    padding: 15px;
    border-radius: 4px;
    .name {
      font-size: 13px;
      font-weight: 800;
      color: #00a99d;
      text-transform: uppercase;
    }
    .role {
      font-size: 12px;
      font-weight: 500;
      color: #aaaaaa;
    }
  }
  .review-content {
    margin-top: 30px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.7;
    color: $text-light-grey-color;
    position: relative;
    @media (max-width: $below-ipad-size) {
      font-size: 14px;
    }
    .quotation-mark {
      position: relative;
      font-size: 80px;
      line-height: 0px;
      top: 40px;
      @media (max-width: $below-ipad-size) {
        font-size: 48px;
        top: 20px;
      }
    }
  }
}
.button-container {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .slider-button {
    @include Slider-button($background-light-grey-color, $background-black-color) //light
  }
}

</style>