var rules = {
  k_val: {
    "name": "K值",
    "type": "float",
    "pattern": /^[0-9]{1,3}(\.\d)?$/,
    "range": [1.0, 100.0],
    "default": 7.0,
    "error_msg": "K值合法范围为1.0~100.0",
    "hasError": false
  },
  ax: {
    "name": "后侧塔累距ax",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "ax参数合法范围为0~9999",
    "hasError": false
  },
  ay: {
    "name": "后侧塔挂高ay",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "ay参数合法范围为0~9999",
    "hasError": false
  },
  bx: {
    "name": "验算塔累距bx",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "bx参数合法范围为0~9999",
    "hasError": false
  },
  by: {
    "name": "验算塔挂高by",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "by参数合法范围为0~9999",
    "hasError": false
  },
  cx: {
    "name": "前侧塔累距cx",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "cx参数合法范围为0~9999",
    "hasError": false
  },
  cy: {
    "name": "前侧塔挂高cy",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "cy参数合法范围为0~9999",
    "hasError": false
  },
  x1: {
    "name": "验算点累距x1",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "x1参数合法范围为0~9999",
    "hasError": false
  },
  x2: {
    "name": "验算点累距x2",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "x2参数合法范围为0~9999",
    "hasError": false
  },
  x3: {
    "name": "验算点累距x3",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "x3参数合法范围为0~9999",
    "hasError": false
  },
  y1: {
    "name": "高程y1",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "y1参数合法范围为0~9999",
    "hasError": false
  },
  y2: {
    "name": "高程y2",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "y2参数合法范围为0~9999",
    "hasError": false
  },
  y3: {
    "name": "高程y3",
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "y3参数合法范围为0~9999",
    "hasError": false
  }
}

export { rules };
