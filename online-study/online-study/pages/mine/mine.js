// ./pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg: wx.getStorageSync("userImg") || "../img/yourHead.png",
    buttonWord: wx.getStorageSync("userName") || "用户登录",
    user: {
      name: wx.getStorageSync("userImg"),
      head: wx.getStorageSync("userName")
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  onGotUserInfo: function(e) {
    let nick_name = e.detail.userInfo.nickName;
    let headImg = e.detail.userInfo.avatarUrl;
    wx.setStorageSync("userImg", headImg);
    wx.setStorageSync("userName", nick_name);
    this.setData({
      headImg: wx.getStorageSync("userImg"),
      buttonWord: wx.getStorageSync("userName")
    });
    wx: wx.request({
      url: 'http://localhost:8888/index',
      data: {
        user: this.data.user
      },
      method: 'GET',
      success: function(res) {
        console.log("success");
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  outLogin: function() {
    wx.clearStorageSync();
    this.setData({
      headImg: "../img/yourHead.png",
      buttonWord: "用户登录"
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
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})