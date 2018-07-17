// pages/student/mycenter/bookrack/bookrack.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isThisClass: true,
    isThisSchool: false,
    booknum:6,
    fade:false,
    isbottomfade:false,
    isG:true,
    activeG:false,
    ischeckAll:false,
    gAll:true
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
  switchClass: function () {//点击正在阅读
    this.setData({
      isThisClass: true,
      isThisSchool: false
    });
  },
  switchSchool: function () {//点击挑战已通过
    this.setData({
      isThisClass: false,
      isThisSchool: true
    });
  },
  chooseBook:function(){//选择书
    let that = this;
    if (that.data.isG){
      that.setData({
        isG: false,
        activeG: true,
        fade:false
      })
    }else{
      that.setData({
        isG: true,
        activeG: false,
        fade: true
      })
    }
    
  },
  edit:function(){//点击编辑
    let that = this;
    if(that.data.fade){
      this.setData({
        fade: false,
        isbottomfade: false
      });
    }else{
      this.setData({
        fade: true,
        isbottomfade: true
      });
    }
  },
  checkAll: function () {//点击全选
    let that = this;
    if (that.data.ischeckAll){
      that.setData({
        fade: true,
        ischeckAll: false,
        gAll: true
      });
    }else{
      that.setData({
        fade: false,
        ischeckAll: true,
        gAll: false
      });
    }
    
  },
  deleteAll:function(){//点击删除
    let that = this;
    that.setData({
      isThisClass: true,
      isThisSchool: false,
      booknum: 6,
      fade: false,
      isbottomfade: false,
      isG: true,
      activeG: false,
      ischeckAll: false,
      gAll: true
    });
  }
})