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
			addPencil();
			makeNavClickable();
			addMouseHover();
			return;
			break;
		case 4:	// current view is "Link teilen" aka we are done
			document.getElementById("navBack").style.visibility = "hidden";
			document.getElementById("navNext").style.visibility = "hidden";
			document.getElementById("InputTeilnehmen").value = baseUrl + "/" + currentPoll.id + "/" + "vote";
			document.getElementById("InputAuswerten").value = baseUrl + "/" + currentPoll.id + "/" + "result";
			makeNavUnclickable();
			removePencil()
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


/**
 * adds a pencil to the first three nav Elements
 * to show the user that he can click the nav element to jump to view
 */
function addPencil(){
	pencils = document.getElementsByClassName("pencil");
	
	for (var i = 0; i < pencils.length; i++) {
		pencils[i].style.visibility="visible";
	}
}

/**
 * removes the pencil of the first three nav Elements
 */
function  removePencil(){
	pencils = document.getElementsByClassName("pencil");
	
	for (var i = 0; i < pencils.length; i++) {
		pencils[i].style.visibility="hidden";
	}
}

/**
 * changes the view when clicking a nav element on the top
 * @param {int} the view to jump to
 */
function clickToChangeView(view){
	if(clickViewBool == true){
		hideView(schritte[currentView]);
		disableNavElement(schritteNav[currentView]);
		modifyData(currentView); // was macht diese Funktion hier?
		currentView = view;
		
		document.getElementById(schritte[currentView]).style.visibility = "visible";
		document.getElementById(schritteNav[currentView]).style.backgroundColor = navActiveColor;
		
		specificViewChanges(view);
	}
}


/**
 * sets a boolean that allows nav elements on the top to be clicked to change views
 */
function makeNavClickable(){
	console.log("making clickable");
	clickViewBool = true;
}
 
 
/**
 * add on click events for the nav elements
 */
function makeNavUnclickable(){
	clickViewBool = false;
	for (var i = 0; i < schritteNav.length-1; i++) {
		$("#"+schritteNav[i]).mouseenter(function() {
			$(this).css("cursor", "auto");
			$(this).css("backgroundColor",navDisabledColor);
		})
	}
}

function addMouseHover(){
	for (var i = 0; i < schritteNav.length-1; i++) {
		$("#"+schritteNav[i]).mouseenter(function() {
			$(this).css("cursor", "pointer").css("backgroundColor",navActiveColor);
		}).mouseleave(function() {
			$(this).css("backgroundColor",navDisabledColor);
		});
	}
}