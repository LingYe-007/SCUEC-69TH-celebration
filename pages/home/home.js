const app = getApp()
const util = require('../../utils/util')
import * as echarts from '../../ec-canvas/echarts'; //导入组件
import geoJson from './mapData.js';  //导入中国地图信息
import WxCanvas from '../../ec-canvas/wx-canvas';
var change=1;
var data=app.data3;
// var data=[{name: '海门', value: 9},
// {name: '鄂尔多斯', value: 12},
// {name: '招远', value: 12},
// {name: '舟山', value: 12},
// {name: '齐齐哈尔', value: 14},
// {name: '盐城', value: 15},
// {name: '赤峰', value: 16},
// {name: '青岛', value: 18},
// {name: '乳山', value: 18},
// {name: '金昌', value: 19},
// {name: '泉州', value: 21},
// {name: '莱西', value: 21},
// {name: '日照', value: 21},
// {name: '胶南', value: 22},
// {name: '南通', value: 23},
// {name: '拉萨', value: 24},
// {name: '云浮', value: 24},
// {name: '梅州', value: 25},
// {name: '文登', value: 25},
// {name: '上海', value: 25},
// {name: '攀枝花', value: 25},
// {name: '威海', value: 25},
// {name: '承德', value: 25},
// {name: '厦门', value: 26},
// {name: '汕尾', value: 26},
// {name: '潮州', value: 26},
// {name: '丹东', value: 27},
// {name: '太仓', value: 27},
// {name: '曲靖', value: 27},
// {name: '烟台', value: 28},
// {name: '福州', value: 29},
// {name: '瓦房店', value: 30},
// {name: '即墨', value: 30},
// {name: '抚顺', value: 31},
// {name: '玉溪', value: 31},
// {name: '张家口', value: 31},
// {name: '阳泉', value: 31},
// {name: '莱州', value: 32},
// {name: '湖州', value: 32},
// {name: '汕头', value: 32},
// {name: '昆山', value: 33},
// {name: '宁波', value: 33},
// {name: '湛江', value: 33},
// {name: '揭阳', value: 34},
// {name: '荣成', value: 34},
// {name: '连云港', value: 35},
// {name: '葫芦岛', value: 35},
// {name: '常熟', value: 36},
// {name: '东莞', value: 36},
// {name: '河源', value: 36},
// {name: '淮安', value: 36},
// {name: '泰州', value: 36},
// {name: '南宁', value: 37},
// {name: '营口', value: 37},
// {name: '惠州', value: 37},
// {name: '江阴', value: 37},
// {name: '蓬莱', value: 37},
// {name: '韶关', value: 38},
// {name: '嘉峪关', value: 38},
// {name: '广州', value: 38},
// {name: '延安', value: 38},
// {name: '太原', value: 39},
// {name: '清远', value: 39},
// {name: '中山', value: 39},
// {name: '昆明', value: 39},
// {name: '寿光', value: 40},
// {name: '盘锦', value: 40},
// {name: '长治', value: 41},
// {name: '深圳', value: 41},
// {name: '珠海', value: 42},
// {name: '宿迁', value: 43},
// {name: '咸阳', value: 43},
// {name: '铜川', value: 44},
// {name: '平度', value: 44},
// {name: '佛山', value: 44},
// {name: '海口', value: 44},
// {name: '江门', value: 45},
// {name: '章丘', value: 45},
// {name: '肇庆', value: 46},
// {name: '大连', value: 47},
// {name: '临汾', value: 47},
// {name: '吴江', value: 47},
// {name: '石嘴山', value: 49},
// {name: '沈阳', value: 50},
// {name: '苏州', value: 50},
// {name: '茂名', value: 50},
// {name: '嘉兴', value: 51},
// {name: '长春', value: 51},
// {name: '胶州', value: 52},
// {name: '银川', value: 52},
// {name: '张家港', value: 52},
// {name: '三门峡', value: 53},
// {name: '锦州', value: 54},
// {name: '南昌', value: 54},
// {name: '柳州', value: 54},
// {name: '三亚', value: 54},
// {name: '自贡', value: 56},
// {name: '吉林', value: 56},
// {name: '阳江', value: 57},
// {name: '泸州', value: 57},
// {name: '西宁', value: 57},
// {name: '宜宾', value: 58},
// {name: '呼和浩特', value: 58},
// {name: '成都', value: 58},
// {name: '大同', value: 58},
// {name: '镇江', value: 59},
// {name: '桂林', value: 59},
// {name: '张家界', value: 59},
// {name: '宜兴', value: 59},
// {name: '北海', value: 60},
// {name: '西安', value: 61},
// {name: '金坛', value: 62},
// {name: '东营', value: 62},
// {name: '牡丹江', value: 63},
// {name: '遵义', value: 63},
// {name: '绍兴', value: 63},
// {name: '扬州', value: 64},
// {name: '常州', value: 64},
// {name: '潍坊', value: 65},
// {name: '重庆', value: 66},
// {name: '台州', value: 67},
// {name: '南京', value: 67},
// {name: '滨州', value: 70},
// {name: '贵阳', value: 71},
// {name: '无锡', value: 71},
// {name: '本溪', value: 71},
// {name: '克拉玛依', value: 72},
// {name: '渭南', value: 72},
// {name: '马鞍山', value: 72},
// {name: '宝鸡', value: 72},
// {name: '焦作', value: 75},
// {name: '句容', value: 75},
// {name: '北京', value: 79},
// {name: '徐州', value: 79},
// {name: '衡水', value: 80},
// {name: '包头', value: 80},
// {name: '绵阳', value: 80},
// {name: '乌鲁木齐', value: 84},
// {name: '枣庄', value: 84},
// {name: '杭州', value: 84},
// {name: '淄博', value: 85},
// {name: '鞍山', value: 86},
// {name: '溧阳', value: 86},
// {name: '库尔勒', value: 86},
// {name: '安阳', value: 90},
// {name: '开封', value: 90},
// {name: '济南', value: 92},
// {name: '德阳', value: 93},
// {name: '温州', value: 95},
// {name: '九江', value: 96},
// {name: '邯郸', value: 98},
// {name: '临安', value: 99},
// {name: '兰州', value: 99},
// {name: '沧州', value: 100},
// {name: '临沂', value: 103},
// {name: '南充', value: 104},
// {name: '天津', value: 105},
// {name: '富阳', value: 106},
// {name: '泰安', value: 112},
// {name: '诸暨', value: 112},
// {name: '郑州', value: 113},
// {name: '哈尔滨', value: 114},
// {name: '聊城', value: 116},
// {name: '芜湖', value: 117},
// {name: '唐山', value: 119},
// {name: '平顶山', value: 119},
// {name: '邢台', value: 119},
// {name: '德州', value: 120},
// {name: '济宁', value: 120},
// {name: '荆州', value: 127},
// {name: '宜昌', value: 130},
// {name: '义乌', value: 132},
// {name: '丽水', value: 133},
// {name: '洛阳', value: 134},
// {name: '秦皇岛', value: 136},
// {name: '株洲', value: 143},
// {name: '石家庄', value: 147},
// {name: '莱芜', value: 148},
// {name: '常德', value: 152},
// {name: '保定', value: 153},
// {name: '湘潭', value: 154},
// {name: '金华', value: 157},
// {name: '岳阳', value: 169},
// {name: '长沙', value: 175},
// {name: '衢州', value: 177},
// {name: '廊坊', value: 193},
// {name: '菏泽', value: 194},
// {name: '合肥', value: 229},
// {name: '武汉', value: 273},
// {name: '大庆', value: 279}];
var geoCoordMap = {  
'海门':[121.15,31.89],
'鄂尔多斯':[109.781327,39.608266],
'招远':[120.38,37.35],
'舟山':[122.207216,29.985295],
'齐齐哈尔':[123.97,47.33],
'盐城':[120.13,33.38],
'赤峰':[118.87,42.28],
'青岛':[120.33,36.07],
'乳山':[121.52,36.89],
'金昌':[102.188043,38.520089],
'泉州':[118.58,24.93],
'莱西':[120.53,36.86],
'日照':[119.46,35.42],
'胶南':[119.97,35.88],
'南通':[121.05,32.08],
'拉萨':[91.11,29.97],
'云浮':[112.02,22.93],
'梅州':[116.1,24.55],
'文登':[122.05,37.2],
'上海':[121.48,31.22],
'攀枝花':[101.718637,26.582347],
'威海':[122.1,37.5],
'承德':[117.93,40.97],
'厦门':[118.1,24.46],
'汕尾':[115.375279,22.786211],
'潮州':[116.63,23.68],
'丹东':[124.37,40.13],
'太仓':[121.1,31.45],
'曲靖':[103.79,25.51],
'烟台':[121.39,37.52],
'福州':[119.3,26.08],
'瓦房店':[121.979603,39.627114],
'即墨':[120.45,36.38],
'抚顺':[123.97,41.97],
'玉溪':[102.52,24.35],
'张家口':[114.87,40.82],
'阳泉':[113.57,37.85],
'莱州':[119.942327,37.177017],
'湖州':[120.1,30.86],
'汕头':[116.69,23.39],
'昆山':[120.95,31.39],
'宁波':[121.56,29.86],
'湛江':[110.359377,21.270708],
'揭阳':[116.35,23.55],
'荣成':[122.41,37.16],
'连云港':[119.16,34.59],
'葫芦岛':[120.836932,40.711052],
'常熟':[120.74,31.64],
'东莞':[113.75,23.04],
'河源':[114.68,23.73],
'淮安':[119.15,33.5],
'泰州':[119.9,32.49],
'南宁':[108.33,22.84],
'营口':[122.18,40.65],
'惠州':[114.4,23.09],
'江阴':[120.26,31.91],
'蓬莱':[120.75,37.8],
'韶关':[113.62,24.84],
'嘉峪关':[98.289152,39.77313],
'广州':[113.23,23.16],
'延安':[109.47,36.6],
'太原':[112.53,37.87],
'清远':[113.01,23.7],
'中山':[113.38,22.52],
'昆明':[102.73,25.04],
'寿光':[118.73,36.86],
'盘锦':[122.070714,41.119997],
'长治':[113.08,36.18],
'深圳':[114.07,22.62],
'珠海':[113.52,22.3],
'宿迁':[118.3,33.96],
'咸阳':[108.72,34.36],
'铜川':[109.11,35.09],
'平度':[119.97,36.77],
'佛山':[113.11,23.05],
'海口':[110.35,20.02],
'江门':[113.06,22.61],
'章丘':[117.53,36.72],
'肇庆':[112.44,23.05],
'大连':[121.62,38.92],
'临汾':[111.5,36.08],
'吴江':[120.63,31.16],
'石嘴山':[106.39,39.04],
'沈阳':[123.38,41.8],
'苏州':[120.62,31.32],
'茂名':[110.88,21.68],
'嘉兴':[120.76,30.77],
'长春':[125.35,43.88],
'胶州':[120.03336,36.264622],
'银川':[106.27,38.47],
'张家港':[120.555821,31.875428],
'三门峡':[111.19,34.76],
'锦州':[121.15,41.13],
'南昌':[115.89,28.68],
'柳州':[109.4,24.33],
'三亚':[109.511909,18.252847],
'自贡':[104.778442,29.33903],
'吉林':[126.57,43.87],
'阳江':[111.95,21.85],
'泸州':[105.39,28.91],
'西宁':[101.74,36.56],
'宜宾':[104.56,29.77],
'呼和浩特':[111.65,40.82],
'成都':[104.06,30.67],
'大同':[113.3,40.12],
'镇江':[119.44,32.2],
'桂林':[110.28,25.29],
'张家界':[110.479191,29.117096],
'宜兴':[119.82,31.36],
'北海':[109.12,21.49],
'西安':[108.95,34.27],
'金坛':[119.56,31.74],
'东营':[118.49,37.46],
'牡丹江':[129.58,44.6],
'遵义':[106.9,27.7],
'绍兴':[120.58,30.01],
'扬州':[119.42,32.39],
'常州':[119.95,31.79],
'潍坊':[119.1,36.62],
'重庆':[106.54,29.59],
'台州':[121.420757,28.656386],
'南京':[118.78,32.04],
'滨州':[118.03,37.36],
'贵阳':[106.71,26.57],
'无锡':[120.29,31.59],
'本溪':[123.73,41.3],
'克拉玛依':[84.77,45.59],
'渭南':[109.5,34.52],
'马鞍山':[118.48,31.56],
'宝鸡':[107.15,34.38],
'焦作':[113.21,35.24],
'句容':[119.16,31.95],
'北京':[116.46,39.92],
'徐州':[117.2,34.26],
'衡水':[115.72,37.72],
'包头':[110,40.58],
'绵阳':[104.73,31.48],
'乌鲁木齐':[87.68,43.77],
'枣庄':[117.57,34.86],
'杭州':[120.19,30.26],
'淄博':[118.05,36.78],
'鞍山':[122.85,41.12],
'溧阳':[119.48,31.43],
'库尔勒':[86.06,41.68],
'安阳':[114.35,36.1],
'开封':[114.35,34.79],
'济南':[117,36.65],
'德阳':[104.37,31.13],
'温州':[120.65,28.01],
'九江':[115.97,29.71],
'邯郸':[114.47,36.6],
'临安':[119.72,30.23],
'兰州':[103.73,36.03],
'沧州':[116.83,38.33],
'临沂':[118.35,35.05],
'南充':[106.110698,30.837793],
'天津':[117.2,39.13],
'富阳':[119.95,30.07],
'泰安':[117.13,36.18],
'诸暨':[120.23,29.71],
'郑州':[113.65,34.76],
'哈尔滨':[126.63,45.75],
'聊城':[115.97,36.45],
'芜湖':[118.38,31.33],
'唐山':[118.02,39.63],
'平顶山':[113.29,33.75],
'邢台':[114.48,37.05],
'德州':[116.29,37.45],
'济宁':[116.59,35.38],
'荆州':[112.239741,30.335165],
'宜昌':[111.3,30.7],
'义乌':[120.06,29.32],
'丽水':[119.92,28.45],
'洛阳':[112.44,34.7],
'秦皇岛':[119.57,39.95],
'株洲':[113.16,27.83],
'石家庄':[114.48,38.03],
'莱芜':[117.67,36.19],
'常德':[111.69,29.05],
'保定':[115.48,38.85],
'湘潭':[112.91,27.87],
'金华':[119.64,29.12],
'岳阳':[113.09,29.37],
'长沙':[113,28.21],
'衢州':[118.88,28.97],
'廊坊':[116.7,39.53],
'菏泽':[115.480656,35.23375],
'合肥':[117.27,31.86],
'武汉':[114.31,30.52],
'大庆':[125.03,46.58]   //绘制gps坐标，作用于散点图
};
// var that=this;
// var data=that.data.data;
// console.log(data)
var convertData = function(data) { //将坐标取到数组里
  console.log(data)
  var res = [];
  for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].address];
      if (geoCoord) {
          res.push({
              name: data[i].address,
              value: geoCoord.concat(data[i].star),
          });
      }
  }
  return res;
};
function randomData() {
  return Math.round(Math.random() * 1000);
} //随机生成数据，因为没有后台接口- -。
function initChartMap(canvas, width, height,dpr) {
  console.log(app.data3)
  let myMap = echarts.init(canvas,null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });//绘制地图入口函数
  canvas.setChart(myMap); 
  echarts.registerMap('china', geoJson);  // 绘制中国地图
 
  const option = {
    grid:{
      height:80
    },
    tooltip: {
      trigger: 'item',
      visibility: "off",
      backgroundColor: "rgb(72,72,72)", //文本框的背景颜色
      padding: [   //文本的位置
        10,  // 上
        15, // 右
        8,  // 下
        15, // 左
      ],
      extraCssText: 'box-shadow: 1px 1px 10px rgba(21, 126, 245, 0.35);',//文本框
      textStyle: {  ////点击后出现的文本的样式
        fontFamily: "'Microsoft YaHei', Arial, 'Avenir', Helvetica, sans-serif",
        position:"right",
        formatter: '{parseInt(b)}',
        color: 'rgb(255,255,255)', 
        fontSize: 12,
      },
      //点击后出现的文本

    },
    geo: [
      {
        // 地理坐标系组件
        map: "china",
        roam: true, // 可以缩放和平移
        zoom:1.2,
        scaleLimit: { //滚轮缩放的极限控制
          min: 0.6,
          max: 2.4        },
        aspectScale: 0.8, // 比例true
        layoutCenter: ["50%", "55%"],  //中心的position位置
        layoutSize: 420, // 地图大小
        label: {
          // 图形上的文本标签
          normal: {
            show: false,
            textStyle: {
              color: "#000000",
              fontSize: '14',
            }
          }},
          emphasis: {
            z:1000, // 高亮时的地图上的文本样式
            label: {
              z:100,
              color: "#000000",
              show: true,//选中状态是否显示省份名称
          }
       
        },

        itemStyle: {
          // 图形上的地图区域
      normal: {
            areaColor: 'rgb(247,246,240)',
            borderColor: '#E7C9AF' //整个地图的颜色
          },
          emphasis:{areaColor: 'rgb(144,204,203)'}, 
        }}],
        visualMap: {
          show: true,
          // 指定 visualMapContinuous 组件的允许的最小值。'min' 必须用户指定。[visualMap.min, visualMax.max] 形成了视觉映射的『定义域』。
              // 指定 visualMapContinuous 组件的允许的最大值
            // 两端的文本，如 ['High', 'Low'] 如例子：http://www.echartsjs.com/gallery/editor.html?c=doc-example/map-visualMap-continuous-text&edit=1&reset=1
                realtime: false, // 拖拽时，是否实时更新。
                calculable: false, // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
                buttom:"20",
                padding:40,
                itemHeight:0,               hoverLink:false, // 打开 hoverLink 功能时，鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮。
                inRange: {
                    color: [" rgb(144,204,203)",	"rgb(144,204,203)"]
                }
      },

 // data:citydata
   
    series: [
      {
        type: 'map',
        mapType: 'china',
        geoIndex: 0,
        roam: false, // 鼠标是否可以缩放
        scaleLimit: { //滚轮缩放的极限控制
          min: 0.6,
          max: 2
        },
        label: {
          normal: {
            show: true
          },
          itemStyle: {
            color: '#000000'
        },
          emphasis: {
            show: true
          }
        },
			type: 'scatter', // series图表类型
      coordinateSystem: 'geo', // series坐标系类型
        //设置弹窗数据，要从后台接入数据
        large: true,
        text:false,
        symbolSize: function (val) {
          if(val[2]<80)
          return val[2]/4;
          else
          return  14
      },
        data:convertData(app.data3),
        label: {
          color:'#CC00FF',
          formatter: '{c}',
          position: 'right',
          show: false
      },
      itemStyle: {
        color:'#CC00FF',
    }
},{
  name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(app.data3.sort(function (a, b) {
                return b.star - a.star;
            }).slice(0, 5)),
            encode: {
                value: 2
            },
            symbolSize: function (val) {
              if(val[2]<150)
                return val[2]/8;
              else
                return 18
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              color:'#79664d',
                formatter: '{b}',
                position: 'right',
                show: true
            },
            itemStyle: {
                color: '#000000',
                shadowColor: '#333'
            }
          },
          {
            type: 'custom',
            coordinateSystem: 'geo',
            itemStyle: {
                opacity: 0.5
            },
            animation: false,
            silent: true,
            data: [0],
            z: 100
        }
]
}; 
  myMap.setOption(option);
  return myMap
}
var xx="2";


//index.js
var that = undefined;
var doommList = [];
var i = 0;
var ids=0;
var cycle=null; //计时器
var laqushuju = null;
var pagecount =1;
// 弹幕参数
class Doomm {
  constructor(name,text, top, time) {  //内容，顶部距离，运行时间，颜色（参数可自定义增加）
    this.text = text;
    this.top = top;
    this.time = time;
    this.name = name;
    this.display = true;
    this.id = i++;
  }
}
// 弹幕字体颜色
/*
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}*/



Page({
  data: {
    is:true,
    ecMap:{
      onInit:initChartMap
    },
    on: true,
    activeIdx:1,
    ishide:false,
    cange:false,
    data:true,
    change:1,
    gurl:"../../images/xingxing.gif",
    doommData: [],
    doommData2: [],
    arr2:["小塔","小严","Geek组","柚子","小何","吹风机","灵野","深巷"],
    arr: ["祝最爱的民大69岁生日快乐！","点完星就去吃碗一块三的热干面！", "程序猿头都快都秃了", "希望大家喜欢这个小程序～", "祝民大69周年生日快乐","民大生日快乐呀", "改完这个bug就去奖励自己","秃头秃头秃头"],
  },
  stop() { this.back.pause(); // 点击音乐图标后出发的操作
		this.setData({ on: !this.data.on })
		 if (this.data.on) { 
			this.back.play() 
		}else{
	 	this.back.pause()
	    }
	},
  onHide(){
    clearInterval(cycle)
    clearInterval(laqushuju)
    ids=0;
    doommList=[]
  },
  onUnload(){
    clearInterval(cycle)
    // clearInterval(luqushuju)
    ids = 0;
    doommList = []
  },
 

  onLoad(){
  //   wx.showShareMenu({
  //   withShareTicket: true,
  //   menus: ['shareAppMessage', 'shareTimeline']
  // })
    var that=this
    wx.request({
      url: 'https://api.pomelo072.top/count/total',
      success:function(res){
        that.setData({total:res.data.Data.Star})
      }
    })
    var date = util.formatDate(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      date: date
    });
    if(date==app.star_time){
      this.setData({
        ishide:true,
      })
      app.change=3
    }
    this.back = wx.getBackgroundAudioManager() 
    
    //http://img.nt-geek.club/%E6%A0%A1%E5%BA%86BGM%E7%BC%A9%E6%B7%B7.mp3
    // 对实例进行设置    
      this.back.src = "https://img.nt-geek.club/%E8%B5%84%E8%AE%AF%E6%B0%91%E5%A4%A7%20-%20%E4%B8%AD%E5%8D%97%E6%B0%91%E5%A4%A767%E5%91%A8%E5%B9%B4%E5%BA%86%E7%94%9F%E7%89%88%C2%B7%E3%80%8A%E5%8F%AF%E8%83%BD%E5%90%A6%E3%80%8B.mp3"
      this.back.title = '祝民大69岁生日快乐！'   // 标题为必选项
      this.back.coverImgUrl='https://img.nt-geek.club/%E9%9F%B3%E4%B9%90%E5%B0%81%E9%9D%A2%20%283%29.jpg'
      this.back.play()  ,             // 开始播放
      this.back.onEnded(()=>{
       
        console.log("音乐循环播放")
        this.back = wx.getBackgroundAudioManager() 
       
        //http://img.nt-geek.club/%E6%A0%A1%E5%BA%86BGM%E7%BC%A9%E6%B7%B7.mp3
        // 对实例进行设置    
          this.back.src = "https://img.nt-geek.club/%E8%B5%84%E8%AE%AF%E6%B0%91%E5%A4%A7%20-%20%E4%B8%AD%E5%8D%97%E6%B0%91%E5%A4%A767%E5%91%A8%E5%B9%B4%E5%BA%86%E7%94%9F%E7%89%88%C2%B7%E3%80%8A%E5%8F%AF%E8%83%BD%E5%90%A6%E3%80%8B.mp3"
          this.back.title = '祝民大69岁生日快乐！'   // 标题为必选项
          this.back.coverImgUrl='https://img.nt-geek.club/%E9%9F%B3%E4%B9%90%E5%B0%81%E9%9D%A2%20%283%29.jpg'
          this.back.play()              // 开始播放
      })            // 开始播放
  },
 /*
  bindbt:function(){
    doommList.push(new Doomm("这是我的弹幕",Math.ceil(Math.random()*100),Math.ceil(Math.random()*10)));
    this.setData({
      doommData : doommList
    })
  }*/









  /**
   * 页面的初始数据
   */
  f1:function(){   
    var that=this;
   switch(app.change) {
     case 1:{
      wx.showModal({
        showCancel:false,
        title: '星火民大，点亮中华',
        content: '请先填写信息',
        success:function(res){
            if(res.confirm){
              wx.switchTab({
                url: "/pages/information/information",
              }),
               console.log('弹框后点取消')
            }
            else{
               console.log('弹框后点取消')
            }}})
        break;
          }
      case 2:{
        var area=app.area;
        if(app.country=="中国"){that.setData({na:1})}else{that.setData({na:0,area:app.country}),app.area=app.country}
        that.setData({ishide:true,is:false,id:app.USERID,area:app.area})
        console.log(that.data.na)
        console.log(app.area)
        wx.request({
          url: 'https://api.pomelo072.top/stars/light',
          data:{
            user_id:that.data.id,
            address:app.area,
            flag:that.data.na
          },
          success:wx.showModal({
            showCancel:false,
            title:"星火民大，点亮中华",
            content:"你已经为"+area+"点亮星星",
          })
        })
      break;
    }
      case 3:{
        wx.showModal({
          showCancel:false,
          title: '星火民大，点亮中华',
          content: '您今天已经为民大应援过啦\r\n明天再来吧',
          success:function(res){
              if(res.confirm){
                 console.log('弹框后点取消')
              }
              else{
                 console.log('弹框后点取消')
              }}})
           
      }}},

    
 
  
  doSomething(){
    app.$$data.change="change";
    app.$$data.area="area"
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  
  fn:function(){
    wx.showModal({
      showCancel:false,
      title: '星火民大，点亮中华',
      content: '您今天已经为民大应援过啦\r\n明天再来吧',
      success:function(res){
          if(res.confirm){
             console.log('弹框后点取消')
          }
          else{
             console.log('弹框后点取消')
          }}})
       
  }, 
f6:function(){
  wx.navigateTo({
    url: '../fenbu/fenbu',
  })
  },
  onShow: function () {
    wx.request({
      url: 'https://api.pomelo072.top/stars/list',
      success:function(res){
        data:res.Data
      }

  })
   // 获取BackgroundAudioManager 实例
   
       
       var that = this;
       let arr=that.data.arr;
       let arr2=that.data.arr2;
       console.log("zhixing")
      laqushuju=  setInterval(function () {
       wx.request({
         url: 'https://api.pomelo072.top/msg/list', //接口地址
         data:{
          type:"time",
          pages:pagecount,
          pagesize:"20"
        },
         header: {
           'content-type': 'application/json' // 默认值
         },
         success (res) {
        if(pagecount==5)
        {
          pagecount=1
        }
            for(var i=0;i<res.data.Data.length;i++)
            {
             console.log(res.data.Data[i].replymsg);
            console.log(res.data.Data[i].replymsg.length);
            if(res.data.Data[i].replymsg.length<=12){
            arr2.unshift(res.data.Data[i].replyname)
            arr.unshift(res.data.Data[i].replymsg)
            }
            else{
             var a = res.data.Data[i].replymsg.slice(0,15).concat("...")
             console.log(a)
             arr2.unshift(res.data.Data[i].replyname)
            arr.unshift(a)
            }
          }
           
           
        
          },
          
         
         fail(r){
           console.log('请求拉取弹幕失败')
         }
       })
     }, 17000)
   
       cycle= setInterval(function () {

         
         
          
           if(arr[ids]==undefined){
             ids = 0
             // 1.循环一次，清除计时器
             // doommList = []
             // clearInterval(cycle)
   
             // 2.无限循环弹幕
             doommList.push(new Doomm(arr2[ids],arr[ids], Math.ceil(Math.random() * 60), 10));
             if(doommList.length>5){   //删除运行过后的dom
                 doommList.splice(0, 1)
             }
             that.setData({
               doommData: doommList
             })
             ids++
           }else{
             doommList.push(new Doomm(arr2[ids],arr[ids], Math.ceil(Math.random() * 60), 10));
             if(doommList.length>5){  
                 doommList.splice(0, 1)
             }
             that.setData({
               doommData: doommList
             })     
             ids++
           }
       }, 3910)
       console.log("zhixing")
  },

})