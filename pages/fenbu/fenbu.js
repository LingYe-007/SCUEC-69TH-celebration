// pages/fenbu/fenbu.js
Page({
  /**
   * 页面的初始数据
   */
  /**
   * 组件的初始数据
   */
  data: {
    showIndex: 0,
    dataList: [1, 2, 3, 4, 5],
    xianshi: false,
    chinadisplay: "none",
    meiguo: false,
    meiguodisplay: "none",
    chinalist: [
      {
        country: "武汉",
        score: 0,
      },
    ],
    otherlist: [{ country: "美国", score: 0 }],
  },

  //列表数据点击时

  f1() {
    var that = this;
    if (that.data.xianshi == false) {
      that.setData({
        xianshi: true,
        chinadisplay: "",
      });
    } else {
      that.setData({
        xianshi: false,
        chinadisplay: "none",
      });
    }
  },
  f3() {
    var that = this;
    console.log("aaaaa");
    if (that.data.meiguo == false) {
      that.setData({
        meiguo: true,
        meiguodisplay: "",
      });
    } else {
      that.setData({
        meiguo: false,
        meiguodisplay: "none",
      });
    }
  },

  listDataClick(e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index,
      });
    } else {
      this.setData({
        showIndex: 0,
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "https://abc.mmyxyz.xyz/stars/nationlist", //接口地址
      header: {
        "content-type": "application/json", // 默认值
      },
      success(res) {
        console.log(res)
        console.log(res.data.Data.China.Data.length);
        for (var i = 0; i < res.data.Data.China.Data.length; i++) {
          that.setData({
            [`chinalist[${i}].country`]: res.data.Data.China.Data[i].title,
            [`chinalist[${i}].score`]: res.data.Data.China.Data[i].star,
          });
        }

        for (var i = 0; i < res.data.Data.Other.length; i++) {
          that.setData({
            [`otherlist[${i}].country`]: res.data.Data.Other[i].nation,
            [`otherlist[${i}].score`]: res.data.Data.Other[i].star,
          });
        }

        console.log(res.data.Data.China.Data);
        console.log(res.data.Data.Other.length);
        console.log(that.data.chinalist);
      },

      fail(r) {
        console.log("请求校友分布失败");
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},
  f2: function () {
    wx.switchTab({
      url: "../home/home",
    });
  },

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
