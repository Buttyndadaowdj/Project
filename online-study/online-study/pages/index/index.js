// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */

  data: {
    swiper: [],
    subject: [],
    video:[]
  },
  information: function() {
    wx.navigateTo({
      url: '../information/information',
    })
  },
  toWatch: function(event) {
    let data = event.currentTarget.dataset;
    let arr = [];
    wx.setStorage({
      key: 'data',
      data: data
    });
    for (let key in data) {
      arr.push(data[key])
    };
    data = arr[0];
    console.log(data)
    if (data === 1) {
      wx.navigateTo({
        url: '../video/video?index=' + 2,
      })
    } else if (data === 2) {
      wx.navigateTo({
        url: '../video/video?index=' + 4,
      })
    } else if (data === 3) {
      wx.navigateTo({
        url: '../video/video?index=' + 5,
      })
    }
  },
  swiper_click: function(event) {
    let data = event.currentTarget.dataset;
    let arr = [];
    wx.setStorage({
      key: 'data',
      data: data
    });
    for (let key in data) {
      arr.push(data[key])
    };
    data = arr[0];
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
      wx.navigateTo({
        url: '../video/video?index=' + data,
      })
    } else {
      console.log(4)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    let that = this;
    wx.request({
      url: 'http://localhost:8888/index',
      success: function(res) {
        let swiper = res.data.swiper;
        console.log(swiper);
        let subject = res.data.subject;
        console.log(subject);
        let video = res.data.video;
        that.setData({
          swiper: swiper,
          subject: subject,
          video: video
        })
      }
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