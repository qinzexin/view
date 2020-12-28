
Page({
  data: {
    data:[]
  },

  onLoad: function () {
    let that = this
    wx.request({
      url: 'http://www.thinkphp.com/day/api/index',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        // console.log(res.data.data)
        that.setData({
          data:res.data.data
        })
      }
    })
  }
})
