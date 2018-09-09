var app = getApp();
var j = 0;
Page({
  data: {
    pageItems: [{
        page_id: 0,
        page_name: "热点新闻",
        index: 0,
        part: [{
            part_id: 0,
            part_name: "第一页",
          },
          {
            part_id: 1,
            part_name: "第二页",
          }
        ],
        banner: [],
        article: []
      },
      {
        page_id: 1,
        page_name: "妇婴保健",
        index: 0,
        part: [{
            part_id: 0,
            part_name: "第一页",
          },
          {
            part_id: 1,
            part_name: "第二页",
          }
        ],
        banner: [],
        article: []
      },
      {
        page_id: 2,
        page_name: "疾病防治",
        index: 0,
        part: [{
            part_id: 0,
            part_name: "第一页",
          },
          {
            part_id: 1,
            part_name: "第二页",
          }
        ],
        banner: [],
        article: []
      },
      {
        page_id: 3,
        page_name: "饮食保健",
        index: 0,
        part: [{
            part_id: 0,
            part_name: "第一页",
          },
          {
            part_id: 1,
            part_name: "第二页",
          }
        ],
        banner: [],
        article: []
      },
      {
        page_id: 4,
        page_name: "心理健康",
        index: 0,
        part: [{
            part_id: 0,
            part_name: "第一页",
          },
          {
            part_id: 1,
            part_name: "第二页",
          }
        ],
        banner: [],
        article: []
      },
    ],
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    preIndex: 0,
    times: 0,
    newArray: 0,
    showModal: true,
  },
  getBanner: function(now) {
    var that = this;
    wx.request({
      url: 'http://123.207.252.76/api/v1/banner/' + now,
      success: function(res) {
        that.data.pageItems[now - 1].banner = res.data
        var i = now - 1
        var banner = "pageItems[" + i + "].banner"
        that.setData({
          [banner]: res.data,
        })
      },
      fail: function() {

      },
      complete: function() {}
    });
  },
  // 滚动切换标签样式
  switchTab: function(e) {
    if (this.data.currentTab == e.detail.current) {
      return false;
    } else {
      if (e.detail.current == this.data.preIndex) {
        var i = this.data.times + 1;
        this.setData({
          times: i
        })
        if (this.data.times > 3) {
          this.setData({
            currentTab: 0,
            preIndex: 0,
            times: 0
          })
        } else {
          this.setData({
            preIndex: this.data.currentTab,
            currentTab: e.detail.current,
          });
        }
      } else {
        this.setData({
          preIndex: this.data.currentTab,
          currentTab: e.detail.current,
          times: 0
        });
      }
    }
    console.log(this.data.currentTab)
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur,
      })
    }
    this.checkCor();
  },
  switchPartTab: function(e) {
    var cur = e.target.dataset.id;
    if (this.data.pageItems[this.data.currentTab].index == cur) {
      return false;
    } else {
      var i = this.data.currentTab
      var index = "pageItems[" + i + "].index"
      this.setData({
        [index]: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    if (this.data.currentTab > 2) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  stopTouchMove: function() {
    return false;
  },
  detail: function(event) {
    var articleId = event.currentTarget.dataset.articleId
    var articleTitle = event.currentTarget.dataset.articleTitle
    var articleMain = event.currentTarget.dataset.articleMain
    var articleAuthor = event.currentTarget.dataset.articleAuthor
    var articleTime = event.currentTarget.dataset.articleTime
    wx.navigateTo({
      url: '/pages/article/article?id=' + articleId + "&title=" + articleTitle + "&main=" + articleMain + "&time=" + articleTime + "&author=" + articleAuthor
    })
  },

  preventTouchMove: function () {
                           
  },


  go: function () {
    this.setData({
      showModal: false
    })
  },
  // 预加载
  onLoad: function(options) {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        that.setData({
          winHeight: calc
        });
      }
    });
    this.setData({})
    var that = this;
    for (var i = 0; i < 5; i++) {
      this.getBanner(i + 1);
    }
    wx.request({
      url: 'http://123.207.252.76/api/Article/read_by_kind?kind=rdxw',
      success: function(res) {
        that.data.pageItems[0].article = res.data.data
        var article = "pageItems[" + 0 + "].article"
        that.setData({
          [article]: res.data.data
        })
        that.setData({
          showModal:false
        })
      },
      fail: function() {

      },
      complete: function() {
      }
    });
    wx.request({
      url: 'http://123.207.252.76/api/Article/read_by_kind?kind=fybj',
      success: function(res) {
        that.data.pageItems[1].article = res.data.data
        var article = "pageItems[" + 1 + "].article"
        that.setData({
          [article]: res.data.data
        })
        that.setData({
          showModal: false
        })
      },
      fail: function() {

      },
      complete: function() {}
    });
    wx.request({
      url: 'http://123.207.252.76/api/Article/read_by_kind?kind=jbfz',
      success: function(res) {
        that.data.pageItems[2].article = res.data.data
        var article = "pageItems[" + 2 + "].article"
        that.setData({
          [article]: res.data.data
        })
        that.setData({
          showModal: false
        })
      },
      fail: function() {

      },
      complete: function() {}
    });
    wx.request({
      url: 'http://123.207.252.76/api/Article/read_by_kind?kind=ysbj',
      success: function(res) {
        that.data.pageItems[3].article = res.data.data
        var article = "pageItems[" + 3 + "].article"
        that.setData({
          [article]: res.data.data
        })
        that.setData({
          showModal: false
        })
      },
      fail: function() {

      },
      complete: function() {}
    });
    wx.request({
      url: 'http://123.207.252.76/api/Article/read_by_kind?kind=xljk',
      success: function(res) {
        that.data.pageItems[4].article = res.data.data
        var article = "pageItems[" + 4 + "].article"
        that.setData({
          [article]: res.data.data
        })
        that.setData({
          showModal: false
        })
      },
      fail: function() {

      },
      complete: function() {}
    });
  },
  footerTap: app.footerTap
})