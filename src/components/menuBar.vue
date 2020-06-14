<template>
  <div class="menu-bar-root">
    <div class="menu-bar-container">
      <div class="menu-logo">
        <img :src="apdLogo" alt="">
      </div>
      <div id="start" class="menu-list-container">
        <a 
          v-for="(item, index) in menuList"
          :key="index"
          :id="`menu-${index}`"
          class="menu-item"
          :href="`#${item.name}`"
          :class="{ 'selected': selectedIndex === index }"
          @click="selectMenu(index)">
          {{ item.name }}
        </a>
        <div @click="toggleMobileMenu()" class="icon">&#9776;</div>
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
    },
    toggleMobileMenu() {
      var x = document.getElementById("start");
      if (x.className === "menu-list-container") {
        x.className += " responsive";
      } else {
        x.className = "menu-list-container";
      }
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
  @media (max-width: $below-ipad-size) {
    align-items: flex-start;
  }
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
  @media (max-width: $small-screen-size) {
    width: 80%;
    justify-content: flex-end;
  }
  @media (max-width: $below-ipad-size) {
    padding: 12px 0;
  }
}
.menu-item {
  min-width: 20px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  padding: 10px 12px;
  color: $main-text-color;
  text-decoration: none;
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
.menu-list-container {
  overflow: hidden;
}
.menu-list-container a.active {
  background-color: #4CAF50;
  color: white;
}

.menu-list-container .icon {
  display: none;
}

@media (max-width: $below-ipad-size) {
  .menu-list-container a {
    display: none;
  }
  .menu-list-container .icon {
    display: block;
    font-size: 24px;
    font-weight: 600;
  }
}

@media (max-width: $below-ipad-size) {
  .menu-list-container.responsive {
    position: relative;
    flex-direction: column;
    justify-items: flex-start;
  }
  .menu-list-container.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .menu-list-container.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

</style>