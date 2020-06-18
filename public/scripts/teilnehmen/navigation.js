var alternativeRatingViewFlag = false;

/**
 * move to the next view
 */
function next() {
	
	if (!alternativeRatingViewFlag) {
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
		console.log(currentView);
		if (currentView == 2) { // reached the alternative ratings view where we will "fake" move next, but stay at current view
			alternativeRatingViewFlag = true;
        }
	} else {
		console.log("debug in nav.js " +currentAlternative+ " of "+currentPoll.alternatives.length-1);
		if (validateAllInputsAlternative()) {
			if (currentAlternative >= currentPoll.alternatives.length-1) {
				alternativeRatingViewFlag = false;
				next();
			} else {
				nextAlternative();
			}
		} else {
			unvalidatedViewAlternative(); // not all criterias rated
        }
    }
}

/**
 * move to the previous view
 */
function back() {
	if (!alternativeRatingViewFlag) {
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
		if (currentView >= 2) { // reached the alternative ratings view where we will "fake" move next, but stay at current view
			alternativeRatingViewFlag = true;
		}
	} else {
		if (currentAlternative <= 0) {
			alternativeRatingViewFlag = false;
			back();
		} else {
			backAlternative();
        }
    }
}