// pages/demandList/demandList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    MatchingList:[]
  },
  getMsg: function (sSerTypeId){
    var that = this;
    var userInfo = wx.getStorageSync('userInfo');
    var token = userInfo.token;
    wx.request({
      url: app.globalData.url + '/TALENTS_CHAIN/skill/SkillController/list', //仅为示例，并非真实的接口地址
      data: {
        sSerTypeId: sSerTypeId
      },
      method: "post",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        "token": token // 默认值
      },
      success: function (res) {
        
        that.setData({
          MatchingList: res.data.obj
        })
      },
      error: function (err) {
        console.log(err);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.mbid);
    this.getMsg(options.mbid);
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