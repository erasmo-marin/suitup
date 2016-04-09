<img src="https://github.com/erasmo-marin/suitup/blob/master/example/img/logo-small.png" width="350">

**SuitUp.js** is an Open Source Javascript OOP-MVC framework that allows you to create **sweet apps** with less code. SuitUp.js comes with jquery included, so you are free to use your jquery plugins without inconvenients or hacks. Also, any change in your model instances will result in DOM updates.

SuitUp.js uses Handlebars as template language and a virtual copy of your DOM. When your data changes, SuitUp.js re-render the template and updates the virtual tree.

SuitUp.js is in early development.

##Components
Create components by extending from **SuitUp.Component** *Class*. Instances of the component are created from any template you want.

```js
var HeaderComponent = function() {
    SuitUp.Component.call(this, {
        template: "header" //handlebars template name that this component is going to use
    });
};
HeaderComponent.prototype = Object.create(SuitUp.Component.prototype);
HeaderComponent.prototype.constructor = HeaderComponent;
```

##Routing
Creating routes is easy and clean in suitup. Just specify the route, component name and a callback function.

app.js
```js
var router = SuitUp.Router;

var index = router.map ("/", "IndexComponent", function(req, res) {
    var data = {
        data: "your data"
    };
    res.render(data);
});

var friends = router.map ("/friends", "FriendsComponent", function(req, res) {
    var data = {
        friends: ["your","friends","list"] 
    };
    res.render(data);
});

var friend = router.map ("/friend/:id", "FriendComponent", function(req, res) {
    console.log(req);
    var data = {
        id: req.query.id
    };
    res.render(data);
});
```

##Templates
SuitUp uses handlebars. It's fast and easy. Call a template with the *partial* helper. Create a component instance with the *component* helper. Load templates based on url with the *context* helper. Load static templates with *partial* helper.

application.handlebars
```html
{{{component "HeaderComponent" model "header"}}}

<section class="main-content">
    {{{context}}}
</section>

{{{partial "footer"}}}
```

##Components inside other components
In SuitUp, components are encapsulated reducing coupling. You can define a component inside another component in your template and access to the component instance. For example, if you have 2 components, IndexComponent and HeaderComponent, you can define the IndexComponent template, **index.handlebars** like this: 

+ **first argument**: The Component Class.
+ **second argument**: The Model to use.
+ **third argument**: A property name to access the child Component from parent component.

index.handlebars
```html
{{{component "HeaderComponent" model "headerComponent"}}}

<p>this is index</p>
```

Then, if you have an instance of your IndexComponent called index, you can access to your header data like this:
```js
//first
var headerModel = index.headerComponent.getModel();
//then you can update your model and your Html will be updated.
var headerTitle = headerModel.set("title", "home");
//you can do this too
var link = headerModel.get("menu.links[2].href");
```

##Running example
If not enough documentation here, check the example included. Just execute the server file included in the example folder. Then open it in your browser [http://localhost:4200/](http://localhost:4200/)
```sh
$ cd example
$ node server.js
```

##Including it in your html
Just include suitup.min.js from dist folder and your compiled handlebars templates.
```html
<script src="templates.js"></script>
<script src="suitup.min.js"></script>
```

##TODO
- Model Class
- More helpers

##Contributing
You are free to hack, modify or improve this code.

##Thanks
+ [virtual-dom](https://github.com/Matt-Esch/virtual-dom) - A Virtual DOM and diffing algorithm
+ [handlebars](https://github.com/wycats/handlebars.js) - Logicless templating language
