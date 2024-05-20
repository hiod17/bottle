// pages/community/detail.js
// pages/community/detail.js
// pages/community/detail.js
Page({
  data: {
    image: '',
    time: '',
    person: '',
    location: '',
    type: '',
    brief: '',
    likesCount: 0,
    comments: []
  },

  onLoad(options) {
    this.setData({
      image: decodeURIComponent(options.image),
      time: decodeURIComponent(options.time),
      person: decodeURIComponent(options.person),
      location: decodeURIComponent(options.location),
      type: decodeURIComponent(options.type),
      brief: decodeURIComponent(options.brief)
    });
    // 这里调用加载评论的函数
     this.loadCommentsLocally();  // 本地测试
    //this.loadCommentsFromServer();  // 从服务器加载
  },
  handleLike: function() {
    this.setData({
      likesCount: this.data.likesCount + 1
    });
  },

  // 举报处理
  handleReport: function() {
    wx.showToast({
      title: '已举报',
      icon: 'none'
    });
  },

  // 提交评论
  submitComment: function(event) {
    // 假设评论内容从event.detail.value中获取
    let newComment = {
      id: new Date().getTime(),  // 生成一个简单的ID
      author: 'New User',
      content: event.detail.value
    };
    this.setData({
      comments: [...this.data.comments, newComment]
    });
  },
  loadCommentsLocally: function() {
    const comments = [
      { 
        id: 1, 
        author: 'Alice', 
        content: 'Great picture!', 
        subComments: [
          { id: 101, author: 'Bob', content: 'Agreed!' },
          {id: 101, author: 'Bob', content: 'Agreed!'}
        ]
      },
      { 
        id: 2, 
        author: 'Charlie', 
        content: 'Thanks for sharing.', 
        subComments: []
      }
    ];
    this.setData({
      comments: comments
    });
},
loadCommentsFromServer: function() {
  wx.request({
    url: 'https://yourdomain.com/api/comments',  // 你的API端点
    method: 'GET',
    success: (res) => {
      if (res.statusCode === 200) {
        this.setData({
          comments: res.data
        });
      } else {
        wx.showToast({
          title: '加载失败',
          icon: 'none'
        });
      }
    },
    fail: () => {
      wx.showToast({
        title: '请求失败',
        icon: 'none'
      });
    }
  });
}


})

