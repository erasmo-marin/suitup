![SuitUpJs](https://raw.githubusercontent.com/erasmo-marin/suitupjs/master/example/img/logo-small.png)

SuitUp.js is an Open Source Javascript framework that allows you to create single web apps with less code. SuitUp comes with jquery included, so you are free to use your jquery plugins without inconvenients or hacks.

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
SuitUp uses handlebars. It's fast and easy. Call a template with the *component* helper. Load templates based on url with the *context* helper. Every route has a component with an asociated template. You can reuse your components saving time.

application.handlebars
```html
{{{component "header"}}}

<section class="main-content">
    {{{context}}}
</section>

{{{component "footer"}}}
```

friend.handlebars
```html
<p>Your friend id is {{model.id}}</p>
{{{link "/" "back" "Home"}}}
```
##Running example
Just execute the server file included in the example folder. Then open it in your browser [http://localhost:4200/](http://localhost:4200/)
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
- Reactive elements
- Model Class
- More helpers
- Support for ember-like actions

##Contributing
You are free to hack, modify or improve this code.

