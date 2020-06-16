

var inputs = document.getElementsByTagName('input');
for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'text') {
        //alert(inputs[i].value);
		inputs[i].addEventListener("focus", activeInput);
		inputs[i].addEventListener("mouseleave", unactiveInput);
		inputs[i].addEventListener("mouseenter", activeInput);
		
    }
}
/**
 * highlights the active input
 * @param {DOMElement} the element to highlight
 */
function activeInput(e){
	
	var inputs = document.getElementsByTagName('input');
	for(var i = 0; i < inputs.length; i++) {
		if(inputs[i].type.toLowerCase() == 'text') {
			//alert(inputs[i].value);
			inputs[i].style.backgroundColor = "white";
		}
	}
	e.target.style.backgroundColor = "#f3f3f3";
}

/**
 * removes highlighting from currently active element
 * @param {DOMElement} the element remove highlighting from
 */
function unactiveInput(e){
	e.target.style.backgroundColor = "white";
}
