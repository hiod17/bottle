
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

const app = getApp();

// pages/index/index.js
Page({
  data: {
    active: 'community',
    cards: [
      {
        image: '/images/1.jpg',
        person: 'user1',
        time: '2024-05-01 19:30:04',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      },
      {
        image: '/images/2.jpg',
        person: 'user2',
        time: '2024-05-01 19:30:04',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      },
      {
        image: '/images/3.jpg',
        person: 'user3',
        time: '2024-05-01 19:30:04',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      },
      {
        image: '/images/3.jpg',
        title: 'user4',
        description: '2024-05-01 19:30:04',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      }
      // 可以继续添加更多卡片数据
    ]
  },
  onChange(event) {
    const index = event.detail;
    this.setData({ active: index });

    switch (index) {
      case 'home':
        wx.redirectTo({ url: '/pages/entrance/main' });
        break;
      case 'community':
        break;
      case 'user':
        wx.redirectTo({ url: '/pages/User/user' });
        break;
      default:
        break;
    }
  },
  onCardTap(event) {
    const card = event.currentTarget.dataset.card;
    wx.navigateTo({
      url: `/pages/community/detail?image=${encodeURIComponent(card.image)}&time=${encodeURIComponent(card.time)}&person=${encodeURIComponent(card.person)}&location=${encodeURIComponent(card.location)}&type=${encodeURIComponent(card.type)}&brief=${encodeURIComponent(card.brief)}`
    });
  }
})





