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
        $sub_menu_tpl: _.template("<li class=\"btn\"><%= label %></li>"),
        $collection: null,
        /**
         *
         */
        initCollectionView: function (config) {
            this.$el = config.render_to;
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
            if (Model.action) {
                this.$addListenerToMenuItem(this.$el.find(".btn.nav"), Model.action);
            }
            if (Model.sub_menu instanceof Array) {
                this.$creteSubMenu(Model.sub_menu, this.$el.find("ul"));
            }
        },
        /**
         *
         * @param Configs
         */
        $creteSubMenu: function (Configs, render_to){
            var i, len, sub_menu_el;
            for (i = 0, len = Configs.length; i < len; i++) {
                sub_menu_el = $(this.$sub_menu_tpl(Configs[i]));
                render_to.append(sub_menu_el);
                this.$addListenerToMenuItem(sub_menu_el, Configs[i].action)
            }
        },
        /**
         *
         */
        $addListenerToMenuItem: function (el, action) {
            el.on("click", function (action) {
                this.$collection.navigate(action);
            }.bind(this, action));
        }
    });
    return NavigationView;
});