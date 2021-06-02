canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var last_position_of_x;
var last_position_of_why;
color="black";
width_of_line=1;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if (width<992){

document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){

console.log("my_touchstart")    
color=document.getElementById("color").value;
width_of_line=document.getElementById("width").value;
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_why=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("mousetouch",my_touch_move);
function my_touch_move(e){

console.log("my_touch_move");    
current_position_of_mousex=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_mousey=e.touches[0].clientY-canvas.offsetTop;



ctx.beginPath();
ctx.strokeStyle=color;
ctxLineWidth=width_of_line;
console.log("Last Position of X and Y=");
console.log("x="+last_position_of_x+",y= "+last_position_of_why);
ctx.moveTo(last_position_of_x,last_position_of_why)
console.log("current_position_of_x_and_y")
console.log("x="+current_position_of_mousex+",y= "+current_position_of_mousey);
ctx.lineTo(current_position_of_mousex,current_position_of_mousey);
ctx.stroke();



last_position_of_x=current_position_of_mousex;
last_position_of_why-current_position_of_mousey;

}







function clearArea(){

ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);




}