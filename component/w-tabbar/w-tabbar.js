// component/w-tabbar/w-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      default(){
        return ['精选', '流行', '火热']
      }
    }  
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event){
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      })
    }
  }
})
