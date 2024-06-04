
Page({
  data: {
    person: '',
    college:'北京学院',
    gender: '男',
    time_a: '10',
    time_w: '10',
    num:'10'
  },

  onLoad(options) {
    this.setData({
      time: decodeURIComponent(options.person),
      person: decodeURIComponent(options.person),
      location: decodeURIComponent(options.location),
      type: decodeURIComponent(options.type),
      brief: decodeURIComponent(options.brief)
    });
  }
})

