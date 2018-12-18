// pages/releaseService/releaseService.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    textarea_num:0,
    tempFilePaths:[],
    textareaValue:"",
    sSerTypeId:"",
    price:"",
    serTypeValue:"",
    serTypeValueDetail:""
  },
  num_input: function (event){
    console.log(event.detail);
    this.setData({
      textarea_num: event.detail.cursor,
      textareaValue: event.detail.value      
    })

  },
  price_input: function (event){
    this.setData({
      price: event.detail.value
    })
  },
  openImage:function(){
    var that = this;
    wx.chooseImage({
      count: 1, 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          tempFilePaths: tempFilePaths
        })
        console.log(res);
      }
    })
  },
  uploadFileFun:function(){

    wx.showLoading({
      title: '提交中',
    })

    let tempFilePaths = this.data.tempFilePaths;
    console.log(tempFilePaths);
    let userInfo = wx.getStorageSync('userInfo');
    let token = userInfo.token;
    let sSerTypeId = this.data.sSerTypeId;
    let strInfo = this.data.textareaValue;
    let price = this.data.price;
    wx.uploadFile({
      url: app.globalData.url+'/TALENTS_CHAIN/skill/SkillController/publishService', 
      filePath: tempFilePaths[0],
      name: 'files',
      header:{
        'content-type': 'multipart/form-data',
        "token": token // 默认值
      },
      formData: {
        'sSerTypeId': sSerTypeId,
        "strInfo": strInfo,
        "strMode":2,
        "price": price
      },
      success: function (msg) {
        var data = msg.data;
        //do something

        console.log(data);

        let dataMsg = JSON.parse(data);

        console.log(dataMsg);
        if (dataMsg.res==200){

          wx.hideLoading();

          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 2000
          })
        }

        if (dataMsg.res == 201){
          wx.hideLoading();

          // wx.showToast({
          //   title: dataMsg.resMsg,
          //   icon: 'none',
          //   duration: 2000
          // })

          wx.showModal({
            title: '提示',
            content: dataMsg.resMsg,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      },
      fail:function(err){
        console.log(err);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(options);
    this.setData({
      sSerTypeId: options.sSerTypeId,
      serTypeValue: options.name,
      serTypeValueDetail: options.detail
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