<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">xxx公式计算</div>
      <div class="page__desc">xxx公式介绍</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">计算输入</div>
      <div class="weui-cells weui-cells_after-title">
        <div :class="{'weui-cell': true, 'weui-cell_warn': hasError['k_val']}">
          <div class="weui-cell__hd">
            <div class="weui-label">K值</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.k_val" @input="KInput" class="weui-input" placeholder="请输入K值" />
          </div>
          <div v-if="hasError['k_val']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
        <div :class="{'weui-cell': true, 'weui-cell_warn': hasError['ax']}">
          <div class="weui-cell__hd">
            <div class="weui-label">后侧塔累距ax</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.ax" @input="AxInput" class="weui-input" placeholder="请输入后侧塔累距ax" />
          </div>
          <div v-if="hasError['ax']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
        <div :class="{'weui-cell': true, 'weui-cell_warn': hasError['ay']}">
          <div class="weui-cell__hd">
            <div class="weui-label">后侧挂点高ay</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.ay" @input="AyInput" class="weui-input" placeholder="请输入后侧挂点高ay" />
          </div>
          <div v-if="hasError['ay']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
        <div :class="{'weui-cell': true, 'weui-cell_warn': hasError['cx']}">
          <div class="weui-cell__hd">
            <div class="weui-label">前侧塔累距cx</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.cx" @input="CxInput" class="weui-input" placeholder="请输入前侧塔累距cx" />
          </div>
          <div v-if="hasError['cx']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
        <div :class="{'weui-cell': true, 'weui-cell_warn': hasError['cy']}">
          <div class="weui-cell__hd">
            <div class="weui-label">前侧挂点高cy</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.cy" @input="CyInput" class="weui-input" placeholder="请输入前侧挂点高cy" />
          </div>
          <div v-if="hasError['cy']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
        <div :class="{'weui-cell': true, 'weui-cell_warn': hasError['x1']}">
          <div class="weui-cell__hd">
            <div class="weui-label">验算点累距x1</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.x1" @input="X1Input" class="weui-input" placeholder="请输入验算点累距x1" />
          </div>
          <div v-if="hasError['x1']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
        <div :class="{'weui-cell': true, 'weui-cell_warn': hasError['y1']}">
          <div class="weui-cell__hd">
            <div class="weui-label">高程y1</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.y1" @input="Y1Input" class="weui-input" placeholder="请输入高程y1" />
          </div>
          <div v-if="hasError['y1']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
        <div :class="{'weui-cell': true, 'weui-cell_warn': hasError['x2']}">
          <div class="weui-cell__hd">
            <div class="weui-label">验算点累距x2</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.x2" @input="X2Input" class="weui-input" placeholder="请输入验算点累距x2" />
          </div>
          <div v-if="hasError['x2']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
        <div :class="{'weui-cell': true, 'weui-cell_warn': hasError['y2']}">
          <div class="weui-cell__hd">
            <div class="weui-label">高程y2</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.y2" @input="Y2Input" class="weui-input" placeholder="请输入高程y2" />
          </div>
          <div v-if="hasError['y2']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
        <div :class="{'weui-cell': true, 'weui-cell_warn': hasError['x3']}">
          <div class="weui-cell__hd">
            <div class="weui-label">验算点累距x3</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.x3" @input="X3Input" class="weui-input" placeholder="请输入验算点累距x3" />
          </div>
          <div v-if="hasError['x3']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
        <div :class="{'weui-cell': true, 'weui-cell_warn': hasError['y3']}">
          <div class="weui-cell__hd">
            <div class="weui-label">高程y3</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.y3" @input="Y3Input" class="weui-input" placeholder="请输入高程y3" />
          </div>
          <div v-if="hasError['y3']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
      </div>
      <div class="weui-cells__title">验算塔参数</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_switch">
          <div class="weui-cell__bd">是否使用验算塔</div>
          <div class="weui-cell__ft">
            <switch checked @change="switchChange" />
          </div>
        </div>
        <div v-if="useCheckTowel" :class="{'weui-cell': true, 'weui-cell_warn': hasError['bx']}">
          <div class="weui-cell__hd">
            <div class="weui-label">验算塔累距bx</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.bx" @input="BxInput" class="weui-input" placeholder="请输入验算塔累距bx" />
          </div>
          <div v-if="hasError['bx']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
        <div v-if="useCheckTowel" :class="{'weui-cell': true, 'weui-cell_warn': hasError['by']}">
          <div class="weui-cell__hd">
            <div class="weui-label">验算塔挂高by</div>
          </div>
          <div class="weui-cell__bd">
            <input type="number" v-model="formulateForm.by" @input="ByInput" class="weui-input" placeholder="请输入验算塔挂点高by" />
          </div>
          <div v-if="hasError['by']" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
      </div>
      <div class="weui-cells__title">计算输出</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <div class="weui-label">结果</div>
          </div>
          <div class="weui-cell__bd">
            <input v-model="result" disabled class="weui-input" />
          </div>
        </div>
      </div>
      <div class="weui-btn-area">
        <button class="weui-btn" type="primary" @click="fooFunction">确定</button>
      </div>
      <div :class="['weui-demo-dialog', istrue ? 'weui-demo-dialog_show' : '']">
        <div class="weui-mask" @click="closeDialog"></div>
        <div class="weui-dialog__wrp" @click="closeDialog">
          <div class="weui-dialog" catchtouchmove>
            <div class="weui-dialog__hd">
              <div class="weui-dialog__title">参数错误</div>
            </div>
            <div class="weui-dialog__bd">
              {{ error_msg }}
            </div>
            <div class="weui-dialog__ft">
              <div class="weui-dialog__btn weui-dialog__btn_default" @click="closeDialog">取消</div>
              <div class="weui-dialog__btn" @click="closeDialog">确定</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { rules } from "@/utils/formulate.js";
export default {
  data() {
    return {
      useCheckTowel: true,
      istrue: false,
      formulateForm: {
        k_val: rules["k_val"]["default"],
        ax: rules["ax"]["default"],
        ay: rules["ay"]["default"],
        bx: rules["bx"]["default"],
        by: rules["by"]["default"],
        cx: rules["cx"]["default"],
        cy: rules["cy"]["default"],
        x1: rules["x1"]["default"],
        y1: rules["y1"]["default"],
        x2: rules["x2"]["default"],
        y2: rules["y2"]["default"],
        x3: rules["x3"]["default"],
        y3: rules["y3"]["default"]
      },
      hasError: {
        k_val: false,
        ax: false,
        ay: false,
        bx: false,
        by: false,
        cx: false,
        cy: false,
        x1: false,
        y1: false,
        x2: false,
        y2: false,
        x3: false,
        y3: false
      },
      result: "",
      error_msg: ""
    }
  },
  mounted: function() {

  },
  methods: {
    fooFunction() {
      let props = this.formulateForm;
      for (var prop in props) {
        if (!(!this.useCheckTowel && ["bx", "cx"].includes(prop))) {
          let value = this.formulateForm[prop];
          if (!this.checkRules(prop, value)) {
            this.openDialog();
            return;
          }
        }
      }
      console.log(this.formulateForm);
    },
    switchChange(e) {
      console.log("switch发生change事件，携带value值为：" + e.mp.detail.value);
      this.useCheckTowel = e.mp.detail.value;
    },
    checkRules(prop, value) {
      let propHasError = !rules[prop]["pattern"].test(value);
      let range = rules[prop]["range"];
      if (range && !propHasError) {
        propHasError = value < range[0] || value > range[1];
      }
      if (propHasError) {
        this.error_msg = rules[prop]["error_msg"];
      }
      this.hasError[prop] = propHasError;
      return !propHasError;
    },
    KInput(e) {
      this.checkRules("k_val", e.mp.detail.value);
      this.formulateForm.k_val = e.mp.detail.value;
    },
    AxInput(e) {
      this.checkRules("ax", e.mp.detail.value);
      this.formulateForm.ax = e.mp.detail.value;
    },
    BxInput(e) {
      this.checkRules("bx", e.mp.detail.value);
      this.formulateForm.bx = e.mp.detail.value;
    },
    CxInput(e) {
      this.checkRules("cx", e.mp.detail.value);
      this.formulateForm.cx = e.mp.detail.value;
    },
    AyInput(e) {
      this.checkRules("ay", e.mp.detail.value);
      this.formulateForm.ay = e.mp.detail.value;
    },
    ByInput(e) {
      this.checkRules("by", e.mp.detail.value);
      this.formulateForm.by = e.mp.detail.value;
    },
    CyInput(e) {
      this.checkRules("cy", e.mp.detail.value);
      this.formulateForm.cy = e.mp.detail.value;
    },
    X1Input(e) {
      this.checkRules("x1", e.mp.detail.value);
      this.formulateForm.x1 = e.mp.detail.value;
    },
    X2Input(e) {
      this.checkRules("x2", e.mp.detail.value);
      this.formulateForm.x2 = e.mp.detail.value;
    },
    X3Input(e) {
      this.checkRules("x3", e.mp.detail.value);
      this.formulateForm.x3 = e.mp.detail.value;
    },
    Y1Input(e) {
      this.checkRules("y1", e.mp.detail.value);
      this.formulateForm.y1 = e.mp.detail.value;
    },
    Y2Input(e) {
      this.checkRules("y2", e.mp.detail.value);
      this.formulateForm.y2 = e.mp.detail.value;
    },
    Y3Input(e) {
      this.checkRules("y3", e.mp.detail.value);
      this.formulateForm.y3 = e.mp.detail.value;
    },
    openDialog() {
      this.istrue = true;
    },
    closeDialog() {
      this.istrue = false;
    }
  }
}
</script>

<style scoped>
.weui-label {
  width: 140px;
}
.weui-demo-dialog {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;
}
.weui-demo-dialog_show {
  visibility: visible;
  opacity: 1;
}
</style>
