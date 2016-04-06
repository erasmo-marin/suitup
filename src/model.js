SuitUp.Model = function (dataModelDefault) {
    var _dataModel = {} || dataModelDefault;
    var _component = {};
    
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
        if (!varExp.startWith("[")) {
            st + ".";
        }
        return eval(st + varExp);
    }
    
    this.set = function (varExp, val) {
        var st = "_dataModel";
        //if array
        if (!varExp.startWith("[")) {
            st + ".";
        }
        eval(st + varExp + " = " + val);
        //redraw component on model change
        if (_component) {
            _component.render();
        }
    }
    
    //TODO
    var setBoolean = function () {
        
    }
    
    //TODO
    var setNumber = function () {
        
    }
    
    //TODO
    var setString = function () {
        
    }
}

module.exports = SuitUp;