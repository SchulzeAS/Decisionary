const altId = "alt";
const critId = "crit";

var currentView = 0;
var clickViewBool = false;
var schritte = ["step1Topic", "step2Alternatives", "step3Criterias", "step4Overview", "step5Share"];
var schritteNav = ["navTopic", "navAlternatives", "navCriterias", "navOverview", "navShare"];
var schritteNavTeilnehmen = ["navName", "navCriteriaOrder", "navRating", "navOverview"];
var schritteTeilnehmen = ["step1Name", "step2CriteriaOrder", "step3Rating", "step4Overview"];

var ratingNames = ["A", "B", "X"];
var ratingNamesWords = ["Sehr gut", "Gut genug", "Überhaupt nicht"]; // has to have the same amount of elements as ratingNames!

var minAlternatives = 2;
var maxAlternatives = 15;
var altCounter = 0;

var minCriterias = 1;
var maxCriterias = 15;
var critCounter = 0;

var alternativesContainer = "alternativesContainer";
var criteriasContainer = "criteriasContainer";

var navActiveColor = "#A0C940"; 
var navDisabledColor = "#708F28"; 


var navActiveTeilnehmenColor = "#8fefec";
var navDisabledTeilnehmenColor = "#1abbb6";
var lighterNavActiveTeilnehmenColor = "rgba(143, 239, 236,0.3)";

var activeRadioColor = navActiveTeilnehmenColor; 
var passiveRadioColor = "white";
var hoverRadioColor = "rgba(189,236,232,0.5)"; // ein wenig heller als activeRadioColor

var navAuswertenColor = "#708F28"; // same as erstellen passiv farbe

var currentPoll;
