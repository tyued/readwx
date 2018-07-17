// pages/student/book/bookhome/bookhome.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshowGrade:false,//全年级
    isshowType:false,//全部类型
    lastSemester:true,//上学期
    nextTerm:false,//下学期
    isGrade:false,//是否有上下学期
    bookType: app.globalData.bookType,//书的类型
    classType: app.globalData.classType,//班级
    checkClass:0,//选中的班级
    checkGrade:1,//选中的学期
    checkBook:0,//选中的书类型
    allClass:true,//全年级是否选中
    allType:true,//全部类型是否选中
    bookList:[],//书的列表
    empty:false//无数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabBar(1); 
    let that = this;
    wx.request({//判断是否有下学期
      url: app.SRC + 'ReadWX/GetSchoolInfo',
      data: { SchoolCode: '1544'},
      method: 'GET',
      success: function (res) {
        //console.log(res);
        if (res.data.State == '1') {
            that.setData({
              isGrade: res.data.Value.HaveTerm == '0' ? true : false
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

    that.getbookList(that.data.checkClass, that.data.checkGrade, that.data.checkBook);
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
  chooseGrade:function(){//点击全年级
    let that = this;
    that.setData({
      isshowGrade: !that.data.isshowGrade,
      isshowType: false,
    });
  },
  chooseType:function(){//点击全部类型
    let that = this;
    that.setData({
      isshowType: !that.data.isshowType,
      isshowGrade:false
    });
  },
  selectSemesterTop:function(){//选择学期
    let that = this;
    that.setData({
      lastSemester: true,//上学期
      nextTerm: false,
      checkGrade:'1'
    });
  },
  selectSemesterNext: function () {//选择学期
    let that = this;
    that.setData({
      lastSemester: false,//下学期
      nextTerm: true,
      checkGrade:'2'
    });
  },
  selectSemester:function(e){//选择全年级
    let checkId = e.currentTarget.dataset.classid;
    if (checkId != '0'){
      this.setData({
        classType: app.globalData.classType
      });
      let classType = 'classType[' + (checkId - 1) + '].check'
      this.setData({
        [classType]: true,
        checkClass: checkId,
        allClass:false
      });
    }else{
      this.setData({
        classType: app.globalData.classType,
        allClass: true,
        checkClass: checkId
      });
    }
    //console.log(this.data.classType);
    
  },
  selectType:function(e){//选择全部类型
    console.log(e.currentTarget.dataset);
    let checkId = e.currentTarget.dataset.type;
    if (checkId != '0') {
      this.setData({
        bookType: app.globalData.bookType
      });
      let bookType = 'bookType[' + (checkId - 1) + '].check'
      this.setData({
        [bookType]: true,
        checkBook: checkId,
        allType: false,
        checkClass:'',
        checkGrade:'',
        isshowType: false
      });
    } else {
      this.setData({
        bookType: app.globalData.bookType,
        allType: true,
        checkClass: '',
        checkGrade: '',
        checkBook: checkId,
        isshowType: false
      });
    }
    this.getbookList(this.data.checkClass, this.data.checkGrade, checkId);
  },
  getbookList: function (checkClass, checkGrade, bookType){//获取书本列表
    let that = this;
    wx.request({
      url: app.SRC + 'ReadWX/GetTextBookList',
      data: { SchoolCode: '1544', Page: '1', PageSize: '10000', Class: checkClass, Grade: checkGrade, Type: 1, BookType:bookType },
      method: 'GET',
      success: function (res) {
        console.log(res);
        if (res.data.ResultCode == '1') {
          if (res.data.Value.List.length == 0){
            that.setData({
              bookList: res.data.Value.List,
              empty:true
            });
          }else{
            that.setData({
              bookList: res.data.Value.List,
              empty: false
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
  finish:function(){//点击完成帅选
    let that = this;
    that.setData({
      isshowGrade:false,
      checkBook:''
    });
    that.getbookList(that.data.checkClass, that.data.checkGrade, that.data.checkBook);

  }
})