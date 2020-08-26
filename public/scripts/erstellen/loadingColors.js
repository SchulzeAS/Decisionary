//navActiveColor 
//navDisabledColor 
// sets colors via javascript that wouldn't be possible with CSS
document.getElementById("navTopic").style.backgroundColor = navActiveColor;
var navElements = document.getElementsByClassName("navigator");

for (i = 0; i < navElements.length; i++) {
	navElements[i].style.backgroundColor = navDisabledColor;
}