document.addEventListener('DOMContentLoaded', function() {
    // 获取语言选择器和所有可翻译元素
    const languageSelector = document.getElementById('languageSelector');
    const translatableElements = document.querySelectorAll('[data-i18n]');
    
    // 加载翻译数据
    let translations = {};
    
    // 切换语言函数
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }
    
    // 加载翻译文件
    fetch(`/i18n/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            translations[lang] = data;
            changeLanguage(lang);
        });
    
    // 语言选择器事件监听
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // 初始化语言
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    if (languageSelector) {
        languageSelector.value = savedLanguage;
    }
    changeLanguage(savedLanguage);
}); 