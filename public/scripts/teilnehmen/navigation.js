/**
 * move to the next view
 */
function next() {
	hideView(schritteTeilnehmen[currentView]);
	disableNavElement(schritteNavTeilnehmen[currentView]);
	if (currentView < schritteTeilnehmen.length - 1) {
		currentView += 1;
	} else {
		currentView = 0;
	}
	document.getElementById(schritteTeilnehmen[currentView]).style.visibility = "visible";
	document.getElementById(schritteNavTeilnehmen[currentView]).style.backgroundColor = navActiveTeilnehmenColor;
	specificViewChanges(currentView);
}

/**
 * move to the previous view
 */
function back() {
	hideView(schritteTeilnehmen[currentView]);
	disableNavElement(schritteNavTeilnehmen[currentView]);
	if (currentView > 0) {
		currentView -= 1;
	} else {
		currentView = schritteTeilnehmen.length - 1;
	}
	document.getElementById(schritteTeilnehmen[currentView]).style.visibility = "visible";
	document.getElementById(schritteNavTeilnehmen[currentView]).style.backgroundColor = navActiveTeilnehmenColor;
	specificViewChanges(currentView);
}