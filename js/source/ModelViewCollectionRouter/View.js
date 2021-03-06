/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 14.02.14
 * Time: 14:15
 * To change this template use File | Settings | File Templates.
 */
define([], function () {
    return Backbone.View.extend({
        /**
         * @protected
         */
        _models_view: null,
        $collection: null,
        /**
         * @param config
         */
        initialize: function (config) {
            if (config.onRootElementLoaded) {
                this.onRootElementLoaded = config.onRootElementLoaded;
            }
            if (config.model) {
                this.$collection = config.model.collection;
                this.initModelView(config);
            }
            if (config.collection) {
                this.$collection = config.collection;
                this.initCollectionView(config);
            }
        },
        /**
         * @description Method that creates view for
         *              each model in collection
         * @param collection
         * @param View
         * @protected
         */
        _initModelViews: function (collection, View) {
            this._models_view = this._models_view || [];
            collection.forEach(function (Model) {
                this._models_view.push(new View({
                    model: Model
                }))
            }.bind(this));
        },
        /**
         * @description Method that render all models view to $el;
         * @protected
         * @param {view} [model_view]
         */
        _renderModels: function (model_view) {
            var i, len;
            if (this.$el) {
                if (model_view) {
                    this.$el.append(model_view.$el);
                } else {
                    for (i = 0, len = this._models_view.length; i < len; i++) {
                        this.$el.append(this._models_view[i].$el);
                    }
                }
            } else {
                console.log("$el in collection is not defined");
            }
        },
        /**
         *
         * @param config
         */

        initModelView: function (config) {
            console.log("Please create initModelView");
        },
        initCollectionView: function (config) {
            console.log("Please create initModelView");
        }
    });
});