function Uebersicht() {
	var nameSpan = document.getElementById("nameSpan");
	var descriptionSpan = document.getElementById("descriptionSpan");
	
	clearTable(document.getElementById("combinedTable"));
	
	nameSpan.innerHTML = document.getElementById("NameInput").value;
	descriptionSpan.innerHTML = document.getElementById("DescriptionInput").value;
	
	var alternatives = getInputsValue("alternativeInputs");
	var kriterien = getInputsValue("criteriaInputs");

	createTableUebersicht(alternatives,kriterien);
}

function fillTableUebersicht(table,typeText,array) {
	for (i = 0; i < array.length; i++) {
		var row = document.createElement("tr");
		var cell2 = document.createElement("td");

		textnode2=document.createTextNode(array[i]);

		cell2.appendChild(textnode2);
		row.appendChild(cell2);
		
		table.appendChild(row);
	} 
}

function createTableUebersicht(altArray,kritArray) {
	var FirstRow = document.createElement("tr");
	
				var cell = document.createElement("td");
		var textnode=document.createTextNode("");
		cell.appendChild(textnode);
		FirstRow.appendChild(cell);
	
	for (i = 0; i < altArray.length; i++) {
		var cell = document.createElement("td");
		var textnode=document.createTextNode(altArray[i]);
		cell.appendChild(textnode);
		FirstRow.appendChild(cell);
	}
	document.getElementById("combinedTable").appendChild(FirstRow);
	
	for (i = 0; i < kritArray.length; i++) {
		var row = document.createElement("tr");
		var cell2 = document.createElement("td");
		textnode2=document.createTextNode(kritArray[i]);

		cell2.appendChild(textnode2);
		row.appendChild(cell2);
		
		document.getElementById("combinedTable").appendChild(row);
	} 
}

function outFunc(tooltipId) {
	var tooltip = document.getElementById(tooltipId);
	tooltip.innerHTML = "Link kopieren";
}
  
  
	  
function clearTable(table) {
	while(table.childNodes.length > 0) {
		table.removeChild(table.lastChild);
	}
}
  
function getInputsValue(inputfield) {
	var inputArray = document.getElementsByClassName(inputfield);
	var values = [inputArray.length];

	for (i = 0; i < inputArray.length; i++) {
		if(inputArray[i].value != "") {
			values[i] = inputArray[i].value;
		}
	} 
	
	return values;
}