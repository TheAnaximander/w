// 示例函数：发送消息
function sendMessage(user) {
    console.log('向用户 ' + user + ' 发送消息');
    // 实现发送消息的逻辑
}

// 示例函数：比特币转账
document.getElementById('bitcoin-transfer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const recipient = document.getElementById('bitcoin-recipient').value.trim();
    const amount = document.getElementById('bitcoin-amount').value.trim();

    if (recipient !== '' && amount !== '') {
        // 执行比特币转账逻辑
        console.log('向 ' + recipient + ' 转账金额 ' + amount);
        // 清空表单
        document.getElementById('bitcoin-recipient').value = '';
        document.getElementById('bitcoin-amount').value = '';
    } else {
        alert('请输入接收者和金额！');
    }
});

// 示例函数：链接转发
document.getElementById('link-forward-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const recipient = document.getElementById('link-recipient').value.trim();
    const url = document.getElementById('link-url').value.trim();
    const file = document.getElementById('link-file').files[0]; // 获取上传的文件

    if (recipient !== '' && url !== '') {
        // 执行链接转发逻辑
        console.log('向 ' + recipient + ' 转发链接 ' + url);
        // 清空表单
        document.getElementById('link-recipient').value = '';
        document.getElementById('link-url').value = '';
        document.getElementById('link-file').value = ''; // 清空文件输入字段
    } else {
        alert('请输入接收者和链接！');
    }
});

// 示例代码：在页面加载时渲染论坛帖子
window.addEventListener('load', function() {
    renderForumPosts();
});

