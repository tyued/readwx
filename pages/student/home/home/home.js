// pages/student/home/home/home.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList:[],
    classList:[]
  },
  myNews:function(){
    
    wx.navigateTo({
      url:"../news/news?student=" + true
    })
  },
    /**
     *    * 生命周期函数--监听页面加载
     *    */
  onLoad: function (options) {
    app.editTabBar(0);
    let that = this;
    // 获取同学热读接口
    wx.request({
      url: app.SRC + 'ReadWX/GetTextBookCollectionList',
      data: { SchoolCode: '1544' },
      method: 'GET',
      success: function (res) {
        console.log(res);
        if (res.data.State == '1') {
          that.setData({
            bookList: res.data.Value
          });
        } else {
          wx.showToast({
            title: res.data.Message,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    });
    // 获取班级动态接口
    wx.request({
      url: app.SRC + 'ReadWX/GetUserActionLogListByClassCode',
      data: { ClassCode: '1' },
      method: 'GET',
      success: function (res) {
        console.log(res)
        if (res.data.State == '1') {
          that.setData({
            classList: res.data.Value
          });
        } else {
          wx.showToast({
            title: res.data.Message,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    }) 
  },
      
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
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
  renderRise:function(){//跳转晋级页面
    wx.navigateTo({
      url: "../promotionRules/promotionRules"
    })
  },
  renderbillBoard:function(){//跳转风云榜
    wx.navigateTo({
      url: "../billBoard/billBoard"
    })
  },
  renderBookDetail:function(event){//跳转到书籍详情
    wx.navigateTo({
     url:'../bookDetail/bookDetail?Id='+ event.target.dataset.id
    })
  },
  rendermyhome:function(){
    wx.navigateTo({//挑战到我的
      url: '../../mycenter/myhome/myhome'
    })

  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: '学生首页',
      path: '/page/student/home/home/home'
    }
  }
})