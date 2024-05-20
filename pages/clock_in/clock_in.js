const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'



Page({
  data: {
    date: String, //后续迭代可以把这个换成date数据类型，先这样吧
    time: Int16Array,
    position: String,
    radioValue: '1',
    fileList: []
  },
  onDateChange: function(event) {
    this.setData({
      date: event.detail.value 
    });
  },

  onTimeChange: function(event) {
    this.setData({
      time: event.detail.value 
    });
  },

  onPositionChange: function(event) {
    this.setData({
      position: event.detail.value 
    });
  },

  afterRead(event) {
    const { file } = event.detail;
    // 此处可以执行上传操作
    const { fileList = [] } = this.data;
    fileList.push({ ...file, url: file.path });
    this.setData({ fileList });
  },
  onChange(event) {
    this.setData({
      radioValue: event.detail
    });
  },
  onPost:function() {
    // 在这里进行基本的输入验证
    if (!this.data.date || !this.data.time || !this.data.position) {
      wx.showToast({
        title: '请填写所有字段',
        icon: 'none'
      });
      return;
    }
    const regex = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
    if (!regex.test(this.data.date)) {
      wx.showToast({
        title: '日期不合法',
        icon: 'none'
      });
      return;
    }

    wx.request({
      url: 'https://116.63.206.98/',
      method: 'POST',
      data: {
        //一会儿写
      },
      success(res) {
        // 处理注册成功的逻辑
        if(res.data.res == 200){
          this.setData({
          codeSending: true,
          btnText: `已发送(${this.data.countDown}s)`
        });
      }
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
})