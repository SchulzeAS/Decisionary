
createTableRating(currentPoll.getAllCriterias(), ratingNames, "alternativeRatingTable");
var currentAlternative = 0;
var inputRatingClassName = "ratingRadioInput";

/**
 * creates the table to rate each alternative
 * @param {array} critArray array of criterias
 * @param {array} ratingNames containing he simplified names for our ABX-Algorithm
 * @param {string} tableId of the table to append to
 */
function createTableRating(critArray, ratingNames, tableId) {
    for (i = 0; i < critArray.length; i++) {
        var row = document.createElement("tr");
        var cellCritName = document.createElement("td");
        cellCritName.className = "critTd"
        var textnode = document.createTextNode(critArray[i]);
        cellCritName.appendChild(textnode);
        row.appendChild(cellCritName);

        for (j = 0; j < ratingNames.length; j++) {
            var cell = document.createElement("td");
            cell.className = "ratingTd";
            newLabel = document.createElement('label');
            newLabel.className = "radioLabel";

            newInput = document.createElement('input');
            newInput.type = "radio";
            newInput.className = "ratingRadioInput";
            tmpInputName = i;
            newInput.name = tmpInputName;
            newInput.value = critArray[i];
            newInput.setAttribute('data-rating', j);
            newInput.onclick = function () {
                //alert(this.name + "" + this.getAttribute('data-rating'));
                rateAlternative(this.name, this.getAttribute('data-rating'));
            };
            newInput.onchange= function () {
                radioColoring();
            };

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

/**
 * rates an alternative acording to a criteria
 * @param {int} critNumber the number of the criteria to rate
 * @param {int} ratingNames the rating to give the criteria
 */
function rateAlternative(critNumber, rating) {
    currentPoll.criterias[critNumber].values[currentAlternative] = ratingNames[rating];
}

/**
 * clear all ratings when moving to the next/previous alternative
 */
function clearRatings() {
    var inputs = document.getElementsByClassName("ratingRadioInput");
    for (i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
}

/**
 * load ratings when moving to the next/previous alternative
 */
function loadRatings() {
    for (i = 0; i < currentPoll.criterias.length; i++) {
        currentPoll.criterias[i].values
        if (currentPoll.criterias[i].values[currentAlternative] != null) {
            rateNumber = ratingNames.indexOf(currentPoll.criterias[i].values[currentAlternative]);
            $('input[name=' + i + ']')[rateNumber].checked = true; // excuse my jquery here but it's the easiest way to check a specific radio btn
            }
    }
}

/**
 * check if all alternatives/criteria have been rated before moving to the next one
 */
function validateAllInputsAlternative() {
    return true;
}
/**
 * instructions to do when not all rated
 */
function unvalidatedViewAlternative() {
    console.log("not all information filled in");
}

/**
 * move to the next alternative rating
 */
function nextAlternative() {
    currentAlternative++;
    updateAlternativeHUD();
}
/**
 * updates the alternative name and number
 */
function updateAlternativeHUD() {
    document.getElementById("curAlt").innerHTML = currentAlternative + 1;
    document.getElementById("currentAlternativeSpan").innerHTML = currentPoll.getAllAlternatives()[currentAlternative];
    clearRatings();
    loadRatings();
    radioColoring();
}
/**
 * move to the previous alternative rating
 */
function backAlternative() {
    currentAlternative--;
    updateAlternativeHUD();
}

/**
 * color active radio
 * @param {DOMElement} thisRadio active radio
 * @param {DOMElement} parent the label to color
 */
function radioChangeState(thisRadio, parent) {
    // it is actually always true but checking anyway
    if (thisRadio.checked == true) {
        parent.style.backgroundColor = activeRadioColor;
    }
    passiveRadioColoring();
}

function radioColoring() {
    inputs = document.getElementsByClassName("ratingRadioInput");
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked == false) {
            inputs[i].parentElement.style.backgroundColor = passiveRadioColor;
        } else {
            inputs[i].parentElement.style.backgroundColor = activeRadioColor;
        }
    }
    
}