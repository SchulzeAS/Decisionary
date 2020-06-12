//navActiveColor 
//navDisabledColor 

document.getElementById("navTopic").style.backgroundColor = navActiveColor;
var navElements = document.getElementsByClassName("navigator");

for (i = 0; i < navElements.length; i++) {
	navElements[i].style.backgroundColor = navDisabledColor;
}
