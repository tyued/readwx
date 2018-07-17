// pages/student/home/news/news.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    isTeacher:false,
    isStudent:false
  },
  tipsDetail:function(){
    let that = this;
    wx.navigateTo({
      url: "../tipsDetail/tipsDetail?teacher=" + that.data.isTeacher + "&student=" + that.data.isStudent
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    console.log(options);
    app.editTabBar(0); 
    if(options.teacher){
      that.setData({
        isTeacher:true,
        isStudent:false
      })
    }else{
      that.setData({
        isTeacher: false,
        isStudent: true
      })
    }
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

// "tabBar": {
//   "color": "#cccccc",
//     "selectedColor": "#5297f7",
//       "backgroundColor": "#ffffff",
//         "borderStyle": "black",
//           "list": [
//             {
//               "pagePath": "pages/student/home/home/home",
//               "text": "首页",
//               "iconPath": "/image/home.png",
//               "selectedIconPath": "/image/homeactive.png"
//             },
//             {
//               "pagePath": "pages/student/book/bookhome/bookhome",
//               "text": "书库",
//               "iconPath": "/image/book.png",
//               "selectedIconPath": "/image/bookactive.png"
//             },
//             {
//               "pagePath": "pages/student/challenge/challengehome",
//               "text": "挑战",
//               "iconPath": "/image/challenge.png",
//               "selectedIconPath": "/image/challengeactive.png"
//             },
//             {
//               "pagePath": "pages/student/mycenter/myhome/myhome",
//               "text": "我的",
//               "iconPath": "/image/my.png",
//               "selectedIconPath": "/image/myactive.png"
//             }
//           ]
// }