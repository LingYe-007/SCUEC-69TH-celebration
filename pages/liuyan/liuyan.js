const app = getApp();
const util = require("../../utils/util");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hideHeader: true,
    loading: false,
    triggered: false,
    hideBottom: true,
    refreshTime: "", // 刷新的时间
    loadMoreData: "加载更多……",
    reply: "",
    s1: false,
    reply: "刷新成功",
    test: "我太长了飒飒飒飒撒",
    activeIdx: 0,
    like: 123,
    door: 0,
    current: 0,
    imgurl: {},
    imgurl1: {},
    index: 0,
    pinglun: "",
    item1: [{
        name: "法学院",
        value: "#FFB6C1"
      },
      {
        name: "文传院",
        value: "#FFA500"
      },
      {
        name: "美院",
        value: "#e05297"
      },
      {
        name: "民社院",
        value: "#E87A90"
      },
      {
        name: "外院",
        value: "#fa7f72"
      },
      {
        name: "经院",
        value: "#28abb9"
      },
      {
        name: "管院",
        value: "#34626c"
      },
      {
        name: "公管院",
        value: "#839b97"
      },
      {
        name: "教院",
        value: "#5c6e91"
      },
      {
        name: "马院",
        value: "#f05454"
      },
      {
        name: "计科院",
        value: "#87CEFA"
      },
      {
        name: "数统院",
        value: "#c3aed6"
      },
      {
        name: "电信院",
        value: "#8bcdcd"
      },
      {
        name: "生医院",
        value: "#b8de6f"
      },
      {
        name: "化材院",
        value: "#aa3a3a"
      },
      {
        name: "资环院",
        value: "#d2f5e3"
      },
      {
        name: "生科院",
        value: "#9ad3bc"
      },
      {
        name: "药院",
        value: "	#3CB371"
      },
      {
        name: "预科院",
        value: "#d6d2c4"
      },
      {
        name: "体院",
        value: "#FFB6C1"
      },
      {
        name: "音舞院",
        value: "#fccbcb"
      },
      {
        name: "继教院",
        value: "#686d76"
      },
      {
        name: "中研院",
        value: "#34626c"
      },
      {
        name: "研究生",
        value: "#87CEFA"
      },
      {
        name: "国教院",
        value: "#d2f5e3"
      },
      {
        name: "教职工",
        value: "#28abb9"
      },
    ],
    arr: [],
    arr1: [],
    top:[20,60,80],
    postBtnState: false, //提交按钮状态（颜色）
    url: 'https://ks3-cn-beijing.ksyuncs.com/lingye-space/map/like.png',
    url1: 'https://ks3-cn-beijing.ksyuncs.com/lingye-space/map/likeAct.png',
    show: false,
    s2: true,
    pagecount: 2,
    pagecount1: 2,
  },
  loadMore: function () {
    var that = this;
    if (that.data.current == 0) {
      var pagecount = that.data.pagecount;
    wx.showLoading({
        title: "下拉刷新",
      });
      console.log(pagecount);
      setTimeout(function () {
        console.log("上拉刷新");
        wx.request({
          url: "https://abc.mmyxyz.xyz/msg/list",
          data: {
            type: "well",
            pages: pagecount,
            pagesize: "20",
          },
          success: function (res) {
            console.log(res.Data);
            pagecount = pagecount + 1;
            var length = that.data.list.length;
            wx.hideLoading()
            that.setData({
              list: that.data.list.concat(res.data.Data),
              pagecount: pagecount,
            });
            for (let i = length; i < that.data.list.length; i++) {
              that.setData({
                arr: that.data.arr.concat(that.data.list[i].msg_id),
                [`imgurl[${i}].im`]: that.data.url,
                [`imgurl[${i}].in`]: 0,
              });
            }
          },
        });
      }, 2000);
    }
    if (that.data.current != 0) {
      var pagecount1 = that.data.pagecount1;
      wx.showLoading({
        title: "加载更多中",
      });
      console.log(pagecount);
      setTimeout(function () {
        console.log("上拉刷新");
        wx.request({
          url: "https://abc.mmyxyz.xyz/msg/list",
          data: {
            type: "time",
            pages: that.data.pagecount1,
            pagesize: "20",
          },
          success: function (res) {
            pagecount1 = pagecount1 + 1;
            var length = that.data.list1.length;
            wx.hideLoading()
            that.setData({
              list1: that.data.list1.concat(res.data.Data),
              pagecount1: pagecount1,
            });
            for (let i = length; i < that.data.list1.length; i++) {
              that.setData({
                arr1: that.data.arr1.concat(that.data.list1[i].msg_id),
                [`imgurl1[${i}].im`]: that.data.url,
                [`imgurl1[${i}].in`]: 0,
              });
            }
          },
        });
      }, 1000);
    }
  },
  refresh: function (e) {
    var that = this;
    this.setData({
      loading: true
    })
    if (that.data.current == 0) {
      var pagecount = that.data.pagecount;
      console.log(pagecount);
      setTimeout(function () {
        console.log("上拉刷新");
        wx.request({
          url: "https://abc.mmyxyz.xyz/msg/list",
          data: {
            type: "well",
            pages: that.data.pagecount,
            pagesize: "20",
          },
          success: function (res) {
            if (res.Data) {
              pagecount = pagecount + 1;
              var length = that.data.list.length;
              that.setData({
                list: that.data.list.concat(res.data.Data),
                pagecount: pagecount,
              });
              for (let i = length; i < that.data.list.length; i++) {
                that.setData({
                  arr: that.data.arr.concat(that.data.list[i].msg_id),
                  [`imgurl[${i}].im`]: that.data.url,
                  [`imgurl[${i}].in`]: 0,
                });
              }
            }
          },
        });
      }, 1000);
    }
    if (that.data.current != 0) {
      var pagecount1 = that.data.pagecount1;
      // wx.showToast({
      //   title: "加载更多中",
      //   icon: "loading",
      // });
      console.log(pagecount1);
      setTimeout(function () {
        console.log("上拉刷新");
        wx.request({
          url: "https://abc.mmyxyz.xyz/msg/list",
          data: {
            type: "time",
            pages: that.data.pagecount1,
            pagesize: "20",
          },
          success: function (res) {
            if (res.Data) {
              pagecount1 = pagecount1 + 1;
              var length = that.data.list1.length;
              that.setData({
                list1: that.data.list1.concat(res.data.Data),
                pagecount1: pagecount1,
              });
              for (let i = length; i < that.data.list1.length; i++) {
                that.setData({
                  arr1: that.data.arr1.concat(that.data.list1[i].msg_id),
                  [`imgurl1[${i}].im`]: that.data.url,
                  [`imgurl1[${i}].in`]: 0,
                });
              }
            }
          },
        });
      }, 1000);
    }
    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 1600)
  },
  hijiancha: function (faultDate, completeTime) {
    var stime = Date.parse(new Date(faultDate));
    var etime = Date.parse(new Date(completeTime));
    var usedTime = etime - stime; //两个时间戳相差的毫秒数

    return usedTime;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var time = util.formatTime(new Date());
    time = time.slice(5, time.length - 3);
    time = time.replace("/", "-");
    console.log(time);
    console.log(app.reply_time);
    var that = this;
    var date = new Date();
    this.setData({
      refreshTime: date.toLocaleTimeString(),
      triggered: false,
    });
    console.log(this.hijiancha(app.reply_time, time));
    this.setData({
      msgtime: this.hijiancha(app.reply_time, time)
    });
    var that = this;
    wx.request({
      url: "https://abc.mmyxyz.xyz/msg/list",
      data: {
        type: "time",
        pages: "1",
        pagesize: "20",
      },
      success: function (res) {
        that.setData({
          list1: res.data.Data,
          USERID: app.USERID,
          REPLYNAME: app.username,
        });
        wx.request({
          url: "https://abc.mmyxyz.xyz/msg/list",
          data: {
            type: "well",
            pages: "1",
            pagesize: "20",
          },
          success: function (res) {
            that.setData({
              list: res.data.Data,
            });
            for (let i = 0; i < that.data.list1.length; i++) {
              that.setData({
                arr1: that.data.arr1.concat(that.data.list1[i].msg_id),
                [`imgurl1[${i}].im`]: that.data.url,
                [`imgurl1[${i}].in`]: 0,
                arr: that.data.arr.concat(that.data.list[i].msg_id),
                [`imgurl[${i}].im`]: that.data.url,
                [`imgurl[${i}].in`]: 0,
              });
            }
          },
        });
      },
    });
  },
  function () {
    var _this = this;
    wx.request({
      url: "https://abc.mmyxyz.xyz/msg/add",
      method: "POST",
      header: {
        "content-type": "application/json",
      },
      success: function (res) {
        self.setdata({
          proList: res.data,
        });
      },
    });
  },

  goback: function () {
    wx.navigateTo({
      url: "../zhuye/zhuye",
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */

  onShow: function () {
    this.setData({
      USERID: app.USERID,
      REPLYNAME: app.username,
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.reLaunch({
      url: "../liuyan/liuyan",
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */

  cm1(e) {
    this.setData({
      comment: e.detail.value,
    });
    var that = this;
    if (app.USERID == "" || app.username == "") {
      wx.showModal({
        title: "星火民大，点亮中华",
        content: "请先填写个人信息",
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
    } else {
      if (e.detail.value == "" && that.Data.REPLYNAME == "") {
        wx.showModal({
          showCancel: false,
          title: "星火民大，点亮中华",
          content: "评论不得为空",
        });
      } else {
        if (that.data.msgtime < 600000) {
          wx.showModal({
            showCancel: false,
            title: "星火民大，点亮中华",
            content: "你在十分钟前就已经评论过了!",
            success: function (res) {
              that.setData({
                comment: ""
              });
            },
          });
        } else {
          wx.showModal({
            title: "星火民大，点亮中华",
            content: "确定提交评论吗",
            success: function (res) {
              if (res.cancel) {
                //点击取消,默认隐藏弹框
              } else {
                //点击确定
                wx.request({
                  url: "https://abc.mmyxyz.xyz/msg/add",
                  method: "POST",
                  data: {
                    REPLYNAME: that.data.REPLYNAME,
                    USERID: that.data.USERID,
                    REPLYMSG: e.detail.value,
                  },
                  success: function (res) {
                    wx.showModal({
                      showCancel: true,
                      title: "星火民大，点亮中华",
                      content: "已成功提交评论，正在后台审核请稍后",
                      success: function () {
                        that.setData({
                          s1: false,
                          s2: true,
                        });
                        let arr = that.data.list1;
                        var time = util.formatTime(new Date());
                        time = time.slice(5, time.length - 3);
                        time = time.replace("/", "-");
                        var arr1 = {
                          college: app.college,
                          msg_id: 1,
                          replymsg: that.data.comment,
                          replytime: time,
                          replywell: 1,
                          replyname: app.username,
                        };
                        arr.unshift(arr1),
                          that.setData({
                            list1: arr,
                          }),
                          console.log(arr);
                      },
                    });
                    wx.request({
                        url: "https://abc.mmyxyz.xyz/msg/list",
                        data: {
                          type: "well",
                          pages: "1",
                          pagesize: "20",
                        },
                        success: function (res) {
                          that.setData({
                            list: res.data.Data,
                          });
                        },
                      }),
                      wx.request({
                        url: "https://abc.mmyxyz.xyz/msg/list",
                        data: {
                          type: "time",
                          pages: "1",
                          pagesize: "20",
                        },
                        success: function (res) {
                          that.setData({
                            list1: res.data.Data,
                          });
                        },
                      });
                    that.setData({
                      list: res.data.Data,
                    });
                  },
                });
              }
            },
          });
        }
      }
    }
  },
  doSomething() {
    app.$$data.username = "username";
    app.$$data.USERID = "USERID";
  },
  onbindfocus(e) {
    console.log(e);
    this.setData({
      bottom: e.detail.height,
    });
  },
  onReachBottom: function () {},
  f1() {
    this.setData({
      current: 0
    });
  },
  f2() {
    this.setData({
      current: 1
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  last1() {
    wx.navigateTo({
      url: "../../pages/contact/contact",
    });
  },
  liuyan() {
    this.setData({
      show: true,
      s1: true,
      s2: false,
    });
  },
  //changeBtnColor：监测输入，改变提交按钮状态
  changeBtnColor(e) {
    let content = e.detail.value,
      boolState = false;
    boolState = content.trim() !== "" ? true : false;
    this.setData({
      postBtnState: boolState,
    });
  },
  last(e) {
    wx.navigateTo({
      url: "../about/about",
    });
  },
  f5(e) {
    var id = e.currentTarget.dataset.id;
    var that = this;
    let arr = that.data.arr;
    let a = that.data.current;
    console.log(a);
    if (app.USERID == "") {
      wx.showModal({
        showCancel: false,
        title: "星火民大，点亮中华",
        content: "请先填写信息",
      });
    } else {
      if (a == 0 && this.data.imgurl[id].in == 0) {
        this.setData({
          [`imgurl[${id}].in`]: 1,
        });
        wx.request({
          url: "https://abc.mmyxyz.xyz/msg/well",
          data: {
            msgid: that.data.arr[id],
            userid: app.USERID,
          },
          success: function (res) {
            that.setData({
              [`imgurl[${id}].im`]: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/map/likeAct.png",
              [`list[${id}].replywell`]: that.data.list[id].replywell + 1,
            });
            wx.showToast({
              title: "您已成功点赞",
            });
          },
        });
      }
      if (a == 1 && this.data.imgurl[id].in == 1) {
        wx.showToast({
          title: "您已经点赞过了!",
        });
      }
      if (a == 1 && this.data.imgurl1[id].in == 0) {
        this.setData({
            [`imgurl1[${id}].in`]: 1,
          }),
          wx.showToast({
            title: "您已成功点赞",
          }),
          wx.request({
            url: "https://abc.mmyxyz.xyz/msg/well",
            data: {
              msg_id: that.data.arr1[id],
              userid: app.USERID,
            },
            success: function (res) {
              that.setData({
                [`imgurl1[${id}].im`]: "https://ks3-cn-beijing.ksyuncs.com/lingye-space/map/likeAct.png",
                [`list1[${id}].replywell`]: that.data.list1[id].replywell + 1,
              });
            },
          });
      }
      if (a != 0 && this.data.imgurl1[id].in == 0) {
        wx.showToast({
          title: "您已经点赞过了!",
        });
      }
    }
  },
});
onReachBottom: {
  wx.showNavigationBarLoading();

  setTimeout(function () {
    // complete
    wx.hideNavigationBarLoading(); //完成停止加载
    wx.stopPullDownRefresh(); //停止下拉刷新
  }, 1500);
}