<img src="https://github.com/erasmo-marin/suitup/blob/master/example/img/logo-small.png" width="350">

SuitUp.js is an Open Source Javascript framework that allows you to create single page web apps with less code. SuitUp comes with jquery included, so you are free to use your jquery plugins without inconvenients or hacks.

SuitUp.js is in early development. **Don't use in production.**

##Routing
Creating routes is easy and clean in suitup. Just specify the route, template name and a callback function.

app.js
```js
var router = SuitUp.Router;

var index = router.map ("/", "index", function(req, res) {
    var model = {
        data: "your data"
    };
    res.render(model);
});

var friends = router.map ("/friends", "friends", function(req, res) {
    var model = {
        friends: ["your","friends","list"] 
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
```

##Templates
SuitUp uses handlebars. It's fast and easy. Call a template with the *partial* helper. Create a component instance with the *component* helper. Load templates based on url with the *context* helper.

application.handlebars
```html
{{{component "HeaderComponent"}}}

<section class="main-content">
    {{{context}}}
</section>

{{{partial "footer"}}}
```

##Components
Create components by extending from **SuitUp.Component** class. Instances of the component are created from any template you want.

```js
var HeaderComponent = function() {
    SuitUp.Component.call(this, {
        template: "header" //template name that this component is going to use
    });
    
    //register an action callback
    this.onAction("showMenu", function(element) {
        $(".menu").show();
    });
};
HeaderComponent.prototype = Object.create(SuitUp.Component.prototype);
HeaderComponent.prototype.constructor = HeaderComponent;
```

##Components inside other components
In SuitUp, components are encapsulated reducing coupling. You can define a component inside another component in your template and access to the component instance. For example, if you have 2 components, IndexComponent and HeaderComponent, you can define the IndexComponent template, **index.handlebars** like this:

index.handlebars
```html
{{{component "HeaderComponent" "headerComponent"}}}

<p>this is index</p>
```

Then, if you have an instance of your IndexComponent called index, you can access to your header data like this:

```js
var headerModel = index.headerComponent.getModel();
//then
var headerTitle = headerModel.get("title");
//another example
var link = headerModel.get("menu.links[2].href");


```

##Running example
If not enough documentation here, check the example included. Just execute the server file included in the example folder. Then open it in your browser [http://localhost:4200/](http://localhost:4200/)
```sh
$ cd example
$ node server.js
```

##Including it in your html
Just include suitup-dist.js from dist folder and your compiled handlebars templates.
```html
<script src="templates.js"></script>
<script src="suitup-dist.js"></script>
```

##TODO
- Model Class
- More helpers

##Contributing
You are free to hack, modify or improve this code.
