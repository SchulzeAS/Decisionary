class Poll {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
		this.alternatives = new Array( "", "" );
		this.criteria = new Array( "" );
    }	
}