<template>
  <div class="members-root">
    <div class="members-container">
      <div 
        class="members-item"
        v-for="(member, index) in memberList"
        :key="index"
        v-show="member.display">
        <div class="member-social">
          <div class="social-wrapper">
            <div
              class="social-item"
              v-for="(social, i) in member.socialMedia"
              :key="i">
              {{ social.name }}
              <img src="">
            </div>
          </div>
        </div>
        <div class="member-info">
          <div class="name">{{ member.name }}</div>
          <div class="role">{{ member.role }}</div>
          <div class="email">{{ member.email }}</div>
          <div class="phone">{{ member.phone }}</div>
        </div>
      </div>
      <button class="view-more-button">view all works</button>
    </div>
  </div>
</template>

<script>
import memberList from '@/data/memberList.js'
export default {
  name: 'members',
  data() {
    return {
      memberList,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/theme.scss';
.members-root {
  background-color: $background-black-color;
  padding: 60px 0 120px;
}
.members-container {
  margin: auto;
  width: 80%;
  max-width: $content-max-width;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.members-item {
  width: 24%;
  
}
.member-social {
  // background-color: $main-theme-color;
  background-color: #aaaaaa;
  width: 100%;
  height: 270px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
  .social-wrapper {
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .social-item {
    background-color: $background-light-grey-color;
    width: 40px;
    height: 40px;
    margin-left: -3px;
    border-radius: 4px;
    transform: rotate(45deg);
    &:first-of-type {
      margin-left: 0;
    }
  }
}
.member-info {
  border: 1px solid #dedede;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  margin: auto;
  text-align: center;
  padding-bottom: 10px;
  .name {
    // background-color: $background-black-color;
    background-color: $main-theme-color;
    padding: 16px 15px;
    z-index: 2;
    position: relative;
    max-width: 40%;
    white-space: nowrap;
    margin: auto;
    margin-top: -15px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    color: $text-light-grey-color;
  }
  .role {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.83;
    border-bottom: 1px solid #ebebeb;
    padding: 15px 0;
    margin-bottom: 5px;
    display: inline-block;
  }
  .email,.phone {
    font-size: 12px;
    font-weight: 500;
    line-height: 2.67;
    color: #aaaaaa;
  }
}
.view-more-button {
  width: 100%;
  background-color: $main-theme-color;
  color: $text-light-grey-color;
  font-size: 13px;
  font-weight: 800;
  line-height: 1.54;
  text-transform: uppercase;
  margin-top: 53px;
  line-height: 40px;
  border-radius: 4px;
}
</style>