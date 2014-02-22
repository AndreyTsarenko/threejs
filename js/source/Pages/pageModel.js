/**
 * Created with JetBrains WebStorm.
 * User: andrey
 * Date: 16.02.14
 * Time: 16:43
 * To change this template use File | Settings | File Templates.
 */
define(["../ModelViewCollectionRouter/Model"], function (Model) {
    var pageModel = Model.extend({
        defaults: {
            name: "",
            window: false,
            "content_view": null
        }
    });
});