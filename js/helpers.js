// script with functions and class that will support my game screen
// Helper functions

// Screens
function Screen(width, height){
	this.canvas = document.createElement("canvas");
	this.canvas.width = this.width = width;
	this.canvas.height = this.height = height;
	this.ctx = this.canvas.getContext("2d"); /* What do getContex*/

	document.body.appendChild(this.canvas);
    };

Screen.prototype.drawSprite = function(sp,x, y){
    this.ctx.drawImage(sp.img, sp.x, sp.y, sp.w , sp.h, x, y, sp.w, sp.h);

}; 
// prototype allow objects inherit methods and properties

// Sprite = is the grafic object that movie in the game without a trace
function Sprite(img, x, y, w, h){
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;    
};



// InputHandeler  

function InputHandeler(){
   this.down = {};
   this.pressed = {};

   var _this = this;
   document.addEventListener("keydown", function(evt){
      _this.down[evt.keyCode] = true;

   });
   document.addEventListener("keyup",function(evt){
       delete _this.down[evt.keyCode];
   	   delete _this.pressed[evt.keyCode];
   });
};

InputHandeler.prototype.isDown = function(code){
    return this.down[code];
};

InputHandeler.prototype.isPressed = function(code){
    if(this.pressed[code]){
    	return false;
    }else if(this.down[code]){
    	return this.pressed[code] = true;
    }
    return false;
};