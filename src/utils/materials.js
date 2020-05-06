
var towelList = [
  "2C1W2-Z1",
  "2C1W2-Z2",
  "2C1W2-Z3",
  "2C1W2-Z4",
  "2C1W2-J1",
  "2C1W2-J2",
  "2C1W2-J3",
  "2C1W2-J4",
  "2F2W2-Z1",
  "2F2W2-Z2",
  "2F2W2-Z3",
  "2F2W2-Z4",
  "2F2W2-Z5",
  "2F2W2-J1",
  "2F2W2-J2",
  "2F2W2-J3",
  "2F2W2-J4",
  "2F2W2-JD"
]

var towelDetail = {
  "2C1W2-Z1": {
    "elevation": 1000,
    "windSpeed": 23.5,
    "iced": 10,
    "angleOfRotation": 0,
    "verticalPitch": 600,
    "KvValue": 0.75,
    "dataSet": [
      [36, 350, 4.0],
      [33, 350, 3.8],
      [30, 378, 3.5],
      [27, 378, 3.2]
    ]
  },
  "2C1W2-Z2": {
  },
  "2C1W2-Z3": {
  },
  "2C1W2-Z4": {
  },
  "2C1W2-J1": {
  },
  "2C1W2-J2": {
  },
  "2C1W2-J3": {
  },
  "2C1W2-J4": {
  },
  "2F2W2-Z1": {
    "elevation": 1000,
    "windSpeed": 23.5,
    "iced": 10,
    "angleOfRotation": 0,
    "verticalPitch": 500,
    "KvValue": 0.85,
    "dataSet": [
      [36, 350, 6.3],
      [33, 350, 5.8],
      [30, 378, 5.4],
      [27, 378, 5.0]
    ]
  },
  "2F2W2-Z2": {
    "elevation": 1000,
    "windSpeed": 23.5,
    "iced": 10,
    "angleOfRotation": 0,
    "verticalPitch": 600,
    "KvValue": 0.75,
    "dataSet": [
      [42, 400, 7.1],
      [39, 400, 6.7],
      [36, 432, 6.3],
      [33, 432, 5.8],
      [30, 467, 5.4],
      [27, 467, 5.0]
    ]
  },
  "2F2W2-Z3": {
    "elevation": 1000,
    "windSpeed": 23.5,
    "iced": 10,
    "angleOfRotation": 0,
    "verticalPitch": 800,
    "KvValue": 0.65,
    "dataSet": [
      [54, 420, 8.9],
      [51, 420, 8.4],
      [48, 454, 8.0],
      [45, 454, 7.6],
      [42, 490, 7.2],
      [39, 490, 6.8],
      [36, 529, 6.3],
      [33, 529, 5.9],
      [30, 571, 5.5],
      [27, 571, 5.1]
    ]
  },
  "2F2W2-Z4": {
    "elevation": 1000,
    "windSpeed": 23.5,
    "iced": 10,
    "angleOfRotation": 0,
    "verticalPitch": 1000,
    "KvValue": 0.65,
    "dataSet": [
      [42, 600, 7.2],
      [39, 600, 6.8],
      [36, 636, 6.3],
      [33, 636, 5.9],
      [30, 674, 5.5],
      [27, 674, 5.1]
    ]
  },
  "2F2W2-Z5": {
    "elevation": 1000,
    "windSpeed": 23.5,
    "iced": 10,
    "angleOfRotation": 0,
    "verticalPitch": 1200,
    "KvValue": 0.65,
    "dataSet": [
      [72, 530, 10.5],
      [69, 530, 10.2],
      [66, 562, 9.8],
      [63, 562, 9.4],
      [60, 596, 9.0],
      [57, 596, 8.6],
      [54, 631, 8.3],
      [51, 631, 7.9],
      [48, 669, 7.5],
      [45, 669, 7.1],
      [42, 709, 6.7],
      [39, 709, 6.3],
      [36, 752, 6.0],
      [33, 752, 5.6],
      [30, 797, 5.2]
    ]
  },
  "2F2W2-J1": {
    "elevation": 1000,
    "windSpeed": 23.5,
    "iced": 10,
    "angleOfRotation": 20,
    "verticalPitch": "490/160",
    "KvValue": 0,
    "dataSet": [
      [36, "300/100", ""],
      [33, "", 7.8],
      [30, "", 7.3],
      [27, "", 6.7],
      [24, "", 6.2],
      [21, "", 5.6]
    ]
  },
  "2F2W2-J2": {
    "elevation": 1000,
    "windSpeed": 23.5,
    "iced": 10,
    "angleOfRotation": 40,
    "verticalPitch": "490/160",
    "KvValue": 0,
    "dataSet": [
      [36, "300/100", ""],
      [33, "", 8.2],
      [30, "", 7.6],
      [27, "", 7.0],
      [24, "", 6.4],
      [21, "", 5.9]
    ]
  },
  "2F2W2-J3": {
    "elevation": 1000,
    "windSpeed": 23.5,
    "iced": 10,
    "angleOfRotation": 60,
    "verticalPitch": "490/160",
    "KvValue": 0,
    "dataSet": [
      [36, "300/100", ""],
      [33, "", 9.8],
      [30, "", 9.1],
      [27, "", 8.3],
      [24, "", 7.6],
      [21, "", 6.9]
    ]
  },
  "2F2W2-J4": {
    "elevation": 1000,
    "windSpeed": 23.5,
    "iced": 10,
    "angleOfRotation": 90,
    "verticalPitch": "490/160",
    "KvValue": 0,
    "dataSet": [
      [36, "300/100", ""],
      [33, "", 11.1],
      [30, "", 10.3],
      [27, "", 9.5],
      [24, "", 8.6],
      [21, "", 7.8]
    ]
  },
  "2F2W2-JD": {
    "elevation": 1000,
    "windSpeed": 23.5,
    "iced": 10,
    "angleOfRotation": "0~90",
    "verticalPitch": "800/50",
    "KvValue": 0,
    "dataSet": [
      [36, "350/50", ""],
      [33, "", 10.9],
      [30, "", 10.1],
      [27, "", 9.3],
      [24, "", 8.5],
      [21, "", 7.7],
      [18, "", 6.9],
      [15, "", 6.1]
    ]
  }
}

var propCnName = {
  "elevation": "海拔",
  "windSpeed": "风速",
  "iced": "覆冰",
  "angleOfRotation": "转角",
  "verticalPitch": "垂直档距",
  "KvValue": "Kv值",
  "nominalHeight": "呼高",
  "horizontalPitch": "水平档距",
  // 我服了, 这玩意儿不知道咋翻译
  "xieBanGenKai": "斜半根开"
}

export { towelList, towelDetail, propCnName };
