
/**
* base function called to create the overview of all inputs up to now
*/
function overview() {
	//var nameSpan = document.getElementById("nameSpan");
	//var descriptionSpan = document.getElementById("descriptionSpan");

	clearTable(document.getElementById("teilnehmenTable"));

	//nameSpan.innerHTML = currentPoll.title;
	//descriptionSpan.innerHTML = currentPoll.description;

	createTableOverview(currentPoll.getAllAlternatives(), currentPoll.criterias, "teilnehmenTable");
    let result = currentPoll.evaluate();
    tableBackgroundColor = document.getElementById("teilnehmenTable").childNodes[0].style.backgroundColor;
    document.getElementById("result").innerHTML = result.bestAlternatives.join(", ");
    if (result.decidingIndex >= 0) {
        document.getElementById("decisiveIndexSpan").style.opacity = 1;
        document.getElementById("decisiveIndex").innerHTML = currentPoll.criterias[result.decidingIndex].name;
    } else {
        document.getElementById("decisiveIndexSpan").style.opacity = 0;
        document.getElementById("decisiveIndex").innerHTML = "keins, weil es keinen klaren Gewinner gibt ";
    }

    highlightDecidingCriteria(result.decidingIndex, "teilnehmenTable", tableBackgroundColor, lighterNavActiveTeilnehmenColor);

}

/**
 * fills the overview table with alternatives and criteria
 * @param {array} altArray collection of alternatives
 * @param {array} critArray collection of criterias
 * @param {string} tableId if of table to append to
 */
function createTableOverview(altArray, critArray,tableId) {
	var FirstRow = document.createElement("tr");

	var cell = document.createElement("td");
	var textnode = document.createTextNode("");
	cell.appendChild(textnode);
	FirstRow.appendChild(cell); // empty first cell in first row

	for (i = 0; i < altArray.length; i++) {
		var cell = document.createElement("td");
		cell.className = "alternativeTd";
		var textnode = document.createTextNode(altArray[i]);
		cell.appendChild(textnode);
		FirstRow.appendChild(cell);
	}
	document.getElementById(tableId).appendChild(FirstRow);

	for (i = 0; i < critArray.length; i++) {
		var row = document.createElement("tr");
		var cell2 = document.createElement("td");
		cell2.className = "critTdTable";

		textnode2 = document.createTextNode(critArray[i].name);

		cell2.appendChild(textnode2);
		row.appendChild(cell2);

		for (j = 0; j < altArray.length; j++) {
			var cellALT = document.createElement("td");

            convertedRating = ratingNamesWords[ratingNames.indexOf(critArray[i].values[j])];
            textnodeALT = document.createTextNode(convertedRating);
			cellALT.className = "rateTd";

			cellALT.appendChild(textnodeALT);
			row.appendChild(cellALT);
        }


		document.getElementById(tableId).appendChild(row);
	}
}
/**
 * highlights the decisive row
 * @param {int} index of the criteria that was decisive in the evaluation
 * @param {string} tableId of the table to work on
 * @param {string} defaultColor background color
 * @param {string} highlightColor highlights
 */

function highlightDecidingCriteria(index, tableId, defaultColor,highlightColor) {
    rows = document.getElementById(tableId).childNodes;
    for (var i = 0; i < rows.length; i++) {
        rows[i].style.backgroundColor = defaultColor;
    }

    if (index >= 0) { // catch -1 aka undecisive
        rows[index + 1].style.backgroundColor = highlightColor;
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
	$("#" + id).css("visibility", "hidden");
}


