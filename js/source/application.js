/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 12.02.14
 * Time: 11:55
 * To change this template use File | Settings | File Templates.
 */
(function () {
    window.app = {
        MapAPI: {}
    };
    /**
     *
     */
    function initialize () {
        require([], function (NavigationPanel, HomePage) {

        });
    };
    /**
     *
     */
    require.config({
        path: {
            text: "js/lib/require/text"
        }
    });
    /**
     *
     */
    require([
        "../lib/jQuery/jquery",
        "../lib/underscore/underscore",
        "../lib/backbone/backbone"
    ], function (jquery, underscrore, backbone) {
        initialize();
    });
})();