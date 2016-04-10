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
        $(document).find(".friends-list").toggle();
    }); 
};
FriendsComponent.prototype = Object.create(SuitUp.Component.prototype);
FriendsComponent.prototype.constructor = FriendsComponent;

var FriendComponent = function() {
    SuitUp.Component.call(this, {
        template: "friend" //template name that this component is going to use
    });
};
FriendComponent.prototype = Object.create(SuitUp.Component.prototype);
FriendComponent.prototype.constructor = FriendComponent;

//Header component
var HeaderComponent = function() {
    SuitUp.Component.call(this, {
        template: "header" //template name that this component is going to use
    });
};
HeaderComponent.prototype = Object.create(SuitUp.Component.prototype);
HeaderComponent.prototype.constructor = HeaderComponent;


//Users component
var UsersComponent = function() {
    SuitUp.Component.call(this, {
        template: "users" //template name that this component is going to use
    });
};
UsersComponent.prototype = Object.create(SuitUp.Component.prototype);
UsersComponent.prototype.constructor = UsersComponent;

//Index component
var IndexComponent = function() {
    SuitUp.Component.call(this, {
        template: "index" //template name that this component is going to use
    });
};
IndexComponent.prototype = Object.create(SuitUp.Component.prototype);
IndexComponent.prototype.constructor = IndexComponent;


//define filters for the reactive and filter helper
SuitUp.DataFilter.extend("inverseText", function (text) {
    return text.split("").reverse().join("");
});


var links = [
     {
         href: "/",
         text: "home",
         title: "SuitUp"
     },
     {
         href: "/users",
         text: "Users",
         title: "SuitUp - users"
     },
     {
         href: "/friends",
         text: "Friends",
         title: "SuitUp - friends"
     },
];

var friends = [
    {
        name: "Amaro Gomez",
        id: 8783
    },{
        name: "Nick Campbell",
        id: 8723
    },{
        name: "Jhon Porter",
        id: 9892
    },{
        name: "Brad Pit",
        id: 9893
    },{    
        name: "Angelina Jolie",
        id: 1783
    }];

//Routing consist in defining a path, a component name and a callback
//req: Allows you to read parameters from url. Use req.query.parameter
//res: Allows you to render your html based on a model
router.map ("/", "IndexComponent", function(req, res) {
    var model = {
        request: req.param,
        links: links
    };
    res.render(model);
});

router.map ("/users", "UsersComponent", function(req, res) {
    var model = {
        request: req.param,
        links: links
    };
    res.render(model);
});

router.map ("/friends", "FriendsComponent", function(req, res) {
    
    //if "friends" template uses actions, you must specify a component,
    //else, SuitUp will search in component registry to use a component
    
    var model = {
        request: req.param,
        links: links,
        friends: friends
    };
    res.render(model);
});

var friend = router.map ("/friend/:id", "FriendComponent", function(req, res) {
    console.log(req);
    var model = {
        id: req.query.id,
        links: links
    };
    res.render(model);
});