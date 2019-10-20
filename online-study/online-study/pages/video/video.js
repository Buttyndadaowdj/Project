// pages/video/video.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    well: 0,
    Video_list: [{
      idnex: 1,
      title: "为什么我们要学数学",
      comment: "四川轻化工大学名师🐟🕊🕊为你讲解，数学在我们生活中的重要性，三分钟的时间让你对数学不再陌生。",
      list: [{
        index: 1,
        title: "第一节：什么是数学"
      }, {
        index: 2,
        title: "第二节：生活中的数学"
      }]
    }, {
      idnex: 2,
      title: "留学数学——ACT考试大纲详解",
      comment: "四川轻化工大学名师🐟🕊🕊为你讲解，数学在我们生活中的重要性，三分钟的时间让你对数学不再陌生。",
      list: [{
        index: 1,
        title: "第一节：什么是数学"
      }, {
        index: 2,
        title: "第二节：生活中的数学"
      }]
    }, {
      idnex: 3,
      title: "高等数学（全套）",
      comment: "四川轻化工大学名师🐟🕊🕊为你讲解，数学在我们生活中的重要性，三分钟的时间让你对数学不再陌生。",
      list: [{
        index: 1,
        title: "第一节：什么是数学"
      }, {
        index: 2,
        title: "第二节：生活中的数学"
      }]
    }, {
      idnex: 4,
      title: "留学数学的难点",
      comment: "四川轻化工大学名师🐟🕊🕊为你讲解，数学在我们生活中的重要性，三分钟的时间让你对数学不再陌生。",
      list: [{
        index: 1,
        title: "第一节：什么是数学"
      }, {
        index: 2,
        title: "第二节：生活中的数学"
      }]
    }, ],
    Need_show:[]
  },
  think_Like: function() {
    this.data.well = this.data.well + 1;
    this.setData({
      well: this.data.well
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let option = options;
    let arr = [];
    for (let key in option) {
      arr.push(option[key])
    };
    arr = arr[0] - 1;
    let need_show = this.data.Video_list[arr];
    this.setData({
      Need_show: need_show
    })
    console.log(this.data.Need_show)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

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