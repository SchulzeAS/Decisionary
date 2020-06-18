/**
* base function called to create the overview of all inputs up to now
*/
function overview() {
	var nameSpan = document.getElementById("nameSpan");
	var descriptionSpan = document.getElementById("descriptionSpan");

	clearTable(document.getElementById("combinedTable"));

	nameSpan.innerHTML = currentPoll.title;
	descriptionSpan.innerHTML = currentPoll.description;

	createTableOverview(currentPoll.getAllAlternatives(), currentPoll.getAllCriterias());
}

/**
 * fills the overview table with alternatives and criteria
 * @param {array} altArray collection of alternatives
 * @param {array} critArray collection of criterias
 */
function createTableOverview(altArray, critArray) {
	var FirstRow = document.createElement("tr");

	var cell = document.createElement("td");
	var textnode = document.createTextNode("");
	cell.appendChild(textnode);
	FirstRow.appendChild(cell);

	for (i = 0; i < altArray.length; i++) {
		var cell = document.createElement("td");
		var textnode = document.createTextNode(altArray[i]);
		cell.appendChild(textnode);
		FirstRow.appendChild(cell);
	}
	document.getElementById("combinedTable").appendChild(FirstRow);

	for (i = 0; i < critArray.length; i++) {
		var row = document.createElement("tr");
		var cell2 = document.createElement("td");
		textnode2 = document.createTextNode(critArray[i]);

		cell2.appendChild(textnode2);
		row.appendChild(cell2);

		for (j = 0; j < altArray.length; j++) {
			var cellT = document.createElement("td");
			row.appendChild(cellT);
		}


		document.getElementById("combinedTable").appendChild(row);
	}
}

/**
 * used to clear a table
 * @param {DOMElement} table element
 */
function clearTable(table) {
	while (table.childNodes.length > 0) {
		table.removeChild(table.lastChild);
	}
}

function hideHint(id) {
	$("#" + id).css("visibility","hidden");
}