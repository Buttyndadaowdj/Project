// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */

  data: {
    swiper: [{
      index: 1,
      mainimg_src: '../img/math1.jpg',
      iconfont: '../img/book.png',
      words: '三分钟数学：为什么我们要学数学？',
      lable: "漫步数学"
    }, {
      index: 2,
      mainimg_src: '../img/math2.png',
      iconfont: '../img/eye.png',
      words: "  留学考试的数学考试的内容居然...",
      lable: "早看早知道"
    }, {
      index: 3,
      mainimg_src: '../img/math3.jpg',
      iconfont: '../img/fire.png',
      words: " 名师带你学（一）——《高等数学》",
      lable: "精品推荐"
    }, {
      index: 4,
      mainimg_src: '../img/math4.jpg',
      iconfont: '../img/telescope.png',
      words: "外国的学生学的数学居然是...",
      lable: "新视界"
    }],
    video: [{
      index: 1,
      title: "留学数学自学辅导视频",
      grading: "初级",
      price1: "89",
      price2: "0",
      image: "../img/video_img1.jpg",
      lable: "限时降价，不容错过",

    }, {
      index: 2,
      title: "名师讲解ACT数学",
      grading: "精品",
      price1: "115",
      price2: "60",
      image: "../img/video_img2.jpg",
      lable: "名师讲解，在线辅导",

    }, {
      index: 3,
      title: "历届ACT数学讲解",
      grading: "干货",
      price1: "89",
      price2: "0",
      image: "../img/video_img3.png",
      lable: "值得收藏 ",

    }, {
      index: 4,
      title: "留学就业前景怎么样？",
      grading: "文章",
      price1: "0",
      price2: "0",
      image: "../img/video_img4.jpg",
      lable: "保障服务，一生无忧",

    }, {
      index: 5,
      title: "系统教学，体系服务",
      grading: "文章",
      price1: "0",
      price2: "0",
      image: "../img/video_img4.jpg",
      lable: "限时降价，不容错过",
    }],
    subject: [{
      index: 1,
      word: "基础数学"
    }, {
      index: 2,
      word: "ACT数学"
    }, {
      index: 3,
      word: "高等数学"
    }, {
      index: 4,
      word: "常春藤模考"
    }, {
      index: 5,
      word: "入学测评"
    }, {
      index: 6,
      word: "留学信息"
    }, ]
  },
  information: function() {
    wx.navigateTo({
      url: '../information/information',
    })
  },
  swiper_click: function(event) {
    let data = event.currentTarget.dataset;
    let arr = [];
    wx.setStorage({
      key:'data',data:data
    });
    for (let key in data) {
      arr.push(data[key])
    };
    data = arr[0];
    console.log(data)
    if (data === 1) {
      wx.navigateTo({
        url: '../video/video?index=' + data,
      })
    }
    if (data === 2) {
      wx.switchTab({
        url: '../test/test',
      })
    } else if (data === 3) {
      wx.switchTab({
        url: '../kinds/kinds',
      })
    } else {
      console.log(4)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      data: "",
    })
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
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})