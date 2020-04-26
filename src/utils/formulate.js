var rules = {
  k_val: {
    "type": "float",
    "pattern": /^[0-9]{1,3}(\.\d)?$/,
    "range": [1.0, 100.0],
    "default": 7.0,
    "error_msg": "K值合法范围为1.0~100.0"
  },
  ax: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "ax参数合法范围为0~9999"
  },
  ay: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "ay参数合法范围为0~9999"
  },
  bx: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "bx参数合法范围为0~9999"
  },
  by: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "by参数合法范围为0~9999"
  },
  cx: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "cx参数合法范围为0~9999"
  },
  cy: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "cy参数合法范围为0~9999"
  },
  x1: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "x1参数合法范围为0~9999"
  },
  x2: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "x2参数合法范围为0~9999"
  },
  x3: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "x3参数合法范围为0~9999"
  },
  y1: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "y1参数合法范围为0~9999"
  },
  y2: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "y2参数合法范围为0~9999"
  },
  y3: {
    "type": "int",
    "pattern": /^[0-9]{1,4}$/,
    "default": 0,
    "error_msg": "y3参数合法范围为0~9999"
  }
}

export { rules };
