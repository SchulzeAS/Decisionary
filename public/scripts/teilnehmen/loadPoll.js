//Niklas: ich erstelle mir hier ein Dummy Poll Object um schonmal das layout machen zu können
tempPoll = new Poll("uniqueid", "Abendbrot", "Was sollen wir essen?");
tempPoll.alternatives = ["Doener", "Brot", "Salat"];
tempPoll.addCriteria("Preis");
tempPoll.addCriteria("Verfügbarkeit");
tempPoll.addCriteria("Geschmack");

currentPoll = tempPoll;
currentAltArray = currentPoll.alternatives;

loadPoll(currentPoll);
maxCurrentAlternatives = 0;

/**
 * intiliazes the poll, filling in all the needed data to participate
 * @param {poll} poll to load from
 */
function loadPoll(poll)
{
    document.getElementById("ThemaSpan").innerHTML = poll.title;
    document.getElementById("BeschreibungSpan").innerHTML = poll.description;
    loadCriterias(poll.getAllCriterias(), "critOrder");
    prepareAlternatives(poll.alternatives);
    maxCurrentAlternatives = poll.alternatives.length;
}




/**
 * preparing function first called when initializing alternative rating scheme
 * @param {array} altArray array of Alternatives
 */
function prepareAlternatives(altArray)
{
    document.getElementById("currentAlternativeSpan").innerHTML = altArray[0];
    document.getElementById("curAlt").innerHTML = "1";
    document.getElementById("totalCount").innerHTML = " / " + altArray.length;
}

