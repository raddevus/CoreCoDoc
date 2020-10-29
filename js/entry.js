class Entry{
    constructor(item){
        this.notes = item.notes;
        this.group = item.group;
        this.competency = item.competency;
        // examples is an array of strings which are supporting examples
        this.examples = item.examples;
        this.created = new Date();
    }
    
}