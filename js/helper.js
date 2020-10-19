
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
    $("#competency").append(new Option("", "00-00", false, false));

    switch (cgValue){
        case "cg-01":{
            
            selfManagementCompetencies.map((item) => {
                var localOption = new Option(item.text, JSON.stringify(item), false, false);
                console.log(localOption);
                $("#competency").append($(localOption));
                console.log(item.value + " : " +  item.text);
            });
            break;
        }
        case "cg-02" :{
            dealingWithOthersCompetencies.map((item) => {
                var localOption = new Option(item.text, JSON.stringify(item), false, false);
                console.log(localOption);
                $("#competency").append($(localOption));
                console.log(item.value + " : " +  item.text);
            });
            break;
        }
        case "cg-03":{

        }
    }
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
        $("#examples").append(
            $(document.createElement("input")).prop({
            id: "myCheckBox-"+x,
            name: "interest",
            value: x,
            type: "checkbox"
            })
        )
        .append(
            $(document.createElement("label")).prop({
            for: "myCheckBox-"+x
            }).html(examples[x])
        ).append(document.createElement("br"));
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

