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
  </div>
</template>

<script>
import banner from '@/components/banner.vue'
import menuBar from '@/components/menuBar.vue'
import features from '@/components/features.vue'
import skills from '@/components/skills.vue'
export default {
  name: 'Homepage',
  components: {
    banner,
    'menu-bar': menuBar,
    features,
    skills
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
</style>