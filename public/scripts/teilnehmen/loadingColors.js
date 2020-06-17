//navActiveColor 
//navDisabledColor 

document.getElementById(schritteNavTeilnehmen[0]).style.backgroundColor = navActiveTeilnehmenColor;
var navElements = document.getElementsByClassName("navigator");

for (i = 0; i < navElements.length; i++) {
	navElements[i].style.backgroundColor = navDisabledTeilnehmenColor;
}