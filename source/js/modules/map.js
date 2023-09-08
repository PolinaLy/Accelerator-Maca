export const initMap = function () {
  if (document.querySelector('.map')) {
    let map = L.map('map').setView([55.028553, 82.928182], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    if (window.innerWidth > 1199) {
      var icon = new L.Icon({
        iconUrl: 'img/svg/marker-map.svg',
        iconSize: [60, 60],
      });
    } else if ((window.innerWidth < 1200) && (window.innerWidth > 767)) {
      var icon = new L.Icon({
        iconUrl: 'img/svg/marker-map.svg',
        iconSize: [40, 40],
      });
    } else {
      var icon = new L.Icon({
        iconUrl: 'img/svg/marker-map.svg',
        iconSize: [24, 24],
      });
    }

    L.marker([55.028553, 82.928182], {icon: icon}).addTo(map);
  }
};
