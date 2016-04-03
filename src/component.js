var SuitUp = require("./suitup.js");

SuitUp.ComponentRegistry = new function () {
    var componentCounter = 1;
    var components = [];
    
    this.registerComponent = function (component) {
        components.push(component);
        componentCounter++;
        return componentCounter;
    }
    
    this.createComponentByName = function (className) {
        //FIXME: Find better way to do this
        var component = eval("new " + className + "()");
        this.registerComponent(component);
        return component;
    }
    
    this.getComponentById = function (id) {
        for(var i=0; i<components.length; i++) {
            if(components[i].getId() == id) {
                return components[i];
            }
        }
        return null;
    }
}


SuitUp.Component = function (params) {
    var template = null || params.template;
    var id = SuitUp.ComponentRegistry.registerComponent(this);
    var self = this;
    var actions = {};
    var model = {} || params.model;
    var html = "";
    
    this.onAction = function (action, callback) {
        actions[action] = callback;
        var actionHandler = $(document).on("click change", '*[data-suitup-action="'+ action +'"]', function () {
            actions[$(this).data("suitup-action")](this);
        });
    }
    
    this.getId = function () {
        return id;
    }
    
    this.getTemplateName = function () {
        return template;
    }
    
    this.getHtml = function () {
        return html;
    }
    
    this.setModel = function (m) {
        model = m;
    }
    
    this.getModel = function () {
        return model;
    }
    
    this.render = function () {
        var ctx = {
            model: model
        }
        html = Handlebars.templates[template](ctx);
        return html;
    }
    
}

module.exports = SuitUp;