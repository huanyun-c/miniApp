//app.js
App({
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
   
    var msg;

    //获取openid
    var openid = wx.getStorageSync('openid');

    if(!openid){
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId

          console.log(res);
          wx.request({
            url: 'http://172.16.10.13:3001/getCode',
            data: {
              code: res.code
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            method: "post",
            dataType: "json",
            success: function (res) {
              msg = JSON.parse(res.data.res);
              console.log(msg.openid);

              wx.setStorageSync('openid', msg.openid);

              that.wxGetSet();
            },
            fail: function (err) {
              console.log(err);
            }
          })

        }
      })
    }else {
      that.wxGetSet();
    }
    


    
  },
  globalData: {
    userInfo: null,
    city:"北京",
    url:"http://120.79.227.88:8080"
  },
  wxLogin: function (openid, nickName, gender, avatarUrl){
    var that =this;

    wx.request({
      url: 'http://120.79.227.88:8080/TALENTS_CHAIN/checkLogin',
      data: {
        openId: openid,
        nickName: nickName,
        sex: gender,
        headDetail: avatarUrl,
        loginType:"2"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "post",
      dataType: "json",
      success: function (res) {
       
        if(res.data.res==200){
          //用户登陆信息存入stroage
          wx.setStorageSync('userInfo', res.data.obj);

          console.log("107"+res.data.obj)
        }

      },
      fail: function (err) {
        console.log(err);
      }
    })
  },
  wxGetSet:function(){
    var that = this;
    var openid = wx.getStorageSync('openid');
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              console.log(openid);

              that.wxLogin(openid, res.userInfo.nickName, res.userInfo.gender, res.userInfo.avatarUrl);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  }
})