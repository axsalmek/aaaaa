
//<![CDATA[
var vid, fullscreenbtn;
function intializePlayer(){
 vid = document.getElementById("frameFullscreen");
 fullscreenbtn = document.getElementById("fullscreenbtn");
 fullscreenbtn.addEventListener("click",toggleFullScreen,false);
}
window.onload = intializePlayer;
function toggleFullScreen(){
 if(vid.requestFullScreen){
  vid.requestFullScreen();
  screen.orientation.lock("landscape-primary");
 } else if(vid.mozRequestFullScreen){
  vid.mozRequestFullScreen();
  screen.orientation.lock("landscape-primary");
 } else if(vid.webkitRequestFullscreen){
  vid.webkitRequestFullscreen();
  screen.orientation.lock("landscape-primary");
 } else if(vid.msRequestFullscreen){
  vid.msRequestFullscreen();
  screen.orientation.lock("landscape-primary");
 }
}
