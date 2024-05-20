const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

const app = getApp();
Page({
  data: {
    username: '',
    email: '',
    code: '',
    password: ''
  },

  onRegister: function() {
    wx.reLaunch({
      url: '/pages/register/register',
    })
  },
  
  onForgot: function() {
    wx.navigateTo({
      url: '/pages/password/forgot_pass',
    })
  },

  // 用户名输入变化时的处理函数
  onUsernameChange: function(event) {
    this.setData({
      username: event.detail.value 
    });
    //console.log('已输入用户名', this.data.username);
  },

  // 邮箱输入变化时的处理函数
  onEmailChange: function(event) {
    this.setData({
      email: event.detail.value
    });
    console.log('已输入邮箱', this.data.email);
  },

  // 密码输入变化时的处理函数
  onPasswordChange: function(event) {
    this.setData({
      password: event.detail.value
    });
  },

  
  // 注册的逻辑
  onLogin: function() {
    // 在这里进行基本的输入验证
    app.globalData.userInfo = this.data.email;
    if (!this.data.username || !this.data.email || !this.data.password) {
      wx.showToast({
        title: '请填写所有字段',
        icon: 'none'
      });
      return;
    }
    wx.redirectTo({
      url: '/pages/entrance/main',
    })
    // 这里应该有调用后端接口进行注册的代码
    console.log('注册信息:', this.data);

    wx.request({
      url: 'https://1137-2001-250-206-cb35-5867-b400-1366-2338.ngrok-free.app/api/Login/',
      method: 'POST',
      data: {
        username: this.data.username,
        email: this.data.email,
        password: this.data.password
      },
      success(res) {
        // 处理注册成功的逻辑
        if(res.statusCode === 200){
          console.log('成功:');
          
          wx.reLaunch({
            url: '/pages/entrance/main',
          })
        }
        app.globalData.userInfo = null;
        console.log('错误信息:', res.data.error);
      },
      fail() {
        // 处理请求失败的逻辑
        wx.showToast({
          title: '发送失败请重试',
          icon: 'none'
        });
      }
    });
  }
});