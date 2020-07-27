//Niklas: ich erstelle mir hier ein Dummy Poll Object um schonmal das layout machen zu können
tempPoll = new Poll("uniqueid", "Abendbrot", "Was sollen wir essen?");
tempPoll.alternatives = ["Döner", "Brot", "Salat","Käseschnitzel","Yoghurt"];
tempPoll.addCriteria("Preis");
tempPoll.addCriteria("Verfügbarkeit");
tempPoll.addCriteria("Geschmack");
tempPoll.addCriteria("Laune");


jayson = document.getElementById("eidi").innerHTML;
if(jayson == ""){

} else {

parsed = JSON.parse(jayson);

loadedPolll = new Poll(parsed.id, parsed.title, parsed.description);
loadedPolll.alternatives = parsed.alternatives;
parsed.criterias.forEach(element => {

  loadedPolll.addCriteria(element.name);
});
}


/*tempPoll.addCriteria("Laktose Index");
tempPoll.addCriteria("Laktose Index2");
tempPoll.addCriteria("Laktose Index3");
tempPoll.addCriteria("Laktose Index4");
tempPoll.addCriteria("Laktose Index5");
tempPoll.addCriteria("Laktose Index6");
tempPoll.addCriteria("Laktose Index7");
tempPoll.addCriteria("Laktose Index8");
tempPoll.addCriteria("Sojahaftigkeit");
tempPoll.addCriteria("Mehrwertsteuer");
tempPoll.addCriteria("die Nummer 15");
*/
if(jayson == ""){
currentPoll = tempPoll;
} else {
currentPoll = loadedPolll;}
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
    fillWelcomeAltTable("WelcomeAltTable", poll.alternatives)
}




/**
 * preparing function first called when initializing alternative rating scheme
 * @param {array} altArray array of Alternatives
 */
function prepareAlternatives(altArray)
{
    document.getElementById("currentAlternativeSpan").innerHTML = altArray[0];
    document.getElementById("curAlt").innerHTML = "1 / " + currentPoll.alternatives.length;
    document.getElementById("curAlt").style.visibility = "hidden";
}

function fillWelcomeAltTable(tableName, alts) {
    WelcomeAltTable = document.getElementById(tableName);

    for (i = 0; i < alts.length; i++) {
        var row = document.createElement("tr");
        var cell2 = document.createElement("td");
        textnode2 = document.createTextNode(alts[i]);

        cell2.appendChild(textnode2);
        row.appendChild(cell2);
        WelcomeAltTable.appendChild(row);
    }

}
