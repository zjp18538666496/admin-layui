// F5 刷新iframe实现方法
var check = function(e) {
  e = e || window.event; //alert(e.which||e.keyCode);
  if ((e.which || e.keyCode) == 116) {
    if (e.preventDefault) {
      e.preventDefault();
      window.location.reload();
    } else {
      event.keyCode = 0;
      e.returnValue = false;
      window.location.reload();
    }
  }
}
if (document.addEventListener) {
  document.addEventListener("keydown", check, false);
} else {
  document.attachEvent("onkeydown", check);
}
document.oncontextmenu = function(e) { //整个页面的js事件
};

// var iframeSrc = parent.iframe.src;
// document.onkeypress = function(e){
//     e.preventDefault();
//     parent.frame.src = iframeSrc;
// }