// pages/student/home/promotionRules/promotionRules.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[],
    into:false
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
    let that = this;
    wx.request({
      url: app.SRC + 'ReadWX/GetSchoolLevelListList', //仅为示例，并非真实的接口地址
      data: {
        SchoolCode:'1544'
      },
      success: function (res) {
        if (res.data.State == "1"){
          
          that.setData({
            dataList: res.data.Value,
            into:true
          });
          console.log(res.data)
        }else{
          wx.showToast({
            title: res.data.Message,
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
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