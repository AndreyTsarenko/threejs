/**
 * Created with JetBrains WebStorm.
 * User: andrey
 * Date: 16.02.14
 * Time: 16:42
 * To change this template use File | Settings | File Templates.
 */
define(["../ModelViewCollectionRouter/Collection"], function (Collection) {
    var pageCollection = Collection.extend({
        /**
         *
         * @param Collection
         * @param options
         */
        opened_window: [],
        /**
         *
         * @param Collection
         * @param options
         */
        initialize: function (Collection, options) {},
        /**
         *
         * @param window_string
         */
        openWindow: function (window_string) {
            window_string = window_string || "";
            var i, len, current_window,
                opened_window = this.opened_window,
                windows = window_string.split("&");
            for (i = 0, len = windows.length; i < len; i++) {
                current_window = this.findWhere({
                    name: windows[i]
                });
                if (current_window && !current_window.get("active")) {
                    opened_window.push(current_window);
                    current_window.set("active", true);
                }
            }
            for (i = 0, len = opened_window.length; i < len; i++) {
                if (windows.indexOf(opened_window[i].get("name")) === -1) {
                    opened_window[i].set("active", false);
                }
            }
        }

    });
    return pageCollection;
});