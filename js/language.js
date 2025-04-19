document.addEventListener('DOMContentLoaded', function() {
    // 初始化语言
    const currentLang = localStorage.getItem('language') || 'en';
    setLanguage(currentLang);
    
    // 设置语言选择器的当前语言
    document.getElementById('languageButton').textContent = getLanguageName(currentLang) + ' ';
    const icon = document.createElement('i');
    icon.className = 'fas fa-chevron-down';
    document.getElementById('languageButton').appendChild(icon);
    
    // 语言选择事件监听
    const langLinks = document.querySelectorAll('.language-dropdown a');
    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            document.getElementById('languageButton').textContent = getLanguageName(lang) + ' ';
            const icon = document.createElement('i');
            icon.className = 'fas fa-chevron-down';
            document.getElementById('languageButton').appendChild(icon);
        });
    });
});

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    // 加载语言文件
    fetch(`i18n/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // 更新所有带有 data-i18n 属性的元素
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (data[key]) {
                    element.textContent = data[key];
                }
            });
        })
        .catch(error => console.error('Error loading language file:', error));
}

function getLanguageName(code) {
    const languages = {
        'en': 'English',
        'zh': '中文',
        'es': 'Español',
        'ru': 'Русский'
    };
    return languages[code] || 'English';
} 