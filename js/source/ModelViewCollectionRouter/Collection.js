/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 14.02.14
 * Time: 14:15
 * To change this template use File | Settings | File Templates.
 */
define([], function () {
    return Backbone.Collection.extend({
        /**
         *
         */
        $active_model: null,
        /**
         * @description method that set active model in collection
         * @public
         * @param {Object} Model Backbone Model
         */
        setActiveModel: function (Model) {
            if (this.$active_model) {
                this.$active_model.set("active", false);
            }
            Model.set("active", true);
            this.$active_model = Model;
        },
        /**
         * @description Method that return active model in collection
         * @public
         * @returns {Object} Backbone model
         */
        getActiveModel: function () {
            return this.$active_model;
        }
    });
});