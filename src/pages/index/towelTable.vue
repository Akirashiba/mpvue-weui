<template>
  <div :hidden="!active">
    <div v-if="towelData['dataSet']">
      <div class="weui-flex">
        <div class="weui-flex__item">
          <div class="placeholder">海拔</div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">风速</div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">覆冰</div>
        </div>
      </div>
      <div class="weui-flex">
        <div class="weui-flex__item">
          <div class="placeholder">{{ towelData['elevation'] }}</div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">{{ towelData['windSpeed'] }}</div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">{{ towelData['iced'] }}</div>
        </div>
      </div>
      <div class="weui-flex">
        <div class="weui-flex__item">
          <div class="placeholder">转角</div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">垂直档距</div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">Kv值</div>
        </div>
      </div>
      <div class="weui-flex">
        <div class="weui-flex__item">
          <div class="placeholder">{{ towelData['angleOfRotation'] }}</div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">{{ towelData['verticalPitch'] }}</div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">{{ towelData['KvValue'] }}</div>
        </div>
      </div>
      <div class="weui-flex">
        <div class="weui-flex__item">
          <div class="placeholder">呼高</div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">水平档距</div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">斜半根开</div>
        </div>
      </div>
      <div v-for="(dataLine, index) in towelData['dataSet']" :key="index" class="weui-flex">
        <div v-for="(line, index2) in dataLine" :key="index2" class="weui-flex__item">
          <div class="placeholder">{{ line }}</div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="weui-flex">
        <div class="weui-flex__item">
          <div class="placeholder">暂无数据</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "towel-table",
  data() {
    return {

    }
  },
  watch: {
    active: function(nv, ov) {
      console.log(nv);
    }
  },
  computed: {
  },
  props: ["towelData", "active"],
  mounted: function() {
  },
  methods: {}
}
</script>

<style scoped>
.materials {
  padding-bottom: 60px;
}
.towel-table {
  display: none !important;
}
.towel-table-active {
  display: block;
}
.placeholder {
  border: 1px solid #ebeef5;
  padding: 0 10px;
  text-align: center;
  background-color: #f7f7f7;
  height: 2.3em;
  line-height: 2.3em;
  color: rgba(0, 0, 0, 0.3);
}
</style>
