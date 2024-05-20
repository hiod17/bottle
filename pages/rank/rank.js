
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

const app = getApp();

// pages/index/index.js
Page({
  data: {
    active: 'community',
    cards: [
      {
        rank: '1st',
        person: '张三',
        time: '100',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      },
      {
        rank: '2nd',
        person: '李四',
        time: '这是卡片描述2',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      },
      {
        rank: '3rd',
        person: '王五',
        time: '这是卡片描述3',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      },
      {
        rank: '4th',
        person: '爷爷',
        time: '这是卡片描述3',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      }
      ,
      {
        rank: '5th',
        person: '爷爷',
        time: '这是卡片描述3',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      }
      ,
      {
        rank: '6th',
        person: '爷爷',
        time: '这是卡片描述3',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      }
      ,
      {
        rank: '7th',
        person: '爷爷',
        time: '这是卡片描述3',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      }
      ,
      {
        rank: '8th',
        person: '爷爷',
        time: '这是卡片描述3',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      }
      ,
      {
        rank: '9th',
        person: '爷爷',
        time: '这是卡片描述3',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      }
      ,
      {
        rank: '10th',
        person: '爷爷',
        time: '这是卡片描述3',
        location: '北京',
        type: '户外',
        brief: '这是一次户外打卡活动。'
      }]
    },

  //这个地方传的信息会出问题 我们后面对接的时候修改一下
  onCardTap(event) {
    const card = event.currentTarget.dataset.card;
    wx.navigateTo({
      url: `/pages/rank_detail/rank_detail?&time=${encodeURIComponent(card.time)}&person=${encodeURIComponent(card.person)}&location=${encodeURIComponent(card.location)}&type=${encodeURIComponent(card.type)}&brief=${encodeURIComponent(card.brief)}`
    });
  }
})





