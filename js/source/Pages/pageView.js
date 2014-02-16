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
            this._root_el = config.render_to;
            this._initModelViews(config.collection, pageView);
            this._renderModels();
        },
        /**
         *
         */
        initModelView: function (config) {
            var Model = config.model.toJSON();
            this.$el = $(this.model_tempate(Model));
        }
    });
    return pageView;
});