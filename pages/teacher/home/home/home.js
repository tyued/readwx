// pages/teacher/home/home/home.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshowGrade: false,//全年级
    isshowType: false,//全部类型
    lastSemester: true,//上学期
    nextTerm: false//下学期
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.teacherTabBar(0); 
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
  
  },
  chooseGrade: function () {//点击全年级
    let that = this;
    that.setData({
      isshowGrade: !that.data.isshowGrade,
      isshowType: false,
    });
  },
  renderprogess:function(){//跳转到阅读进展
    wx.navigateTo({
      url: '../readProgess/readProgess',
    })
  },
  renderXinde:function(){//跳转到读书心得
    wx.navigateTo({
      url: '../readXinde/readXinde',
    })
  },
  myNews:function(){//跳转到我的消息
    wx.navigateTo({
      url: '../../../student/home/news/news?teacher=' + true,
    })
  },
  renderbillBoard:function(){//跳转到风云榜
    wx.navigateTo({
      url: '../billBoard/billBoard',
    })
  },
  rendermyhome:function(){
    wx.navigateTo({
      url: '../../mycenter/mycenter/mycenter',
    })
  }
})