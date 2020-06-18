class Criteria {
	/**
	 * representation of criteria
	 * @param {string} name Name of the criteria
	 * @param {int} alternativeCount Number of alternatives
	 */
	constructor(name, alternativeCount) {
		this.name = name;
		this.values = new Array();
		for (var i = 0; i < alternativeCount; i++) {
			this.values[i] = null;
		}
	}
}