/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 18.02.14
 * Time: 11:22
 * To change this template use File | Settings | File Templates.
 */
define(["../ModelViewCollectionRouter/Router"], function (Router) {
    var pageRouter = Router.extend({
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
                    render_to: $("body")
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
            "page-:name": "turnPage",
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
         * @function open necessary page of popup
         * @param {Object} object
         * {
                 *      object.page, // id of page
                 *      object.popup // id of popup up
                 * }
         */
        open: function (object) {
            var part_url = location.hash.split("/");
            var page, popup = [], i, len, popup_hash;
            if (part_url.length > 1) {
                popup  = part_url[1].replace("popup-", "").split("&");
            }
            page = part_url[0].replace("#page-", "");
            if (object.page) {
                page = object.page;
            }
            if (object.popup) {
                if (object.popup instanceof Array) {
                    for (i = 0, len = object.popup.length; i < len; i++) {
                        if (popup.indexOf(object.popup[i]) === -1) {
                            popup.push(object.popup[i]);
                        }
                    }
                } else {
                    if (popup.indexOf(object.popup) === -1) {
                        popup.push(object.popup);
                    }
                }
            }
            popup_hash = popup.length ? "/popup-" + popup.join("&") : "";
            this.navigate("#page-" + page + popup_hash, {trigger: true, replace: true});
        },
        /**
         * @description Method that close popup menu
         * @param {String | Array} popup_ids
         */
        closePopup: function (popup_ids) {
            var popup, i, len, position, popup_hash;
            var part_url = location.hash.split("/");
            if (part_url.length > 1) {
                popup  = part_url[1].replace("popup-", "").split("&");
            }
            if (popup_ids instanceof Array) {
                for (i = 0; popup_ids[i]; i++) {
                    position =  popup.indexOf(popup_ids[i]);
                    if (position !== -1) {
                        popup.splice(position, 1); i--;
                    }
                }
            } else {
                position =  popup.indexOf(popup_ids);
                popup.splice(position, 1);
            }
            popup_hash = popup.length ?   "/popup-" + popup.join("&") : "";
            this.navigate(part_url[0] + popup_hash, {trigger: true, replace: true});
        }
    });
    return pageRouter;
});