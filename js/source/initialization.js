/**
 * Created with JetBrains WebStorm.
 * User: a.tsarenko
 * Date: 12.02.14
 * Time: 11:55
 * To change this template use File | Settings | File Templates.
 */
(function () {
    /**
     * @description initialization of application
     */
    function initialize () {
        require(["PageRouter/pageRouter","NavigationPanel/NavigationPanelCollection"],
            function (pageRouter, NavigationPanelCollection) {
            var Router = new pageRouter();
            var NavigationPanelCollection = new NavigationPanelCollection([], Router);
            require(["PopupLogin/PopupLoginView", "PopupLogin/PopupLoginModel"], function (View, Model) {
                var Model = new Model({
                    "id": "login",
                    "label": "Login",
                    "template": "text!/templates/login_body.xml",
                    $pageRouter: Router,
                    "actions": {
                        ".registration": function () {
                            Router.open({
                                popup: "registration"
                            }, true);
                        }
                    }
                });
                var View = new View({
                    model: Model,
                    onRootElementLoaded: function () {
                        Router.setPageContent(Model.get("id"), View);
                    }
                });
            })
            require(["PopupRegistration/PopupRegistrationView", "PopupRegistration/PopupRegistrationModel"], function (View, Model) {
                var Model = new Model({
                    "id": "registration",
                    "label": "Регистрация",
                    "template": "text!/templates/registration_body.xml",
                    $pageRouter: Router,
                    "actions": {
                        ".registration": function () {
                            Router.open({
                                popup: "registration"
                            }, true);
                        }
                    }
                });
                var View = new View({
                    model: Model,
                    onRootElementLoaded: function () {
                        Router.setPageContent(Model.get("id"), View);
                    }
                });
            })

        });
    };
    /**
     * @description configuration of require js
     */
    require.config({
        paths: {
            text: "../lib/requirejs/text",
            jquery: "../lib/jQuery/jquery",
            underscore: "../lib/underscore/underscore"
        }
    });
    /**
     * @description Load backbone js
     */
    require([
        "../lib/jQuery/jquery",
        "../lib/underscore/underscore",
        "../lib/backbone/backbone"
    ], function (jquery, underscrore, backbone) {
        initialize();
    });
})();