const altId = "alt";
const critId = "crit";
const baseUrl = "http://example.dev";

var currentView = 0;
var clickViewBool = false;
var schritte = ["step1Topic", "step2Alternatives", "step3Criterias", "step4Overview", "step5Share"];
var schritteNav = ["navTopic", "navAlternatives", "navCriterias", "navOverview", "navShare"];
var schritteNavTeilnehmen = ["navName", "navCriteriaOrder", "navRating", "navOverview"];
var schritteTeilnehmen = ["step1Name", "step2CriteriaOrder", "step3Rating", "step4Overview"];

var ratingNames = ["A", "B", "X"];

var minAlternatives = 2;
var maxAlternatives = 15;
var altCounter = 0;

var minCriterias = 1;
var maxCriterias = 15;
var critCounter = 0;

var alternativesContainer = "alternativesContainer"
var criteriasContainer = "criteriasContainer"

var navActiveColor = "rgb(0, 255, 154)"; // Michelle hier
var navDisabledColor = "rgb(60, 179, 113)"; // und hier


var navActiveTeilnehmenColor = "rgb(189,236,232)";
var navDisabledTeilnehmenColor = "rgb(124,246,232)";

var currentPoll;