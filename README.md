<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Friendship talks</title>
    <style>
        /* Reset default browser styles */
        body, h1, h2, h3, p, ul, li, button, input, textarea {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }
        
        /* Overall page styling */
        body {
            background-color: #f0f2f5;
            color: #1c1e21;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 16px;
            line-height: 1.6;
        }
        
        .container {
            width: 100%;
            max-width: 800px;
            padding: 20px;
            margin-top: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        
        header {
            width: 100%;
            padding: 10px 0;
            background-color: #4267B2;
            color: #ffffff;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        
        header h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        
        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
        }
        
        nav ul li {
            margin: 0 10px;
        }
        
        nav ul li a {
            color: #ffffff;
            text-decoration: none;
            font-size: 18px;
        }
        
        .module {
            margin-top: 20px;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        
        .module h2 {
            font-size: 20px;
            margin-bottom: 15px;
        }
        
        form {
            display: flex;
            flex-direction: column;
            margin-top: 10px;
        }
        
        input[type="text"], input[type="password"], textarea, input[type="file"] {
            margin-bottom: 10px;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        
        button {
            padding: 10px 20px;
            background-color: #4267B2;
            color: #ffffff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        
        button:hover {
            background-color: #3b5998;
        }
        
        .message {
            margin-bottom: 10px;
            padding: 8px;
            background-color: #f0f2f5;
            border-radius: 4px;
        }
        
        .message .user {
            font-weight: bold;
            margin-right: 5px;
        }
        
        .message .content {
            color: #1c1e21;
        }
        
        #group-chat-box {
            max-height: 300px;
            overflow-y: auto;
            padding: 10px;
            background-color: #ffffff;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-top: 10px;
        }
        
        #group-chat-box .message {
            margin-bottom: 5px;
        }
        
        #online-users-list {
            list-style-type: none;
            padding: 0;
        }
        
        #online-users-list li {
            margin-bottom: 5px;
        }
        
        .contact-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            padding: 10px;
            background-color: #f0f2f5;
            border-radius: 4px;
        }
        
        .contact-item span {
            font-weight: bold;
        }
        
        .contact-item button {
            padding: 8px 16px;
            background-color: #4267B2;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        
        .contact-item button:hover {
            background-color: #3b5998;
        }

        /* Responsive design */
        @media only screen and (max-width: 768px) {
            /* Styles for mobile and small screens */
            body {
                font-size: 14px;
            }

            .container {
                padding: 10px;
            }
        }

        @media only screen and (min-width: 769px) {
            /* Styles for large screens (e.g., computers) */
            .container {
                max-width: 800px;
                padding: 20px;
                margin-top: 20px;
            }
        }
    </style>
</head>
<body>

<header>
    <h1>Friendship Talks</h1>
    <nav>
        <ul>
            <li><a href="#">聊天</a></li>
            <li><a href="#">论坛</a></li>
            <li><a href="#">日历</a></li>
            <li><button onclick="toggleLanguage()">切换语言</button></li>
            <li><button class="logout-button" onclick="logout()">退出登录</button></li>
        </ul>
    </nav>
</header>

<div class="container">
    <section id="login-register-section" class="module">
        <h2>登录或注册</h2>
        <form id="login-form">
            <input type="text" id="username" placeholder="用户名">
            <input type="password" id="password" placeholder="密码">
            <button type="submit">登录</button>
        </form>
        <form id="register-form">
            <input type="text" id="new-username" placeholder="新用户名">
            <input type="password" id="new-password" placeholder="新密码">
            <button type="submit">注册</button>
        </form>
    </section>

    <section id="chat-section" class="module">
        <h2>聊天</h2>
        <div id="chat-box"></div>
        <form id="message-form">
            <input type="text" id="message-input" placeholder="输入消息">
            <button type="submit">发送</button>
        </form>
    </section>

    <section id="forum-section" class="module">
        <h2>论坛</h2>
        <div id="forum-posts"></div>
        <form id="post-form">
            <input type="text" id="post-title" placeholder="帖子标题">
            <textarea id="post-content" placeholder="帖子内容"></textarea>
            <input type="text" id="post-author" placeholder="作者">
            <input type="file" id="post-image" accept="image/*">
            <button type="submit">发布帖子</button>
        </form>
    </section>

    <section id="bitcoin-transfer-section" class="module">
        <h2>比特币转账</h2>
        <form id="bitcoin-transfer-form">
            <input type="text" id="bitcoin-recipient" placeholder="接收者">
            <input type="text" id="bitcoin-amount" placeholder="金额">
            <button type="submit">转账</button>
        </form>
    </section>

    <section id="link-forward-section" class="module">
        <h2>链接转发</h2>
        <form id="link-forward-form">
            <input type="text" id="link-recipient" placeholder="接收者">
            <input type="text" id="link-url" placeholder="链接 URL">
            <input type="file" id="link-file" accept="*">
            <button type="submit">发送</button>
        </form>
    </section>

    <!-- 群聊模块 -->
    <section id="group-chat-section" class="module">
        <h2>群聊</h2>
        <div id="group-chat-box">
            <div class="message">
                <span class="user">Alice:</span>
                <span class="content">你好吗？</span>
            </div>
            <div class="message">
                <span class="user">Bob:</span>
                <span class="content">很好，谢谢！</span>
            </div>
            <!-- Messages will be dynamically added here -->
        </div>
        <form id="group-message-form">
            <input type="text" id="group-message-input" placeholder="输入消息">
            <button type="submit">发送</button>
        </form>
    </section>

    <!-- 联系人和在线用户列表模块 -->
    <section id="contacts-online-section" class="module">
        <h2>联系人和在线用户</h2>
        <div id="contacts-online-container">
            <div id="contacts-section">
                <h3>联系人</h3>
                <ul id="contact-list">
                    <li class="contact-item">
                        <span>Alice</span>
                        <button onclick="sendMessage('Alice')">发送消息</button>
                    </li>
                    <li class="contact-item">
                        <span>Bob</span>
                        <button onclick="sendMessage('Bob')">发送消息</button>
                    </li>
                    <li class="contact-item">
                        <span>Mary</span>
                        <button onclick="sendMessage('Mary')">发送消息</button>
                    </li>
                    <li class="contact-item">
                        <span>John</span>
                        <button onclick="sendMessage('John')">发送消息</button>
                    </li>
                </ul>
            </div>

            <div id="online-users-section">
                <h3>在线用户</h3>
                <p id="online-count">当前在线人数: <span id="count">0</span></p>
                <ul id="online-users-list"></ul>
            </div>
        </div>
    </section>

</div>

<script src="scripts.js"></script>

</body>
</html>
