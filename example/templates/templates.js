(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['application'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return ((stack1 = (helpers.component || (depth0 && depth0.component) || alias2).call(alias1,"HeaderComponent",{"name":"component","hash":{},"data":data})) != null ? stack1 : "")
    + "\n\n<section class=\"main-content\">\n    "
    + ((stack1 = ((helper = (helper = helpers.context || (depth0 != null ? depth0.context : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"context","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</section>\n\n"
    + ((stack1 = (helpers.partial || (depth0 && depth0.partial) || alias2).call(alias1,"footer",{"name":"partial","hash":{},"data":data})) != null ? stack1 : "");
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
templates['friends'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "\n<div class=\"friends-container\">\n    <p>In SuitUp you can create actions and make things move</p>\n    <div class=\"button col-30\" "
    + ((stack1 = (helpers.action || (depth0 && depth0.action) || alias2).call(alias1,"listFriends",{"name":"action","hash":{},"data":data})) != null ? stack1 : "")
    + ">Toggle friends</div>\n    <div class=\"friends-list\" style=\"display:none\">\n        <ul>\n            <li>"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,"/friend/1","Amaro Gomez","Friend 1",{"name":"link","hash":{},"data":data})) != null ? stack1 : "")
    + "</li>\n            <li>"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,"/friend/2","Nick Campbell","Friend 2",{"name":"link","hash":{},"data":data})) != null ? stack1 : "")
    + "</li>\n            <li>"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,"/friend/3","Jhonn Segura","Friend 3",{"name":"link","hash":{},"data":data})) != null ? stack1 : "")
    + "</li>\n            <li>"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,"/friend/4","Brad Pit","Friend 4",{"name":"link","hash":{},"data":data})) != null ? stack1 : "")
    + "</li>\n            <li>"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,"/friend/5","Angelina Jolie","Friend 5",{"name":"link","hash":{},"data":data})) != null ? stack1 : "")
    + "</li>\n        </ul>\n    </div>\n</div>\n\n<div class=\"friends-container\">\n    <p>Inputs, buttons or divs respond to changes using the reactive helper. Try to write some html in this html editor.</p>\n    <textarea class=\"reactive-input col-40 left\" "
    + ((stack1 = (helpers.reactive || (depth0 && depth0.reactive) || alias2).call(alias1,"text",{"name":"reactive","hash":{},"data":data})) != null ? stack1 : "")
    + "><div style=\"color: red\">Hi</div></textarea>\n    <div class=\"reactive-output col-40 right\" "
    + ((stack1 = (helpers.reactive || (depth0 && depth0.reactive) || alias2).call(alias1,"text",{"name":"reactive","hash":{},"data":data})) != null ? stack1 : "")
    + "><div style=\"color: red\">Hi</div></div>\n</div>\n\n<div class=\"friends-container\">\n    <p>Apply filters to your data. Just specify a filter in reactive helper.</p>\n    <textarea class=\"reactive-input col-40 left\" "
    + ((stack1 = (helpers.reactive || (depth0 && depth0.reactive) || alias2).call(alias1,"text2",{"name":"reactive","hash":{},"data":data})) != null ? stack1 : "")
    + "></textarea>\n    <div class=\"reactive-output col-40 right\" "
    + ((stack1 = (helpers.reactive || (depth0 && depth0.reactive) || alias2).call(alias1,"text2","inverseText",{"name":"reactive","hash":{},"data":data})) != null ? stack1 : "")
    + "></div>\n</div>";
},"useData":true});
templates['header'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<header>\n    <ul class=\"menu\">\n        <li>"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,"/","Home","SuitUp Framework",{"name":"link","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li>\n        <li>"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,"/users","Users","SuitUp Framework",{"name":"link","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li>\n        <li>"
    + ((stack1 = (helpers.link || (depth0 && depth0.link) || alias2).call(alias1,"/friends","Friends","SuitUp Framework",{"name":"link","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li>\n    </ul>\n    <div class=\"logo\"></div>\n</header>";
},"useData":true});
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p>Context Index</p>\n\n"
    + ((stack1 = (helpers.component || (depth0 && depth0.component) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"FriendsComponent","friendsComponent",{"name":"component","hash":{},"data":data})) != null ? stack1 : "");
},"useData":true});
templates['users'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>Context Users</p>";
},"useData":true});
})();