// pages/Allclassification/Allclassification.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publishSkillList:[],
    state:""
  },
  getMsg: function (){
    var that = this;
    var userInfo = wx.getStorageSync('userInfo');
    var token = userInfo.token;
    wx.request({
      url: app.globalData.url + '/TALENTS_CHAIN/demand/information/publishDemands', //仅为示例，并非真实的接口地址
      data: {
        
      },
      method: "post",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        "token": token // 默认值
      },
      success: function (res) {

        console.log(res.data.obj)
        that.setData({
          publishSkillList: res.data.obj
        })
      },
      error: function (err) {
        console.log(err);
      }
    })
  },
  classificationItem:function(event){
    //判断
    console.log(this.data.state);


    let sSerTypeId = event.currentTarget.dataset.id;
    let detail = event.currentTarget.dataset.detail;
    let name = event.currentTarget.dataset.name;

    if(this.data.state=="1"){
      wx.navigateTo({
        url: '../releaseService/releaseService?sSerTypeId=' + sSerTypeId + '&detail=' + detail + '&name=' + name
      })
    } else if(this.data.state == "2"){
      wx.navigateTo({
        url: '../releaseDemand/releaseDemand?sSerTypeId=' + sSerTypeId + '&detail=' + detail + '&name=' + name
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      state: options.state
    })
    console.log(options.state);
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