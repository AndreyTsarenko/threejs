/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 18.02.14
 * Time: 16:03
 * To change this template use File | Settings | File Templates.
 */
define(["../ModelViewCollectionRouter/View"], function (View) {
    var NavigationView = View.extend({
        /**
         *
         */
        initCollectionView: function (config) {
            window.navigation = this;
            config.collection.on("set", function () {
                debugger;
            }.bind(this));
        }
    });
    return NavigationView;
});