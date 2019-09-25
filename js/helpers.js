// script with functions and class that will support my game screen
// Helper functions

// Screen
function Screen(width, height){
	this.canvas = document.createElement("canvas");
	this.canvas.width = this.width = width;
	this.canvas.height = this.height = height;
	this.ctx = this.canvas.getContext("2d");

	document.body.appendChild(this.canvas);

};
Screen.prototype.drawSprite = function(sp,x, y){
    this.ctx.drawImage(sp.img, sp.x, sp.y, sp.w , sp.h, x, y, sp.w, sp.h);

}; // prototype allow objects inherit methods and properties

// Sprite = is the grafic object that movie in the game without a trace
function Sprite(img, x, y, w, h){
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;    
};


// InputHandeler  

function InputHandler(){
   this.down = {};
   this.pressed = {};

   var_this = this;
   document.addEventListener("keydown", function(evt){
      _this.down[evt.keyCode];

   });
   document.addEventListener("keyup",function(evt){
   	delete _this.down[evt.keyCode];
   	delete _this.pressed[evt.keyCode];
   });
};

InputHandler.prototype.isDown = function(code){
    return this.down[code];
};

InputHandeler.prototype.isPressed = function(code){
    if(this.pressed[code]){
    	return false;
    }else kif(this.down[code]{
    	return this.pressed[code] = true;
    }
    return false;
};