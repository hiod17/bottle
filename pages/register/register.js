
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
import { BASE_URL } from '../../utils/config.js';
Page({
  data: {
    username: '',
    userid:'',
    email: '',
    code: '',
    password: '',
    confirmPassword: '',
    btnText: '发送验证码', // 按钮文本
    codeSending: false, // 是否正在发送验证码，用来控制按钮的禁用状态
    countDown: 60, // 倒计时秒数
  },

  // 用户名输入变化时的处理函数
  onUsernameChange: function(event) {
    this.setData({
      username: event.detail.value 
    });
    //console.log('已输入用户名', this.data.username);
  },

  // 学号输入变化时的处理函数
  onUidChange: function(event) {
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

  // 验证码输入变化时的处理函数
  onCodeChange: function(event) {
    this.setData({
      code: event.detail.value
    });
  },

  // 密码输入变化时的处理函数
  onPasswordChange: function(event) {
    this.setData({
      password: event.detail.value
    });
  },

  // 确认密码输入变化时的处理函数
  onConfirmPasswordChange: function(event) {
    this.setData({
      confirmPassword: event.detail.value
    });
  },

  onCouldLog: function() {
    wx.reLaunch({
      url: '/pages/login/login',
    })
  },

  // 发送验证码的逻辑
  onSendCode: function() {
    // Check if code is already sending
    if (this.data.codeSending) {
      return; // If sending, do nothing
    }
  
    // Send request to backend to send verification email
    wx.request({
      url: `${BASE_URL}send_verification_email/`,
      method: 'POST',
      data: {
        email: this.data.email
      },
      header: {
        'content-type': 'application/json' // Set request header
      },
      success: (res) => {
        if (res.statusCode === 200) {
          console.log('发送成功：', res);
          this.setData({
            codeSending: true, // Set codeSending to true to indicate sending
            btnText: `已发送(${this.data.countDown}s)` // Update button text with countdown
          });
          this.startCountDown(); // Start countdown
        }
      },
      fail: () => {
        // Show toast message if request fails
        wx.showToast({
          title: '发送失败请重试',
          icon: 'none'
        });
      }
    });
  },
  
  startCountDown: function() {
    let countDown = this.data.countDown; // Get initial countdown value
    const timer = setInterval(() => {
      countDown--; // Decrement countdown
      this.setData({
        btnText: `已发送(${countDown}s)` // Update button text with remaining seconds
      });
  
      if (countDown == 0) {
        clearInterval(timer); // Clear interval if countdown reaches 0
        this.setData({
          btnText: '重新发送', // Reset button text
          codeSending: false, // Reset codeSending to false
          countDown: 60 // Reset countdown value
        });
      }
    }, 1000); // Run every second
  },

  // 注册的逻辑
  onRegister: function() {
    // 在这里进行基本的输入验证
    if (!this.data.username || !this.data.email || !this.data.code || !this.data.password || !this.data.userid) {
      wx.showToast({
        title: '请填写所有字段',
        icon: 'none'
      });
      return;
    }
    if (this.data.password !== this.data.confirmPassword) {
      wx.showToast({
        title: '两次输入的密码不一致',
        icon: 'none'
      });
      return;
    }
    // 这里应该有调用后端接口进行注册的代码
    

    const requestData = {
      username: this.data.username,
      userid: this.data.userid,
      email: this.data.email,
      code: this.data.code,
      password: this.data.password
    };
console.log('注册信息:', requestData);
    wx.request({
      url: `${ BASE_URL }register/`,
      method: 'POST',
      data: requestData,
      success(res) {
        // 处理注册成功的逻辑
        if(res.statusCode === 200){
          console.log('成功:');
          wx.showToast({
            title: '注册成功，请登录',
            icon: 'none'
          });
          wx.reLaunch({
            url: '/pages/login/login',
          })
        }
        else{
          console.log('错误信息:', res.data.error);
        }        
      },
      fail() {
        // 处理请求失败的逻辑
        wx.showToast({
          title: '注册失败，请稍后重试',
          icon: 'none'
        });
      }
    });
  }
});

