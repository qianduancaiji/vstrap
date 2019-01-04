
import './lib/layui/layui.js'
let url = 'http://47.105.241.24/admin/index/index'
let navImg = [
  'http://47.105.241.24:9095/images/wx_20190102160230.png',
  'http://47.105.241.24:9095/images/wx_20190102160250.png',
  'http://47.105.241.24:9095/images/wx_20190102160256.png',
  'http://47.105.241.24:9095/images/wx_20190102160303.png'
]
layui.use(['layim'], async function (layim) {
  var $ = layui.jquery;
  var config = null;
  var ajax = url => {
    return new Promise(function (resolve, reject) {
      let ajaxSetting = {
        url,
        type: 'POST',
        data: {
          ip: window.location.host
        },
        xhrFields: {
          withCredentials: true
        },
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')  
        },
        success: function (response) {
          resolve(response)
        },
        error: function (err) {
          reject(err)
        }
      }
      $.ajax(ajaxSetting)
    })
  }
  $('head').append('<link rel="stylesheet" type="text/css" href="http://47.105.241.24/static/common/layui/css/layui.css">')
  try {
    config = await ajax(url)
    console.log(config, 'config')
    
    let chatHtml = ''
    config.data.kefu.forEach((item, index) => {
      chatHtml += `<li Bl-chat>
                      ${item.type}
                      <img src="${navImg[index + 1]}">
                      <div class="nav-tips">${item.type}</div>
                  </li>`
    })
    chatHtml = `<div id="chat-container"">
                  <ul chat-wrap>
                    <li>营销型课程培训
                      <img src="http://47.105.241.24:9095/images/wx_20190102160230.png">
                      <div class="nav-tips">营销型课程培训</div>
                    </li>
                    ${chatHtml}
                    <li style="font-size: 12px;text-align:center;padding:24px 0"><span>客服电话</span><span>18530991699</span></li>
                  </ul>
                </div>`
    $('head').append(`<style>
      #chat-container {
        position: fixed;
        top: 78px;
        right: 0;
      }
      #chat-container li {
        position: relative;
        float: none;
        margin-bottom: 4px;
        cursor: pointer;
        width: 80px;
        height: 80px;
        background-color: #ccc;
        font-size: 0;
      }
      #chat-container li img{
        width: 100%;
        height: 100%;
      }
      #chat-container li .nav-tips{
        width: 200%;
        height: 100%;
        background-color: #f75139;
        position: absolute;
        top:0;
        right:80px;
        font-size:14px;
        text-align: center;
        line-height: 80px;
        display: none;
      }
      </style>`)
    $('body').append(chatHtml)

    layim.config({
      brief:true,
      init: {
        mine: {
          "username": config.data.uinfo.username,
          "id": config.data.uinfo.id,
          "status": "online",
          "avatar": config.data.uinfo.avatar
        }
      }
    })     
  } catch(e) {
    console.log(e)
  }   

  $('[chat-wrap]').eq(0).on('click', '[Bl-chat]', function(event) {
    event.preventDefault()
    config.data.kefu.forEach(item => {
      if (this.innerText.indexOf(item.type) !== -1) {
        layim.chat({
          name: item.user_name,
          type: 'friend',
          avatar: item.avatar,
          id: item.id
        })
      }
    })
  })

  $('[Bl-chat]').hover(function (event) {
    event.stopPropagation()
    $(this).find('.nav-tips').css('display', 'block')
    $(this).siblings().find('.nav-tips').css('display', 'none')
  }, function (event) {
    $(this).find('.nav-tips').css('display', 'none')
  })

  var socket = new WebSocket('ws://47.105.241.24:8282');
  //连接成功时触发
  socket.onopen = function () {
    // 登录
    var login_data = '{"type":"init","id":"' + config.data.uinfo.id + '", "username":"' + config.data.uinfo.username + '", "avatar":"' + config.data.uinfo.avatar + '", "sign":"' + "" + '"}'
    socket.send( login_data );
    console.log(login_data);
  };

  //监听收到的消息
  socket.onmessage = function(res){
    console.log(res, '收到的消息')
    var data = eval("("+res.data+")");
    switch(data['message_type']){
      // 服务端ping客户端
      case 'ping':
        socket.send('{"type":"ping"}');
        break;
      // 检测聊天数据
      case 'chatMessage':
        layim.getMessage(data.data);
        layim.chat({
          name: data.data.username,
          type: 'friend',
          avatar: data.data.avatar,
          id: data.data.id
        });
        break;
      // 离线消息推送
      case 'logMessage':
        setTimeout(function(){layim.getMessage(data.data)}, 1000);
        break;
      // 用户退出 更新用户列表
      case 'logout':
        layim.setFriendStatus(data.id, 'offline');
        break;
    }
  };
  
  //发送消息
  layim.on('sendMessage', function(res){
    console.log(res, 'aaaaaaaaa')
    var mine = JSON.stringify(res.mine);
    var to = JSON.stringify(res.to);
    var login_data = '{"type":"chatMessage","data":{"mine":' + mine + ', "to":' + to + '}}';
    socket.send( login_data );
  });
});
