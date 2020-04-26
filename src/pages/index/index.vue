<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">物理公式计算器</div>
      <div class="page__desc">一些工作中常用到的公式计算</div>
    </div>
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
    <div class="page__bd page__bd_spacing">
      <div class="kind-list">
        <div v-for="(item1,index1) in list" :key="index1">
          <div class="kind-list__item">
            <div
              :id="item1.id"
              :class="{'kind-list__item-hd_show':item1.open}"
              class="weui-flex,kind-list__item-hd"
              @click="kindToggle"
            >
              <div class="weui-flex__item">{{item1.name}}</div>
              <img class="kind-list__img" :src=" '/static/images/icon_nav_'+item1.id+'.png'" />
            </div>
            <div :class="{'kind-list__item-bd_show':item1.open}" class="kind-list__item-bd">
              <div :class="{'weui-cells_show':item1.open}" class="weui-cells">
                <navigator
                  v-for="(item2,index2) in item1.pages"
                  :key="index2"
                  class="weui-cell weui-cell_access"
                  :url=" '/pages/'+item2+'/'+'main'+ ''"
                >
                  <div class="weui-cell__bd">{{item2}}</div>
                  <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </navigator>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 'form',
          name: '电磁学公式',
          open: false,
          pages: ['input']
        },
        {
          id: 'widget',
          name: '光学公式',
          open: false,
          pages: [
            'article',
            'badge',
            'flex',
            'footer',
            'gallery',
            'grid',
            'icons',
            'loading',
            'loadmore',
            'panel',
            'preview',
            'progress',
            'swiper'
          ]
        },
        {
          id: 'feedback',
          name: '力学公式',
          open: false,
          pages: ['actionsheet', 'dialog', 'half-screen-dialog', 'msg', 'picker', 'toast']
        },
        {
          id: 'nav',
          name: '热力学公式',
          open: false,
          pages: ['navbar', 'navigation-bar', 'tabbar', 'button', 'list', 'slide-view', 'slider', 'uploader']
        }
      ],
      inputShowed: false,
      inputVal: ''
    };
  },

  components: {},

  methods: {
    kindToggle(e) {
      var id = e.currentTarget.id;
      var list = this.list;
      for (var i = 0, len = list.length; i < len; ++i) {
        if (list[i].id === id) {
          list[i].open = !list[i].open;
        } else {
          list[i].open = false;
        }
      }
      this.list = list;
    },
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
    }
  },

  created() { }
};
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
</style>
