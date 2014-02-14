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
                 * @description Shown page in the website
                 */
                $active_page: {},
                /**
                 * @description All page collections on the website
                 */
                $pages: null,
                /**
                 * @description Entry point of application
                 */
                initialize: function () {
                    var page_itited = this.$initPages();
                    Backbone.history.start({pushState: true});
                },
                /**
                 *
                 */
                $initPages: function () {
                    var def = $.Deferred();
                    $.post("get_pages", function (response, state, object) {
                        if (state === "success") {
                            alert("Hello world");
                        } else {
                            alert("server is not replying");
                        }
                    });
                    return def.promise();
                },
                /**
                 * @description backbone routers
                 */
                routes: {
                    "page-:page": "turnPage"
                },
                /**
                 * @description Method that turn current page
                 * @param page_name
                 */
                turnPage: function (page_name) {
                    debugger;
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