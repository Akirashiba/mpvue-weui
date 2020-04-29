<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-tabbar">
        <div
          :id="index"
          @click="tabClick"
          :class="['weui-tabbar__item', activeIndex === index ? 'weui-bar__item_on' : '']"
          v-for="(item, index) in tabs" :key="index"
        >
          <div style="position: relative;display:inline-block;">
            <img :src="'/static/images/calculate-'+index+'.png'" class="weui-tabbar__icon" />
          </div>
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
      tabs: ['公式计算', '塔库资料'],
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
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
