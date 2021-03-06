<template>
  <div class="members-root">
    <div class="members-container">
      <div 
        class="members-item"
        v-for="(member, index) in memberList"
        :key="index"
        v-show="displayAll ? true : member.display">
        <div class="member-social">
          <div class="social-wrapper">
            <div
              class="social-item"
              v-for="(social, i) in member.socialMedia"
              :key="i"
              @mouseover="displaySocialIndex = i"
              @mouseleave="displaySocialIndex = -1"
              @click="openLink(social.link)"
              >
              <img class="social-icon" :src="displaySocialIndex === i ? iconSelectList[i] : iconList[i]">
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
    </div>
    <div class="button-container">
      <button class="view-more-button" @click="displayAll = !displayAll">{{displayAll ? 'view less works' : 'view all works'}}</button>
    </div>
  </div>
</template>

<script>
import memberList from '@/data/memberList.js'
import dribbble from '@/assets/Icons/dribbble.svg'
import facebook from '@/assets/Icons/facebook.svg'
import googleplus from '@/assets/Icons/googleplus.svg'
import twitter from '@/assets/Icons/twitter.svg'
import vimeo from '@/assets/Icons/vimeo.svg'
import dribbbleSelect from '@/assets/Icons/dribbble-select.svg'
import facebookSelect from '@/assets/Icons/facebook-select.svg'
import googleplusSelect from '@/assets/Icons/googleplus-select.svg'
import twitterSelect from '@/assets/Icons/twitter-select.svg'
import vimeoSelect from '@/assets/Icons/vimeo-select.svg'
export default {
  name: 'members',
  data() {
    return {
      memberList,
      iconList: [
        facebook,
        twitter,
        googleplus,
        vimeo,
        dribbble,
      ],
      iconSelectList: [
        facebookSelect,
        twitterSelect,
        googleplusSelect,
        vimeoSelect,
        dribbbleSelect,
      ],
      displaySocialIndex: -1,
      displayAll: false,
    }
  },
  watch: {},
  methods: {
    openLink(link) {
      window.open(link, '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/theme.scss';
.members-root {
  background-color: $background-black-color;
  padding: 60px 0 120px;
  position: relative;
}
.members-container {
  margin: auto;
  width: 80%;
  max-width: $content-max-width;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  &:after {
    content: "";
    flex: auto;
    width: 20px;
    height: 20px;
  }
}
.member-social {
  background-color: #aaaaaa;
  width: 100%;
  height: 240px;
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
    display: none;
  }
  .social-item {
    margin-left: -3px;
    border-radius: 4px;
    position: relative;
    display: flex;
    cursor: pointer;
    &:first-of-type {
      margin-left: 0;
    }
    &::before {
      content: '';
      background-color: $background-light-grey-color;
      width: 40px;
      height: 40px;
      transform: rotate(45deg);
      content: '';
      transform: rotate(45deg);
      border-radius: 4px;
    }
    .social-icon {
      width: 25px;
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;
      left: 50%;
    }
    &:hover {
      &::before {
        background-color: $background-black-color;
        z-index: 2;
      }
      .social-icon {
        z-index: 2;
      }
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
.members-item {
  width: 24%;
  transition: all 0.2s ease-in-out;
  margin: 5px;
  &:hover {
    transition: all 0.2s ease-in-out;
    .member-social {
      background-color: $main-theme-color;
    }
    .social-wrapper {
      display: flex;
    }
    .member-info .name {
      background-color: $background-black-color;
    }
  }
  @media (max-width: $ipad-size) {
    width: calc(50% - 20px);
    margin: 10px;
  }
  @media (max-width: $below-ipad-size) {
    width: 100%;
    margin: 10px auto;
  }
}
.button-container {
  margin: auto;
  width: 80%;
  max-width: $content-max-width;
  text-align: center;
  position: relative;
  margin-top: 53px;
}
.view-more-button {
  position: relative;
  width: 100%;
  background-color: $main-theme-color;
  color: $text-light-grey-color;
  font-size: 13px;
  font-weight: 800;
  line-height: 1.54;
  text-transform: uppercase;
  line-height: 40px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
  }
}
</style>