var SuitUp = require("./suitup.js");

SuitUp.RouteResponse = function (componentName) {
    var componentName = componentName;
    
    this.render = function(model) {
        console.log(model);
        var ctx = {
            model: model
        };
        var opt = {};
        var html = Handlebars.templates.application(ctx, opt);
        $("body").empty();
        $("body").append(html);
    }
}

module.exports = SuitUp;