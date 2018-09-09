Page({
  data: {
    indicatorDots: true, //小点
    autoplay: true, //是否自动轮播
    interval: 5000, //间隔时间
    duration: 1500, //滑动时间
    show: false,
    imgUrls: [{
      link: '/pages/main/main',
      url: '/image/colors/1.jpg'
    }, {
      link: '/pages/main/main',
      url: '/image/colors/2.jpg'
    }, {
      link: '/pages/main/main',
      url: '/image/colors/3.jpg'
    }],
    bottompartlist: [{
      id: 1,
      name: "剩余号源",
      imagepath: "/image/icon/1.png",
      url: "",
    }, {
      id: 2,
      name: "就诊攻略",
      imagepath: "/image/icon/2.png",
      url: "",
    }, {
      id: 3,
      name: "专家介绍",
      imagepath: "/image/icon/3.png",
      url: "",
    }, {
      id: 4,
      name: "科室总览",
      imagepath: "/image/icon/4.png",
      url: "",
    }, {
      id: 5,
      name: "出诊信息",
      imagepath: "/image/icon/5.png",
      url: "",
    }, {
      id: 6,
      name: "健康百科",
      imagepath: "/image/icon/6.png",
      url: "",
    }, {
      id: 7,
      name: "医院导航",
      imagepath: "/image/icon/7.png",
      url: "",
    }, {
      id: 8,
      name: "健康资讯",
      imagepath: "/image/icon/8.png",
      url: "/pages/heathy/heathy",
    }]
  },

  detailtap: function(e) {
    var that = this;
    var url = e.currentTarget.dataset.url
    if (url) {
      wx.navigateTo({
        url: url,
      })
    } else {
      this.setData({
        showModal: true
      })
    }
  },

  preventTouchMove: function() {

  },

  go: function() {
    this.setData({
      showModal: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})