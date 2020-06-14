/**
 * hides a view
 * @param {int} view index of the view to hide
 */
function hideView(view) {
	document.getElementById(view).style.visibility = "hidden";
	document.getElementById(view).style.zIndex = 0;
}

/**
 * makes changes to the view
 * @param {int} curView index of the current view
 */
function specificViewChanges(curView) {
	document.getElementById("navBack").style.visibility = "visible";
	document.getElementById("navNext").style.visibility = "visible";

	switch (curView) {
		case 0: // current view is "Thema", we are at the beginning
			document.getElementById("navBack").style.visibility = "hidden";
			break;
		case 1:	// current view is "Alternativen"
			while (altCounter < minAlternatives) {
				addInput("Alt");
			}
			break;
		case 2: // current view is "Kriterien"
			while (critCounter < minCriterias) {
				addInput("Crit");
			}
			break;
		case 3:	// current view is "Uebersicht"
			document.getElementById("navNext").style.backgroundImage = "url('finishedBtn.png')";
			overview();
			return;
			break;
		case 4:	// current view is "Link teilen" aka we are done
			document.getElementById("navBack").style.visibility = "hidden";
			document.getElementById("navNext").style.visibility = "hidden";
			document.getElementById("InputTeilnehmen").value = baseUrl + "/" + currentPoll.id + "/" + "vote";
			document.getElementById("InputAuswerten").value = baseUrl + "/" + currentPoll.id + "/" + "result";
			break;
		default:
			break;
	}
	document.getElementById("navBack").style.backgroundImage = "url('backBtn.png')";
	document.getElementById("navNext").style.backgroundImage = "url('nextBtn.png')";
}

/**
 * disables a navigation element
 * @param {string} nav identifier of the navigation element
 */
function disableNavElement(nav) {
	document.getElementById(nav).style.backgroundColor = navDisabledColor;
}

