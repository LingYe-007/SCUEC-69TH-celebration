
// pages/city/city.js
// 引入城市列表项
const app = getApp()
let cityList = require('./json');
 
Page({
 
  /**
   * 页面的初始数据
   */
	data: {
		searchCtiy:'',
		searchValue:'',
		toView:'',//用来做定位联动
		cityList:[],
		searchNav:[]
	},
 
//   获取输入的城市
	getCity:function(e){
		let searchValue = e.detail.value;
		this.setData({
			searchValue:searchValue
		})
	},
	// 传输要查找的城市
  	chooseCity:function(){
			var that=this;
		if(that.data.searchValue!=""){
		wx.showModal({
			title:"民大助力,点亮全国",
			content:"你已经成功选择国家!",
			success:function(){
				app.country=that.data.searchValue
			wx.switchTab({
				url: '../information/information'
			})}
		})}
		else{	wx.showModal({
			title:"民大助力,点亮全国",
			content:"请选择国家",
			success:function(){
		}
  	})}},
	//   获取城市的数据
	getCItyList(){
		let searchNav = this.data.searchNav
		for(let i in cityList.cityList){
			searchNav.push(cityList.cityList[i].title)
		}
		this.setData({
			cityList:cityList.cityList,
			searchNav:searchNav
		})
		console.log(this.data.cityList)
	},
	// 获取城市名称以及数据索引

	set(e){
		this.setData({
			searchValue:e.currentTarget.id
		}),
		app.country=this.data.searchValue
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getCItyList();
	},
	// 点击英文字母进行跳转到相应位置
	cityScroll(e){
		let index = e.currentTarget.dataset.index;
		this.setData({
			toView:`city${index}`
		})
		console.log(index)
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
 
	},
 
	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
 
	},
 
	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
 
	},
	set1:function(e){
		console.log(e.currentTarget.id)
		this.setData({
			searchValue:e.currentTarget.id
		})
		app.country=this.data.searchValue
	},
 
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
 
	}
})