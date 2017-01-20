console.log("Hello? Iz dis wurking??!!")

function stopMoveRotate(){
  document.getElementByid('rotate', 'skew').style.webkitAnimationPlayState = "paused";
}

function reverseMoveRotate() {
document.getElementByid('rotate', 'skew').style.webkitAnimationDirection = "reverse";
document.getElementByid('rotate', 'skew').style.webkitAnimationPlayState = "running";
}

function speedX5() {
  document.getElementByid('rotate', 'skew').style.webktiAnimationDuration = "1s";
  document.getElementByid('rotate', 'skew').style.webkitAnimationPlayState = "running";
}