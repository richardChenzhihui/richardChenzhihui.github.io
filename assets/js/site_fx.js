// Site effects: navbar hairline on scroll, gentle scroll reveal.
// Purely additive — content stays fully visible if JS never runs.
(function () {
    'use strict';

    var nav = document.querySelector('.site-nav');
    if (nav) {
        var onScroll = function () {
            nav.classList.toggle('nav-scrolled', window.scrollY > 8);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) return;

    document.documentElement.classList.add('fx');

    var targets = document.querySelectorAll('.home-section, .home-work-item, .grid-item');
    targets.forEach(function (el, i) {
        el.classList.add('reveal');
        el.style.transitionDelay = (Math.min(i % 3, 2) * 55) + 'ms';
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-in');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.03 });

    targets.forEach(function (el) { observer.observe(el); });
})();
