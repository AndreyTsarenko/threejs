/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 12.02.14
 * Time: 11:55
 * To change this template use File | Settings | File Templates.
 */
(function () {
    ymaps.ready(function () {
        window.map = new ymaps.Map("map-canvas", {
            center: [30.484949,50.518622],
            zoom: 15
        });
    });
    window.makePlaceMark = function () {
         return new ymaps.Placemark([30.484949,50.518622], {
            hintContent: "hello world",
            balloonContent: "Andrey Tsarenko"
        });
    }
})();