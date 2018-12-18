// pages/demand/demand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../img/banner2@2x.png',
      '../img/banner2@2x.png',
      '../img/banner2@2x.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    nowCurrent: 0,
    swiperIndex: 0
  },
  swiperChange: function (event) {
    //改变
    this.setData({
      nowCurrent: event.detail.current
    })

  },
  screenLiChange: function (event) {
    this.setData({
      nowCurrent: event.currentTarget.dataset.index,
      swiperIndex: event.currentTarget.dataset.index
    })
  },
  scrolltolower: () => {
    //调用ajax加载更多
  },
  gotoDemandDetails: () => {
    wx.navigateTo({
      url: '../demand_details/demand_details'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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