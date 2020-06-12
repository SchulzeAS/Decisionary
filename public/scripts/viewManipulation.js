/**
 * hides a view
 * @param {int} view index of the view to hide
 */
function hideView(view) {
	document.getElementById(view).style.visibility="hidden";
	document.getElementById(view).style.zIndex=0;
}

/**
 * makes changes to the view
 * @param {int} curView index of the current view
 */
function specificViewChanges(curView) {
	nxtBtnText = "next";
	backBtnText = "back";
	//console.log("specificViewChanges: " + curView)
	document.getElementById("navBack").style.visibility="visible";
	document.getElementById("navNext").style.visibility="visible";

	switch (curView) {
		case 0: // current view is "Step1Topic", we are at the beginning
			document.getElementById("navBack").style.visibility="hidden";
			break;
		case 3:	// current view is"Uebersicht"
			nxtBtnText = "finish";
			Uebersicht();
			break;
		case 4:	// current view is"Link teilen" aka we are done
			document.getElementById("navBack").style.visibility="hidden";
			document.getElementById("navNext").style.visibility="hidden";
			document.getElementById("InputTeilnehmen").value = baseUrl + "/" + currentPoll.id + "/" + "vote";
			document.getElementById("InputAuswerten").value = baseUrl + "/" + currentPoll.id + "/" + "result";
			break;
		default:
			break;
	}
	
	document.getElementById("navBack").innerHTML=backBtnText;
	document.getElementById("navNext").innerHTML=nxtBtnText;
}

/**
 * disables a navigation element
 * @param {string} nav identifier of the navigation element
 */
function disableNavElement(nav) {
	document.getElementById(nav).style.backgroundColor=navDisabledColor;
}

