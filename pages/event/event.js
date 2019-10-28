// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleTouchEnd() {
    console.log("TouchEnd")
  },
  handleTap() {
    console.log("Tap")
  },
  handleTouchMove() {
    console.log("Move")
  },
  handleLongPress() {
    console.log("Press")
  },
  handleTouchStart(){
    console.log("Start")
  },
  handleInner(event){
    console.log(event)
    console.log("++++")
  },
  handleOuter(event){
    console.log(event)
  }
})