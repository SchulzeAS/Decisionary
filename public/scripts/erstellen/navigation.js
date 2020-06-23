/**
 * move to the next view
 */
function next() {
	if (assertView())
	{
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
}

/**
 * move to the previous view
 */
function back()
{
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
/**
 * check if all inputs have been entered before moving to next view
 * */
function assertView()
{
	switch (currentView)
	{
		case 0: // current view is "Thema", we are at the beginning
			nameInput = document.getElementById("NameInput");
			startHint = document.getElementById("startHint");
			unHighlightInput(nameInput);
			hideHints(startHint);
			//startHint.style.opacity = 0;

			if (nameInput.value == "") {
				highlightInput(nameInput);
				nameInput.placeholder = "Bitte einen Namen eingeben";
				
				showHints(startHint);
				return false;
			}

			break;
		case 1:	// current view is "Alternativen"
			altFlagAssert = true;
			altHint = document.getElementById("altHint");
			hideHints(altHint);
			altsCheck = document.getElementsByClassName("AlternativeInputs");
			for (var i = 0; i < altsCheck.length; i++) {
				unHighlightInput(altsCheck[i]);
				if (altsCheck[i].value == "") {
					highlightInput(altsCheck[i]);
					altsCheck[i].placeholder = "Bitte eine Alternative eingeben";
					showHints(altHint);
					altFlagAssert = false;
				}
			}
			return altFlagAssert;

			break;
		case 2: // current view is "Kriterien"
			critFlagAssert = true; 
			critsCheck = document.getElementsByClassName("CriteriaInputs");
			critHint = document.getElementById("critHint");
			hideHints(critHint);

			for (var i = 0; i < critsCheck.length; i++) {
				unHighlightInput(critsCheck[i]);
				if (critsCheck[i].value == "") {
					highlightInput(critsCheck[i]);
					critsCheck[i].placeholder = "Bitte ein Kriterium eingeben";
					showHints(critHint);
					critFlagAssert = false;
				}
			}
			return critFlagAssert;
			break;
		case 3:	// current view is "Uebersicht"
			return true;
			break;
		case 4:	// current view is "Link teilen" aka we are done
			return true;
			break;
		default:
			return true;
	}
	return true;
}
/**
 * highlight blank input 
 * @param {any} inpt
 */

function highlightInput(inpt) {
	inpt.style = "outline:1px solid red";
}
/**
 * 
 * remove highlighting from an input previuosly highlighted
 * @param {any} inpt
 */
function unHighlightInput(inpt) {
	inpt.style = "outline:initial";
}
/**
 * firsthide function with DOMElement
 * @param {DOMElement} hnt element to hide
 */
function hideHints(hnt) {
	hnt.style.opacity = 0;
}

/**
 * second hide function with id
 * @param {string} id element to hide
 */
function hideHint(id) {
	$("#" + id).css("opacity", 0);
}
/**
 * show hints
 * @param {DOMElement} hnt element to show
 */
function showHints(hnt) {
	hnt.style.opacity = 1;
}