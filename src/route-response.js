var SuitUp = require("./suitup.js");

SuitUp.RouteResponse = function (componentClass) {
    var componentClass = componentClass;
    
    this.render = function(model) {
        console.log(model);
        var component = SuitUp.ComponentRegistry.createComponentByName(componentClass);
        component.setModel(model);
        var componentHtml = component.render();
        
        var ctx2 = {
            model: model,
            context: componentHtml
        };
        
        //render entire new html
        //Components are not re-rendered if model has not changed thanks to component helper
        var html = Handlebars.templates.application(ctx2);
        
        if (SuitUp.virtualDom == null) {
            SuitUp.virtualDom = new SuitUp.VirtualDom(html);
            return;
        }
        
        SuitUp.virtualDom.render(html);
        
    }
}

module.exports = SuitUp;