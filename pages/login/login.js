const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
import { BASE_URL } from '../../utils/config.js';
const app = getApp();
Page({
  data: {
    username: '',
    userid: '',
    email: '',
    code: '',
    password: ''
  },

  onRegister: function() {
    wx.reLaunch({
      url: '/pages/register/register',
    });
  },
  
  onForgot: function() {
    wx.navigateTo({
      url: '/pages/password/forgot_pass',
    });
  },

  // 用户名输入变化时的处理函数
  onUsernameChange: function(event) {
    this.setData({
      username: event.detail.value 
    });
    console.log('已输入用户名', this.data.username);
  },

  onUseridChange: function(event) {
    this.setData({
      userid: event.detail.value 
    });
    console.log('已输入学号', this.data.userid);
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
    const self = this;
    if (!this.data.username || !this.data.email || !this.data.password) {
      wx.showToast({
        title: '请填写所有字段',
        icon: 'none'
      });
      return;
    }
    // 这里应该有调用后端接口进行注册的代码
    console.log('注册信息:', this.data);

    wx.request({
      url: `${BASE_URL}Login/`,
      method: 'POST',
      data: {
        username: this.data.username,
        email: this.data.email,
        password: this.data.password
      },
      success(res) {
        // Log the URL
        console.log('Request URL:', `${BASE_URL}Login/`);
    
        // Handle successful response
        if (res.statusCode === 200) {
          console.log('成功:');
          // 登录成功后设置全局变量
          app.globalData.userInfo = self.data.email;
          // console.log('userid:',self.data.userid);
          wx.reLaunch({
            url: '/pages/entrance/main',
          });
        }
        

        console.log('错误信息:', res.data.error);
      },
      fail() {
        // Handle request failure
        console.log('Request URL:', `${BASE_URL}Login/`);
        wx.showToast({
          title: '发送失败请重试',
          icon: 'none'
        });
      }
    });
  }
});
