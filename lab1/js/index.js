window.onload = function () {
    if(Kernal.isLogin()) {
        initUserInfo();
    }
    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });
    
    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click', function() {
        clickLogin();
    });
}

function search() {
    // TODO: 搜索触发后的行为
    var _input = document.getElementById('input').value;
    if (_input == '')
        alert('请输入搜索内容');
    else
        alert(_input);
    console.log('');
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="img/user.jpg" />\
                        </span>\
                        <span id="name">';
    document.getElementById('top-right').innerHTML = content;
    document.getElementById('name').textContent = username;
    document.getElementById('top-right').innerHTML += '</span></div>';
    
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}