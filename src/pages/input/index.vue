<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">xxx公式计算</div>
      <div class="page__desc">xxx公式介绍</div>
    </div>

    <div class="page__bd">
      <div class="weui-navbar">
        <div
          :id="index"
          @click="tabClick"
          :class="['weui-navbar__item', activeIndex === index ? 'weui-bar__item_on' : '']"
          v-for="(item, index) in tabs" :key="index"
        >
          <div class="weui-navbar__title">{{ item }}</div>
        </div>
      </div>
      <div class="weui-tab__panel">
        <div class="weui-tab__content" :hidden="activeIndex != 0">
          <CalculationPage></CalculationPage>
        </div>
        <div class="weui-tab__content" :hidden="activeIndex != 1">
          <MaterialsPage></MaterialsPage>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
import CalculationPage from "@/pages/input/calculate.vue";
import MaterialsPage from "@/pages/input/materials.vue";
export default {
  name: "calculate-index",
  data() {
    return {
      tabs: ['计算', '资料'],
      activeIndex: 0
    }
  },
  components: { CalculationPage, MaterialsPage },
  computed: {
  },
  mounted: function() {
  },
  methods: {
    tabClick(e) {
      console.log(e);
      this.activeIndex = Number(e.currentTarget.id);
    }
  }
}
</script>

<style scoped>
.weui-navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
