/**
 * move to the next view
 */
function next() {
    if (assertView()) {
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
        if (currentView == 4) { // sending the data to the server to create a poll

            clearPoll();// fill poll object again just to be on the safe side
            fillPoll();

            //madly mistreating a get request as a pseudo post to save on some header space, because only literal knowledge is transferred and no semantic is required.
            $.get(baseUrl + "/add/" + specialCharacterEncode(JSON.stringify(currentPoll)),
                function (data, status) {

                });
            sendEmptyResult();// send an empty vote to fill up the results file to show some empty data even before the first person has participated
            iniliazeAggMatrix();
        }
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
					altsCheck[i].placeholder = "Alternative eingeben";
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
					critsCheck[i].placeholder = "Kriterium eingeben";
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
     * create an empty result file when first creating a poll
     * */
function sendEmptyResult() {
    pair = { "id": currentPoll.id, "pollTitle": currentPoll.title, "name": "", "winner": [], "alternatives": currentPoll.alternatives };
    $.get(baseUrl + "/addvote/" + specialCharacterEncode(JSON.stringify(pair)),
        function (data, status) { });
}
function iniliazeAggMatrix() {


    var aggMatrix = {};
    for (var i = 0; i < currentPoll.criterias.length; i++) {
        aggMatrix[currentPoll.criterias[i].name] = new Array(currentPoll.alternatives.length);
        for (var j = 0; j < currentPoll.alternatives.length; j++) {
            aggMatrix[currentPoll.criterias[i].name][j] = "";
        }
    }
    //console.log(aggMatrix);

    var critList = new Array(currentPoll.criterias.length);
    for (var i = 0; i < currentPoll.criterias.length; i++) {
        critList[i] = currentPoll.criterias[i].name;
    }

    var data = {
        "id": currentPoll.id,
        "matrix": aggMatrix,
        "critList": critList
    };

    $.get(baseUrl + "/addAggMatrix/" + specialCharacterEncode(JSON.stringify(data)),
        function (data, status) { });
}
