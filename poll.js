class Poll {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
		this.alternatives = new Array( "", "" );
		this.criterias = new Array();
    }
	addAlternative(alternative) {
		this.alternatives[this.alternatives.length] = alternative;
		return this.alternatives;
	}
	addCriteria(criteriaName) {
		this.criterias[this.criterias.length] = new Criteria(criteriaName, this.alternatives.length);
		return this.criterias;
	}
	moveCriteriaUp(index) {
		if (index > 0 && index < this.criterias.length) {
			this.swapCriterias(index - 1, index);
		}
		return this;
	}
	moveCriteriaDown(index) {
		if (index >= 0 && index < this.criterias.length - 1) {
			this.swapCriterias(index, index + 1);
		}
		return this;
	}
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