// pages/demand_revoke_appeal/demand_revoke_appeal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'reason1', value: '对方未按照约定完成服务', checked: 'true' },
      { name: 'reason2', value: '双方已经沟通，同意取消' },
      { name: 'reason3', value: '需求发布错误，重新发布' },
      { name: 'reason4', value: '个人原因暂时不要此需求' },
    ],
    maxWordNumber:200,
    currentWordNumber:0
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * textarea 字数计算
   */
  wordsNum(e){
    var value = e.detail.value;
    var len = parseInt(value.length);
    this.setData({currentWordNumber:len})
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