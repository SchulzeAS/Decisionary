/**
 * move to the next view
 */
function next() {
	hideView(schritte[currentView]);


	disableNavElement(schritteNav[currentView]);
	modifyData(currentView); // was macht diese Funktion hier?
	if (currentView < schritte.length - 1) {
		currentView += 1;
	} else {
		currentView = 0;
	}
	document.getElementById(schritte[currentView]).style.visibility = "visible";
	document.getElementById(schritteNav[currentView]).style.backgroundColor = navActiveColor;
	specificViewChanges(currentView);
}

/**
 * move to the previous view
 */
function back() {
	hideView(schritte[currentView]);
	disableNavElement(schritteNav[currentView]);
	if (currentView > 0) {
		currentView -= 1;
	} else {
		currentView = schritte.length - 1;
	}
	document.getElementById(schritte[currentView]).style.visibility = "visible";
	document.getElementById(schritteNav[currentView]).style.backgroundColor = navActiveColor;
	specificViewChanges(currentView);
}