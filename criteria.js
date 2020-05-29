class Criteria {
	constructor(name, alternativeCount) {
		this.name = name;
		this.values = new Array();
		for(var i = 0; i < alternativeCount; i++) {
			this.values[i] = "";
		}
	}
}