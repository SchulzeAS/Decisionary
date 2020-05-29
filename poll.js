class Poll {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
		this.alternatives = new Array( "", "" );
		this.criteria = new Array();
    }
	addAlternative(alternative) {
		this.alternatives[this.alternatives.length] = alternative;
	}
	addCriteria(criteriaName) {
		this.criterias[this.criterias.length] = new Criteria(criteriaName, this.alternatives.length);
	}
}