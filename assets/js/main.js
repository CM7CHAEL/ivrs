/**
* Template Name: Dewi
* Template URL: https://bootstrapmade.com/dewi-free-multi-purpose-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Helpers
   */
  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) selectEl.forEach(e => e.addEventListener(type, listener));
      else selectEl.addEventListener(type, listener);
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  /**
   * Toggle .scrolled on body
   */
  const toggleScrolled = () => {
    const body = select('body');
    const header = select('#header');
    if (!header) return;
    const sticky = header.classList.contains('scroll-up-sticky') ||
                   header.classList.contains('sticky-top') ||
                   header.classList.contains('fixed-top');
    if (!sticky) return;
    window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
  };

  window.addEventListener('load', toggleScrolled);
  onscroll(document, toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = select('.mobile-nav-toggle');
  const mobileNavToggle = () => {
    const body = select('body');
    body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  };
  if (mobileNavToggleBtn) on('click', '.mobile-nav-toggle', mobileNavToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  on('click', '#navmenu a', function () {
    if (select('body').classList.contains('mobile-nav-active')) {
      mobileNavToggle();
    }
  }, true);

  /**
   * Toggle mobile nav dropdowns
   */
  on('click', '.navmenu .toggle-dropdown', function (e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling?.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  }, true);

  /**
   * Preloader
   */
  const preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

  /**
   * Scroll top button
   */
  const scrollTop = select('.scroll-top');
  const toggleScrollTop = () => {
    if (!scrollTop) return;
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  };
  if (scrollTop) {
    on('click', '.scroll-top', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  window.addEventListener('load', toggleScrollTop);
  onscroll(document, toggleScrollTop);

  /**
   * AOS init
   */
  const aosInit = () => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  };
  window.addEventListener('load', aosInit);

  /**
   * GLightbox
   */
  const glightbox = GLightbox({ selector: '.glightbox' });

  /**
   * Pure Counter
   */
  new PureCounter();

  /**
   * Swiper sliders
   */
  const initSwiper = () => {
    select('.init-swiper', true).forEach(swiperEl => {
      const configText = swiperEl.querySelector('.swiper-config')?.innerHTML.trim();
      if (!configText) return;
      const config = JSON.parse(configText);
      if (swiperEl.classList.contains('swiper-tab')) {
        initSwiperWithCustomPagination(swiperEl, config);
      } else {
        new Swiper(swiperEl, config);
      }
    });
  };
  window.addEventListener('load', initSwiper);

  /**
   * Isotope layout and filters
   */
  select('.isotope-layout', true).forEach(isotopeItem => {
    const layout = isotopeItem.dataset.layout || 'masonry';
    const filter = isotopeItem.dataset.defaultFilter || '*';
    const sort = isotopeItem.dataset.sort || 'original-order';

    const container = isotopeItem.querySelector('.isotope-container');
    if (!container) return;

    imagesLoaded(container, () => {
      const iso = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });

      select('.isotope-filters li', true).forEach(filterBtn => {
        filterBtn.addEventListener('click', function () {
          select('.isotope-filters .filter-active')?.classList.remove('filter-active');
          this.classList.add('filter-active');
          iso.arrange({ filter: this.dataset.filter });
          aosInit();
        });
      });
    });
  });

  /**
   * Fix hash scroll position
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const section = select(window.location.hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Scrollspy navmenu
   */
  const navmenuScrollspy = () => {
    const position = window.scrollY + 200;
    select('.navmenu a', true).forEach(link => {
      if (!link.hash) return;
      const section = select(link.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        select('.navmenu a.active', true).forEach(i => i.classList.remove('active'));
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };
  window.addEventListener('load', navmenuScrollspy);
  onscroll(document, navmenuScrollspy);

})();