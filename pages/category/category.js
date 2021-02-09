// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    active:0,
    list: [{
        cat_id: 1872,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/f89753a227d26a3fe9ccc6f975857bb6.png',
        cat_name: '上装'
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
        cat_id: 2245,
        cat_src: 'https://cdn.it120.cc/apifactory/2019/04/09/7773b4c204280ba194514594f7070ac9.png',
        cat_name: '袜子'
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    
  },
  change(e){
    console.log(e)
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
    this.setData({
      active: wx.getStorageSync('tab-url') || 0
    })
    wx.checkSession({
      success:(res)=>{
        console.log(res)
      }
    })
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