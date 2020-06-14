<template>
  <div>
    <section>
      <banner />
    </section>
    <section>
      <menu-bar />
    </section>
    <section>
      <features />
    </section>
    <section>
      <skills />
    </section>
    <section>
      <members />
    </section>
    <section>
      <register-form />
    </section>
    <section>
      <review />
    </section>
    <section>
      <sponsors />
    </section>
    <footer>Copyright © 2017 APD Digital Services Sdn Bhd, All Rights Reserved.</footer>
  </div>
</template>

<script>
import banner from '@/components/banner.vue'
import menuBar from '@/components/menuBar.vue'
import features from '@/components/features.vue'
import skills from '@/components/skills.vue'
import members from '@/components/members.vue'
import registerForm from '@/components/registerForm.vue'
import review from '@/components/review.vue'
import sponsors from '@/components/sponsors.vue'
export default {
  name: 'Homepage',
  components: {
    banner,
    'menu-bar': menuBar,
    features,
    skills,
    members,
    registerForm,
    review,
    sponsors
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/theme/theme.scss';
  footer {
    background-color: #333333;
    text-align: center;
    padding: 48px 0 27px;
    color: #cccccc;
    font-size: 14px;
    @media (max-width: $below-ipad-size) {
      padding: 20px;
      margin: auto;
    }
  }
</style>