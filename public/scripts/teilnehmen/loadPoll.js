//Niklas: ich erstelle mir hier ein Dummy Poll Object um schonmal das layout machen zu können
tempPoll = new Poll("uniqueid", "Abendbrot", "Was sollen wir essen?");
tempPoll.alternatives = ["Doener", "Brot", "Salat"];
tempPoll.addCriteria("Preis");
tempPoll.addCriteria("Verfuegbarkeit");
tempPoll.addCriteria("Geschmack");

currentPoll = tempPoll;
currentAltArray = currentPoll.alternatives;

loadPoll(currentPoll);
maxCurrentAlternatives = 0;

/**
 * intiliazes the poll, filling in all the needed data to participate
 * @param {poll} poll to load from
 */
function loadPoll(poll) {
    document.getElementById("ThemaSpan").innerHTML = poll.title;
    document.getElementById("BeschreibungSpan").innerHTML = poll.description;
    loadCriterias(poll.getAllCriterias(), "critOrder");
    prepareAlternatives(poll.alternatives);
    maxCurrentAlternatives = poll.alternatives.length;
}

/**
 * appends each criteria to the criteria ordering view
 * @param {array} critArray array of criterias
 * @param {string} divId id to append to
 */
function loadCriterias(critArray, divId) {
    for (i = 0; i < critArray.length; i++) {
        var newSpan = document.createElement('span');
        newSpan.className = "critSpan";
        newSpan.innerHTML = critArray[i];

        document.getElementById(divId).appendChild(newSpan);
    }
}

/**
 * preparing function first called when initializing alternative rating scheme
 * @param {array} altArray array of Alternatives
 */
function prepareAlternatives(altArray) {
    document.getElementById("currentAlternativeSpan").innerHTML = altArray[0];
    document.getElementById("curAlt").innerHTML = "1";
    document.getElementById("totalCount").innerHTML = " / " + altArray.length;
}