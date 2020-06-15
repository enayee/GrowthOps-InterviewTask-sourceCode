<template>
  <div class="skills-root">
    <div class="main-skill-wrapper">
      <div class="title-container">
        <div class="Section-title light">our powerful <span class="Text-theme-color">skills</span></div>
        <div class="Description dark">We’re good and experienced at different things and areas and we promise about qulity of our works</div>
      </div>
      <div class="main-skill-container">
        <div class="skill-chart v-scroll-reveal" v-for="(skill, index) in mainSkillList" :key="index">
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path class="circle"
              :stroke-dasharray="`${skill.perc}, 100`"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="16" y="22" class="chart-amount">{{ skill.perc }}</text>
            <text :x="skill.perc === 100 ? 27 : 24" y="21" class="chart-percentage">%</text>
          </svg>
          <div class="chart-name">{{ skill.name }}</div>
        </div>
      </div>
    </div>
    <div class="skill-desc-wrapper">
      <div
        class="skill-desc-item"
        v-for="(desc,index) in skillDescList"
        :key="index">
        <div class="item-icon" :style="`background-image: url(${desc.bg})`">
          <img :src="desc.icon">
        </div>
        <div class="item-text">
          <div class="title">{{ desc.title }}</div>
          <div class="desc">{{ desc.desc }}</div>
          <div class="content">{{ desc.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skillBgDark from '@/assets/Icons/skill-bg-dark.svg'
import skillBgLight from '@/assets/Icons/skill-bg-light.svg'
import cartIcon from '@/assets/Icons/cart.svg'
import lifebuoyIcon from '@/assets/Icons/lifebuoy.svg'
import noteIcon from '@/assets/Icons/note.svg'
import puzzleIcon from '@/assets/Icons/puzzle.svg'
import bagIcon from '@/assets/Icons/split-office-bag.svg'
import starIcon from '@/assets/Icons/star.svg'
import teleIcon from '@/assets/Icons/television.svg'
export default {
  name: 'skills',
  data() {
    return {
      mainSkillList: [
        {
          name: 'web design',
          perc: 75,
        },
        {
          name: 'web development',
          perc: 92,
        },
        {
          name: 'speed optimization',
          perc: 68,
        },
        {
          name: 'customer support',
          perc: 100,
        },
        {
          name: 'marketing',
          perc: 83,
        },
        {
          name: 'advertisement',
          perc: 50,
        },
      ],
      skillDescList: [
        {
          bg: skillBgDark,
          icon: teleIcon,
          title: 'responsive & multipurpose',
          desc: 'Desktops, Tablets & Phones',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
        },
        {
          bg: skillBgLight,
          icon: puzzleIcon,
          title: 'easy customization',
          desc: 'One Click Demo Content Installation',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
        },
        {
          bg: skillBgDark,
          icon: starIcon,
          title: 'unlimited features',
          desc: 'Shortcodes, Typography & Different Layouts',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
        },
        {
          bg: skillBgDark,
          icon: noteIcon,
          title: 'responsive & multipurpose',
          desc: '100% Clean, Valid & Well-Commented Coding',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
        },
        {
          bg: skillBgDark,
          icon: cartIcon,
          title: 'the best e-commerce solutions',
          desc: 'WooCommerce Fully Integration',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
        },
        {
          bg: skillBgDark,
          icon: lifebuoyIcon,
          title: 'awesome friendly support',
          desc: 'Free Lifetime Support & Updates',
          content: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
        },
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/theme.scss';
.skills-root {
  margin:  auto;
  width: 100%;
  position: relative;
  &:before {
    content: '';
    width: 54px;
    height: 54px;
    background: $main-theme-color;
    position: absolute;
    top: -27px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-radius: 4px;
  }
  &:after {
    content: '';
    width: 28px;
    height: 28px;
    background: $main-theme-color;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: url('~@/assets/Icons/split-office-bag.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.main-skill-wrapper {
  padding: 80px 0 70px;
  background-color: $background-black-color;
  @media (max-width: $below-ipad-size) {
    padding: 80px 0 40px;
  }
  .title-container {
    width: 80%;
    max-width: $content-max-width;
    margin: auto;
  }
}
.skill-desc-wrapper {
  padding: 70px 0 60px;
  margin: auto;
  width: 80%;
  max-width: $content-max-width;
  margin: 30px auto 0;
  @media (max-width: $below-ipad-size) {
    margin: 0px auto;
    padding: 40px 0;
  }
}
.main-skill-container {
  display: flex;
  align-items: center;
  width: 80%;
  max-width: $content-max-width;
  margin: 30px auto 0;
  @media (max-width: $ipad-size) {
    flex-wrap: wrap;
    margin-top: 0px;
  }
}
.skill-chart {
  width: 33%;
  justify-content: space-around;
  @media (max-width: $ipad-size) {
    flex-wrap: wrap;
    width: 200px;
  }
  @media (max-width: $below-ipad-size) {
    width: 100%;
    margin: 10px auto;
  }
}
.circular-chart {
  display: block;
  margin: 20px auto;
  max-width: 120px;
  max-height: 250px;
  @media (max-width: $ipad-size) {
    max-width: auto;
  }
}
.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 1;
}
.circle {
  fill: none;
  stroke-width: 1;
  animation: progress 1s ease-out forwards;
}
@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
.circular-chart .circle {
  stroke: $main-theme-color;
}
.chart-amount {
  fill: $text-light-grey-color;
  font-family: sans-serif;
  text-anchor: middle;
  font-size: 10px;
  font-weight: 800;
  line-height: 0.53;
  text-align: center;
}
.chart-percentage {
  fill: $text-light-grey-color;
  font-family: sans-serif;
  text-anchor: middle;
  font-size: 0.3em;
  font-weight: 800;
  line-height: 0.53;
  text-align: center;
}
.chart-name {
  color: $text-dark-grey-color;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.14;
  margin: auto;
  text-transform: uppercase;
}
.skill-desc-wrapper {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.skill-desc-item {
  width: calc(100% / 3);
  display: flex;
  @media (max-width: $ipad-size) {
    width: 50%;
  }
  @media (max-width: $below-ipad-size) {
    width: 100%;
    margin: 10px auto;
  }
}
.item-icon {
  width: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 15px 10px;
  box-sizing: border-box;
  img {
    width: 20px;
  }
}
.item-text {
  margin: 0 20px 30px;
  @media (max-width: $below-ipad-size) {
    margin-right: 0;
  }
  .title {
    font-size: 14px;
    font-weight: 800;
    text-align: left;
    text-transform: uppercase;
  }
  .desc {
    color: #aaaaaa;
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
  }
  .content {
    color: #7a7a7a;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.71;
    margin-top: 20px;
  }
}
</style>