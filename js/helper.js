
const selfManagementCompetencies = [
    {val:"sm-01",text:"Self confidence"},
    {val:"sm-02",text:"Stress management"},
    {val:"sm-03",text:"Personal credibility"},
    {val:"sm-04",text:"Flexibility"}
];

function setCompetencySelection(){
    var cgValue = $("#competencyGroup").val();
    if (cgValue == "cg-00"){
        // the blank item was chosen, nothing to do.
        return;
    }
    $("#competency").empty();
    //console.log("loadSiteKeyList item : " + item.Key);
    
    switch (cgValue){
        case "cg-01":{
            // add first item as blank
            $("#competency").append(new Option("", "00-00", false, false));
            selfManagementCompetencies.map((item) => {
                var localOption = new Option(item.text, item.val, false, false);
                console.log(localOption);
                $("#competency").append($(localOption));
                console.log(item.val + " : " +  item.text);
            });

            //
        }
    }
	// 
	// 	$('#competency').append($(localOption) );
}