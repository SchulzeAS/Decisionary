
createTableRating(currentPoll.getAllCriterias(), ratingNames, "alternativeRatingTable");


/**
 * creates the table to rate each alternative
 * @param {array} an array of criterias
 * @param {array} array containing he simplified names for our ABX-Algorithm
 * @param {string} id of the table to append to
 */
function createTableRating(critArray, ratingNames,tableId) {
	for (i = 0; i < critArray.length; i++) {
		var row = document.createElement("tr");
		var cellCritName = document.createElement("td");
		cellCritName.className = "critTd"
		var textnode = document.createTextNode(critArray[i]);
		cellCritName.appendChild(textnode);
		row.appendChild(cellCritName);

		for (j = 0; j < ratingNames.length; j++) {
			var cell = document.createElement("td");
			cell.className = "ratingTd"

			newLabel = document.createElement('label');

			newInput = document.createElement('input');
			newInput.type = "radio";
			newInput.className = "ratingRadioInput";
			tmpInputName= "crit" + i;
			newInput.name = tmpInputName;
			newInput.value = critArray[i];

			newLabel.appendChild(newInput);

			newDescriptor = document.createElement('i');

			newDescriptor.innerHTML = ratingNames[j]
			newLabel.appendChild(newDescriptor);

			cell.appendChild(newLabel);

			row.appendChild(cell);
		}
		document.getElementById(tableId).appendChild(row);
	}
}