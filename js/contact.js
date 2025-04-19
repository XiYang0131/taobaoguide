document.addEventListener('DOMContentLoaded', function() {
    // 联系表单提交处理
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // 在实际应用中，这里会发送数据到服务器
            // 这里我们只是模拟成功提交
            
            // 显示成功消息
            const formContainer = contactForm.parentElement;
            formContainer.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for contacting us, ${formData.name}. We'll get back to you as soon as possible.</p>
                    <button class="btn btn-secondary" id="newMessageBtn">Send Another Message</button>
                </div>
            `;
            
            // 添加"发送另一条消息"按钮的事件监听器
            document.getElementById('newMessageBtn').addEventListener('click', function() {
                location.reload();
            });
        });
    }
    
    // 实时聊天按钮处理
    const startChatBtn = document.getElementById('startChatBtn');
    
    if (startChatBtn) {
        startChatBtn.addEventListener('click', function() {
            // 在实际应用中，这里会启动聊天窗口
            // 这里我们只是显示一个简单的提示
            alert('Live chat feature coming soon! Please contact us via email for now.');
        });
    }
}); 