//app.js
App({
  SRC: 'http://newreadlevel.91sst.com.cn/api/',
  onLaunch: function () {
    
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  editTabBar: function (index) {
    let tabbar = this.globalData.tabbar,
      currentPages = getCurrentPages(),
     
      _this = currentPages[currentPages.length - 1],
      pagePath = _this.__route__;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (var i in tabbar.list) {
      tabbar.list[i].selected = false;
      tabbar.list[index].selected = true
      
      // (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },

  teacherTabBar:function(index){
    let tabbar = this.globalData.tabbar,
      currentPages = getCurrentPages(),

      _this = currentPages[currentPages.length - 1],
      pagePath = _this.__route__;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (var i in tabbar.tealist) {
      tabbar.tealist[i].selected = false;
      tabbar.tealist[index].selected = true

      // (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },

  globalData: {
    userInfo: null,
    tabbar: {
      color: "#a0a0a0",
      selectedColor: "#5297f7",
      backgroundColor: "#ffffff",
      borderStyle: "#a0a0a0",
      list: [//学生端底部菜单
        {
          pagePath: "/pages/student/home/home/home",
          iconPath: "/image/home.png",
          selectedIconPath: "/image/homeactive.png",
          selectedColor:'#5297f7',
          text: "主页",
          selected: true
        },
        {
          pagePath: "/pages/student/book/bookhome/bookhome",
          iconPath: "/image/book.png",
          selectedIconPath: "/image/bookactive.png",
          text: "书库",
          selected: false
        },
        {
          pagePath: "/pages/student/challenge/challengehome/challengehome",
          iconPath: "/image/challenge.png",
          selectedIconPath: "/image/challengeactive.png",
          text: "挑战",
          selected: false
        }, {
          pagePath: "/pages/student/mycenter/myhome/myhome",
          iconPath: "/image/my.png",
          selectedIconPath: "/image/myactive.png",
          text: "我的",
          selected: false
        }
      ],
      tealist: [//教师端底部菜单
        {
          pagePath: "/pages/teacher/home/home/home",
          iconPath: "/image/home.png",
          selectedIconPath: "/image/homeactive.png",
          selectedColor: '#5297f7',
          text: "主页",
          selected: true
        }, {
          pagePath: "/pages/teacher/mycenter/mycenter/mycenter",
          iconPath: "/image/my.png",
          selectedIconPath: "/image/myactive.png",
          text: "我的",
          selected: false
        }
      ],
      position: "bottom"
    },
    bookType: [//书的类型
      {
        key:"1",
        val: "历史/地理",
        check:false
      }, {
        key: "2",
        val: "故事/漫画",
        check: false
      }, {
        key: "3",
        val: "国学/礼仪",
        check: false
      }, {
        key: "4",
        val: "名人/传记",
        check: false
      }, {
          key: "5",
          val: "人文/教育",
          check: false
      }, {
        key: "6",
        val: "诗词/散文",
        check: false
      }, {
          key: "7",
          val: "艺术/综合",
          check: false
      }, {
        key: "8",
        val: "自然/科普",
        check: false
      }, {
          key: "9",
          val: "小说/名著",
          check: false
      }, {
        key: "10",
        val: "其他",
        check: false
      }
    ],
    classType:[{
        key: "1",
        val: "一",
        check: false
      }, {
        key: "2",
        val: "二",
        check: false
      }, {
        key: "3",
        val: "三",
        check: false
      }, {
        key: "4",
        val: "四",
        check: false
      }, {
        key: "5",
        val: "五",
        check: false
      }, {
        key: "6",
        val: "六",
        check: false
      }
    ]
  }
})