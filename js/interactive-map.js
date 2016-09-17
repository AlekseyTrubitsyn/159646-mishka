ymaps.ready(init);
var myMap;
function init() {
    myMap = new ymaps.Map('map', {
          center: [59.936557,30.321507],
    zoom: [16],
    controls: []
      }),
      myMap.behaviors.disable('scrollZoom');
      myMap.controls.add('zoomControl');

    myPlacemark = new ymaps.Placemark([59.936557,30.321507], {
    hintContent: '',
    balloonContent: ''
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/icon-map-pin.svg',
    iconImageSize: [67, 100],
    iconImageOffset: [-34, -100]
  });

  myMap.geoObjects.add(myPlacemark);
}

