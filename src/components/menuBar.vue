<template>
  <div class="menu-bar-root">
    <div class="menu-bar-container">
      <div class="menu-logo">
        <img :src="apdLogo" alt="">
      </div>
      <div class="menu-list-container">
        <div 
          v-for="(item, index) in menuList"
          :key="index"
          :id="`menu-${index}`"
          class="menu-item"
          :class="{ 'selected': selectedIndex === index }"
          @click="selectMenu(index)">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apdLogo from '@/assets/Images/apd-logo.png';
export default {
  name: 'menuBar',
  data() {
    return {
      apdLogo,
      menuList: [
        {
          name: 'HOME',
        },
        {
          name: 'PORTFOLIO',
        },
        {
          name: 'BLOG',
        },
        {
          name: 'PAGES',
        },
        {
          name: 'FEATURES',
        },
        {
          name: 'MEGA MENU',
        },
        {
          name: 'CONTACT',
        },
      ],
      selectedIndex: 1
    }
  },
  methods: {
    selectMenu(index) {
      this.selectedIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/theme.scss';
.menu-bar-root {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #F9F9F9;
  padding: 0 10%;
  box-sizing: border-box;
  border-bottom: 1px solid $border-grey-color;
}
.menu-bar-container {
  max-width: $content-max-width;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-logo {
  width: 56px;
  height: 56px;
  img {
    width: 100%;
  }
}
.menu-list-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 25px 0;
}
.menu-item {
  min-width: 20px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  padding: 10px 12px;
  background: transparent;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
  }
  &.selected {
    background-color: $main-theme-color;
    color: #F9F9F9;
    &:hover {
      transform: none;
    }
  }
}
</style>