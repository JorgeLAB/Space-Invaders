// script with functions and class that will support my game screen
// Helper functions

function Bullet(x, y, vely, w, h, color){
  this.x = x;
  this.y = y;
  this.vely = vely;
  this.width = w;
  this.height = h;
  this.color = color;
};
Bullet.prototype.update = function(){
  this.y += this.vely;
};

// function Screens - append object in the canvas 
function Screen(width, height){
	this.canvas = document.createElement("canvas"); // create new canvas
	this.canvas.width = this.width = width;
	this.canvas.height = this.height = height;
	this.ctx = this.canvas.getContext("2d"); // provades the context of 2d renderization
 
  document.body.appendChild(this.canvas); // appendChild is the method appends a node as the last child of a node
};

// Interaction in the screen

Screen.prototype.clear= function(){  // this function eliminate one column aliens in interval frame
    this.ctx.clearRect(0, 0, this.width, this.height);

};

Screen.prototype.drawSprite = function(sp,x, y){
  this.ctx.drawImage(sp.img, sp.x, sp.y, sp.w , sp.h, x, y, sp.w, sp.h);
};

Screen.prototype.drawBullet = function(bullet){
  this.ctx.fillStyle = bullet.color;
  this.ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height); 
} 

// prototype allow objects inherit methods and properties

// Sprite = is the grafic object that movie in the game without a trace
function Sprite(img, x, y, w, h){
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;    
};

// InputHandeler = motions in the keyboard  

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