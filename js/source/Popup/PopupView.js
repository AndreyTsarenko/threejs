/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 18.02.14
 * Time: 16:03
 * To change this template use File | Settings | File Templates.
 */
define(["../ModelViewCollectionRouter/View", "text!/templates/popup.xml"], function (View,template) {
    var Popup = View.extend({
        $main_template: _.template(template),
        onRootElementLoaded: null,
        /**
         *
         */
        initModelView: function () {
            var Model = this.model.toJSON();
            if (Model.template) {
                require([Model.template], function (teplate) {
                    Model.text += teplate;
                    this.$el = $(this.$main_template(Model));
                    this.onRootElementLoaded();
                    this.$addActionsAndEventListeners();
                }.bind(this));
            } else {
                this.$el = $(this.$main_template(Model));
                this.onRootElementLoaded();
                this.$addActionsAndEventListeners();
            }
        },
        /**
         *
         */
        $addActionsAndEventListeners: function () {
            var key;
            var model = this.model.toJSON();
            this.$el.find(".close.btn").on("click",function () {
                model.$pageRouter.closePopup(model.id);
            });
            if (model.actions) {
                for (key in model.actions) {
                    this.$el.find(key).on("click", model.actions[key]);
                }
            }
        }
    });
    return Popup;
});