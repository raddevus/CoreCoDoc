class Competency{
    // constructor(val,text,def){
    //     this.value = val;
    //     this.text = text;
    //     this.description = def;
    // }
    constructor(item){
        this.value = item.value;
        this.text = item.text;
        this.description = item.description;
        this.examples = item.examples;
    }
    toString(){
        return this.text;
    }
}