var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var vdom = require('vdom-virtualize');
var SuitUp = require("./suitup.js");
var dcopy = require('deep-copy');

SuitUp.VirtualDom = function(initialHtmlString) {
    
    var html = initialHtmlString;
    var tree = vdom.fromHTML(initialHtmlString);
    var rootNode = createElement(tree);
    var lock = false;
    document.body.appendChild(rootNode);
    
    this.render = function (newHtml) {
        var tree2 = vdom.fromHTML(newHtml);
        var patchNode = createElement(tree2);
        var patches = diff(tree, tree2);
        rootNode = patch(rootNode, patches);
        tree = tree2;
        html = newHtml;
    }
    
    //utilidades para acceder a la funcionalidad de la clase desde afuera
    var getTreeForHtml = function (html) {
        return vdom.fromHTML(html);
    }
    
    var getDomTree = function () {
        return tree;
    }
    
    var getDomTreeCopy = function () {
        if (tree)
            return dcopy(tree);
        else
            return getTreeForHtml(html);
    }
    
    var getHtmlForRootNode = function () {
        var target = rootNode;
        var wrap = document.createElement('div');
        wrap.appendChild(target.cloneNode(true));
        return wrap.innerHTML;
    }
    
    //receive html from updated component and patch with changes
    this.updateComponent = function (html2) {
        if(lock) {
            console.log("log activo");
            return;
        }
        lock = true;
        var node = getTreeForHtml(html2);
        node = node.children[1].children[0];
        var componentId = node.properties.attributes["data-suitup-component"];
        var patchTree = getDomTreeCopy();
        patchComponent(patchTree, node, function () {
            var patchNode = createElement(patchTree);
            var patches = diff(tree, patchTree);
            rootNode = patch(rootNode, patches);
            tree = patchTree;
            html = getHtmlForRootNode();
            lock = false;
        });
    }
        
    //find and replace updated node from virtual tree
    var patchComponent = function (parent, componentNode, callback) {
        if(!parent.children || parent.children.length == 0)
            return;
        
        for(var i = 0; i<parent.children.length; i++) {
            //podemos saltarnos el primer nivel ya que los componentes nunca están en ese nivel
            //además necesitamos la referencia al padre para poder cambiarlo
            if (parent.children[i].properties != null && 
                parent.children[i].properties.attributes != null && 
                parent.children[i].properties.attributes["data-suitup-component"] != null && 
                parent.children[i].properties.attributes["data-suitup-component"] == componentNode.properties.attributes["data-suitup-component"]) {
                parent.children[i] = {};
                parent.children[i] = dcopy(componentNode);
                callback();
                return;
            }
            patchComponent(parent.children[i], componentNode, callback);
        }
        return;
    }
}

module.exports = SuitUp;