/**
 * highlight blank input 
 * @param {any} inpt
 */
function highlightInput(inpt) {
	inpt.style.outline = "1px solid red";
}
/**
 * 
 * remove highlighting from an input previuosly highlighted
 * @param {any} inpt
 */
function unHighlightInput(inpt) {
	inpt.style.outline="initial";
}


/**
 * highlight blank radio row
 * @param {any} inpt row to highlight
 */
function highlightRadio(inpt) {
	radioChildren = inpt.childNodes;
	console.log(radioChildren);
	for (i = 1; i < inpt.childNodes.length; i++) {
		console.log(radioChildren[i]);
		radioChildren[i].childNodes[0].style.backgroundColor = "red";
    }
}
/**
 * 
 * remove highlighting from a radio row
 * @param {any} inpt radio row to unhighlight
 */
function unHighlightRadio(inpt) {
	radioChildren = inpt.childNodes;
	console.log(radioChildren);
	for (i = 1; i < inpt.childNodes.length; i++) {
		console.log(radioChildren[i]);
		radioChildren[i].childNodes[0].style.backgroundColor = "white";
	}
}

/**
 * firsthide function with DOMElement
 * @param {DOMElement} hnt element to hide
 */
function hideHints(hnt) {
	hnt.style.opacity = 0;
}

/**
 * second hide function with id
 * @param {string} id element to hide
 */
function hideHint(id) {
	//$("#" + id).css("opacity", 0);
	document.getElementById(id).style.opacity = 0;
}
/**
 * 
 * fallback function because of bug?
 * @param {any} id element to hide
 */
function hideHintALT(id) {
	document.getElementById(id).style.opacity = 0;
}
/**
 * show hints
 * @param {DOMElement} hnt element to show
 */
function showHints(hnt) {
	hnt.style.opacity = 1;
}