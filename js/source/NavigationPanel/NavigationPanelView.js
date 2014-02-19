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
        $sub_menu_tpl: _.template("<li><%= label %></li>"),
        /**
         *
         */
        initCollectionView: function (config) {
            this.$el = config.render_to;
            window.navigation = this;
            config.collection.on("reset", function () {
                this._initModelViews(this.collection, NavigationView);
                this._renderModels();
            }.bind(this));
        },
        /**
         *
         */
        initModelView: function (config) {
            var Model = config.model.toJSON();
            this.$el = $(this.$el_template(Model));
            if (Model.sub_menu instanceof Array) {
                this.$creteSubMenu(Model.sub_menu, this.$el.find("ul"));
            }
        },
        /**
         *
         * @param Configs
         */
        $creteSubMenu: function (Configs, render_to){
            var i, len;
            for (i = 0, len = Configs.length; i < len; i++) {
                render_to.append($(this.$sub_menu_tpl(Configs[i])));
            }
        }
    });
    return NavigationView;
});