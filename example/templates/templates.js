(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['application'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return ((stack1 = (helpers.component || (depth0 && depth0.component) || alias2).call(alias1,"HeaderComponent",(depth0 != null ? depth0.model : depth0),"header",{"name":"component","hash":{},"data":data})) != null ? stack1 : "")
    + "\n\n<section class=\"main-content\">\n    "
    + ((stack1 = ((helper = (helper = helpers.context || (depth0 != null ? depth0.context : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"context","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</section>\n\n"
    + ((stack1 = (helpers.partial || (depth0 && depth0.partial) || alias2).call(alias1,"footer","footer",{"name":"partial","hash":{},"data":data})) != null ? stack1 : "");
},"useData":true});
templates['footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer>\n    Copyright 2016 - Erasmo Marín - erasmo.marin@gmail.com\n</footer>";
},"useData":true});
templates['friend'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p>El id es "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.id : stack1), depth0))
    + "</p>";
},"useData":true});
templates['friends'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "                <li>"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,(helpers.concat || (depth0 && depth0.concat) || alias2).call(alias1,"/friend/",(depth0 != null ? depth0.id : depth0),{"name":"concat","hash":{},"data":data}),(depth0 != null ? depth0.name : depth0),(depth0 != null ? depth0.name : depth0),{"name":"link","hash":{},"data":data})) != null ? stack1 : "")
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.lambda, alias4=container.escapeExpression;

  return "\n<div class=\"friends-container\">\n    <p>In SuitUp you can create actions and make things move</p>\n    <div class=\"button col-30\" "
    + ((stack1 = (helpers.action || (depth0 && depth0.action) || alias2).call(alias1,"listFriends",{"name":"action","hash":{},"data":data})) != null ? stack1 : "")
    + ">Toggle friends</div>\n    <div class=\"friends-list\" style=\"display:none\">\n        <ul>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.friends : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n</div>\n\n<div class=\"friends-container\">\n    <p>Inputs, buttons or divs respond to changes using the reactive helper. Try to write some html in this html editor.</p>\n    <textarea class=\"reactive-input col-40 left\" "
    + ((stack1 = (helpers.modelVar || (depth0 && depth0.modelVar) || alias2).call(alias1,"text",{"name":"modelVar","hash":{},"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.text : stack1), depth0))
    + "\"></textarea>\n    <div class=\"reactive-output col-40 right\">"
    + alias4(alias3(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.text : stack1), depth0))
    + "</div>\n</div>";
},"useData":true});
templates['header'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <li>"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.href : depth0),(depth0 != null ? depth0.text : depth0),(depth0 != null ? depth0.title : depth0),{"name":"link","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<header>\n    <ul class=\"menu\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.links : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n    <div class=\"logo\"></div>\n</header>";
},"useData":true});
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Context Index</p>";
},"useData":true});
templates['users'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Context Users</p>";
},"useData":true});
})();