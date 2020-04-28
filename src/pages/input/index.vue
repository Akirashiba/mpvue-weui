<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">xxx公式计算</div>
      <div class="page__desc">xxx公式介绍</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">计算输入</div>
      <div class="weui-cells weui-cells_after-title">
        <div
          v-for="input_prop in inputList"
          :key="input_prop"
          :class="{'weui-cell': true, 'weui-cell_warn': inputs_error[input_prop]}"
        >
          <div class="weui-cell__hd">
            <div class="weui-label">{{ inputs_name[input_prop] }}</div>
          </div>
          <div class="weui-cell__bd">
            <input
              type="number"
              v-model="inputs_val[input_prop]"
              @input="inputChange($event, input_prop)"
              class="weui-input"
              :placeholder="'请输入' + inputs_name[input_prop]"
            />
          </div>
          <div v-if="inputs_error[input_prop]" class="weui-cell__ft">
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
        <div
          v-for="check_towel_input_prop in checkTowelInputList"
          :key="check_towel_input_prop"
          :class="{'weui-cell': true, 'weui-cell_warn': inputs_error[check_towel_input_prop]}"
        >
          <div class="weui-cell__hd">
            <div class="weui-label">{{ inputs_name[check_towel_input_prop] }}</div>
          </div>
          <div class="weui-cell__bd">
            <input
              type="number"
              v-model="inputs_val[check_towel_input_prop]"
              @input="inputChange($event, check_towel_input_prop)"
              class="weui-input"
              :placeholder="'请输入' + inputs_name[check_towel_input_prop]"
            />
          </div>
          <div v-if="inputs_error[check_towel_input_prop]" class="weui-cell__ft">
            <icon type="warn" size="23" color="#E64340"></icon>
          </div>
        </div>
      </div>
      <div class="weui-cells__title">计算输出</div>
      <div class="weui-cells weui-cells_after-title">
        <div v-for="output_prop in outPutList" :key="output_prop" class="weui-cell">
          <div class="weui-cell__hd">
            <div class="weui-label">{{ outputs_name[output_prop] }}</div>
          </div>
          <div class="weui-cell__bd">
            <input v-model="outputs_val[output_prop]" disabled class="weui-input" />
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
      inputList: ["k_val", "ax", "ay", "cx", "cy", "x1", "y1", "x2", "y2", "x3", "y3"],
      inputs_error: {
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
      inputs_name: {
        k_val: rules["k_val"]["name"],
        ax: rules["ax"]["name"],
        ay: rules["ay"]["name"],
        bx: rules["bx"]["name"],
        by: rules["by"]["name"],
        cx: rules["cx"]["name"],
        cy: rules["cy"]["name"],
        x1: rules["x1"]["name"],
        y1: rules["y1"]["name"],
        x2: rules["x2"]["name"],
        y2: rules["y2"]["name"],
        x3: rules["x3"]["name"],
        y3: rules["y3"]["name"]
      },
      inputs_val: {
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
      outputs_name: {
        h1: "高差h1",
        h2: "高差h2",
        h3: "高差h3",
        ad: "后侧悬垂角ad",
        cd: "前侧悬垂角cd",
        fm: "最大弧垂fm",
        kv: "kv系数"
      },
      outputs_val: {
        h1: 0.0,
        h2: 0.0,
        h3: 0.0,
        ad: 0.0,
        cd: 0.0,
        fm: 0.0,
        kv: 0.0
      },
      result: "",
      error_msg: ""
    }
  },
  computed: {
    outPutList: function() {
      if (this.useCheckTowel) {
        return ["h1", "h2", "h3", "ad", "cd", "kv"];
      } else {
        return ["h1", "h2", "h3", "ad", "cd", "fm"];
      }
    },
    checkTowelInputList: function() {
      if (this.useCheckTowel) {
        return ["bx", "by"];
      } else {
        return [];
      }
    }
  },
  mounted: function() {
  },
  methods: {
    noCheckTowelCalculate() {
      let k = this.inputs_val["k_val"];
      let x1 = this.inputs_val["x1"];
      let y1 = this.inputs_val["y1"];
      let x2 = this.inputs_val["x2"];
      let y2 = this.inputs_val["y2"];
      let x3 = this.inputs_val["x3"];
      let y3 = this.inputs_val["y3"];
      let cx = this.inputs_val["cx"];
      let cy = this.inputs_val["cy"];
      let ax = this.inputs_val["ax"];
      let ay = this.inputs_val["ay"];
      let l = cx - ax;
      this.outputs_val["fm"] = k * Math.pow(l, 2);
      let tanb = (cy - ay) / l;
      if (x1 > 0) {
        this.outputs_val["h1"] = tanb * (x1 - ax) - 4 * k * (x1 - ax) * (cx - x1) - y1;
      }
      if (x2 > 0) {
        this.outputs_val["h2"] = tanb * (x2 - ax) - 4 * k * (x2 - ax) * (cx - x2) - y2;
      }
      if (x3 > 0) {
        this.outputs_val["h3"] = tanb * (x3 - ax) - 4 * k * (x3 - ax) * (cx - x3) - y3;
      }
      this.outputs_val["ad"] = 4 * k * l - tanb;
      this.outputs_val["cd"] = 4 * k * l + tanb;
    },
    CheckTowelCalculate() {
      let k = this.inputs_val["k_val"];
      let x1 = this.inputs_val["x1"];
      let y1 = this.inputs_val["y1"];
      let x2 = this.inputs_val["x2"];
      let y2 = this.inputs_val["y2"];
      let x3 = this.inputs_val["x3"];
      let y3 = this.inputs_val["y3"];
      let cx = this.inputs_val["cx"];
      let cy = this.inputs_val["cy"];
      let bx = this.inputs_val["bx"];
      let by = this.inputs_val["by"];
      let ax = this.inputs_val["ax"];
      let ay = this.inputs_val["ay"];
      let l1 = bx - ax;
      let l2 = cx - bx;
      let tan1 = (by - ay) / l1;
      let tan2 = (cy - by) / l2;
      if (x1 > bx) {
        this.outputs_val["h1"] = tan2 * (x1 - bx) - 4 * k * (x1 - bx) * (cx - x1) - y1;
      } else if (x1 > 0) {
        this.outputs_val["h1"] = tan1 * (x1 - ax) - 4 * k * (x1 - ax) * (bx - x1) - y1;
      }
      if (x2 > bx) {
        this.outputs_val["h1"] = tan2 * (x2 - bx) - 4 * k * (x2 - bx) * (cx - x2) - y2;
      } else if (x2 > 0) {
        this.outputs_val["h1"] = tan1 * (x2 - ax) - 4 * k * (x2 - ax) * (bx - x2) - y2;
      }
      if (x3 > bx) {
        this.outputs_val["h1"] = tan2 * (x3 - bx) - 4 * k * (x3 - bx) * (cx - x3) - y3;
      } else if (x3 > 0) {
        this.outputs_val["h1"] = tan1 * (x3 - ax) - 4 * k * (x3 - ax) * (bx - x3) - y3;
      }
      this.outputs_val["ad"] = 4 * k * l1 - tan1;
      this.outputs_val["cd"] = 4 * k * l2 + tan2;
      this.outputs_val["kv"] = (l1/2 + tan1/8/k + l2/2 - tan2/8/k) / (cx-ax) * 2;
    },
    fooFunction() {
      let props = this.inputs_name;
      for (var prop in props) {
        if (!(!this.useCheckTowel && ["bx", "cx"].includes(prop))) {
          let value = this.inputs_val[prop];
          if (!this.checkRules(prop, value)) {
            this.openDialog();
            return;
          }
        }
      }
      if (this.useCheckTowel) {
        this.CheckTowelCalculate();
      } else {
        this.noCheckTowelCalculate();
      }
    },
    switchChange(e) {
      console.log("switch发生change事件，携带value值为：" + e.mp.detail.value);
      this.useCheckTowel = e.mp.detail.value;
    },
    checkRules(prop, value) {
      if (rules[prop]) {
        let propHasError = !rules[prop]["pattern"].test(value);
        let range = rules[prop]["range"];
        if (range && !propHasError) {
          propHasError = value < range[0] || value > range[1];
        }
        if (propHasError) {
          this.error_msg = rules[prop]["error_msg"];
        }
        this.inputs_error[prop] = propHasError;
        return !propHasError;
      } else {
        return true;
      }
    },
    inputChange(e, prop) {
      this.checkRules(prop, e.mp.detail.value);
      this.inputs_val[prop] = e.mp.detail.value;
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
