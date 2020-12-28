// pages/desc/desc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    data:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      id:options.id
    })
      let that = this
      let goods_id = this.data.id
      console.log(goods_id)
      wx.request({
        url: 'http://www.thinkphp.com/day/api/create',
        data: {
          id:goods_id
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res.data.data)
          that.setData({
            data:res.data.data
          })
        }
      })
  }
})