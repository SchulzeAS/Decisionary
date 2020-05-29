class Poll {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
		this.alternatives = new Array( "", "" );
		this.criterias = new Array( "" );
    }
	addAlternative(alternative) {
		this.alternatives[this.alternatives.length] = alternative;
	}
	addCriteria(criteria) {
		this.criterias[this.criterias.length] = criteria;
	}
}