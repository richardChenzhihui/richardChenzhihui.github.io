// Site effects: scroll reveal, metric count-up, navbar scroll state.
// All effects are additive — content stays fully visible if JS fails.
(function () {
    'use strict';

    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Navbar scroll state
    var nav = document.querySelector('.site-nav');
    if (nav) {
        var onScroll = function () {
            nav.classList.toggle('nav-scrolled', window.scrollY > 8);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    if (reducedMotion || !('IntersectionObserver' in window)) {
        return;
    }

    // Enable reveal styling only when JS is running
    document.documentElement.classList.add('fx');

    var revealTargets = document.querySelectorAll(
        '.home-section, .home-metric-card, .home-impact-card, .home-feature-card, .grid-item'
    );
    revealTargets.forEach(function (el, i) {
        el.classList.add('reveal');
        // Small stagger within card groups
        el.style.transitionDelay = (Math.min(i % 4, 3) * 60) + 'ms';
    });

    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-in');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });

    revealTargets.forEach(function (el) { revealObserver.observe(el); });

    // Metric count-up: animates the leading number, keeps any suffix ("K+", "+", …).
    // Values without a leading number (e.g. "ByteDance + StepFun") are left untouched.
    function animateValue(el) {
        var raw = el.textContent.trim();
        var m = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
        if (!m) return;
        var target = parseFloat(m[1]);
        var decimals = (m[1].split('.')[1] || '').length;
        var suffix = m[2];
        var duration = 950;
        var start = null;

        function step(ts) {
            if (start === null) start = ts;
            var p = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * eased).toFixed(decimals) + suffix;
            if (p < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = raw;
            }
        }
        requestAnimationFrame(step);
    }

    var counted = new WeakSet();
    var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !counted.has(entry.target)) {
                counted.add(entry.target);
                animateValue(entry.target);
                countObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    // Animate the language spans individually (value is duplicated in .lang-en/.lang-zh)
    document.querySelectorAll('.home-metric-value > span, .home-metric-value:not(:has(> span))').forEach(function (el) {
        countObserver.observe(el);
    });
})();
