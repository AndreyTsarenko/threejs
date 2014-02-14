/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 12.02.14
 * Time: 11:55
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * @description initialization of application
     */
    function initialize () {
        require(["ModelViewCollectionRouter/Router"], function (Router) {
            Application = Router.extend({
                /**
                 * @description Entry point of application
                 */
                initialize: function () {
                    debugger;
                },
                /**
                 * @description backbone routers
                 */
                routes: {

                }
            });
            window.app = new Application();
        });
    };
    /**
     * @description configuration of require js
     */
    require.config({
        path: {
            text: "js/lib/require/text"
        }
    });
    /**
     * @description Load backbone js
     */
    require([
        "../lib/jQuery/jquery",
        "../lib/underscore/underscore",
        "../lib/backbone/backbone"
    ], function (jquery, underscrore, backbone) {
        initialize();
    });
})();