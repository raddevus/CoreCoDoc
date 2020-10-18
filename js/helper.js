
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
    }
    toString(){
        return this.text;
    }
}

const selfManagementCompetencies = [
    new Competency({value:"sm-01",text:"Self confidence",description:"Faith in one’s own ideas and capability to be successful; willingness to take an independent position in the face of opposition."}),
    new Competency({value:"sm-02",text:"Stress management",description:"The ability to keep functioning effectively when under pressure and maintain self control in the face of hostility or provocation."}),
    new Competency({value:"sm-03",text:"Personal credibility",description:"Demonstrated concern that one be perceived as responsible, reliable, and trustworthy."}),
    new Competency({value:"sm-04",text:"Flexibility",description:"Openness to different and new ways of doing things; willingness to modify one’s preferred way of doing things."})
    // new Competency("sm-01","Self confidence","Faith in one’s own ideas and capability to be successful; willingness to take an independent position in the face of opposition."),
    // new Competency("sm-02","Stress management","he ability to keep functioning effectively when under pressure and maintain self control in the face of hostility or provocation."),
    // new Competency("sm-03","Personal credibility","Demonstrated concern that one be perceived as responsible, reliable, and trustworthy."),
    // new Competency("sm-04","Flexibility","Openness to different and new ways of doing things; willingness to modify one’s preferred way of doing things.")
];

function setCompetencySelection(){
    var cgValue = $("#competencyGroup").val();
    if (cgValue == "00-00"){
        // the blank item was chosen, nothing to do.
        document.querySelector("#competency").value = "00-00";
        $("#competencyDescription").text("");
        return;
    }
    $("#competency").empty();
    
    // add first item as blank
    $("#competency").append(new Option("", "00-00", false, false));

    switch (cgValue){
        case "cg-01":{
            
            selfManagementCompetencies.map((item) => {
                var localOption = new Option(item.text, item.value+"^"+item.description, false, false);
                console.log(localOption);
                $("#competency").append($(localOption));
                console.log(item.value + " : " +  item.text);
            });
            break;
        }
        case "cg-02" :{
            break;
        }
        case "cg-03":{

        }
    }
}

function setCompetencyDescription(){
    console.log("test");
    var selectedValue = $("#competency").val();
    if (selectedValue == "00-00"){
        $("#competencyDescription").text("");    
    }
    console.log(selectedValue.split("^")[0]);
    console.log(selectedValue.split("^")[1]);
    
    $("#competencyDescription").text(selectedValue.split("^")[1]);
}

