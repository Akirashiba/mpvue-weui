<template>
  <div class="materials">
    <div class="weui-search-bar">
      <div class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
          <input type="text" class="weui-search-bar__input" placeholder="搜索" v-model="inputVal" :focus="inputShowed" @input="inputTyping" />
          <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
            <icon type="clear" size="14"></icon>
          </div>
        </div>
        <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
          <icon class="weui-icon-search" type="search" size="14"></icon>
          <div class="weui-search-bar__text">搜索</div>
        </label>
      </div>
      <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">取消</div>
    </div>
    <div class="weui-cells__title">塔库资料</div>
    <div class="weui-cells weui-cells_after-title">
      <div v-for="(towel, index) in filterTowelList" :key="index">
        <div
          :id="index"
          class="weui-cell weui-cell_access"
          hover-class="weui-cell_active"
          @click="lineClick"
        >
          <div class="weui-cell__bd">{{ towel }}</div>
          <div class="weui-cell__ft">说明文字</div>
        </div>
        <towelTable v-if="towelDetail[towel]" :towelData="towelDetail[towel]" :active="index===activeIndex"></towelTable>
      </div>
    </div>
  </div>
</template>

<script>
import towelTable from "@/pages/index/towelTable.vue";
import { towelList, towelDetail } from "@/utils/materials.js";
export default {
  name: "materials-page",
  data() {
    return {
      towelList: towelList,
      towelDetail: towelDetail,
      inputVal: '',
      inputShowed: false,
      activeIndex: -1
    }
  },
  computed: {
    filterTowelList: function() {
      return this.towelList.filter(towel => towel.indexOf(this.inputVal) !== -1)
    }
  },
  components: { towelTable },
  mounted: function() {
  },
  methods: {
    showInput() {
      this.inputShowed = true;
    },
    hideInput() {
      this.inputVal = '';
      this.inputShowed = false;
    },
    clearInput() {
      this.inputVal = '';
    },
    inputTyping(e) {
      console.log(e);
      this.inputVal = e.mp.detail.value;
      console.log('输入信息为：'+e.mp.detail.value);
    },
    lineClick(e) {
      let targetIndex = Number(e.currentTarget.id);
      if (this.activeIndex === targetIndex) {
        this.activeIndex = -1;
      } else {
        this.activeIndex = Number(e.currentTarget.id);
      }
    }
  }
}
</script>

<style scoped>
.materials {
  padding-bottom: 30px;
}
</style>
