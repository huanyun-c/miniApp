// pages/skill_management/skill_management.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../img/banner@2x.png',
      '../img/banner@2x.png',
      '../img/banner@2x.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    nowCurrent:0,
    swiperIndex:0,
    screenMsg:true,
    state:true
  },
  swiperChange:function (event) {
    //改变
    this.setData({
      nowCurrent: event.detail.current
    })

  },
  screenMsg:function(){

    if (this.data.state == true){
      this.setData({
        screenMsg: false,
        state:false
      })
    }else {
      this.setData({
        screenMsg: true,
        state: true
      })
    }
    
  },
  screenLiChange:function(event){
    this.setData({
      nowCurrent: event.currentTarget.dataset.index,
      swiperIndex: event.currentTarget.dataset.index
    })
  },
  scrolltolower:() => {
    //调用ajax加载更多
  },
  getMsg:function(){
    

    console.log(app.globalData.url);
    var that = this;
    var userInfo = wx.getStorageSync('userInfo');
    var token = userInfo.token;
    console.log(token);
    wx.request({
      url: app.globalData.url + '/TALENTS_CHAIN/demand/information/getSkillsInformation', //仅为示例，并非真实的接口地址
      data: {
        nStatus:1,
        pageNum: 1
      },
      method: "post",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        "token": token // 默认值
      },
      success: function (res) {
        console.log(res.data.obj);
      },
      error: function (err) {
        console.log(err);
      }
    })
  },
  gotoDemandDetails:() => {
    wx.navigateTo({
      url: '../demand_details/demand_details'
    })
  },

  share(){
    console.log(1111)
    wx.navigateTo({
      url:'/pages/inviting_friends/inviting_friends'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMsg();
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})