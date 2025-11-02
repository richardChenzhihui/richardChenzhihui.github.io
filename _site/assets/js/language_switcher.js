document.addEventListener('DOMContentLoaded', function () {
    var STORAGE_KEY = 'lang';

    function applyLanguage(lang) {
        var isZh = (lang === 'zh');
        try {
            document.documentElement.setAttribute('lang', isZh ? 'zh-CN' : 'en');
        } catch (e) {}

        var enNodes = document.querySelectorAll('.lang-en');
        var zhNodes = document.querySelectorAll('.lang-zh');
        enNodes.forEach(function (el) { el.classList.toggle('d-none', isZh); });
        zhNodes.forEach(function (el) { el.classList.toggle('d-none', !isZh); });

        // Switch news titles using data attributes
        document.querySelectorAll('.news-title').forEach(function (el) {
            var en = el.getAttribute('data-en');
            var zh = el.getAttribute('data-zh');
            if (isZh && zh) {
                el.textContent = zh;
            } else if (en) {
                el.textContent = en;
            }
        });

        // Switch publication titles
        document.querySelectorAll('.publication-title').forEach(function (el) {
            var en = el.getAttribute('data-en');
            var zh = el.getAttribute('data-zh');
            if (isZh && zh) {
                el.textContent = zh;
            } else if (en) {
                el.textContent = en;
            }
        });
        // Switch publication venue text
        document.querySelectorAll('.pub-venue-text').forEach(function (el) {
            var pre = el.getAttribute('data-pub-pre') || '';
            var pub = el.getAttribute(isZh ? 'data-pub-zh' : 'data-pub-en') || '';
            var post = el.getAttribute('data-pub-post') || '';
            el.innerHTML = pre + (pub ? '<i>' + pub + '</i>' : '') + post;
        });
        // Switch pub-venue-misc with HTML content support
        document.querySelectorAll('.pub-venue-misc').forEach(function (el) {
            var en = el.getAttribute('data-en');
            var zh = el.getAttribute('data-zh');
            el.innerHTML = (isZh && zh) ? zh : (en || '');
        });
        document.querySelectorAll('.pub-abstract').forEach(function (el) {
            var en = el.getAttribute('data-en');
            var zh = el.getAttribute('data-zh');
            el.textContent = (isZh && zh) ? zh : (en || el.textContent);
        });
        // Switch publication links text using data-links-en/zh; fallback to existing HTML
        document.querySelectorAll('.abstract-links').forEach(function (el) {
            try {
                var links = JSON.parse(el.getAttribute(isZh ? 'data-links-zh' : 'data-links-en')) || {};
                if (Object.keys(links).length === 0) return;
                var html = '';
                Object.keys(links).forEach(function (k) {
                    var v = links[k];
                    if (typeof v === 'object') {
                        if (v.url) {
                            html += '<a target="' + (v.target || '_blank') + '" href="' + v.url + '">[' + k + ']</a> ';
                        }
                    } else if (typeof v === 'string') {
                        html += '<a target="_blank" href="' + v + '">[' + k + ']</a> ';
                    }
                });
                if (html) el.innerHTML = html.trim();
            } catch (e) {}
        });
    }

    var lang = localStorage.getItem(STORAGE_KEY) || 'en';
    applyLanguage(lang);

    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var current = localStorage.getItem(STORAGE_KEY) || 'en';
            var next = current === 'en' ? 'zh' : 'en';
            localStorage.setItem(STORAGE_KEY, next);
            applyLanguage(next);
            console.log('Language switched to:', next);
        });
        console.log('Language switcher initialized successfully');
    } else {
        console.warn('Language toggle button (#lang-toggle) not found');
    }
});


