var SuitUp = require("./suitup.js");

SuitUp.Model = function (dataModelDefault) {
    var _dataModel = dataModelDefault;
    var _component = {};
    var onModelChangeFuncs = [];
    
    this.setComponent = function (component) {
        _component = component;
    }
    
    this.getComponent = function () {
        return _component;
    }
    
    //TODO: Add support for JSONPath
    this.get = function (varExp) {
        var st = "_dataModel";
        //if array
        if (!varExp.startsWith("[")) {
            st = st + ".";
        }
        return eval(st + varExp);
    }
    
    this.getModelData = function () {
        return _dataModel;
    }
    
    this.set = function (varExp, val) {
        var st = "_dataModel";
        //if array
        if (!varExp.startsWith("[")) {
            st = st + ".";
        }
        
        var value = val;
        var exp = st + varExp;
        
        var exp = exp + "= value";
        eval(exp);
        notifyChange();
    }
    
    this.onChange = function(func) {
        if (func != null && typeof func === "function") {
            onModelChangeFuncs.push(func);
        } else {
            console.warn("WARNING: onChange argument 1 is not a function");
        }
    }
    
    var notifyChange = function () {
        for (var i = 0; i<onModelChangeFuncs.length; i++) {
            onModelChangeFuncs[i]();
        }
    }
    
}

module.exports = SuitUp;