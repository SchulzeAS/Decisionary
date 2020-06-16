var originalBtnPos; // save the original position of the add input button

/**
 * adds a new input
 * @param {string} type name of the input type
 */
function addInput(type) {
	if (type == "Alt" || type == "Crit") {
		if (type == "Alt" && altCounter < maxAlternatives) {
			document.getElementById(alternativesContainer).appendChild(createInput(type));
			currentPoll.addAlternative("");
		}
		if (type == "Crit" && critCounter < maxCriterias) {
			document.getElementById(criteriasContainer).appendChild(createInput(type))
			currentPoll.addCriteria("");
		}
	}
	else {
		console.log("invalid type for adding input");
	}
}

/**
 * removed a specific div containing an input
 * and moves all other elements up
 * @param {string} div Id to be removed
 */
function removeSpecificInput(divId) {
	
	var divToBeRemoved = document.getElementById(divId);
	if (divId.includes(altId) && altCounter > minAlternatives) {
		
		var index = divId.replace(altId, '');
		altCounter--;
		divToBeRemoved.remove();
		var container = document.getElementById('alternativesContainer');
		for (let i = 0; i < container.childElementCount; i++) {
			// change id of remaining inputs to new position
			const element = container.children[i];
			var elementIndex = element.id.replace(altId, '');
			if (elementIndex > index) {
				element.id = altId + (elementIndex - 1);
			}
		}
		updateSpanNumbers("AlternativeSpanNumber");
	}
	if (divId.includes(critId) && critCounter > minCriterias) {
		
		var index = divId.replace(critId, '');
		critCounter--;
		divToBeRemoved.remove();
		var container = document.getElementById('criteriasContainer');
		for (let i = 0; i < container.childElementCount; i++) {
			// change id of remaining inputs to new position
			const element = container.children[i];
			var elementIndex = element.id.replace(critId, '');
			if (elementIndex > index) {
				element.id = critId + (elementIndex - 1);
			}
		}
		updateSpanNumbers("CriteriaSpanNumber");
	}

	if (critCounter < maxCriterias) {
		showBtn(document.getElementById("addCriteriaButton"));
	}
	if (altCounter < maxAlternatives) {
		showBtn(document.getElementById("addAlternativeButton"));
	}

}

/**
 * updates numbering after removing an input
 * @param {String} name of the span class
 */
function updateSpanNumbers(span){
	var spans = document.getElementsByClassName(span);
	
	for (let i = 0; i < spans.length; i++) {
		spans[i].innerHTML = i+1;
	}
}

/**
 * creates a new input
 * @param {string} type name of the input type
 */
function createInput(type) {

	var newInputDiv = document.createElement('div');
	var newInputH3 = document.createElement('h3');
	var newSpanNumber = document.createElement('span');
	var newInput = document.createElement('input');
	var newInputDeleteBtn = document.createElement('button');
	
	var index;

	if (type == "Alt") {
		index = altCounter++;
		if(index == 0){
			newInput.placeholder = "erste Alternative";
		}
		tempString = "Alternative";
		newInput.className = "AlternativeInputs";
		newInputDiv.className = "Alternative";
		newSpanNumber.className = "AlternativeSpanNumber";
		newInputDiv.id = "alt" + index;
		newInputDeleteBtn.id = "removeAlternativeBtn";
		newInputDeleteBtn.onclick = function () {
			removeSpecificInput(newInputDiv.id);
			currentPoll.removeAlternative(index);
		};
		if (altCounter >= maxAlternatives) {
			hideBtn(document.getElementById("addAlternativeButton"));
		}
	}
	if (type == "Crit") {
		index = critCounter++;
		tempString = "Kriterium";
		newInput.className = "CriteriaInputs";
		newInputDiv.className = "Criteria";
		newSpanNumber.className = "CriteriaSpanNumber";
		newInputDiv.id = "crit" + index;
		newInputDeleteBtn.id = "removeCriteriaBtn";
		newInputDeleteBtn.onclick = function () {
			removeSpecificInput(newInputDiv.id);
			currentPoll.removeCriteria(index);
		};
		if (critCounter >= maxCriterias) {
			hideBtn(document.getElementById("addCriteriaButton"));
        }
	}
	newInputDeleteBtn.className = "removeBtn plusMinusButtons";
	newInputH3.className +="inputH3";
	newSpanNumber.className +=" SpanNumber";
	newInput.addEventListener("focus", activeInput); 
	newInput.addEventListener("mouseleave", unactiveInput); 
	newInput.addEventListener("mouseenter", activeInput);


	newInput.addEventListener("input", onUpdateInput);
	newInputH3.innerHTML = tempString;
	newSpanNumber.innerHTML = (index+1);
	newInputH3.appendChild(newSpanNumber);
	newInputH3.appendChild(newInput);
	newInputDiv.appendChild(newInputH3);
	if (newInputDiv.className == "Criteria" && critCounter > minCriterias || newInputDiv.className == "Alternative" && altCounter > minAlternatives) {
		newInputDiv.appendChild(newInputDeleteBtn);
	}
	newInputDiv.className += " inputDiv";
	

	return newInputDiv;
}

/**
 * hides an object
 * @param {DOMElement} Element to hide
 */
function hideBtn(Btn) {
	//Btn.style.visibility = "hidden";
	// the button can not be hidden using the visibilty property because of using views
	// it caused the button to be still visible even in other views/steps after showing it again
	//move the button out of the render area to make it unclickable
	Btn.style.opacity = 0;
	originalBtnPos = Btn.style.left;
	Btn.style.left="-500px";

}
/**
 * shows a hidden object
 * @param {DOMElement} Element to show
 */
function showBtn(Btn) {
	//Btn.style.visibility = "visible";
	Btn.style.opacity = 1;
	Btn.style.left = originalBtnPos;
}

/**
 * reacting to the input changed event
 * @param {event} e input changed event arguments
 */
function onUpdateInput(e) {
	var input = e.target.value;
	var parent = e.target.parentElement.parentElement;
	var idx;
	if (parent.className.includes("Alternative")) {
		idx = parent.id.replace(altId, "");
		currentPoll.alternatives[idx] = input;
	}
	if (parent.className.includes("Criteria")) {
		idx = parent.id.replace(critId, "");
		currentPoll.criterias[idx].name = input;
	}
}