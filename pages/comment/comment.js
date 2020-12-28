// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    desc:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    this.setData({
      id:options.id
    })
  },
  formSubmit: function (e) {
    // console.log(e.detail.value)
    this.setData({
      desc:e.detail.value
    })
    let that = this
    let g_id = this.data.id
    // let desc = this.data.desc
    wx.request({
      url: 'http://www.thinkphp.com/day/api/save',
      data: {
        'desc': e.detail.value.desc,
        'g_id':g_id
      },
      method:'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        if(res.data.code ==200){
          console.log(123321)
          wx.reLaunch({
            url: "../desc/desc?id=g_id"//这个是默认的首页
            
            });
        }
      }
    })
  }
})