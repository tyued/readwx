// pages/student/challenge/challengehome.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshowGrade: false,//全年级
    isshowType: false,//全部类型
    lastSemester: true,//上学期
    nextTerm: false,//下学期
    bookLIst:[],//跳转书本列表
    class:1,//年级
    grade:1,//学期
    bookType: app.globalData.bookType
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    app.editTabBar(2); 
    wx.request({
      url: app.SRC + 'ReadWX/GetExaminationList',
      data: { SchoolCode: '1544', UserId: '123', Page: '1', PageSize: '10000', Class: that.data.class, Grade: that.data.grade,    IsHonor:'0'},
      method: 'GET',
      success: function (res) {
        if (res.data.ResultCode == '1') {
          if (res.data.Value != null){
            that.setData({
              bookList: res.data.Value.List
            });
          } 
        } else {
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
  chooseType: function () {//点击全部类型
    let that = this;
    that.setData({
      isshowType: !that.data.isshowType,
      isshowGrade: false
    });
  },
  selectSemesterTop: function () {//选择学期
    let that = this;
    that.setData({
      lastSemester: true,//上学期
      nextTerm: false
    });
  },
  goChallenge:function(event){//挑战
    let that = this;
    app.editTabBar(2);
    wx.request({
      url: app.SRC + 'ReadWX/IsHaveExamination',
      data: { SchoolCode: '1544', BookId: event.target.dataset.bookid, UserId:123},
      method: 'GET',
      success: function (res) {
        console.log(res);
        if (res.data.State == '1') {
          wx.navigateTo({
            url: '../answer/answer?bookId=' + '326c02db-6967-413f-910b-e6a4e8622524'//event.target.dataset.bookid
          })
        } else {
          wx.showToast({
            title: '今日挑战次数已用完，请明日再战~',
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