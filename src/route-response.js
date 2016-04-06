var SuitUp = require("./suitup.js");

SuitUp.RouteResponse = function (componentClass) {
    var componentClass = componentClass;
    
    this.render = function(model) {
        console.log(model);
        var component = SuitUp.ComponentRegistry.createComponentByName(componentClass);
        component.setModel(model);
        var componentHtml = '<div class="suitup-component" data-suitup-component="'+ component.getId() +'">' + component.render() + '</div>';
        
        var ctx2 = {
            context: componentHtml
        };
        
        var html = Handlebars.templates.application(ctx2);
        $("body").empty();
        $("body").append(html);
    }
}

module.exports = SuitUp;