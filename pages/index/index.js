// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    value:'',
    list:[
      {
        cat_id:1872,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/f89753a227d26a3fe9ccc6f975857bb6.png',
        cat_name:'上装'
      },
      {
        cat_id: 1873,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/5bfffd6ad0d4483870f024a3ed936528.png',
        cat_name: '裤装'
      },
      {
        cat_id: 1875,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/8d32c254e2cb86d2d42c99b768d136b6.png',
        cat_name: '特价区'
      },
      {
        cat_id: 1906,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/d800327091f216e2c83db8af7b6be306.png',
        cat_name: '裙装'
      },
      {
        cat_id: 1907,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/d800327091f216e2c83db8af7b6be306.png',
        cat_name: '套装'
      },
      {
        cat_id: 2016,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/cfee29650d6ae58a4bb1f84a3d899450.png',
        cat_name: '外套'
      },
      {
        cat_id: 2054,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/9a7356187fce687ce568ba7381685299.png',
        cat_name: '秒杀'
      },
      {
        cat_id:2245,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/7773b4c204280ba194514594f7070ac9.png',
        cat_name:'袜子'
      },
      {
        cat_id: 2246,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/60f41bf042d201b48a7115d22344320f.png',
        cat_name: '内裤'
      },
      {
        cat_id: 2787,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/cdb16ac9c66bc211b82bd947452526f4.png',
        cat_name: '鞋'
      }
    ]
  },
  toNotice(e){
    wx.navigateTo({
      url:"/pages/notice/notice.wxml"
    })
  },
  toCategory(e){
    wx.setStorageSync('tab-url', e.currentTarget.dataset.id)
    wx.switchTab({
      url: '/pages/category/category'
    })
    
  },
  onLoad(e) {
    wx.checkSession({
      success:(res)=>{
        console.log(res)
      }
    })
  },
})
