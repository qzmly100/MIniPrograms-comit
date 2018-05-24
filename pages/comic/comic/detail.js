// pages/comic/comic/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showItem: 1,
    sorttext: ['正序','反序'],
    sortIndex:0,
    navItem: [{ name: '详情' }, { name: '目录' }],
    sortData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      sortData: [{
        name: '第一话',
      }, { name: '第二话' }, { name: "第三话" },
      { name: '第四话' }, { name: '第五话' }, { name: '第六话' },
      { name: '第七话' }
      ]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  navtag: function (e) {
    var that = this;
    that.setData({
      showItem: e.target.dataset.id
    })
  },
  sortTrans: function (e) {
    var that = this;
    var sorthua=this.data.sortData;
    var sortI=e.target.dataset.id;
    if(sortI==0){
      that.setData({
        sortIndex: 1,
      })
    }else{
      that.setData({
        sortIndex: 0,
      })
    }
    that.setData({
      sortData: sorthua.reverse(),
    })
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