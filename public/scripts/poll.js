class Poll {
	/**
	 * representation of a poll
	 * @param {string} id Identifier for the poll
	 * @param {string} title Title of the poll
	 * @param {string} description Description of the poll 
	 */
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
		this.alternatives = new Array();
		this.criterias = new Array();
	}
	/**
	 * adds a new alternative to the array of alternatives
	 * @param {string} alternative Name of the alternative
	 */
	addAlternative(alternative) {
		this.alternatives[this.alternatives.length] = alternative;
		this.criterias.forEach(e => {
			e.values[e.values.length] = "";
		});
		return this.alternatives;
	}
	/**
	 * removes the alternative at a given index
	 * @param {int} index Index of the alternative to be removed
	 */
	removeAlternative(index) {
		if (index >= 0 && index < this.alternatives.length && this.alternatives.length > 2) {
			this.alternatives.splice(index, 1);
			this.criterias.forEach(e => {
				e.values.pop();
			});
		}
		return this.alternatives;
	}
	/**
	 * adds a new criteria to the array of criterias
	 * @param {string} criteriaName Name of the criteria
	 */
	addCriteria(criteriaName) {
		this.criterias[this.criterias.length] = new Criteria(criteriaName, this.alternatives.length);
		return this.criterias;
	}
	/**
	 * removes the criteria at a given index
	 * @param {int} index Index of the criteria to be removed
	 */
	removeCriteria(index) {
		if (index >= 0 && index < this.criterias.length && this.criterias.length > 1) {
			this.criterias.splice(index, 1);
		}
		return this.criterias;
	}
	/**
	 * moves the criteria at given index one position to the front
	 * @param {int} index Index of the criteria to be moved
	 */
	moveCriteriaUp(index) {
		if (index > 0 && index < this.criterias.length) {
			this.swapCriterias(index - 1, index);
		}
		return this;
	}
	/**
	 * moves the criteria at given index one position to the back
	 * @param {int} index Index of the criteria to be moved
	 */
	moveCriteriaDown(index) {
		if (index >= 0 && index < this.criterias.length - 1) {
			this.swapCriterias(index, index + 1);
		}
		return this;
	}
	/**
	 * swaps criteria at index1 with criteria at index2
	 * @param {int} index1 Index of the first criteria
	 * @param {int} index2 Index of the second criteria
	 */
	swapCriterias(index1, index2) {
		if (index1 >= 0 && index1 < this.criterias.length - 1 && 
			index2 > 0 && index2 < this.criterias.length && 
			index1 < index2) {
			var tmp = this.criterias[index1];
			this.criterias[index1] = this.criterias[index2];
			this.criterias[index2] = tmp;
		}
	}
}