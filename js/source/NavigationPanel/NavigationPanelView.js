/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 18.02.14
 * Time: 16:03
 * To change this template use File | Settings | File Templates.
 */
define(["../ModelViewCollectionRouter/View",
    "text!/templates/navigation_element.xml"], function (View, Navigation_element) {
    var NavigationView = View.extend({
        $el_template: _.template(Navigation_element),
        /**
         *
         */
        initCollectionView: function (config) {
            this.$el = config.render_to;
            window.navigation = this;
            config.collection.on("reset", function () {
                this._initModelViews(this.collection, NavigationView);
                console.log("start collection");
                this._renderModels();
                console.log("end collection");
            }.bind(this));
        },
        /**
         *
         */
        initModelView: function (config) {
            var Model = config.model.toJSON();
            this.$el = $(this.$el_template(Model));
//            this.$el.html(this.$el_template(Model));
        }
    });
    return NavigationView;
});