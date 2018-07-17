// pages/student/mycenter/myhome/myhome.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabBar(3); 
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
  renderInfo:function(){//跳转到个人信息
    wx.navigateTo({
      url: '../info/info',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  renderChallenge:function(){//跳转到挑战证书
    wx.navigateTo({
      url: '../mychallenge/mychallenge',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  renderReadResult:function(){//跳转到阅读成果报告
    wx.navigateTo({
      url: '../readresult/readresult',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  renderDetailWrite:function(){//跳转到心得详情
    wx.navigateTo({
      url: '../detailWrite/detailWrite',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  rendermybook:function(){
    wx.navigateTo({
      url: '../bookrack/bookrack',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})