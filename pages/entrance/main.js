
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    current: 1,
    autoplay: true,
    duration: '500',
    interval: 5000,
    navigation: { type: 'dots' },
    swiperImageProps: { mode: 'scaleToFill' },
    active: 'home',
    scrollLeft: 0
  },

  onLoad: function(options) {
    this.autoScroll();
  },

  onClock:function(){
    wx.navigateTo({
      url: '/pages/clock_in/clock_in',
    })
  },

  onAnalyse:function(){
    wx.navigateTo({
      url: '/pages/analyse/analyse',
    })
  },

  onAlarm:function(){
    wx.navigateTo({
      url: '/pages/alarm/alarm',
    })
  },

  onRank:function(){
    wx.navigateTo({
      url: '/pages/rank/rank',
    })
  },

  onChange(event) {
    const index = event.detail;
    this.setData({ active: index });

    switch (index) {
      case 'home':
        break;
      case 'community':
        wx.redirectTo({ url: '/pages/community/community' });
        break;
      case 'user':
        wx.redirectTo({ url: '/pages/User/user' });
        break;
      default:
        break;
    }
  },

  autoScroll: function() {
    const step = 1; // 每次滚动的像素
    setInterval(() => {
      this.setData({
        scrollLeft: this.data.scrollLeft + step
      });
    }, 20); // 调整间隔时间来控制滚动速度
  }
})
  
//   navToActivityDetail({ detail }) {
//     const { index: promotionID = 0 } = detail || {};
//     wx.navigateTo({
//       url: `/pages/promotion-detail/index?promotion_id=${promotionID}`,
//     });
//   },
// });