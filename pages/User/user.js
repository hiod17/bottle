const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
import { BASE_URL } from '../../utils/config.js';
const app = getApp();
Page({
  data: {
    useremail: app.globalData.userInfo,
    active: 'user',
    userInfo: {
      avatarUrl: '',
      nickName: '',
      username: '',
      userid: '',
      email: '',
      phone: '',
      address: ''
    }
  },

  onForgotPass: function() {
    wx.navigateTo({ url: '/pages/password/res_pass' });
  },

  onQuit: function() {
    wx.redirectTo({ url: '/pages/login/login' });
  },

  onLoad() {
    // 模拟接口调用获取用户信息
    this.getUserInfo();
  },

  getUserInfo() {
    const useremail = this.data.useremail; // 获取全局变量 userInfo 中存储的 useremail

    if (!useremail) {
      console.error('用户邮箱未定义');
      return;
    }

    // 发送 POST 请求
    wx.request({
      url: `${BASE_URL}user_info_show/`, // 使用全局变量中的 BASE_URL
      method: 'POST',
      data: {
        useremail: useremail // 将全局变量中的 useremail 作为 POST 请求的数据发送
      },
      header: {
        'content-type': 'application/json' // 设置请求头
      },
      success: (res) => {
        if (res.statusCode === 200) {
          console.log('获取用户信息成功:', res.data);
          // 将获取到的数据设置到 userInfo 中
          this.setData({
            userInfo: {
            
              username: res.data.User_name,
              userid: res.data.Uid,
              email: res.data.User_email,
              phone: '', // 这里需要根据你的实际数据进行设置
              address: '' // 这里需要根据你的实际数据进行设置
            }
          });
        } else {
          console.error('获取用户信息失败', res);
        }
      },
      fail: (err) => {
        console.error('请求失败', err);
      }
    });
  },

  onChange(event) {
    const index = event.detail;
    this.setData({ active: index });

    switch (index) {
      case 'home':
        wx.redirectTo({ url: '/pages/entrance/main' });
        break;
      case 'community':
        wx.redirectTo({ url: '/pages/community/community' });
        break;
      case 'user':
        break;
      default:
        break;
    }
  }
});
