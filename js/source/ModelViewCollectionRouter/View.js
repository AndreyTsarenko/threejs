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
        _models_view: [],
        _root_el: null,
        /**
         * @param config
         */
        initialize: function (config) {
            if (config.model) {
                this.initModelView(config);
            }
            if (config.collection) {
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
            collection.forEach(function (Model) {
                this._models_view.push(new View({
                    model: Model
                }))
            }.bind(this));
        },
        /**
         * @description Method that render all models view to root_el;
         * @protected
         */
        _renderModels: function () {
            var i, len;
            if (this._root_el) {
                for (i = 0, len = this._models_view.length; i < len; i++) {
                    this._root_el.append(this._models_view[i].$el);
                }
            } else {
                console.log("_root_el is not defined");
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