
// set of bools which all must be true 
// before the saveEntryButtonState will be true
var competencyIsSelected = false;
var notesHasValue = false;
var currentCompetency;
let groupName;

function setCompetencySelection(){
    competencyIsSelected = false;
    var cgValue = $("#competencyGroup").val();
    $("#examples").remove();
    $("#competencyDescription").text("");
    $("#competency").empty();
    $("#competencyTitle").text("");
    displayExamplesHeader(false);
    setEntryButtonState(competencyIsSelected
        && notesHasValue)
    
    if (cgValue == "00-00"){
        // nothing else to do, return;
        return;
    }
    // add first item as blank
    $("#competency").append(new Option("select...", "00-00", false, false));
    
    switch (cgValue){
        case "cg-01":{
            groupName = "Self Management";
            selfManagementCompetencies.map(mapToCompetency);
            break;
        }
        case "cg-02" :{
            groupName = "Dealing With People";
            dealingWithOthersCompetencies.map(mapToCompetency);
            break;
        }
        case "cg-03":{
            groupName = "Dealing With Business";
            dealingWithBusinessCompetencies.map(mapToCompetency);
            break;
        }
    }
}

function mapToCompetency(item){
    // This is kind of bad, because I'm using the value from the global
    // just to set the group value.
    item.group = groupName;
    var localOption = new Option(item.text, JSON.stringify(item), false, false);
    // console.log(localOption);
    $("#competency").append($(localOption));
    // console.log(item.value + " : " +  item.text);
}

function addCompetencyExamples(examples){
    console.log(examples.length);

    $("#competencyExamples").append(
        $(document.createElement("div")).prop({
            id:"examples"
        })
     )

    for (var x = 0;x < examples.length;x++){
        // NOTE: gen-chk is my special value used for
        // my script to determine which items are checked.
        console.log(examples[x]);

        $("#examples").append($(document.createElement("div")).prop({
            class:"form-check noselect",
            }).append(
                $(document.createElement("input")).prop({
                id: "example-"+x,
                name: "interest",
                value: x,
                type: "checkbox",
                class:"form-check-input gen-chk",
                })
            ).append(
                $(document.createElement("label")).prop({
                for: "example-"+x,
                }).html(examples[x])
            ).append(document.createElement("br"))
        );
    }
}

function setCompetencyDescription(){
    competencyIsSelected = false;
    console.log("test");
    // we parse the value back into a Competency object.
    if (document.querySelector("#competency").value === "00-00"){
        $("#competencyDescription").text("");
        $("#examples").remove();
        $("#competencyTitle").text("");
        setEntryButtonState(competencyIsSelected
            && notesHasValue);
        displayExamplesHeader(false);
        return;
    }
    currentCompetency = JSON.parse($("#competency").val());
    
    console.log(currentCompetency.description);
    $("#competencyTitle").text(currentCompetency.text);
    $("#competencyDescription").text(currentCompetency.description);
    $("#examples").remove();

    console.log(currentCompetency.examples);
     if (currentCompetency.examples !== undefined){
         displayExamplesHeader(true);
         addCompetencyExamples(currentCompetency.examples);
         competencyIsSelected = true;
     }
     setEntryButtonState(competencyIsSelected
        && notesHasValue);
 
}

function getAllExampleText(){
    const allSelectedExamples = [...document.querySelectorAll('.gen-chk:checked')].map(e => $("#"+e.id).parent().text().trim());
    return allSelectedExamples;
}

function setEntryButtonState(isEnabled){
    if (isEnabled){
        document.querySelector("#SaveEntry").removeAttribute("disabled","");
        console.log("enabled");
    }
    else{
        document.querySelector("#SaveEntry").setAttribute("disabled","");
        console.log("disabled");        
    }
}

function displayExamplesHeader(isVisible){
    if (isVisible){
        examplesHeader.style.display = 'block';
    }
    else{
        examplesHeader.style.display = 'none';
    }
}

