const app = getApp()
const util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideHeader: true,
    triggered:false,
    hideBottom: true,
    refreshTime: '', // 刷新的时间 
    loadMoreData: '加载更多……' ,
    reply:"",
    s1:false,
    reply:"刷新成功",
    test:'我太长了飒飒飒飒撒',
    activeIdx:0,
    like:123,
    door:0,
    current:0,
    imgurl:{},
    imgurl1:{},
    index:0,
    pinglun:"",
    item1:[{name:"法学院",value:"#FFB6C1"},{name:"文传院",value:"#FFA500"},{name:"美院",value:"#e05297"},{name:"民社院",value:"#E87A90"},{name:"外院",value:"#fa7f72"},{name:"经院",value:"#28abb9"},{name:"管院",value:"#34626c"},{name:"公管院",value:"#839b97"},{name:"教院",value:"#5c6e91"},{name:"马院",value:"#f05454"},{name:"计科院",value:"#87CEFA"},{name:"数统院",value:"#c3aed6"},{name:"电信院",value:"#8bcdcd"},{name:"生医院",value:"#b8de6f"},{name:"化材院",value:"#aa3a3a"},{name:"资环院",value:"#d2f5e3"},{name:"生科院",value:"#9ad3bc"},{name:"药院",value:"	#3CB371"},{name:"预科院",value:"#d6d2c4"},{name:"体院",value:"#FFB6C1"},{name:"音舞院",value:"#fccbcb"},{name:"继教院",value:"#686d76"},{name:"中研院",value:"#34626c"},{name:"研究生",value:"#87CEFA"},{name:"国教院",value:"#d2f5e3"},{name:"教职工",value:"#28abb9"}],
    arr:[],
    arr1:[],
    postBtnState:false,//提交按钮状态（颜色）
    url:`data:image/png;base64,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`,
    url1:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAM8ElEQVR4Xu2dbXITVxZA75PNxFIGyVnBmBWMs4LACsZZAeZfCqsKZwXACjBVMpV/MCuArACzAswKYlYQyySSKct6U62BMGPUX7f7PnX7Hf7y7n19z33H/a12wj8IQCCVgIMNBCCQTgBBWB0QyCCAICwPCCAIawACOgLsQXTciIqEAIJE0mjK1BFAEB03oiIhgCCRNJoydQQQRMeNqEgIIEgkjaZMHQEE0XEjKhICCBJJoylTRwBBdNyIioQAgkTSaMrUEUAQHTeiIiGAIJE0mjJ1BBBEx42oSAggSCSNpkwdAQTRcSMqEgIIEkmjKVNHAEF03IiKhACCRNJoytQRQBAdN6IiIYAgkTSaMnUEEETHjahICCBIJI2mTB0BBNFxIyoSAggSSaMpU0cAQXTciIqEAIJE0mjK1BFAEB03oiIhgCCRNJoydQQQRMeNqEgIIEgkjaZMHQEE0XEjKhICCBJJoylTRwBBdNyIioQAgkTSaMrUEUAQHTeiIiGAIJE0mjJ1BBBEx42oSAggyCobvS+b/Vn3rnjZck62q2yK9+5EnJx4L8cfDie/VslF7BcCCLKK1ZCIcdF96JzbN5r+1IscnK1PnsqBnBrNEUVaBAnc5o2fNra+WXOvxbkt86m9P7l0/t4fo/Mj87mu6QQIErKx+7I5uOi9loqHU2U3eT6f3/vw7PxF2TjGiyBIwFXQH3YPnLgHAaf8ayok0VFHEB230lHf3r+xvd658bZ0YI0Bs/nF938+uziuMeW1T4UggVo8GHZfi7jbS6fzMhbnqy9c77bFySC9JH80Hk3vBCr5WkyDIAHaePP+xm6n03meNpUXeXw2mjyqvCmLq2O9A+fkblquS5nf4aS9OGkEKc5KNzI5MZ/1fhORzeV7D/9+fDit9YrWYNg9EnE/LJvPi396NppaXV7WMWpwFIIYN6e/13sR+i/64lLyeieRcsk//2Y8mi4/1DNm0cb0CGLYtb8PN26vSed16qGVl3+fHU52LTZhMOwl5zT//Cq39yfjw+ktizmvY04EMezqYK/3NvWeh5fx+MZky+pOd9Zh1ng0oe8F+w6ogqDKDuvvdfedc0/S9x7+57PD6UHZvEXHp8qZiHk4WX4+VDR5ROMQxKDZn84BknseaQvx3Xg0qfRwYtZmcw5SX1MRpD6Wf2UaDLsvRdxOWmrrS61Zey+uYpVrOIKU45U7OvfEPMBl1qxzn7nIjx9Gk1e5hTBgQQBBal4Ig73ub6lP6hqfmCelZB9eiXCCXq7hCFKOV+bo/rD3yIk8TBsU4oHBrLv23vtfzw6nqYd+NaK4NqkQpKZW5v3lFglzg66/133lnPvXsrJCCFoTzsakQZCaWpH5MKKIBHmS9r+PtfyeVtJ4ffKd1X2XmjA2Lg2C1NCSm8PeTkfkZVqq2h5GzNlWDq9qaOaVFAhSleniLcHu2/QTc/9+fGO6HeIvN4dXVZv5dTyCVGSa95ZgsMuqHF5V7OTycASpgDX/LcEwJ+ZJCTnvnJjeua+AsPGhCFKhRXkn5h9n81vnv5yfVJiicGjWY/Xe2z73VXgjWzgQQZRNy30Ysa63BAtu32C4uHq19NmvkKIW3NzWDEMQTatW8JZg1mbmXEXj8ErT408xCKKAt4q3BLM2k8MrRRMLhiBIQVCfh+U+jLiCxzk4vCrZxBLDEaQErGRo3luCHy/n26FOzBdXr7JvUnJ4VbK/V4cjSAmAeQ8jruJqUdZ9GN79KNHclKEIUpDhqt8STNvMrMfrgzz/VZBfW4chSMHOrfotwWWbmXmj0tf/e1sFUV2rYQhSoJ35J+Z2P9+TefUq48ewObwq0NgCQxAkD1Luw4i2P9+TtXkcXuU1r/r/I0gOwyaemCebzOFV9cVfJAOCZFBqyluCyzYxS1xv+IuNRRbVdRqDIBndzHsYcZVXibLungd7xP46mcBl3nLdzH9LcLW/kp7606L8cmK5RueMbvUeJDkOd2trGR+MSa/eX16OU7+2lPsw4upOzD9XlLEHOR2vT26FeIOx1pXY0GTtEmTxXfHeA+f9bvWvxKa/zJT7lmADPoqZ+bi994tvpq9ozZ16ccfez08uLuVNyMduLOptjSCfDnmSrzTV9MPLywVp0luCWQ3P306L5aLJ6Y8uxT9u61etWiFI3ifMNG1L+52qrB8+SOZp0stHWZ840DGxjPJH4/Xpj2079Gu8IAWegVJ2dfkeJPvzZTV9S1C5xVfDFmzWOsfZH+6sabJ60pzO5hd32vSl3cYLkvdykr5v5QVp4g+vLQ613I0jJNGvhKzIZguS81M21ZAoBGnol5mSPcnf1txB2k+OVuNkEt2aK22NFiTvIcFqrbs+gnzm8EmUHXFu04lf3Yc6c7/XLtKWu/2NFiTnl0PefZzNd/IuIw6GPb9cpOsnSLU/GPVGLy6suM5B1qHfKp9EKFptswXJ+JxA0V8qR5CiS6H+cXnnR23Yi7RWkKKfMUOQ+hd+mYyZh8kt+CQ1glzpNp9PLrP8i41N/WZ7qM9CFNvMpaMQBEEqLJ9ioVmP5hc9Eig2U/2jEARB6l9VVzLmfLfE9HvxVYtDEASpuoZy47POQ0J9XCh3I1MGIAiCaNdO4TgEKYyq3MA6jl25ilWOucVoBLGgKiIIYgQ2cFoEMQKOIEZgA6dFECPgCGIENnBaBDECjiBGYAOnRRAj4AhiBDZwWgQxAo4gRmADp0UQI+AIYgQ2cFoEMQKOIEZgA6dFECPgCGIENnBaBDECjiBGYAOnRRAj4AhiBDZwWgQxAo4gRmADp0UQI+AIYgQ2cFoEMQKOIEZgA6dFECPgCGIENnBaBDECjiBGYAOnRRAj4AhiBDZwWgQxAo4gRmADp0UQI+AIYgQ2cFoEMQKOIEZgA6dFECPgCGIENnBaBDECjiBGYAOnRRAj4AhiBDZwWgQxAo4gRmADp0UQI+AIYgQ2cFoEMQKOIEZgA6dFECPgCGIENnBaBDECjiBGYAOnRRAj4AhiBDZwWgQxAo4gRmADp0UQI+AIYgQ2cFoEMQKOIEZgA6dFECPgCGIENnBaBDECjiBGYAOnRRAj4AhiBDZwWgQxAo4gRmADp0UQI+AIYgQ2cFoEMQKOIEZgA6dFECPgCGIENnDam/c3djudzvNl03qRx2ejyaPAm1R4Old45AoGIsgKoBtMmdVH7/3PZ4fTA4Npa0mJIFcwDobdIxH3wzK649Gk0bxqWREGSfrD7oET92BZ6kuZ3/ljdH5kMG0tKRvdcPYgtfR45Umy/uggSIX2IEgFeE0J3ZfNwaz3e9rmNH2vzB6EQyxTlbJO0EXk3Xg02TbdgIrJEQRBKi6h7PDBsPtaxN1u4xWsZJsRBEHMBMm6/5FMOptffP/ns4tjsw2oITGCIEgNy2h5isFe9zdxbitlgsYfXrEHGU2/2vVzmbceX/p7vefOyW5atvl8fu/Ds/MX9cxml4U9CHuQ2ldXf6+775x7kprY+/fjw2nanqX27amSEEEQpMr6+Sq2P+w9dCKZj440/d7H/xaFIAhSjyD7stm/6D3JOqxKJvLin56Npvv1TGqfBUEQpPIq6w+7D5y4ZK+xmZPs3Xh9clsO5LTypIESNFuQjGPZon+JBsOeX87Svxlzkq5eZt/ev7G95tbvOpGdjCtVX/J7Gc/8xe2mX9a9CqTRguRdRxfxBR5yW36TSqS8IMXmU6+5FgWmMU0poaVyNP4yr+Q8x1NtRWkEqTZjlNEtlqP5gohIf6/3wjm5W//iQpD6mX6V8d3H2Xzn/JfzkwBzmUzR6EOspOKNnza2vlnrHIuTQb0EEKRenv+frelvChatvfGCJIXcHPZ2OiIvixZVbByCFONUdpR/M5vP9tt2Mp5WZSsESTZ+ccLuO6/q25MgSNmlnzrey9iLvJq7+Ysmvx2oqbc1giyKS25GzXr7zvtdce4fmoK/xCBIVX5e5NiLO/qwPjlq072NMnW3S5ArlSXX4l1nLe/m1FIefn55uuwwoErOMuDbODaNWRtrKbrNrRakaJGMg4CWAIJoyREXBQEEiaLNFKklgCBacsRFQQBBomgzRWoJIIiWHHFREECQKNpMkVoCCKIlR1wUBBAkijZTpJYAgmjJERcFAQSJos0UqSWAIFpyxEVBAEGiaDNFagkgiJYccVEQQJAo2kyRWgIIoiVHXBQEECSKNlOklgCCaMkRFwUBBImizRSpJYAgWnLERUEAQaJoM0VqCSCIlhxxURBAkCjaTJFaAgiiJUdcFAQQJIo2U6SWAIJoyREXBQEEiaLNFKklgCBacsRFQQBBomgzRWoJIIiWHHFREECQKNpMkVoCCKIlR1wUBBAkijZTpJYAgmjJERcFAQSJos0UqSWAIFpyxEVBAEGiaDNFagkgiJYccVEQQJAo2kyRWgIIoiVHXBQEECSKNlOklsB/AB7F4kFTqln5AAAAAElFTkSuQmCCIRBP2cjD8mtAe/6qmbVAVH7+2GrohwsUAhmOpz5cVXx7+4wkWAtkG+AUZ0yHQJwlJAOODkfpkFQ1sxaI6hP9qBr64QKFQIbjyftVTw62t2s7UzWzFsiawJXV0A8XKAQyHE/erzoX2Lw2SGuBLAPcWnsSk8QLgThLSEc45u3VhsFhLZDXAQ8ME7jiNakC8VpCtSJlLkMtBtxTG5m1QFSC5fHak4g7iDPG7eE8CCxk73Zyj9YCUURvZ0JS7yCx1WTydVP7CnWu1SNWdSshkEcGh1mqT2acgCEQL5nojmMz4Lzuw7uPLCEQPScu2h2S+cgQiDmlVR3qiUTVS/SZt7qVEIjOCa9YfSbjBwyBOEpGByiqe6X6V02shEAuA9RQ0YuFQLxkohuOz7Ss+VxCIGcDW3TjosioEEgRWqs51dPIjdWizRCohEBOBLZvNaEx4oZAHCUjEcpfWxcBKSGQo4FPJhJR8vIQSEl2y/o+Gfhg2RATey8hEFXb/nzLSc0QOwTiKBmJULYFTk0cY3p5CYHsCnzFFGWes1SBRNGGPL4tR88HPGzpMNVXCYF8CDgpFUjB61MFEnuxCiYjwbV+GNQPhE2thEA0qXOazurFwVMFEncQH8n7gIeGTCUEsnbppiaJ+UsVSOzFSiS4wOWPDb5eFe39MQzuEgJZDrhpmOCVrkkVSNxBKiVmgjD6ErpHexi2DXSmzWcR4F4PkxtgSBXIhcA7HeGfilCqlRadjNwSd5C5gL9NFrji31MFog8M+tAQ1oYBFy/n06ZeQiDqD1L1YP0keUwVyI7AN9usjYgKLOvp2HYJgSjLanCiLcoeLFUgqtynY8Ov8AB+imHQ109P+/hMm3hOn8v7albgNr6DyN1ewOFTbHF6mG7TjYljEVDqDnLz4FbpgfTUO8g0zPGDYd3sqTPA++uGnDxaKYFcBGw4efgqV6wOXN0h0msHTSIX6DA2hqQx8MSgM9kf04aVv7qUQDy1Qeh6BxH7qqRxAaB6X2HlGNgF+EY59909lxLIDoAanXgwLe7bMoHsBqhw8hyZfmL4SxlQqdpNvRJTSiCar4eOt8KgRyULU9vhfYA9LZyFj+cYuAXQHb5JQYZhclBSICsBlwL64bCV6bCNDt1Ymj4Dq8uRXiibFROwnFAjX2rCqVrO+ifm1koKRJPWf2/919VC0g9Atexy4FDgksIBNb+tAZXl1x1mXmDpwjH77l7doY4fPLK6vXNMI7m0QKZPpjqTvqFwdp8C7gS0G7SVzQYsD8zSCoDjuCpLq7JQvbGaAukNKQE0GGhxBwnWg4HeMRB3kN6lLADXZCAEUpPtiNU7BkIgvUtZAK7JQAikJtsRq3cMhEB6l7IAXJOBEEhNtiNW7xgIgfQuZQG4JgMhkJpsR6zeMRAC6V3KAnBNBkIgNdmOWL1j4H9vHFbnBXRf5wAAAABJRU5ErkJggg==`,
    show:false,
    s2:true,
    pagecount:2,
    pagecount1:2,
  },
  loadMore:function(){
    var that=this;
    if(that.data.current==0){
    var pagecount=that.data.pagecount
    wx.showToast({
      title: '加载更多成功',
      icon: 'none'
    })
    console.log(pagecount)
    setTimeout(function(){
      console.log('上拉刷新');
      wx.request({
        url: 'https://api.pomelo072.top/msg/list',
        data:{
          type:"well",
          pages:pagecount,
          pagesize:"20"
        },
        success:function(res){
          console.log(res.Data)
          pagecount=pagecount+1
          var length=that.data.list.length
      that.setData({
        list:that.data.list.concat(res.data.Data),
        pagecount:pagecount
      })
      for(let i=length;i<that.data.list.length;i++){
        that.setData({
          'arr':that.data.arr.concat(that.data.list[i].msg_id),
          [`imgurl[${i}].im`]:that.data.url,
          [`imgurl[${i}].in`]:0
      })}
    }})
    }
    ,1000);}
   if(that.data.current!=0){
      var pagecount1=that.data.pagecount1
      wx.showToast({
        title: '加载更多成功',
        icon: 'none'
      })
      console.log(pagecount)
      setTimeout(function(){
        console.log('上拉刷新');
        wx.request({
          url: 'https://api.pomelo072.top/msg/list',
          data:{
            type:"time",
            pages:that.data.pagecount1,
            pagesize:"20"
          },
          success:function(res){
            pagecount1=pagecount1+1
            var length=that.data.list1.length
        that.setData({
          list1:that.data.list1.concat(res.data.Data),
          pagecount1:pagecount1
        })
        for(let i=length;i<that.data.list1.length;i++){
          that.setData({
            'arr1':that.data.arr1.concat(that.data.list1[i].msg_id),
            [`imgurl1[${i}].im`]:that.data.url,
            [`imgurl1[${i}].in`]:0
        })}
      }})
      }
      ,1000);
   }
   
  },
  refresh: function(e){
    var that=this;
    if(that.data.current==0){
    var pagecount=that.data.pagecount
    wx.showToast({
      title: '加载更多成功',
      icon: 'none'
    })
    console.log(pagecount)
    setTimeout(function(){
      console.log('上拉刷新');
      wx.request({
        url: 'https://api.pomelo072.top/msg/list',
        data:{
          type:"well",
          pages:that.data.pagecount,
          pagesize:"20"
        },
        success:function(res){if(res.Data){
          pagecount=pagecount+1
          var length=that.data.list.length
      that.setData({
        list:that.data.list.concat(res.data.Data),
        pagecount:pagecount
      })
      for(let i=length;i<that.data.list.length;i++){
        that.setData({
          'arr':that.data.arr.concat(that.data.list[i].msg_id),
          [`imgurl[${i}].im`]:that.data.url,
          [`imgurl[${i}].in`]:0
      })}}
    }})
    }
    ,1000);}
   if(that.data.current!=0){
      var pagecount1=that.data.pagecount1
      wx.showToast({
        title: '加载更多成功',
        icon: 'none'
      })
      console.log(pagecount1)
      setTimeout(function(){
        console.log('上拉刷新');
        wx.request({
          url: 'https://api.pomelo072.top/msg/list',
          data:{
            type:"time",
            pages:that.data.pagecount1,
            pagesize:"20"
          },
          success:function(res){if(res.Data){
            pagecount1=pagecount1+1
            var length=that.data.list1.length
        that.setData({
          list1:that.data.list1.concat(res.data.Data),
          pagecount1:pagecount1
        })
        for(let i=length;i<that.data.list1.length;i++){
          that.setData({
            'arr1':that.data.arr1.concat(that.data.list1[i].msg_id),
            [`imgurl1[${i}].im`]:that.data.url,
            [`imgurl1[${i}].in`]:0
        })}}
      }})
      }
      ,1000);
   }
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
    time=time.slice(5,time.length-3)
    time=time.replace("/","-");
    console.log(time)
    console.log(app.reply_time)
    var that=this;
    var date = new Date();
    this.setData({  
      refreshTime: date.toLocaleTimeString(),
      triggered:false
    })
    console.log(this.hijiancha(app.reply_time,time))
    this.setData({msgtime:this.hijiancha(app.reply_time,time)})
    var that=this;
    wx.request({
      url: 'https://api.pomelo072.top/msg/list',
      data:{
        type:"time",
        pages:"1",
        pagesize:"20"
      },
      success:function(res){
    that.setData({
      list1:res.data.Data,
      USERID:app.USERID,
      REPLYNAME:app.username,
    })
    wx.request({
      url: 'https://api.pomelo072.top/msg/list',
      data:{
        type:"well",
        pages:"1",
        pagesize:"20"
      },
      success:function(res){
    that.setData({
      list:res.data.Data,
    })
    for(let i=0;i<that.data.list1.length;i++){
      that.setData({
        'arr1':that.data.arr1.concat(that.data.list1[i].msg_id),
        [`imgurl1[${i}].im`]:that.data.url,
        [`imgurl1[${i}].in`]:0,
        'arr':that.data.arr.concat(that.data.list[i].msg_id),
        [`imgurl[${i}].im`]:that.data.url,
        [`imgurl[${i}].in`]:0
    })}
  }})
  
  }})
    },
    function(){
      var _this = this
      wx.request({
        url: 'https://api.pomelo072.top/msg/add',
        method: "POST",
        header: {
          "content-type": "application/json"
        },
        success: function (res) {
          self.setdata({
            proList: res.data
          })
        }
    })
  },
  
  goback:function(){
    wx.navigateTo({
      url: '../zhuye/zhuye',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


  /**
   * 生命周期函数--监听页面显示
   */
  
  onShow: function () {
    
    this.setData({
      USERID:app.USERID,
      REPLYNAME:app.username,
    })
},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.reLaunch({
      url: '../liuyan/liuyan',
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  
  cm1(e){
    this.setData({
      comment:e.detail.value
    })
    var that=this;
  if(app.USERID=="" || app.username==""){
      wx.showModal({
        title:"星火民大，点亮中华",
        content:"请先填写个人信息",
        success:function(res){
          if(res.confirm){
            wx.switchTab({
              url: "/pages/information/information",
            }),
             console.log('弹框后点取消')
          }
          else{
             console.log('弹框后点取消')
          }}
       })
  }
 else{ 
  if(e.detail.value=="" &&that.Data.REPLYNAME=="")
  { wx.showModal({
    showCancel:false,
   title:"星火民大，点亮中华",
   content:"评论不得为空",
  })}
   else{
     if(that.data.msgtime<600000){
       wx.showModal({
        showCancel:false,
        title:"星火民大，点亮中华",
        content:"你在十分钟前就已经评论过了!",
        success:function(res){ that.setData({   comment:""})}
       })
     }
     else{
       wx.showModal({ title:"星火民大，点亮中华",
       content:"确定提交评论吗",
       success:function (res) {
        if (res.cancel) {
           //点击取消,默认隐藏弹框
        } else {
           //点击确定
           wx.request({
            url: 'https://api.pomelo072.top/msg/add',
            method:"POST",
            data: {
              REPLYNAME:that.data.REPLYNAME,
              USERID:that.data.USERID,
              REPLYMSG:e.detail.value
            },
            success:function(res){
              wx.showModal({ showCancel:true,
               title:"星火民大，点亮中华",
               content:"已成功提交评论，正在后台审核请稍后",
               success:function(){that.setData({
                s1:false,
                s2:true,
               })
               let arr=that.data.list1
               var time = util.formatTime(new Date());
               time=time.slice(5,time.length-3);
               time=time.replace("/","-");
               var arr1={college:app.college,msg_id:1,replymsg:that.data.comment,replytime:time,replywell:1,replyname:app.username};
               arr.unshift(arr1),
               that.setData({
                 list1:arr
               }),
               console.log(arr)
              }
              })
              wx.request({
                url: 'https://api.pomelo072.top/msg/list',
                data:{
                  type:"well",
                  pages:"1",
                  pagesize:"20"
                },
                success:function(res){
        
              that.setData({
                list:res.data.Data,
              })
            }}),
              wx.request({
                url: 'https://api.pomelo072.top/msg/list',
                data:{
                  type:"time",
                  pages:"1",
                  pagesize:"20"
                },
                success:function(res){
              that.setData({
                list1:res.data.Data,
              })
            }})
          that.setData({
            list:res.data.Data,
          })
        
        }})
        }
     },
      })
  }}}},
  doSomething(){
    app.$$data.username="username";
      app.$$data.USERID="USERID";
  },
  onbindfocus(e) {
    console.log(e)
    this.setData({
        bottom: e.detail.height,
    })
},
  onReachBottom: function () {

  },
  f1(){
this.setData({current:0})
  },
  f2(){
this.setData({current:1})
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  last1(){
    wx.navigateTo({
      url: '../../pages/contact/contact',
    })
  },
  liuyan(){
    this.setData({
      show:true,
      s1:true,
      s2:false
    })
  },
  //changeBtnColor：监测输入，改变提交按钮状态
  changeBtnColor(e){
    let content = e.detail.value,
        boolState = false;
    boolState = (content.trim()) !== '' ? true : false;
    this.setData({
      postBtnState:boolState
    })
  },
  last(e){
    wx.navigateTo({
      url: '../about/about',
    })
  },
  f5(e){
    var id =e.currentTarget.dataset.id;
    var that=this;
    let arr=that.data.arr;
    let a=that.data.current;
    console.log(a)
    if(app.USERID==""){
    wx.showModal({
      showCancel:false,
      title:"星火民大，点亮中华",
      content:"请先填写信息"
    })}
    else{
    if(a==0&&this.data.imgurl[id].in==0){
      this.setData({
        [`imgurl[${id}].in`]:1
      })
    wx.request({
      url: 'https://api.pomelo072.top/msg/well',
      data:{
        msgid:that.data.arr[id],
        userid:app.USERID
      },
      success:function(res){
    that.setData({
      [`imgurl[${id}].im`]:'../../images/like.png',
      [`list[${id}].replywell`]:that.data.list[id].replywell+1
    })
    wx.showToast({
      title: '您已成功点赞',
    })
  }})}
  if(a==1&&this.data.imgurl[id].in==1){
    wx.showToast({
    title: "您已经点赞过了!",
  })}
  if(a==1&&this.data.imgurl1[id].in==0){
    this.setData({
      [`imgurl1[${id}].in`]:1
    }),
    wx.showToast({
      title: '您已成功点赞',
    }),
    wx.request({
    url: 'https://api.pomelo072.top/msg/well',
    data:{
      msg_id:that.data.arr1[id],
      userid:app.USERID
    },
    success:function(res){
  that.setData({
    [`imgurl1[${id}].im`]:'../../images/like.png',
    [`list1[${id}].replywell`]:that.data.list1[id].replywell+1
  })
}})}
if(a!=0&&this.data.imgurl1[id].in==0){ wx.showToast({
  title: "您已经点赞过了!",
})}
}}
})
onReachBottom:{
  wx.showNavigationBarLoading() 

  setTimeout(function()
{
// complete
wx.hideNavigationBarLoading() //完成停止加载
wx.stopPullDownRefresh() //停止下拉刷新

},1500);
}
