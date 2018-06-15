var express = require('express');
var app = express();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
app.set('view engine', 'ejs');

app.get('/game/colorpicker', function(req, res){
    res.render('colorPicker');
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Color Picker Server Started');
})

const dom = new JSDOM(`<!DOCTYPE html><div id='one'></div>`);
dom.window.document.querySelector("#one").style.backgroundColor = 'black';
console.log(dom.window);

var colors = [];

function generateColor(){
   for(var i = 0; i < 6; i++){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        colors.push('rgb(' + r + ', ' + g + ', ' + b + ',)');
   }
    
}

(function(){
    generateColor();
    console.log(colors);
})();


