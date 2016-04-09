var SuitUp = require("./suitup.js");

//link to - action - context - component
//context: carga el template de acuerdo a la url

SuitUp.Helpers = new function () {
    /*Handlebars.registerHelper('context', function () {
        var route = SuitUp.Router.getCurrentRoute();
        console.log(this);
        var ctx = {
            model: this.model
        };
        var opt = {};
        return Handlebars.templates[route.getComponent()](ctx, opt);
    });*/
    
    
    Handlebars.registerHelper('partial', function(template, m) {
        var model = {};
        if (m) {
            model = m;
        } else {
            model = this.model;
        }        
        
        var ctx = {
            model: model
        }
        return Handlebars.templates[template](ctx);
    });

    //carga el componente requerido en el contexto actual
    Handlebars.registerHelper('component', function(componentClass, model, varName) {
        
        var component = SuitUp.ComponentRegistry.createComponentByName(componentClass);
        if (this.componentReference && varName) {
            this.componentReference[varName] = component;
        }
        
        if (model) {
            component.setModel(model);
        } else {
            component.setModel({});
        }
        return component.render();
    });
    
    //carga el componente requerido en el contexto actual
    Handlebars.registerHelper('link', function(url, text, title) {
        if (!title)
            title = document.title;
        return '<a class="suitup-link" href="'+ url +'"  data-suitup-link-title="'+ title +'">' + text + '</a>';
    });
    
    Handlebars.registerHelper('action', function(actionName) {
        var data = ' data-suitup-action="' + actionName + '" ';
        return data;
    });
    
    
    //helper that links a 
    Handlebars.registerHelper('modelVar', function(varName) {
        var data = ' data-suitup-model-var="' + varName + '" ';
        return data;
    });
    
    //TODO: Mejorar este script
    var modelVarHandler = $(document).on("keyup change", '*[data-suitup-model-var]', function () {
        //buscamos el componente padre
        var varName = $(this).data("suitup-model-var");
        var val = null;
        if($(this).is("textarea, input")) {
            val = $(this).val();
        } else {
            val = $(this).html();
        }
        
        var element = $(this);
        do {
            element = element.parent();
            if(element == null || element.length == 0)
                return;
            var componentId = parseInt(element.data("suitup-component"));
            if(!isNaN(componentId)) {
                var component = SuitUp.ComponentRegistry.getComponentById(componentId);
                var model = component.getModel();
                model.set(varName, val);
                return;
            }
            
        } while (element);   
    });
    
    
    /**Reactive elements implementation**/
    SuitUp.DataFilter = new function () {
        this.extend = function (filterName, filter) {
            this[filterName] = filter;
        }
    }
    
     //carga el componente requerido en el contexto actual
    Handlebars.registerHelper('reactive', function(varName, filter) {
        var data = ' data-suitup-reactive="' + varName + '" ';
        if(filter) {
            data = data + ' data-suitup-filter="' + filter + '" ';
        }
        return data;
    });  

    var actionHandler = $(document).on("keyup change", '*[data-suitup-reactive]', function () {
        var self = this;
        var reactive = $(this).data("suitup-reactive");
        var val = "";
        if($(this).is("textarea, input")) {
            val = $(this).val();
        } else {
            val = $(this).html();
        }
        
        $("*[data-suitup-reactive='"+ reactive +"']").each(function() {
            if (this != self) {
                
                var filter = $(this).data("suitup-filter");
                if (filter != null && SuitUp.DataFilter[filter] != null) {
                    val = SuitUp.DataFilter[filter](val);
                }
                
                if($(this).is("textarea, input")) {
                    $(this).val(val);
                } else {
                    $(this).html(val);
                }
            }
        });
        
            
    });
    
}

module.exports = SuitUp;