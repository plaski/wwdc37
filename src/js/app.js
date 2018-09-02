import '../scss/main.scss'

import '../img/laptop.png'
import '../img/skater.png'

import smoothScroll from 'smooth-scroll'

(function() {
const navOnScroll = function() {
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    let sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    sections = [...sections, footer];
    const nav = document.querySelector('nav');
    const links = nav.querySelectorAll('a.link');
    const linksAll = [...links];
    sections.forEach(function(section) {
      const sectionRect = section.getBoundingClientRect();
      if ((scrollPosition + 50) >= sectionRect.top + scrollPosition && scrollPosition <= sectionRect.bottom + scrollPosition) {
        const nav = document.querySelector('.nav__list');
        let links = nav.querySelectorAll('a');
        links = Array.from(links);
        links.forEach(function(link) {
          const linkHref = link.getAttribute('href');
          const sectionId = '#' + section.id;
          if (linkHref == sectionId) {
            link.classList.add('nav__link--active');
          } else {
            link.classList.remove('nav__link--active');
          };
        });
      };
    });
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      linksAll.forEach(function(link) {
        link.classList.remove('nav__link--active');
      });
      linksAll[linksAll.length - 1].classList.add('nav__link--active');
    };
  });
}

const menuScroll = function() {
  const scroll = new smoothScroll('a[href*="#"]', {
    speed: 1000,
  });
  document.addEventListener('scrollStart', scrollStart, false);
}

const scrollStart = function() {
  const button = document.querySelector('header button');
  const nav = document.querySelector('nav');
  button.classList.remove('header__menu-button--close');
  nav.classList.remove('nav--open');
}

const navBackground = function() {
  window.addEventListener('scroll', function() {
    const screenWidth = window.innerWidth;
    const heroHeight = document.querySelector('.hero').offsetHeight;
    if (screenWidth >= 900) {
      const topOffset = window.pageYOffset;
      const headerNav = document.querySelector('.nav');
      if (topOffset >= heroHeight - 50) {
        headerNav.classList.add('nav--scroll');
      } else {
        headerNav.classList.remove('nav--scroll')
      }
    }
  });
}

const changeClient = function() {
  const clients = [...document.querySelectorAll('.clients__item')];
  clients.forEach(function(client) {
    client.addEventListener('click', function() {
      if (client.classList.contains('clients__item--active')) {
        return;
      }
      const author = client.dataset.author;
      const quote = client.dataset.quote;
      const imgSrc = client.querySelector('img').getAttribute('src');
      const clientImgWrap = document.querySelector('.clients__image-wrap');
      const clientImg = document.querySelector('.clients__image');
      const clientWrap = document.querySelector('.clients__text-wrap');
      clients.forEach(function(client) {
        client.classList.remove('clients__item--active');
      })
      client.classList.add('clients__item--active');
      const newImg = document.createElement('img');
      newImg.classList.add('clients__image');
      newImg.src = imgSrc;
      newImg.alt = 'client';
      clientImgWrap.insertBefore(newImg, clientImgWrap.firstChild);
      clientImg.classList.add('transition-img');
      clientWrap.classList.add('transition-text');
      clientWrap.addEventListener('transitionend', function() {
        clientWrap.children[0].innerText = quote;
        clientWrap.children[1].innerText = author;
        clientWrap.classList.remove('transition-text');
      });
      clientImg.addEventListener('transitionend', function() {
        const clientImgWrap = document.querySelector('.clients__image-wrap');
        const imgs = clientImgWrap.querySelectorAll('img');
        imgs[1].remove();
      });
    });
  });
}

const changeTeam = function() {
  const buttonPrev = document.querySelector('.carousel__button--prev');
  const buttonNext = document.querySelector('.carousel__button--next');

  buttonPrev.addEventListener('click', changePrev);
  buttonNext.addEventListener('click', changeNext);

  function changePrev() {
    const items = document.querySelectorAll('.item');
    items[0].classList.add('item--center');
    items[1].classList.add('item--right');
    items[2].classList.add('item--left');

    items[0].classList.remove('item--left');
    items[1].classList.remove('item--center');
    items[2].classList.remove('item--right');

    items[0].addEventListener('transitionend', afterPrevAnimation);

    function afterPrevAnimation() {
      items[0].parentElement.insertBefore(items[2], items[0]);
      items[0].removeEventListener('transitionend', afterPrevAnimation);
    }
  }

  function changeNext() {
    const items = document.querySelectorAll('.item');
    items[0].classList.add('item--right');
    items[1].classList.add('item--left');
    items[2].classList.add('item--center');

    items[0].classList.remove('item--left');
    items[1].classList.remove('item--center');
    items[2].classList.remove('item--right');

    items[2].addEventListener('transitionend', afterNextAnimation);

    function afterNextAnimation() {
      items[2].parentElement.insertBefore(items[0], null);
      items[2].removeEventListener('transitionend', afterNextAnimation);
    }
  }
}

const openMenu = function() {
  const button = document.querySelector('header button');
  const nav = document.querySelector('nav');
  button.addEventListener('click', function(e) {
    e.preventDefault();
    button.classList.toggle('header__menu-button--close');
    nav.classList.toggle('nav--open');
  })
}

const init = function() {
      navOnScroll();
      menuScroll();
      navBackground();
      changeClient();
      changeTeam();
      openMenu();
}
  init();
})();
