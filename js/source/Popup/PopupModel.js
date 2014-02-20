/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 18.02.14
 * Time: 16:04
 * To change this template use File | Settings | File Templates.
 */
define(["../ModelViewCollectionRouter/Model"], function (Model) {
    var Popup = Model.extend({
        defaults: {
            id: "",
            label: "",
            text: "",
//            template: "",
            actions: null
        }
    });
    return Popup;
});