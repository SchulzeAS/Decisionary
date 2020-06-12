const altId = "alt";
const critId = "crit";
const baseUrl = "http://example.dev";

currentView = 0;
var schritte = [ "step1Topic", "step2Alternatives", "step3Criterias", "step4Overview", "step5Share" ];
var schritteNav = [ "navTopic", "navAlternatives", "navCriterias", "navOverview", "navShare" ];

var minAlternatives = 2;
var maxAlternatives = 15;
var altCounter = 0;

var minCriteria = 1;
var maxCriteria = 15;
var critCounter = 0;

var alternativesContainer = "alternativesContainer"
var criteriasContainer = "criteriasContainer"

var navActiveColor = "rgb(0, 255, 154)";
var navDisabledColor = "rgb(60, 179, 113)";

var currentPoll;