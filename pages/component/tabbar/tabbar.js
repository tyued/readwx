// Component({
//   properties: {
//     // 这里定义了innerText属性，属性值可以在组件使用时指定
//     innerText: {
//       type: String,
//       value: 'default value',
//     }
//   },
//   data: {
//     // 这里是一些组件内部数据
//     someData: {}
//   },
//   methods: {
//     // 这里是一个自定义方法
//     customMethod: function () { }
//   }
// })

//初始化数据
// function tabbarinit() {
//   return [
//     {
//       "current": 0,
//       "pagePath": "pages/student/home/home/home",
//       "iconPath": "/image/home.png",
//       "selectedIconPath": "/image/homeactive.png",
//       "text": "主页"
//     },
//     {
//       "current": 0,
//       "pagePath": "pages/student/book/bookhome/bookhome",
//       "iconPath": "/image/book.png",
//       "selectedIconPath": "/image/bookactive.png",
//       "text": "资讯"

//     },
//     {
//       "current": 0,
//       "pagePath": "pages/student/challenge/challengehome",
//       "iconPath": "/image/challenge.png",
//       "selectedIconPath": "/image/challengeactive.png",
//       "text": "分类"
//     },
//     {
//       "current": 0,
//       "pagePath": "pages/student/mycenter/myhome/myhome",
//       "iconPath": "/image/my.png",
//       "selectedIconPath": "/image/myactive.png",
//       "text": "购物"
//     }
//   ]

// }
//tabbar 主入口
// function tabbarmain(bindName = "tabdata", id, target) {
//   var that = target;
//   var bindData = {};
//   var otabbar = tabbarinit();
//   otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
//   otabbar[id]['current'] = 1;
//   bindData[bindName] = otabbar
//   that.setData({ bindData });
// }

// module.exports = {
//   tabbar: tabbarmain
// }

// pages/student/home/news/news.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabBar();
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