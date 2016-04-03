var router = SuitUp.Router;

//Component are small parts of code that implements a reusable functionallity
//to create a component just use javascript inheritance
//If you need to render only static html, you should use the partial helper instead
var FriendsComponent = function() {
    SuitUp.Component.call(this, {
        template: "friends" //template name that this component is going to use
    });
    
    //define actions inside your component class
    this.onAction("listFriends", function(element) {
        $(".friends-list").toggle();
    });
    
};
FriendsComponent.prototype = Object.create(SuitUp.Component.prototype);
FriendsComponent.prototype.constructor = FriendsComponent;

//Header component
var HeaderComponent = function() {
    SuitUp.Component.call(this, {
        template: "header" //template name that this component is going to use
    });  
};
HeaderComponent.prototype = Object.create(SuitUp.Component.prototype);
HeaderComponent.prototype.constructor = HeaderComponent;



//define filters for the reactive and filter helper
SuitUp.DataFilter.extend("inverseText", function (text) {
    return text.split("").reverse().join("");
});


//Routing consist in defining a path, a template name and a callback
//req: Allows you to read parameters from url. Use req.query.parameter
//res: Allows you to render your html based on a model
var index = router.map ("/", "index", function(req, res) {
    var model = {
        request: req.param
    };
    res.render(model);
});

var users = router.map ("/users", "users", function(req, res) {
    var model = {
        request: req.param
    };
    res.render(model);
});

var friends = router.map ("/friends", "friends", function(req, res) {
    
    //if "friends" template uses actions, you must specify a component,
    //else, SuitUp will search in component registry to use a component
    
    var model = {
        request: req.param,
    };
    res.render(model);
});

var friend = router.map ("/friend/:id", "friend", function(req, res) {
    console.log(req);
    var model = {
        id: req.query.id
    };
    res.render(model);
});