

var inputs = document.getElementsByTagName('input');
console.log(inputs);
for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'text') {
        //alert(inputs[i].value);
		inputs[i].addEventListener("focus", activeInput);
		inputs[i].addEventListener("mouseleave", unactiveInput);
		inputs[i].addEventListener("mouseenter", activeInput);
		
    }
}

function activeInput(e){
	
	var inputs = document.getElementsByTagName('input');
	console.log("calling onlick: " + e);
	console.log(e);
	for(var i = 0; i < inputs.length; i++) {
		if(inputs[i].type.toLowerCase() == 'text') {
			//alert(inputs[i].value);
			inputs[i].style.backgroundColor = "white";
		}
	}
	e.target.style.backgroundColor = "#f3f3f3";
}

function unactiveInput(e){
	console.log("mouse left");
	e.target.style.backgroundColor = "white";
}
