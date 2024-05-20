
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

const app = getApp();

Page({
  data: {
    useremail : app.globalData.userInfo,
    active : 'user',
    userInfo: {
      avatarUrl: '',
      nickName: '',
      username: '',
      email: '',
      phone: '',
      address: ''
    }
  },

  onForgotPass:function() {
    wx.navigateTo({ url: '/pages/password/res_pass' });
  },

  onQuit:function() {
    wx.redirectTo({ url: '/pages/login/login' });
  },

  onLoad() {
    // 模拟接口调用获取用户信息
    this.getUserInfo();
  },

  getUserInfo() {
    const simulatedApiResponse = {
      avatarUrl: 'https://example.com/avatar.jpg',
      nickName: '1',
      username: 'xu',
      email: '1806530009@qq.com',
      phone: '12345678901',
      address: '北京市海淀区中关村'
    };

    // 将获取到的数据设置到 userInfo 中
    this.setData({
      userInfo: simulatedApiResponse
    });
    // const getUrl = `https://1137-2001-250-206-cb35-5867-b400-1366-2338.ngrok-free.app/api/user_info_show/?usermail=${encodeURIComponent(usermail)}`;
    //  如果你使用实际的网络请求，可以使用 wx.request
    //  wx.request({
    //   url : 'https://1137-2001-250-206-cb35-5867-b400-1366-2338.ngrok-free.app/api/user_info_show/',
    //   method: 'GET',
    //   success: (res) => {
    //     if (res.statusCode === 200) {
    //       this.setData({
    //         userInfo: res.data
    //       });
    //     } else {
    //       console.error('获取用户信息失败', res);
    //     }
    //   },
    //   fail: (err) => {
    //     console.error('请求失败', err);
    //   }
    // });

    // 将获取到的数据设置到 userInfo 中
    // this.setData({
    //   userInfo: simulatedApiResponse
    // });

   
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



