// pages/information/information.js
let isInitSelfshow = true;
var bmap = require("../../libs/bmap-wx.min.js");
var wxMarkerData = [];

const app = getApp();
Page({
  data: {
    a1: 0,
    array1: [
      "法学院",
      "文学与新闻传播学院",
      "美术学院",
      "民族学与社会学学院",
      "外语学院",
      "经济学院",
      "管理学院",
      "公共管理学院",
      "教育学院",
      "马克思主义学院",
      "计算机科学学院",
      "数学与统计学学院",
      "电子信息工程学院",
      "生物医学工程学院",
      "化学与材料科学学院",
      "资源与环境学院",
      "生命科学学院",
      "药学院",
      "预科教育学院",
      "体育学院",
      "音乐舞蹈学院",
      "继续教育学院",
      "中华民族共同体研究院",
      "研究生院",
      "国际教育学院",
      "教职工",
    ],
    gifUrl: "",
    index: "",
    activeIdx: 2,
    ishide: true,
    change: 2,
    country: "中国",
    usernumber: "",
    college: "",
    region: "",
    userName: "",
    code: true,
    arq: true,
  },
  try: function (e) {
    this.setData({
      college: e.detail.value,
    });
  },
  storage: function (e) {
    this.setData({
      userName: e.detail.value,
    });
    if (this.data.userName.length > 8) {
      wx.showToast({
        title: "名字不得超过8个字",
        icon: "none",
      }),
        this.setData({ userName: "" });
    }
  },
  uNumber(e) {
    this.setData({ usernumber: e.detail.value });
  },
  gifImgLoad(e) {
    var gifurl = this.data.gifUrl;
    var nowTime = +new Date();
    setTimeout(() => {
      this.setData({
        gifUrl: gifurl + "?" + nowTime,
      });
    }, 1000);
  },
  changeRegin(e) {
    this.setData({ region: e.detail.value });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  cn: function () {
    this.setData({});
    wx.redirectTo({
      url: "../country/country",
    });
  },
  fm: function () {
    wx.redirectTo({
      url: "../zhuye/zhuye",
    });
  },
  f1: function () {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: "ngH82UfC9ct0UHNQcTZFsH62KcnDiaBw",
    });
    var fail = function (data) {
      console.log(data);
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      app.longitude =wxMarkerData.longitude
      app.latitude = wxMarkerData.latitude
      console.log(wxMarkerData);
    };
    let address = that.data.index.replace(/,/g,'')
    BMap.geocoding({
      address:address,
      fail:fail,
      success:success
    });
    var that = this;
    console.log(that.data.college == "");
    console.log(that.data.region[0] == "");
    if (
      (that.data.college != "" &&
        that.data.region[0] != "" &&
        that.data.userName != "" &&
        that.data.id != "" &&
        that.data.country == "中国") ||
      (that.data.college != "" &&
        that.data.country != "中国" &&
        that.data.userName != "" &&
        that.data.id != "")
    ) {
      wx.request({
        url: "https://abc.mmyxyz.xyz/personal/edit",
        method: "POST",
        data: {
          NATION: app.country,
          NAME: that.data.userName,
          SCUECID: that.data.usernumber,
          ADDRESS: String(that.data.region),
          USERID: that.data.id,
          COLLEGE: that.data.college,
        },
        success: function (res) {
          wx.showModal({
            title: "星火民大，点亮中华",
            content: "你已成功填写信息，快去点亮星星吧！",
            success: function (res) {
              if (res.confirm) {
                wx.switchTab({
                  url: "/pages/home/home",
                }),
                  console.log("弹框后点取消");
              } else {
                console.log("弹框后点取消");
              }
            },
          });
          app.college = that.data.college;
          app.username = that.data.userName;
          app.change = 2;
          app.USERID = that.data.id;
          if (
            app.area !=
            that.data.region[1].slice(0, that.data.region[1].length - 1)
          ) {
            app.area = that.data.region[1].slice(
              0,
              that.data.region[1].length - 1
            );
          }
        },
      });
    } else {
      wx.showToast({
        title: "信息未填写完整",
        icon: "loading",
        duration: 500,
        success: {},
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  //  获取定位地区的经纬度

  onLoad: function () {
    var that = this;
    wx.login({
      success(res) {
        wx.request({
          url: "https://abc.mmyxyz.xyz/stars/list",
          success: function (res) {
            that.setData({ data3: res.data.Data });
            app.data3 = that.data.data3;
          },
        });
        if (res.code) {
          //发起网络请求
          wx.request({
            url: "https://abc.mmyxyz.xyz/personal/login",
            data: {
              code: res.code,
            },
            success: function (res) {
              console.log(res.data.Data.LASTREPLY);
              that.setData({
                list: res.data,
                id: res.data.Data.USERID,
                userName: res.data.Data.NAME,
                usernumber: res.data.Data.SCUECID,
                index: res.data.Data.ADDRESS,
                college: res.data.Data.COLLEGE,
                star_time: res.data.Data.LASTSTAR,
                reply_time: res.data.Data.LASTREPLY,
                a1: 1,
              });

              var index = that.data.index.split(",");
              that.setData({
                [`region[0]`]: index[0],
                [`region[1]`]: index[1],
                [`region[2]`]: index[2],
              });
          
              app.college = res.data.Data.COLLEGE;
              app.star_time = res.data.Data.LASTSTAR;
              app.USERID = res.data.Data.USERID;
              app.username = res.data.Data.NAME;
              app.area = res.data.Data.ADDRESS[1].slice(
                0,
                that.data.region[1].length - 1
              );
              app.reply_time = that.data.reply_time;
            },
          });
        }
      },
    });
    // wx.request({
    //   url: 'https://abc.mmyxyz.xyz/personal/info',
    //     data:{
    //     user_id:that.data.id
    //   },
    //   success(res){
    //     console.log(res)
    //     if(res.data.Data)
    //     that.setData({
    //         usernumber:res.data.Data.NAME,
    //         college:res.data.Data.COLLEGE,
    //         region:res.data.Data.ADDRESS,
    //         userName:res.data.Data.NAME
    //     })
    //     app.username=that.data.Data.NAME;
    //     app.change=2;
    //     app.USERID=that.data.id;
    //     app.area=that.data.region[1].slice(0,that.data.region[1].length-1)
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    that.setData({
      country: app.country,
    });
    if (app.country != "中国") {
      that.setData({
        arq: false,
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
