// pages/accountbox/accountbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountArray: [
      {
        value:"100送5",
        money:"100"
      },
      {
        value: "200送12",
        money: "200"
      },
      {
        value: "500送35",
        money: "500"
      },
      {
        value: "1000送80",
        money: "1000"
      },
      {
        value: "2000送180",
        money: "2000"
      },
      {
        value: "5000送500",
        money: "5000"
      },
      {
        value: "10000送1100",
        money: "10000"
      }
    ],
    idx:3,
    moneyValue:''
  },
  chooseMoney:function(e){
    console.log(e.currentTarget.dataset.msg);

    this.setData({
      idx: e.currentTarget.dataset.id
    })

    //判断e.currentTarget.dataset.id==6,变成input

    event.detail = { value: value }
  },
  choose:function(){
    this.setData({
      idx: 7
    })
  },
  confirm:function(event){
    this.setData({
      moneyValue: event.detail.value
    })
    console.log(event.detail.value);
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