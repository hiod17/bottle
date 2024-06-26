
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    username: '',
    Uid:'',
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
      Uid: event.detail.value 
    });
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
    // 这里应该有调用后端接口发送验证码到邮箱的代码
    console.log('发送验证码到邮箱:', this.data.email);
    
    wx.request({
      url: 'https://fd9c-2408-8409-1820-2279-f07a-8c7f-2b70-5878.ngrok-free.app/api/send_verification_email/',
      method: 'POST',
      data: {
        //username: this.data.username,
        email: this.data.email,
        // code: this.data.code,
        // password: this.data.password
      },
      header: {
        'content-type': 'application/json' // 设置请求的 header，header 中不能设置 Referer
      },
      success(res) {
        if(res.data.res == 200){
          this.setData({
          codeSending: true,
          btnText: `已发送(${this.data.countDown}s)`
        });

        // 开始倒计时
    this.startCountDown();
        }            
      },
      fail() {
        // 弹窗
        wx.showToast({
          title: '发送失败请重试',
          icon: 'none'
        });
      }
    });
  },

  // 开始倒计时的函数
  startCountDown: function() {
    let countDown = this.data.countDown;
    const timer = setInterval(() => {
      countDown--;
      this.setData({
        btnText: `已发送(${countDown}s)`
      });

      if (countDown == 0) {
        clearInterval(timer);
        this.setData({
          btnText: '重新发送',
          codeSending: false,
          countDown: 60 // 重置倒计时
        });
      }
    }, 1000);
  },

  // 注册的逻辑
  onRegister: function() {
    // 在这里进行基本的输入验证
    if (!this.data.username || !this.data.email || !this.data.code || !this.data.password) {
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
    console.log('注册信息:', this.data);

    wx.request({
      url: '你的注册接口URL',
      method: 'POST',
      data: {
        username: this.data.username,
        email: this.data.email,
        code: this.data.code,
        password: this.data.password
      },
      success(res) {
        // 处理注册成功的逻辑
      },
      fail() {
        // 处理请求失败的逻辑
      }
    });
  }
});

