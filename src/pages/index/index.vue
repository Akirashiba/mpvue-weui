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
      <div class="weui-footer">
        <div class="weui-footer__text">Developed by Akirashiba</div>
      </div>
    </div>
  </div>
</template>

<script>
import CalculationPage from "@/pages/index/calculate.vue";
import MaterialsPage from "@/pages/index/materials.vue";
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
/*!
 * WeUI v1.1.1 (https://github.com/weui/weui-wxss)
 * Copyright 2019 Tencent, Inc.
 * Licensed under the MIT license
 */

.page__hd {
  padding: 20px;
}

.weui-search-bar {
  padding-left: 15px;
  padding-right: 15px;
}

.weui-flex {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.weui-cells {
  margin-top: 0;
  opacity: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.weui-cells:after,
.weui-cells:before {
  display: none;
}

.weui-cells_show {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.weui-cell:before {
  right: 15px;
}

.kind-list__item {
  margin: 10px 0;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
}

.kind-list__item:first-child {
  margin-top: 0;
}

.kind-list__img {
  width: 30px;
  height: 30px;
}

.kind-list__item-hd {
  padding: 20px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}

.kind-list__item-hd_show {
  opacity: 0.4;
}

.kind-list__item-bd {
  height: 0;
  overflow: hidden;
}

.kind-list__item-bd_show {
  height: auto;
}

.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.weui-footer {
  padding-bottom: 60px;
}
</style>
