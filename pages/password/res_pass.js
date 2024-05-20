
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    
  },

  onLoad() {
    
  },

  getUserInfo() {
    // 这里模拟一个网络请求来获取用户信息
    const simulatedApiResponse = {
      avatarUrl: 'https://example.com/avatar.jpg',
      nickName: '张三',
      username: '一二三',
      email: 'zhangsan@example.com',
      phone: '12345678901',
      address: '北京市海淀区中关村'
    };

    // 将获取到的数据设置到 userInfo 中
    this.setData({
      userInfo: simulatedApiResponse
    });

    // 如果你使用实际的网络请求，可以使用 wx.request
    // wx.request({
    //   url: 'https://api.example.com/userinfo', // 替换为实际的接口地址
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
  }
});



