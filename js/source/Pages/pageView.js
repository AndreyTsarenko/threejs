/**
 * Created with JetBrains WebStorm.
 * User: andrey
 * Date: 16.02.14
 * Time: 16:43
 * To change this template use File | Settings | File Templates.
 */
define(["../ModelViewCollectionRouter/View", "text!/templates/page_tempate.xml"], function (View, Template) {
    var pageView = View.extend({
        /**
         * @private
         */
        model_tempate: _.template(Template),
        /**
         *
         * @param config
         */
        initCollectionView: function (config) {
            this.$el = config.render_to;
            this._initModelViews(config.collection, pageView);
            this._renderModels();
        },
        /**
         *
         */
        initModelView: function (config) {
            var Model = config.model.toJSON();
            this.$el = $(this.model_tempate(Model));
            this.addEventListenerToModel(config.model);
        },
        /**
         *
         * @param Model
         */
        addEventListenerToModel: function (Model) {
            var that = this;
            Model.on("change:active", function (Model, value, i_dont_know_what_is_it) {
                if (value === true) {
                    that.$el.attr("shown", "true");
                } else {
                    that.$el.attr("shown", "false");
                }
            });
            Model.on("change:content_view", function (Model, Value, Strange_object) {
                that.$el.append(Value.$el);
            })
        }
        /**
         *
         */
    });
    return pageView;
});