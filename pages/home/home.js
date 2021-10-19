const app = getApp();
const util = require("../../utils/util");

var change = 1;
var data = app.data3;
var xx = "2";

//index.js
var that = undefined;
var doommList = [];
var i = 0;
var ids = 0;
var cycle = null; //计时器
var laqushuju = null;
var pagecount = 1;
// 弹幕参数
class Doomm {
  constructor(name, text, top, time) {
    //内容，顶部距离，运行时间，颜色（参数可自定义增加）
    this.text = text;
    this.top = top;
    this.time = time;
    this.name = name;
    this.display = true;
    this.id = i++;
  }
}

Page({
  data: {
    flag:0,
    is: true,
    on: true,
    value:false,
    key: "D2QBZ-IXLKU-XLPV2-BSBRO-L7LI2-SVBMB",
    activeIdx: 1,
    ishide: true,
    cange: false,
    data: true,
    top:[0,20,40,60],
    change: 1,
    scale:3,
    markers:null,
    gurl: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/asset/light.gif",
    nowLatitude_x: 30.487114,
    nowLatitude_y: 114.391799,
    doommData: [],
    doommData2: [],
    arr2: [ "小严", "Geek组", "柚子", "小何", "吹风机", "灵野", "深巷"],
    arr: [
      "点完星就去吃碗一块三的热干面！",
      "程序猿头都快都秃了",
      "希望大家喜欢这个小程序～",
      "祝民大69周年生日快乐",
      "民大生日快乐呀",
      "改完这个bug就去奖励自己",
      "秃头秃头秃头",
    ],
  },
  stop() {
    this.back.pause(); // 点击音乐图标后出发的操作
    this.setData({ on: !this.data.on });
    if (this.data.on) {
      this.back.play();
    } else {
      this.back.pause();
    }
  },
  onHide() {
    clearInterval(cycle);
    clearInterval(laqushuju);
    ids = 0;
    doommList = [];
  },
  onUnload() {
    clearInterval(cycle);
    // clearInterval(luqushuju)
    ids = 0;
    doommList = [];
  },

  onLoad() {
    var that = this;
    wx.request({
      url: "https://abc.mmyxyz.xyz/count/total",
      success: function (res) {
        that.setData({ total: res.data.Data.Star });
      },
    });
    var date = util.formatDate(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      date: date,
    });
    if (date == app.star_time) {
      this.setData({
        ishide: true,
      });
      app.change = 3;
    }
    this.back = wx.getBackgroundAudioManager();

    //http://img.nt-geek.club/%E6%A0%A1%E5%BA%86BGM%E7%BC%A9%E6%B7%B7.mp3
    // 对实例进行设置
    this.back.src =
      "https://img.nt-geek.club/%E8%B5%84%E8%AE%AF%E6%B0%91%E5%A4%A7%20-%20%E4%B8%AD%E5%8D%97%E6%B0%91%E5%A4%A767%E5%91%A8%E5%B9%B4%E5%BA%86%E7%94%9F%E7%89%88%C2%B7%E3%80%8A%E5%8F%AF%E8%83%BD%E5%90%A6%E3%80%8B.mp3";
    this.back.title = "祝民大70岁生日快乐！"; // 标题为必选项
    this.back.coverImgUrl =
      "https://img.nt-geek.club/%E9%9F%B3%E4%B9%90%E5%B0%81%E9%9D%A2%20%283%29.jpg";
    this.back.play(), // 开始播放
      this.back.onEnded(() => {
        console.log("音乐循环播放");
        this.back = wx.getBackgroundAudioManager();

        //http://img.nt-geek.club/%E6%A0%A1%E5%BA%86BGM%E7%BC%A9%E6%B7%B7.mp3
        // 对实例进行设置
        this.back.src =
          "https://img.nt-geek.club/%E8%B5%84%E8%AE%AF%E6%B0%91%E5%A4%A7%20-%20%E4%B8%AD%E5%8D%97%E6%B0%91%E5%A4%A767%E5%91%A8%E5%B9%B4%E5%BA%86%E7%94%9F%E7%89%88%C2%B7%E3%80%8A%E5%8F%AF%E8%83%BD%E5%90%A6%E3%80%8B.mp3";
        this.back.title = "祝民大69岁生日快乐！"; // 标题为必选项
        this.back.coverImgUrl =
          "https://img.nt-geek.club/%E9%9F%B3%E4%B9%90%E5%B0%81%E9%9D%A2%20%283%29.jpg";
        this.back.play(); // 开始播放
      }); // 开始播放
  },

  /**
   * 页面的初始数据
   */
  f1: function () {
    var that = this;
    switch (app.change) {
      case 1: {
        wx.showModal({
          showCancel: false,
          title: "星火民大，点亮中华",
          content: "请先填写信息",
          success: function (res) {
            if (res.confirm) {
              wx.switchTab({
                url: "/pages/information/information",
              }),
                console.log("弹框后点取消");
            } else {
              console.log("弹框后点取消");
            }
          },
        });
        break;
      }
      case 2: {
        var area = app.area;
        if (app.country == "中国") {
          that.setData({ na: 1 });
        } else {
          that.setData({ na: 0, area: app.country }), (app.area = app.country);
        }
        that.setData({
          ishide: true,
          is: false,
          id: app.USERID,
          area: app.area,
        });
        console.log(that.data.na);
        console.log(app.area);
        wx.request({
          url: "https://abc.mmyxyz.xyz/stars/light",
          data: {
            user_id: that.data.id,
            address: app.area,
            flag: that.data.na,
          },
          success: wx.showModal({
            showCancel: false,
            title: "星火民大，点亮中华",
            content: "你已经为" + area + "点亮星星",
          }),
        });
        break;
      }
      case 3: {
        wx.showModal({
          showCancel: false,
          title: "星火民大，点亮中华",
          content: "您今天已经为民大应援过啦\r\n明天再来吧",
          success: function (res) {
            if (res.confirm) {
              console.log("弹框后点取消");
            } else {
              console.log("弹框后点取消");
            }
          },
        });
      }
    }
  },

  doSomething() {
    app.$$data.change = "change";
    app.$$data.area = "area";
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  fn: function () {
    wx.showModal({
      showCancel: false,
      title: "星火民大，点亮中华",
      content: "您今天已经为民大应援过啦\r\n明天再来吧",
      success: function (res) {
        if (res.confirm) {
          console.log("弹框后点取消");
        } else {
          console.log("弹框后点取消");
        }
      },
    });
  },
  f6: function () {
    wx.navigateTo({
      url: "../fenbu/fenbu",
    });
  },
  onShow: function () {
    wx.request({
      url: "https://abc.mmyxyz.xyz/stars/list",
      success: function (res) {
        markers: res.Data;
      },
    });
    // 获取BackgroundAudioManager 实例
    var that = this;
    let arr = that.data.arr;
    let arr2 = that.data.arr2;
    console.log("zhixing");
    laqushuju = setInterval(function () {
      wx.request({
        url: "https://abc.mmyxyz.xyz/msg/list", //接口地址
        data: {
          type: "time",
          pages: pagecount,
          pagesize: "20",
        },
        header: {
          "content-type": "application/json", // 默认值
        },
        success(res) {
          if (pagecount == 5) {
            pagecount = 1;
          }
          for (var i = 0; i < res.data.Data.length; i++) {
            console.log(res.data.Data[i].replymsg);
            console.log(res.data.Data[i].replymsg.length);
            if (res.data.Data[i].replymsg.length <= 12) {
              arr2.unshift(res.data.Data[i].replyname);
              arr.unshift(res.data.Data[i].replymsg);
            } else {
              var a = res.data.Data[i].replymsg.slice(0, 15).concat("...");
              console.log(a);
              arr2.unshift(res.data.Data[i].replyname);
              arr.unshift(a);
            }
          }
        },

        fail(r) {
          console.log("请求拉取弹幕失败");
        },
      });
    }, 17000);

    var flag = 0 
    cycle = setInterval(function () {
      console.log(flag)
      flag = 0
      if (arr[ids] == undefined) {
        ids = 0;
        // 1.循环一次，清除计时器
        // doommList = []
        // clearInterval(cycle)

        // 2.无限循环弹幕
        doommList.push(
          new Doomm(arr2[ids], arr[ids], that.data.top[flag], 11)
        );
        doommList.push(
          new Doomm(arr2[ids+1], arr[ids+1], that.data.top[flag+1], 10)
        )
        doommList.push(
          new Doomm(arr2[ids+2], arr[ids+2], that.data.top[flag+2], 9)
        )
        doommList.push(
          new Doomm(arr2[ids+3], arr[ids+3], that.data.top[flag+3], 12)
        )
        if (doommList.length > 10) {
          //删除运行过后的dom
          doommList.splice(0, 1);
        }
        that.setData({
          doommData: doommList,
        });
        ids++;
      } else {
        doommList.push(
          new Doomm(arr2[ids], arr[ids], that.data.top[flag], 11)
        );
        doommList.push(
          new Doomm(arr2[ids+1], arr[ids+1], that.data.top[flag+1], 10)
        )
        doommList.push(
          new Doomm(arr2[ids+2], arr[ids+2], that.data.top[flag+2], 9)
        )
        doommList.push(
          new Doomm(arr2[ids+3], arr[ids+3], that.data.top[flag+3], 12)
        )
        if (doommList.length > 10) {
          doommList.splice(0, 1);
        }
        that.setData({
          doommData: doommList,
        });
        ids= ids+4;
      }
    }, 4000);
    console.log("zhixing");
  },
});
