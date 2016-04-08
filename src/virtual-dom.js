var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var vdom = require('vdom-virtualize');
var SuitUp = require("./suitup.js");

SuitUp.VirtualDom = function(initialHtmlString) {
    
    var tree = vdom.fromHTML(initialHtmlString);
    var rootNode = createElement(tree);
    document.body.appendChild(rootNode);
    
    this.render = function (newHtml) {
        var tree2 = vdom.fromHTML(newHtml);
        var patchNode = createElement(tree2);
        var patches = diff(tree, tree2);
        rootNode = patch(rootNode, patches);
        tree = tree2;
        console.log("done");
    }  
}

module.exports = SuitUp;