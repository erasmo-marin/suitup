var $ = require("jquery");
var URL = require("url-parse");
var Handlebars = require("handlebars");
var SuitUp = require("./suitup.js");
var LocationBar = require("location-bar");

SuitUp.Router = new function() {
    //root routes
    var routes = [];
    var currentRoute = null;
    var locationBar = new LocationBar({
        pushState: false,
        hashChange: true,
        root: "/",
        silent: true,
        location: window.location,
        history: window.history
    });
    
    this.map = function (route, component, onLoad, parent) {
        var r = new SuitUp.Route(route, component, onLoad, parent);
        routes.push(r);
        return r;
    }
    
    var getRouteForUrl = function (url) {
        for(var i=0; i<routes.length; i++) {
            var route = routes[i];
            if( testUrl(route.getRoute(), url) )
                return route;
        }
    }
    
    var testUrl = function (url, req) {
        url = url.split("/");
        req = req.split("/");
        
        if(url.length != req.length)
            return false;
        
        for (var i=0; i<url.length; i++) {
            if (url[i] != req[i]) {
                if (url[i].startsWith(":")){
                    continue;
                } else {
                    return false;
                }
            }
        }
        return true;   
    }
    
    var onUrlRequest = function (url) {
        locationBar.update(url, {trigger: true});
        route = getRouteForUrl(url);
        currentRoute = route;
        var req = new SuitUp.RouteRequest(route.getRoute(), url);
        route.renderRequest(req);
    }
    
    this.getCurrentRoute = function () {
        return currentRoute;
    }
    
    //cargamos index
    $(document).ready(function() {
        var url = new URL(window.location.href );
        console.log(url);
        onUrlRequest(url.pathname);
        
        $(document).on("click", ".suitup-link", function(e){
            var url = $(this).attr("href");
            url = new URL(url);
            console.log(url);
            onUrlRequest(url.pathname);
            document.title = $(this).data("suitup-link-title");
            e.preventDefault();
            e.stopPropagation();
        });

        locationBar.start({
          pushState: true
        }); 
    });
}


module.exports = SuitUp;