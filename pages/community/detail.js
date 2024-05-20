// pages/community/detail.js
// pages/community/detail.js
// pages/community/detail.js
Page({
  data: {
    image: '',
    time: '',
    person: '',
    location: '',
    type: '',
    brief: ''
  },

  onLoad(options) {
    this.setData({
      image: decodeURIComponent(options.image),
      time: decodeURIComponent(options.time),
      person: decodeURIComponent(options.person),
      location: decodeURIComponent(options.location),
      type: decodeURIComponent(options.type),
      brief: decodeURIComponent(options.brief)
    });
  }
})

