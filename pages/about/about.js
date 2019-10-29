// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"lisi",
    student:[
      {name:"wangwu",age:"12"},
      { name: "lisi", age: "13" },
      { name: "zhangsan", age: "22" },
    ],
    counter:0
  },
      onClickHander(){
        this.setData({
          counter:this.data.counter+1
        })
      },
  /**
   * 生命周期函数--监听页面加载
   */
  handerGetUserinf(event){
      console.log(event)
  },
  onLoad: function (options) {

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
  changeComponent(){
    // selectComponent可以选着组件，
   
    const cpn=this.selectComponent("#counter")
    //  cpn.setData({
    //    counter: cpn.data.counter+1
    //  })
    cpn.changeNum(1);
  }
})