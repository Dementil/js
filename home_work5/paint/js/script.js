(function (){
'use strict';
var brush = document.createElement('input'), 
	color = document.createElement('input'), 
	sizeBrush = document.createElement('input'),
    eraser = document.createElement('input');

color.classList.add('color-button');
color.setAttribute('type', 'color');
color.setAttribute('value', '#000000');

sizeBrush.setAttribute('type', 'range');
sizeBrush.setAttribute('min', '1');
sizeBrush.setAttribute('max', '10');
sizeBrush.setAttribute('step', '1');


brush.classList.add('but');
brush.setAttribute('type', 'button'); 
brush.setAttribute('value', 'brush'); 

eraser.classList.add('but');
eraser.setAttribute('type', 'button');
eraser.setAttribute('value', 'eraser'); 


var div = document.getElementById('header');
div.appendChild(color);
div.appendChild(sizeBrush);
div.appendChild(brush); 
div.appendChild(eraser);


}());




// (function () {
//     'use strict';
	
// 	var header = {
// 		init:function(id){
// 			this.elem = document.getElementById(id);
// 			this.buttons = [],
// 	},

// 	add: function(input, type, value) {
// 		var brush = document.createElement('input'){
// 			this.classList.add = 'but';
// 			this.setAttribute('type', 'button'); 
// 			this.setAttribute('value', 'brush');


// 			var color = document.createElement('input'), 
// 			var sizeBrush = document.createElement('input'),
// 			var eraser = document.createElement('input');



// 		this.elem.appendChild(input);
// 		this.buttons.push(input);
// 	}

// }





//     } ())