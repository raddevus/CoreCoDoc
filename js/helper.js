
function setCompetencySelection(){
    var cgValue = $("#competencyGroup").val();
    $("#examples").remove();
    $("#competencyDescription").text("");
    $("#competency").empty();
    
    if (cgValue == "00-00"){
        // nothing else to do, return;
        return;
    }
    // add first item as blank
    $("#competency").append(new Option("select...", "00-00", false, false));
    

    switch (cgValue){
        case "cg-01":{
            
            selfManagementCompetencies.map(mapToCompetency);
            break;
        }
        case "cg-02" :{
            dealingWithOthersCompetencies.map(mapToCompetency);
            break;
        }
        case "cg-03":{
            dealingWithBusinessCompetencies.map(mapToCompetency);
            break;
        }
    }
}

function mapToCompetency(item){
    var localOption = new Option(item.text, JSON.stringify(item), false, false);
    console.log(localOption);
    $("#competency").append($(localOption));
    console.log(item.value + " : " +  item.text);
}

function addCompetencyExamples(examples){
    console.log(examples.length);

    $("#competencyExamples").append(
        $(document.createElement("div")).prop({
            id:"examples"
        })
     )

    for (var x = 0;x < examples.length;x++){
        console.log(examples[x]);

        $("#examples").append($(document.createElement("div")).prop({
            class:"form-check noselect",
            }).append(
                $(document.createElement("input")).prop({
                id: "example-"+x,
                name: "interest",
                value: x,
                type: "checkbox",
                class:"form-check-input" 
                })
            ).append(
                $(document.createElement("label")).prop({
                for: "example-"+x
                }).html(examples[x])
            ).append(document.createElement("br"))
        );
    }
}

function setCompetencyDescription(){

    console.log("test");
    // we parse the value back into a Competency object.
    if (document.querySelector("#competency").value === "00-00"){
        $("#competencyDescription").text("");
        $("#examples").remove();
        return;
    }
    var currentCompetency = JSON.parse($("#competency").val());
    
    console.log(currentCompetency.description);
    
    $("#competencyDescription").text(currentCompetency.description);
    $("#examples").remove();

    console.log(currentCompetency.examples);
     if (currentCompetency.examples !== undefined){
         addCompetencyExamples(currentCompetency.examples);
     }

}

