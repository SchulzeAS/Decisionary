//Niklas: ich erstelle mir hier ein Dummy Poll Object um schonmal das layout machen zu können
currentPoll = new Poll("uniqueid", "Abendbrot", "Was sollen wir essen?");
currentPoll.alternatives = ["Doener", "Brot", "Salat"];
currentPoll.addCriteria("Preis");
currentPoll.addCriteria("Verfuegbarkeit");
currentPoll.addCriteria("Geschmack");
console.log(currentPoll.getAllAlternatives());
console.log(currentPoll.getAllCriterias());

document.getElementById("ThemaSpan").innerHTML = currentPoll.title;
document.getElementById("BeschreibungSpan").innerHTML = currentPoll.description;