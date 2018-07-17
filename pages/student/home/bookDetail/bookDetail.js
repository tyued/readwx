// pages/student/home/bookDetail/bookDetail.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    handelvalue:'展开',
    isOpen:true,
    bookDetail:[],
    bookType: app.globalData.bookType,
    classType: app.globalData.classType
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabBar(0);
    let that = this;
    console.log(options);
    wx.request({
      url: app.SRC + 'ReadWX/TextBookInfo',
      data: { ID: options.Id, UserId:'123' },
      method: 'GET',
      success: function (res) {
        if (res.data.State == '1') {
          that.setData({
            bookDetail: res.data.Value
          });
        } else {
          console.log(res.data.Message)
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
  openText:function(){
    this.setData({
      handelvalue: !this.data.isOpen ? '展开':'收起',
      isOpen: !this.data.isOpen
    })
    //console.log(this.data.isOpen);
  },
  renderBookdetail:function(){//跳转到心得详情
     wx.navigateTo({
t
    })
    //console.log(this.data.isOpen);
  },
  renderBookdetail:function(){//跳转到心得详情
    wx.navigateTo({
      url: '../tipsDetail/tipsDetail',
    })
  },
  renderReadMore:function(e){//跳转到读书心得
    let that = this;
    wx.navigateTo({
      url: '../bookReview/bookReview?bookid=' + e.target.dataset.bookid + '&bookname=' + that.data.bookDetail.BookName,
    })
  }
})