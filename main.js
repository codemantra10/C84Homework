var canvas=document.getElementById("myCanvas");
BobTheBuilder=canvas.getContext("2d");
rover_width=30;
rover_height=30;
background_image="Racing GIF.gif";
rover_image="car.png";
rover_X=1;
rover_Y=1;

function roverimage(){
BG_img=new Image();
BG_img.onload=update_Background;
BG_img.src=background_image;
R_img=new Image();
R_img.onload=update_rover;
R_img.src=rover_image;
}
function update_Background(){
BobTheBuilder.drawImage(BG_img,0,0,1000,500);
}
function update_rover(){
BobTheBuilder.drawImage(R_img,rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if (keypressed=="37") {
 console.log("left")
 left();
}
if (keypressed=="38") {
    console.log("up");
    up();
   }
   if (keypressed=="39") {
    console.log("right");
    right();    
   }
   if (keypressed=="40") {
    console.log("down"); 
     down();  
   }
}
function up(){
    if (rover_Y>20) {
        rover_Y=rover_Y-20;
        update_Background();
           update_rover();  
    }
}
function down(){
    if (rover_Y<120) {
        rover_Y=rover_Y+20;
    update_Background();
    update_rover();    
    }   
}
function left(){
    if (rover_X>20) {
        rover_X=rover_X-20;
        update_Background();
        update_rover();     
    }
}
function right(){
    if (rover_X<250) {
        rover_X=rover_X+20;
        update_Background();
        update_rover();   
    }
}

