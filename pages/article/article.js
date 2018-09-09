var WxParse = require('../wxParse/wxParse.js');

Page({
  data: {
    showModal: false,
    id: 0,
    title: "ini",
    author: "inia",
    main: "iniini",
    time: 0
  },

  onLoad: function(options) {
    this.setData({
      id: options.id,
      title: options.title,
      author: options.author,
      time: options.time,
      main: options.main
    })
    this.getArticle(this.data.id)
  },

  getArticle: function(id) {
    var that = this;
    if (id < 6) {
      wx.request({
        url: 'http://123.207.252.76/api/v1/banner/' + id,
        success: function(res) {
          // console.log()
          var article = res.data.items[0].article
          that.setData({
            article: article
          });
          /**
           * WxParse.wxParse(bindName , type, data, target,imagePadding)
           * 1.bindName绑定的数据名(必填)
           * 2.type可以为html或者md(必填)
           * 3.data为传入的具体数据(必填)
           * 4.target为Page对象,一般为this(必填)
           * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
           */
          WxParse.wxParse('article', 'html', that.data.article, that, 5);
        }
      });
    } else {
      wx.request({
        url: 'http://192.168.1.101/index/Article/read_by_id?id=' + id,
        success: function(res) {
          // console.log()
          if (res.data.status == "读取成功") {
            var article = res.data.data.article;
            that.setData({
              article: article
            });
            console.log(article)
            console.log(111)
            /**
             * WxParse.wxParse(bindName , type, data, target,imagePadding)
             * 1.bindName绑定的数据名(必填)
             * 2.type可以为html或者md(必填)
             * 3.data为传入的具体数据(必填)
             * 4.target为Page对象,一般为this(必填)
             * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
             */
            WxParse.wxParse('article', 'html', that.data.article, that, 5);
          }
        }
      });
    }

  },

  toShowModal(e) {
    this.setData({
      showModal: true
    })
  },

  hideModal() {
    this.setData({
      showModal: false
    });
  }
})