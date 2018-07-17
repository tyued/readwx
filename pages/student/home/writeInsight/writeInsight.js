// pages/student/home/writeInsight/writeInsight.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picUrl: [{index:'0', val: '', isshow: true, showdele: false},],
    picIndex:'10',
    title:'',//心得标题
    content:'',//心得内容
    picArr:[],//心得图片
    clickDele:false,
    userId:'',
    bookId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let that = this;
    that.setData({
      //userId:options.userId,
      bookId:options.bookId
    });
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
  addpic:function(event){//添加图片
    let that = this;
    let index = event.currentTarget.dataset.index;
    wx.showLoading({
      title: '加载中',
    })
    if (index<8){
      if (that.data.picUrl[index].val == ''){//添加图片
        wx.chooseImage({//添加图片
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            wx.hideLoading();
            if (res.tempFiles[0].size > 10240){
              wx.showToast({
                title: '图片不能超过10M',
                icon: 'none',
                duration: 2500
              })
              return;
            }
            let picarr = that.data.picUrl;
            let picUrlStr = "picUrl[" + index + "].val";
            let deleshow = "picUrl[" + index + "].showdele";
            console.log(res);

            if (picarr.length < 8) {//长度不超过9
              let itemData = { 'val': '', 'isshow': true, 'showdele': false };
              //if (that.data.picUrl[index].val == '') {//添加图片
                that.data.picUrl.push(itemData);
                that.setData({
                  [picUrlStr]: res.tempFilePaths[0],
                  [deleshow]: true,
                  picUrl: that.data.picUrl
                });
              // } else {//换图片
              //   that.setData({
              //     [picUrlStr]: res.tempFilePaths[0],
              //     [deleshow]: true
              //   });
              //}

            } else {//图片为9张
              that.setData({
                [picUrlStr]: res.tempFilePaths[0],
                [deleshow]: true
              });
            }
            that.data.picArr.push(res.tempFilePaths[0]);
          }
        })
      }else{//预览图片
        wx.previewImage({//预览图片
          current: '', // 当前显示图片的http链接
          urls: [that.data.picUrl[index].val] // 需要预览的图片http链接列表
        })
      } 
    }
  },
  save:function(){//保存
    var that = this;
    console.log(that.data);
    if(that.data.title == ''){
      wx.showToast({
        title: '　标题必填，内容和图片必填一项　',
        icon: 'none',
        duration: 2500
      })
      return;
    } 
    console.log(that.data);
    if (that.data.content == '' && that.data.picArr.length == 0) {
      console.log("uuuuuuuuuuuuuuu");
      wx.showToast({
        title: '　标题必填，内容和图片必填一项　',
        icon: 'none',
        duration: 2500
      })
      return;
    }
    that.commitInfo(2);

  }, 
  issure: function () {//发布
    var that = this;
    if (that.data.title == '') {
      wx.showToast({
        title: '　标题必填，内容和图片必填一项　',
        icon: 'none',
        duration: 2500
      })
    }
    if (that.data.content == '' && that.data.picArr.length == 0) {
      wx.showToast({
        title: '　标题必填，内容和图片必填一项　',
        icon: 'none',
        duration: 2500
      })
    }
    that.commitInfo(1);

  },
  getTitle: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  getContent:function(e){
    this.setData({
      content: e.detail.value
    })
  },
  deletePic:function(event){//删除图片

    var that = this;
    var index = event.currentTarget.dataset.index;
    let picarr = that.data.picUrl;
    picarr.splice(index,1);
    that.setData({
      picUrl: picarr
    });
    if (picarr[picarr.length-1].val != ''){
      let itemData = {'val': '', 'isshow': true, 'showdele': false };
      that.data.picUrl.push(itemData);
      that.setData({
        picUrl: that.data.picUrl
      });
    }
  },
  commitInfo:function(status){//提交心得
    let that = this;
    // 获取同学热读接口
    wx.request({
      url: app.SRC + 'ReadWX/AddOrUpdateComment',
      data: { SchoolCode: '1544', UserId: 123, ClassCode: 1, Title: that.data.title, Content: that.data.content, Pic: that.data.picArr.join("|"), BookId: that.data.bookId , Status: status },//that.data.userId  that.data.bookId
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
    });
  }

})