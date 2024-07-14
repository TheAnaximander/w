let currentLanguage = 'zh-CN';

const languageText = {
    'zh-CN': {
        'site-title': '社交网站',
        'chat': '聊天',
        'forum': '论坛',
        'calendar': '日历',
        'switch-language': '切换语言',
        'send': '发送',
        'publish': '发布帖子',
        'add-event': '添加事件',
        'contacts': '通讯录',
        'group-chat': '群聊',
        'register': '注册'
    },
    'en': {
        'site-title': 'Social Website',
        'chat': 'Chat',
        'forum': 'Forum',
        'calendar': 'Calendar',
        'switch-language': 'Switch Language',
        'send': 'Send',
        'publish': 'Publish Post',
        'add-event': 'Add Event',
        'contacts': 'Contacts',
        'group-chat': 'Group Chat',
        'register': 'Register'
    }
};

// 初始状态：未注册用户
let userLoggedIn = false;

// 切换语言函数
function toggleLanguage() {
    currentLanguage = (currentLanguage === 'zh-CN') ? 'en' : 'zh-CN';
    updatePageLanguage();
}

// 更新页面语言函数
function updatePageLanguage() {
    const elementsToUpdate = document.querySelectorAll('h1, h2, [data-lang], button[type="submit"]');
    elementsToUpdate.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (key) {
            element.textContent = languageText[currentLanguage][key];
        }
    });
}

// 加载页面时初始化数据和状态
window.onload = function() {
    if (!userLoggedIn) {
        // 未注册用户只显示注册表单
        document.getElementById('register-form').style.display = 'block';
        document.querySelectorAll('.module').forEach(module => {
            module.style.display = 'none';
        });
    } else {
        // 注册用户显示所有功能模块
        document.getElementById('register-form').style.display = 'none';
        document.querySelectorAll('.module').forEach(module => {
            module.style.display = 'block';
        });
        // 加载其他初始化数据
        loadChatMessages();
        loadForumPosts();
        loadCalendarEvents();
        loadContactList();
    }
    updatePageLanguage();
};

// 注册模块
let userDatabase = ['Alice', 'Bob']; // 初始用户数据库

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username-input');
    const username = usernameInput.value.trim();
    if (username !== '' && !userDatabase.includes(username)) {
        userDatabase.push(username);
        usernameInput.value = '';
        userLoggedIn = true; // 标记用户已登录
        // 更新通讯录
        contactList.push({ username: username });
        loadContactList(); // 重新加载通讯录
        // 显示所有功能模块
        document.getElementById('register-form').style.display = 'none';
        document.querySelectorAll('.module').forEach(module => {
            module.style.display = 'block';
        });
        // 加载其他初始化数据
        loadChatMessages();
        loadForumPosts();
        loadCalendarEvents();
    }
});
// 假设有一个用户数据库
let userDatabase = ['Alice', 'Bob'];

// 注册表单提交事件
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username-input').value.trim();
    const passwordInput = document.getElementById('password-input').value.trim();

    if (usernameInput !== '' && passwordInput !== '') {
        if (!userDatabase.includes(usernameInput)) {
            // 用户名可用，保存到数据库
            userDatabase.push(usernameInput);
            alert('注册成功！');
            // 假设注册成功后自动登录
            login(usernameInput);
        } else {
            alert('用户名已存在，请选择其他用户名！');
        }
    } else {
        alert('请输入用户名和密码！');
    }
});

// 登录函数
function login(username) {
    // 假设登录成功后的操作
    alert(`欢迎回来，${username}！`);
    // 显示其他功能模块，隐藏注册表单
    showLoggedInModules();
}

// 登录表单提交事件
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    // 假设这里验证用户名和密码的逻辑，省略实际验证部分
    if (username === 'Alice' && password === '123456') {
        login(username);
    } else {
        alert('用户名或密码错误！');
    }
});

// 显示登录后的功能模块
function showLoggedInModules() {
    document.getElementById('register-form').style.display = 'none';
    // 假设显示其他功能模块的代码
    document.querySelectorAll('.module').forEach(module => {
        module.style.display = 'block';
    });
}

