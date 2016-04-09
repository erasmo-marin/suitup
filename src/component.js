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
    var template = params.template;
    var id = SuitUp.ComponentRegistry.registerComponent(this);
    var self = this;
    var actions = {};
    var model = {};
    var firstRender = true;
    
    if (params.model) {
        model = new SuitUp.Model(params.model);
        model.setComponent(this);
        model.onChange(onModelChange);
    }
    var html = "";
    
    this.onAction = function (action, callback) {
        actions[action] = callback;
        //$(document).find('div[data-suitup-component="'+ id +'"] *[data-suitup-action="'+ action +'"]').off();
        var actionHandler = $(document).on("click change", 'div[data-suitup-component="'+ id +'"] *[data-suitup-action="'+ action +'"]', function (event) {
            console.log("Action called");
            actions[$(this).data("suitup-action")](this, event);
        });
    }
    
    this.render = function () {
        var ctx = {
            model: model.getModelData(),
            componentReference: this
        }
        html = Handlebars.templates[template](ctx);
        html = '<div class="suitup-component" data-suitup-component="'+ this.getId() +'">' + html + '</div>';
        firstRender = false;
        return html;
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
        model = new SuitUp.Model(m);
        model.setComponent(this);
        model.onChange(onModelChange);
    }
    
    this.getModel = function () {
        return model;
    }
    
    this.getData = function () {
        return model.getModelData();
    }
    
    var onModelChange = function () {
        self.render();
        SuitUp.virtualDom.updateComponent(html);
    }
    
}

module.exports = SuitUp;