// pages/student/home/tipsDetail/tipsDetail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isfade:false, //是否显示遮罩层
    iscollect:true,//是否隐藏下拉箭头
    isTeacher:false,//是否从老师端进入
    isStudent:false//是否从学生端进入
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    console.log(options);
    if (options.teacher == 'true'){
      console.log("909hhhhhhhhhhhh");
      that.setData({
        isTeacher:true,
        isStudent: false,
        iscollect: false
      });
    }else{

      console.log("90909090909");
      that.setData({
        isTeacher: false,
        isStudent: true
        
      });
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
  
  },
  showfade:function(){//遮罩层的显示与隐藏
    
    this.setData({
      isfade:true
    })
    
  },
  collect:function(){//点击收藏
    this.setData({
      isfade: false,
      iscollect:false
    })
  },
  cancel:function(){
    this.setData({
      isfade: false
    })
  }
})