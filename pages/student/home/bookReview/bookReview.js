// pages/student/home/bookReview/bookReview.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisClass:true,
    thisSchool:false,
    thisMy:false,
    bookDetail:[],//心得数据
    bookname:'',//书的名字
    empty:false,//是否显示空
    textCheck:'本班',
    bookId:'',//书本id
    userId:''//用户id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    app.editTabBar(0);
    that.setData({
      bookname: options.bookname,
      bookId: options.bookid
    });
    that.getExperiences();
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
  switchThisClass:function(){//本班心得
    this.setData({
      thisClass: true,
      thisSchool: false,
      thisMy: false,
      textCheck:'本班'
    });
    this.getExperiences();
  },
  switchThisSchool: function () {//本校心得
    this.setData({
      thisClass: false,
      thisSchool: true,
      thisMy: false,
      textCheck: '本校'
    });
    this.getExperiences();
  },
  switchThisMy: function () {//我的心得
    this.setData({
      thisClass: false,
      thisSchool: false,
      thisMy: true,
      textCheck: '我的'
    });
    this.getExperiences();
  },
  renderWrite:function(e){//跳转到新建心得
    console.log(e);
    wx.navigateTo({
      url: '../writeInsight/writeInsight?bookId=' + this.data.bookid + '&iserId=' + e.target.dataset.userid,
    })
  },
  getExperiences:function(){//获取心得列表
    let that = this;
    wx.request({
      url: app.SRC + 'ReadWX/GetCommentList',
      data: { SchoolCode: '', BookId: that.data.bookId, UserId: '123', ClassCode: 1, Page: "1", PageSize: "1000", IsSubSet: "1" },
      method: 'GET',
      success: function (res) {
        console.log(res);
        if (res.data.ResultCode == '1') {

          that.setData({
            bookDetail: res.data.Value.List,
            empty: res.data.Value.List.length == 0 ? true : false
          });
        } else {
          //console.log("rrrrrrrrrrrrrrrrr");
          //console.log(that.data.bookDetail);
          wx.showToast({
            title: res.data.ResultMessage,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})