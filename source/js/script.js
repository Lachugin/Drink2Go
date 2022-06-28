const navMain = document.querySelector('.site-list');
const navLinks = document.querySelectorAll('.site-list__link');
const navToggle = document.querySelector('.user-list__toggle');

navLinks.forEach(listItems => {
  listItems.classList.remove('site-list__link--nojs');
});

navMain.classList.remove('site-list--nojs');
navToggle.classList.remove('user-list__toggle-off-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('site-list--active')) {
    navMain.classList.toggle('site-list--active');
    navToggle.classList.toggle('user-list__toggle-close');
    navLinks.forEach(listItems => {
      listItems.classList.toggle('site-list__link--active');
    });
  } else {
    navToggle.classList.toggle('user-list__toggle-close');
    navMain.classList.toggle('site-list--active');
    navLinks.forEach(listItems => {
      listItems.classList.toggle('site-list__link--active');
    });
  }
});

const map = L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 16);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/map-icon.svg',
  iconSize: [38, 50],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
  
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});

// slider

//   init Swiper:
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-products__next',
      prevEl: '.swiper-products__prev',
    },
  });

  // new-products__item--flat-white