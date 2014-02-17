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
                $hash_to_turn: null,
                /**
                 * @description All page collections on the website
                 */
                $pages: null,
                $pages_view: null,
                /**
                 * @description Entry point of application
                 */
                initialize: function () {
                    var pages = this.$getPages();
                    pages.then(this.$initPages.bind(this));
                    Backbone.history.start({pushState: false});
                },
                /**
                 *
                 */
                $initPages: function (pages_config) {
                    require(["Pages/pageCollection", "Pages/pageView"], function (PageCollection, PageView) {
                        this.$pages = new PageCollection(pages_config);
                        this.$pages_view = new PageView({
                            collection: this.$pages,
                            render_to: $("#page-container")
                        });
                        if (this.$hash_to_turn) {
                            this.navigate(this.$hash_to_turn, {trigger: true, replace: true});
                            this.$hash_to_turn = null;
                        } else {
                            this.navigate("#page-home", {trigger: true, replace: true});
                        }
                    }.bind(this));
                },
                /**
                 *
                 */
                $getPages: function () {
                    var def = $.Deferred();
                    $.post("get_pages", function (response, state, object) {
                        if (state === "success") {
                            def.resolve(JSON.parse(response));
                        } else {
                            alert("server is not replying");
                        }
                    }.bind(this));
                    return def.promise();
                },
                /**
                 * @description backbone routers
                 */
                routes: {
                    "page-:name/popup-:info": "turnPage"
                },
                /**
                 * @description Method that turn page if she is exist
                 * @param page_name
                 * @param [window_info] information about opened windows like -> login&warning
                 */
                turnPage: function (page_name, window_info) {
                    var pageModel,
                        pages = this.$pages;
                    if (pages) {
                        pageModel = pages.findWhere({
                            name: page_name
                        });
                        pages.toggleActiveModel(pageModel);
                        pages.openWindow(window_info);
                    } else {
                        this.$hash_to_turn = location.hash;
                        location.hash = "";
                    }
                },
                /**
                 *
                 */
                open: function (object) {
                    var origin = location.origin;
                    var hash = location.hash;
                    var part_url = hash.split("/");
                    var page, popup;
                    if (part_url > 1) {
                        
                    }

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
        paths: {
            text: "../lib/requirejs/text",
            jquery: "../lib/jQuery/jquery",
            underscore: "../lib/underscore/underscore"
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