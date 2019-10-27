// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age:12,
    nowTime:"",
    isActive:false,
    isShow:true,
    score:50,
    list:[[13,51,86,19],[45,97,43]]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      setInterval(()=>{
        this.setData({
          nowTime: new Date().toLocaleString()
        })
      },1000)
  },
  handleSwitchColor(){
      this.setData({
        isActive: !this.data.isActive,
        isShow: !this.data.isShow
      })

  },
  changeScore(){
    this.setData({
      score: this.data.score + 10
    })

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

  }
})