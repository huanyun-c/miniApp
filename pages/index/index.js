//index.js
const amapFile = require('../../libs/amap-wx.js');
let markersData = {
  latitude: '',//纬度
  longitude: '',//经度
  key: "316b46603f8c8fad675e0164c426d98b"//申请的高德地图key
};
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    topClass:false,
    cityClass:false,
    city: app.globalData.city,
    BannerList:[],
    nowCurrent:0,
    swiperIndex:0,
    MainButtonList:[
      {
        "mbId": "1",
        "urlDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "mbName": "钢琴私教"
      },
      {
        "mbId": "1",
        "urlDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "mbName": "交友"
      },
      {
        "mbId": "1",
        "urlDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "mbName": "代练"
      },
      {
        "mbId": "1",
        "urlDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "mbName": "APP开发"
      },
      {
        "mbId": "1",
        "urlDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "mbName": "家教"
      },
      {
        "mbId": "1",
        "urlDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "mbName": "宠物服务"
      },
      {
        "mbId": "1",
        "urlDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "mbName": "翻译"
      },
      {
        "mbId": "1",
        "urlDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "mbName": "全部"
      }
    ],
    ImmediateList:[
      {
        "headDetail":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "nickName":"达尔文",
        "age":30,
        "skills":"宠物服务"
      },
      {
        "headDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "nickName": "达尔文",
        "age": 30,
        "skills": "宠物服务"
      },
      {
        "headDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "nickName": "达尔文",
        "age": 30,
        "skills": "宠物服务"
      },
      {
        "headDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "nickName": "达尔文",
        "age": 30,
        "skills": "宠物服务"
      },
      {
        "headDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "nickName": "达尔文",
        "age": 30,
        "skills": "宠物服务"
      },
      {
        "headDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "nickName": "达尔文",
        "age": 30,
        "skills": "宠物服务"
      },
      {
        "headDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "nickName": "达尔文",
        "age": 30,
        "skills": "宠物服务"
      },
      {
        "headDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "nickName": "达尔文",
        "age": 30,
        "skills": "宠物服务"
      },
      {
        "headDetail": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "nickName": "达尔文",
        "age": 30,
        "skills": "宠物服务"
      }
    ],
    AdvertisingList:[
      
      
    ],
    deputyButtonList:[
      {
        urlDetail:"../img/qiandao.png",
        mbName:"签到"
      },
      {
        urlDetail: "../img/qiandao_1.png",
        mbName: "邀请好友"
      },
      {
        urlDetail: "../img/qiandao_1.png",
        mbName: "赚钱攻略"
      }
    ],
    MatchingList:[],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    containerImg:"../img/toutiao.png",
    icon_img:"../img/APP3@2x.png",
    sevice_person_headimg:"../img/map_4.png",
    minerImg:"../img/miner.png",
    screenBoxStatus:"2"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  screenLiChange: function (event) {
    this.setData({
      nowCurrent: event.currentTarget.dataset.index,
      swiperIndex: event.currentTarget.dataset.index
    })
  },
  swiperChange: function (event) {
    //改变
    this.setData({
      nowCurrent: event.detail.current
    })

  },
  chooseCity:function(){
    wx.navigateTo({
      url: '../switchcity/switchcity'
    })
  },
  loadInfo: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude//维度
        var longitude = res.longitude//经度
        // console.log(res);
        that.loadCity(latitude, longitude);
      }
    })
  },
  loadCity: function (latitude, longitude) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: markersData.key });
    myAmapFun.getRegeo({
      location: '' + longitude + ',' + latitude + '',//location的格式为'经度,纬度'
      success: function (data) {
        console.log(data[0]);

        that.setData({
          city: data[0].regeocodeData.addressComponent.city
        })
        app.globalData.city = data[0].regeocodeData.addressComponent.city;
        that.getIndexMsg();
      },
      fail: function (info) { 
        console.log(info);
      }
    });
  },
  showBigPic:function(e){
    var picArr = e.currentTarget.dataset.src;
    var idx = e.currentTarget.dataset.idx;

    console.log(idx)
    var picUrl=[];

    for(var i=0;i<picArr.length;i++){
      picUrl.push(picArr[i].photoDetail);
    }
    console.log(picUrl)
    wx.previewImage({
      current: picUrl[idx],
      urls: picUrl // 需要预览的图片http链接列表 // 当前显示图片的http链接
    })
  },
  scroll: function (e) {
    //console.log(e.detail);
    let top = e.detail.scrollTop;
    if(top > 50){
      this.setData({
        topClass:true,
        cityClass:true
      })
    }else {
      this.setData({
        topClass: false,
        cityClass:false
      })
    }

    if(top>750){
      this.setData({
        screenBoxStatus: "1"
      })
    }else {
      this.setData({
        screenBoxStatus: "2"
      })
    }
  },
  // scrolltolower:function(){
  //   this.setData({
  //     screenBoxStatus: "1"
  //   })
  // },
  // scrollView: function (e){
  //   let top = e.detail.scrollTop;
  //   if (top==0) {
  //     this.setData({
  //       screenBoxStatus: "2"
  //     })
  //   } 
  // },
  gotoStrategy:function(){
    wx.navigateTo({
      url: '../strategy/strategy'
    })
  },
  gotofeedback:function(){
    wx.navigateTo({
      url: '../feedback/feedback'
    })
  },
  gotoDemandList:function(event){
    console.log(event.currentTarget.dataset.mbid);
    if (event.currentTarget.dataset.mbid==999){
      wx.navigateTo({
        url: '../Allclassification/Allclassification'
      })
    }else {
      wx.navigateTo({
        url: '../demandList/demandList?mbid=' + event.currentTarget.dataset.mbid
      })
    }

  },
  gotoSearch:function(){
    wx.navigateTo({
      url: '../searchList/searchList'
    })
  },
  onLoad: function () {
    //获取存储的值
    var userInfo = wx.getStorageSync('userInfo');

    console.log(userInfo);
    this.setData({
      userInfo: userInfo
    })

    //获取定位
    this.loadInfo();
    
  },
  onShow: function () {
    this.setData({
      city: app.globalData.city
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getIndexMsg:function(){
    console.log(app.globalData.url);
    var that = this;
    var userInfo = wx.getStorageSync('userInfo');
    var token = userInfo.token;
    console.log(token);
    wx.request({
      url: app.globalData.url+'/TALENTS_CHAIN/home/information/findInformation', //仅为示例，并非真实的接口地址
      data: {
        // cname:null,
        pageNum:1
      },
      method:"post",
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        "token": token // 默认值
      },
      success: function (res) {
        console.log(res.data.obj);

        var objList = res.data.obj;
        var MatchingListBig = [];
        for(var i=0;i<objList.length;i++){
          if(objList[i].item==7){
            console.log(objList[i].MatchingList);
            MatchingListBig.push(objList[i].MatchingList);

          }
        }
        console.log(MatchingListBig);
        that.setData({
          BannerList: res.data.obj[0].BannerList,
          MainButtonList: res.data.obj[2].MainButtonList,
          ImmediateList: res.data.obj[3].ImmediateList,
          AdvertisingList: res.data.obj[4].AdvertisingList,
          deputyButtonList: res.data.obj[5].deputyButtonList,
          MatchingList: MatchingListBig


        })
      },
      error:function(err){
        console.log(err);
      }
    })
  }
})
