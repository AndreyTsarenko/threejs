/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 18.02.14
 * Time: 16:03
 * To change this template use File | Settings | File Templates.
 */
define(["../ModelViewCollectionRouter/Collection", "./NavigationPanelModel",
    "./NavigationPanelView"], function (Collection, Model, View) {
    var NavigationCollection = Collection.extend({
        /**
         * @description Define
         * @param collection
         * @param pageRouter
         */
        model: Model,
        $pageRouter: null,
        $view: null,
        /**
         *
         * @param collection
         * @param pageRouter
         */
        initialize: function (collection, pageRouter) {
            this.$pageRouter = pageRouter;
            this.$view = new View({
                collection: this,
                render_to: $("#navigation-panel")
            });
            $.post("get_navigation", function (resp) {
                var config = JSON.parse(resp);
                this.reset(config);
            }.bind(this));
        },
        /**
         * @description Method that is doing navigation on page
         * @param {object} path
         */
        navigate: function (path) {
            this.$pageRouter.open(path, true);
        }
    });
    return NavigationCollection;
});