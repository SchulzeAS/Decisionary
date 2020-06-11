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
	
	if(curView == 3) { // current view is"Uebersicht"
		nxtBtnText = "finish";
		console.log("Uebersicht");
		Uebersicht();
	}
	
	if(curView == 0) { // current view is"Link teilen" aka we are done
		document.getElementById("navBack").style.visibility="hidden";
	}
	
	if(curView == 4) { // current view is"Link teilen" aka we are done
		document.getElementById("navBack").style.visibility="hidden";
		document.getElementById("navNext").style.visibility="hidden";
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

/**
 * adds a new input
 * @param {string} type name of the input type
 */
function addInput(type) {
	if(type == "Alt" || type == "Crit") {
		if(type == "Alt") {
			document.getElementById(alternativesContainer).appendChild(createInput(type));
			currentPoll.addAlternative("");
		}
		if(type == "Crit") {
			document.getElementById(criteriasContainer).appendChild(createInput(type))
			currentPoll.addCriteria("");
		}
	}
	else{
		console.log("invalid type for adding input");
	}
}

/**
 * removes an input
 * @param {string} type name of the input type
 */
function removeInput(type) {
	if(type == "Alt" || type == "Crit"){
		if(type == "Alt" && altCounter > 2){
			var tempString = altId + altCounter;
			altCounter--;
		}
		if(type == "Crit" && kritCounter > 2){
			var tempString = kritId + kritCounter;
			kritCounter--;
		}
		// hier ist noch immer null wenn nichts removed werden soll FIXEN
		var toBeRemoved = document.getElementById(tempString);
			toBeRemoved.parentNode.removeChild(toBeRemoved);
	}
}

/**
 * creates a new input
 * @param {string} type name of the input type
 */
function createInput(type) {
	
	var newInputDiv = document.createElement('div');
	var newInputH3 = document.createElement('h3');
	var newInput = document.createElement('input');
	
	
	if(type == "Alt") {
		altCounter++;
		tempString = "Alternative " + altCounter + " " ;
		newInput.className = "AlternativeInputs";
		newInputDiv.className = "Alternative";
		newInputDiv.id = "alt" + altCounter;
	}
	if (type == "Crit") {
		kritCounter++;
		tempString = "Kriterium " + kritCounter + " " ;
		newInput.className = "KriteriumInputs";
		newInputDiv.className = "Kriterium";
		newInputDiv.id = "krit" + kritCounter;
	}
	newInput.addEventListener("input", onUpdateInput);
	newInputH3.innerHTML = tempString;
	newInputH3.appendChild(newInput);
	newInputDiv.appendChild(newInputH3);
	
	return newInputDiv;
}

/**
 * reacting to the input changed event
 * @param {event} e input changed event arguments
 */
function onUpdateInput(e) {
	var input = e.target.value;
	var parent = e.target.parentElement.parentElement;
	var idx;
	if (parent.className == "Alternative") {
		idx = parent.id.replace(altId, "") - 1;
		currentPoll.alternatives[idx] = input;
	} 
	if (parent.className == "Kriterium") {
		idx = parent.id.replace(kritId, "") - 1;
		currentPoll.criterias[idx].name = input;
	}
}