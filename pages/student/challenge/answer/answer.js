// pages/student/challenge/answer/answer.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    touchDot:0,//触摸时的原点
    time:0,// 时间记录，用于滑动时且时间小于1s则执行左右滑动
    interval:"",// 记录/清理 时间记录
    nth:0,// 设置活动菜单的index
    nthMax:5,//活动菜单的最大个数
    tmpFlag:true,// 判断左右华东超出菜单最大值时不再执行滑动事件
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // wx.showModal({
    //   title: '温馨提示',
    //   content: '今日挑战次数已用完，请明日再试~',
    //   showCancel:false,
    //   confirmColor:"#5297f7",
    //   confirmText:'知道了',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

    let that = this;
    wx.request({
      url: app.SRC + 'ReadWX/GetExaminationBookQuestion',
      data: { SchoolCode: '1544', BookId: options.bookId, UserId: 123 },
      method: 'GET',
      success: function (res) {
        console.log(res);
        if (res.data.State == '1') {
         
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
  // 触摸开始事件
  touchStart: function (e) {
    let that = this;
    that.data.touchDot = e.touches[0].pageX; // 获取触摸时的原点
    // 使用js计时器记录时间  
    that.data.interval = setInterval(function () {
      that.data.time++;
    }, 100);
  },
  // 触摸移动事件
  touchMove: function (e) {
    let that = this;
    var touchMove = e.touches[0].pageX;
    console.log("touchMove:" + touchMove + " touchDot:" + that.data.touchDot + " diff:" + (touchMove - that.data.touchDot));
    // 向左滑动  
    //if (touchMove - that.data.touchDot <= -40 && that.data.time < 10) {
      //if (that.data.tmpFlag && that.data.nth < that.data.nthMax) { //每次移动中且滑动时不超过最大值 只执行一次
        // var tmp = this.data.menu.map(function (arr, index) {
        //   tmpFlag = false;
        //   if (arr.active) { // 当前的状态更改
        //     nth = index;
        //     ++nth;
        //     arr.active = nth > nthMax ? true : false;
        //   }
        //   if (nth == index) { // 下一个的状态更改
        //     arr.active = true;
        //     name = arr.value;
        //   }
        //   return arr;
        //})
        // this.getNews(name); // 获取新闻列表
        // this.setData({ menu: tmp }); // 更新菜单
      //}
    //}
    // 向右滑动
    // if (touchMove - touchDot >= 40 && time < 10) {
    //   if (tmpFlag && nth > 0) {
    //     nth = --nth < 0 ? 0 : nth;
    //     var tmp = this.data.menu.map(function (arr, index) {
    //       tmpFlag = false;
    //       arr.active = false;
    //       // 上一个的状态更改
    //       if (nth == index) {
    //         arr.active = true;
    //         name = arr.value;
    //       }
    //       return arr;
    //     })
    //     this.getNews(name); // 获取新闻列表
    //     this.setData({ menu: tmp }); // 更新菜单
    //   }
    // }
    // touchDot = touchMove; //每移动一次把上一次的点作为原点（好像没啥用）
  },
  // 触摸结束事件
  touchEnd: function (e) {
    // clearInterval(interval); // 清除setInterval
    // time = 0;
    // tmpFlag = true; // 回复滑动事件
  },
  renderdatika:function(){
    wx.navigateTo({
      url: '../datika/datika',
    })
  }
})