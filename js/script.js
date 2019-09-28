document.getElementById("crosstoright").addEventListener("click",rightfunc);
function rightfunc(e) {
	document.getElementById("content").classList.toggle("right");
	document.getElementById("content").classList.remove("left");
    document.getElementById("colorbucket").classList.toggle("right");
	document.getElementById("colorbucket").classList.remove("left");
    document.getElementById("leftside").classList.toggle("right");
	document.getElementById("rightside").classList.remove("left");
    document.getElementById("title").classList.toggle("right");
	document.getElementById("title").classList.remove("left");
    document.getElementById("donuts").classList.toggle("right");
	document.getElementById("donuts").classList.remove("left");
    document.getElementById("rightto").classList.toggle("right");
	document.getElementById("leftto").classList.remove("left");
}

document.getElementById("crosstoleft").addEventListener("click",leftfunc);
function leftfunc(e) {
	document.getElementById("content").classList.toggle("left");
	document.getElementById("content").classList.remove("right");
    document.getElementById("colorbucket").classList.toggle("left");
	document.getElementById("colorbucket").classList.remove("right");
    document.getElementById("rightside").classList.toggle("left");
	document.getElementById("leftside").classList.remove("right");
    document.getElementById("title").classList.toggle("left");
	document.getElementById("title").classList.remove("right");
    document.getElementById("donuts").classList.toggle("left");
	document.getElementById("donuts").classList.remove("right");
    document.getElementById("leftto").classList.toggle("left");
	document.getElementById("rightto").classList.remove("right");
}

