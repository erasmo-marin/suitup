var URL = require("url-parse");
var SuitUp = require("./suitup.js");

/* Las rutas se asocian a un componente (nombre del template)
 * y a una dirección
 */

SuitUp.Route = function(route, component, onLoad, parent /*optional*/) {
    var route = route;
    var component = component;
    var onLoad = onLoad;
    var parent = parent;
    this.routes = [];
    this.actions = [];
    
    /*Registra una ruta anidada dentro de otra ruta*/
    this.map = function (route, component) {
        var subRoute = new SuitUp.Route(route, component);
        this.routes.push(subRoute);
        return subRoute;
    }
    
    //req: guarda las variables de la url
    //res: permite dibujar el template mediante el método res.render(model);
    this.renderRequest = function (req) {
        var res = new SuitUp.RouteResponse(component);
        onLoad(req, res);
    }
    
    this.getComponent = function () {
        return component;
    }
    
    this.getRoute = function () {
        return route;
    }
    
}

module.exports = SuitUp;