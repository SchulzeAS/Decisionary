currentView = 0
var schritte = ["Schritt1Thema","Schritt2Alternativen","Schritt3Kriterien","Schritt4Ubersicht","Schritt5Teilen"];
var schritteNav = ["navThema","navAlt","navKrit","navUebersicht","navTeilen"];

var altCounter = 2;
var kritCounter = 2;
var altContainer = "AlternativenContainer"
var kritContainer = "KriterienContainer"

var navActiveColor = "rgb(0, 255, 154)";
var navDisabledColor = "rgb(60, 179, 113)";
function next(){
	//console.log(currentView);
	//console.log(schritte.length);
	hideView(schritte[currentView]);
	disableNavElement(schritteNav[currentView]);
	if(currentView < schritte.length-1) currentView +=1; else currentView = 0;
	document.getElementById(schritte[currentView]).style.visibility="visible";
	document.getElementById(schritteNav[currentView]).style.backgroundColor=navActiveColor;
	specificViewChanges(currentView);
}

function back(){
	//console.log(currentView);
	hideView(schritte[currentView]);
	disableNavElement(schritteNav[currentView]);
	if(currentView > 0) currentView -=1; else currentView = schritte.length-1;
	document.getElementById(schritte[currentView]).style.visibility="visible";
	document.getElementById(schritteNav[currentView]).style.backgroundColor=navActiveColor;
	specificViewChanges(currentView);
}

function hideView(view){
	document.getElementById(view).style.visibility="hidden";
	document.getElementById(view).style.zIndex=0;
}

function specificViewChanges(curView){
	nxtBtnText = "next";
	backBtnText = "back";
	//console.log("specificViewChanges: " + curView)
	
	document.getElementById("navBack").style.visibility="visible";
	document.getElementById("navNext").style.visibility="visible";
	
	if(curView == 3){ // current view is"Uebersicht"
		nxtBtnText = "finish";
		console.log("Uebersicht");
		Uebersicht();
	}
	
	if(curView == 0){ // current view is"Link teilen" aka we are done
		document.getElementById("navBack").style.visibility="hidden";
	}
	
	if(curView == 4){ // current view is"Link teilen" aka we are done
		document.getElementById("navBack").style.visibility="hidden";
		document.getElementById("navNext").style.visibility="hidden";
	}
		
	document.getElementById("navBack").innerHTML=backBtnText;
	document.getElementById("navNext").innerHTML=nxtBtnText;
}

function disableNavElement(nav){
	document.getElementById(nav).style.backgroundColor=navDisabledColor;
}

function addInput(type){
	if(type == "Alt" || type == "Krit"){
		if(type == "Alt"){
			document.getElementById(altContainer).appendChild(createInput(type))
		}
		if(type == "Krit"){
			document.getElementById(kritContainer).appendChild(createInput(type))
		}
	}
	else{
		console.log("invalid type for adding input");
	}
}

function removeInput(type){
	if(type == "Alt" || type == "Krit"){
		if(type == "Alt" && altCounter > 2){
			var tempString = "alt"+altCounter
			altCounter--;
		}
		if(type == "Krit" && kritCounter > 2){
			var tempString = "krit"+kritCounter
			kritCounter--;
		}
		// hier ist noch immer null wenn nichts removed werden soll FIXEN
		var toBeRemoved = document.getElementById(tempString);
			toBeRemoved.parentNode.removeChild(toBeRemoved);
	}
}

function createInput(type){
	
	var newInputDiv = document.createElement('div');
	var newInputH3 = document.createElement('h3');
	var newInput = document.createElement('input');
	
	if(type == "Alt"){
		altCounter++;
		tempString = "Alternative " + altCounter + " " ;
		newInput.className = "AlternativeInputs";
		newInputDiv.id = "alt" + altCounter;
	}
	if (type == "Krit"){
		kritCounter++;
		tempString = "Kriterium " + kritCounter + " " ;
		newInput.className = "KriteriumInputs";
		newInputDiv.id = "krit" + kritCounter;
	}
	
	newInputH3.innerHTML = tempString;
	newInputH3.appendChild(newInput);
	newInputDiv.appendChild(newInputH3);
	
	//newInputDiv.appendChild(newInput);
	return newInputDiv;
}

function copyLink(inputFieldId,tooltipId) {
  var copyText = document.getElementById(inputFieldId);
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");
  var tooltip = document.getElementById(tooltipId);
  tooltip.innerHTML = "Kopiert: " + copyText.value;
} 

function outFunc(tooltipId) {
  var tooltip = document.getElementById(tooltipId);
  tooltip.innerHTML = "Link kopieren";
}

function Uebersicht(){
	var nameSpan = document.getElementById("NameSpan");
	var beschreibungSpan = document.getElementById("BeschreibungSpan");
	var altTable = document.getElementById("AlternativenTable");
	var kritTable = document.getElementById("KriterienTable");
	
	clearTable(altTable);
	clearTable(kritTable);
	
	

	
	nameSpan.innerHTML = document.getElementById("NameInput").value;
	beschreibungSpan.innerHTML = document.getElementById("BeschreibungInput").value;
	
	var alternatives = getInputsValue("AlternativeInputs");
	var kriterien = getInputsValue("KriteriumInputs");
	console.log(alternatives);
	fillTableUebersicht(altTable,"Alternative ",alternatives);
	fillTableUebersicht(kritTable,"Kriterium",kriterien);
	

	
}

	function fillTableUebersicht(table,typeText,array){
		//table.caption.innerHTML = "adad";
		//console.log(table.caption.innerHTML);
		for (i = 0; i < array.length; i++) {
			var row = document.createElement("tr");
			//var cell1 = document.createElement("td");
			var cell2 = document.createElement("td");

			//textnode1=document.createTextNode(typeText +" "+(i+1));
			textnode2=document.createTextNode(array[i]);

			//cell1.appendChild(textnode1);
			cell2.appendChild(textnode2);
			//row.appendChild(cell1);
			row.appendChild(cell2);
			
			table.appendChild(row);
	} 
	}
	
	function clearTable(table){
		//console.log("table has "  + table.childNodes.length + "childen")
		while(table.childNodes.length > 1){
			table.removeChild(table.lastChild);
		}
	}

function getInputsValue(inputfield){
	var inputArray = document.getElementsByClassName(inputfield);
	var values = [inputArray.length];

	
	for (i = 0; i < inputArray.length; i++) {
		if(inputArray[i].value != "")
			values[i] = inputArray[i].value;
	} 
	
	return values;
}








































