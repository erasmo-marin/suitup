var SuitUp = require("./suitup.js");

/*url: La url que cumple el patrón
 *req: La url que pide el usuario
 */
SuitUp.RouteRequest = function (url, req) {
    var url = url;
    var params = {};
    this.query = {};
 
    url = url.split("/");
    req = req.split("/");

    if(url.length != req.length)
        return false;

    for (var i=0; i<url.length; i++) {
        if (url[i] != req[i]) {
            if (url[i].startsWith(":")) {
                var prop = url[i].slice(1, url.lenght);
                params[prop] = req[i];
            } else {
                return;
            }
        }
    }
    this.query = params;
}

module.exports = SuitUp;