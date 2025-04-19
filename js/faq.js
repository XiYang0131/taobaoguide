document.addEventListener('DOMContentLoaded', function() {
    // FAQ 问题切换功能
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon i');
            
            // 切换回答的显示/隐藏
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
    
    // 分类标签切换功能
    const categoryTabs = document.querySelectorAll('.category-tab');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有标签的活动状态
            categoryTabs.forEach(t => t.classList.remove('active'));
            
            // 添加当前标签的活动状态
            this.classList.add('active');
            
            // 获取目标分类
            const targetCategory = this.getAttribute('data-category');
            
            // 隐藏所有分类
            faqCategories.forEach(category => {
                category.classList.remove('active');
            });
            
            // 显示目标分类
            document.querySelector(`.faq-category[data-category="${targetCategory}"]`).classList.add('active');
        });
    });
}); 