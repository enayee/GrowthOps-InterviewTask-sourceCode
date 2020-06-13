<template>
  <div class="features-root">
    <h2 class="Section-title">what we <span class="Text-theme-color">offer</span></h2>
    <div class="Description light">We offer our customers the best services & solutions, this is our main services list</div>
    <div class="feature-list-container">
      <div 
        class="feature-item"
        :class="{'hover': hoveringIndex === 0}">
        <div class="feature-icon">
          <img src="~@/assets/Icons/television.svg">
        </div>
        <div class="feature-title">responsive & multipurpose</div>
        <div class="feature-desc">Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.</div>
        <button
          class="feature-button"
          @mouseover="toggleHover(0)"
          @mouseleave="toggleHover(-1)"
        >read more</button>
      </div>
      <div 
        class="feature-item"
        :class="{'hover': hoveringIndex === 1}">
        <div class="feature-icon">
          <img src="~@/assets/Icons/puzzle.svg">
        </div>
        <div class="feature-title">easy customization</div>
        <div class="feature-desc">Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.</div>
        <button 
          class="feature-button"
          @mouseover="toggleHover(1)"
          @mouseleave="toggleHover(-1)">read more</button>
      </div>
      <div 
        class="feature-item"
        :class="{'hover': hoveringIndex === 2}">
        <div class="feature-icon">
          <img src="~@/assets/Icons/lifebuoy.svg">
        </div>
        <div class="feature-title">awesome friendly support</div>
        <div class="feature-desc">Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.</div>
        <button
          class="feature-button"
          @mouseover="toggleHover(2)"
          @mouseleave="toggleHover(-1)">read more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'features',
  data() {
    return {
      hoveringIndex: -1
    }
  },
  methods: {
    toggleHover(index) {
      this.hoveringIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/theme.scss';
.features-root {
  margin: 80px auto 124px;
  width: 100%;
  .title {
    text-align: center;
    text-transform: uppercase;
  }
  .feature-list-container {
    max-width: $content-max-width;
    width: 90%;
    margin: 50px auto 0;
    display: flex;
    align-items: center;
  }
  .feature-item {
    width: calc(100% / 3);
    margin: auto;
    text-align: center;
  }
  .feature-icon {
    background-color: $background-black-color;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    position: relative;
    margin: auto;
    transition: background-color 0.2s ease;
    img {
      position: absolute;
      left: 50%;
      top: 55%;
      width: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .feature-title {
    font-size: 14px;
    font-weight: 800;
    color: #606060;
    text-transform: uppercase;
    margin-top: 30px;
  }
  .feature-desc {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.71;
    color: #7a7a7a;
    margin-top: 20px;
  }
  .feature-button {
    margin-top: 20px;
    border: 1px solid #dedede;
    padding: 11px;
    border-radius: 4px;
    font-size: 10px;
    text-transform: uppercase;
    color: #8a8a8a;
    font-weight: 800;
    transition: all 0.2s ease;
  }
  .hover {
    .feature-icon {
      background-color: $main-theme-color;
      transition: background-color 0.2s ease;
    }
    .feature-button {
      background-color: $main-theme-color;
      transition: all 0.2s ease;
      color: #e3e3e3;
    }
  }
}
</style>