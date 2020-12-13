function displayJournal(){
    //alert("Journal tab has focus!");
    if (localJournal !== null && localJournal !== undefined){
        addEntries();
    }
    else{
        $("#entries").remove();
    }
    console.log("got it!");
}


function addEntries(){
    console.log(localJournal.entries.length);
    $("#entries").remove();
    $("#journalSection").append(
        $(document.createElement("div")).prop({
            id:"entries"
        })
     )

    for (let x = 0;x < localJournal.entries.length;x++){
        // 1. Add outer div to "#entries div"
        $("#entries").append($(document.createElement("div"))
        // 2. append strong text to div which contains competency name
        .append($(document.createElement("strong"))
            .text(localJournal.entries[x].competency)
            .prop({class:"competencyHeader"}))
        // 3. append span add text which includes formatted created date and 
        //    add a class to the span (for styling purposes)
        .append($(document.createElement("span"))
            .text(formatDate(localJournal.entries[x].created))
            .prop({class:"createdDate"}))
        .append($(document.createElement("p")).text(localJournal.entries[x].notes))
        .append($(document.createElement("p"))
            .text("Supporting Examples")
            .prop({class:"exampleHeader"}))
        .append($(document.createElement("ul"))
            .append(localJournal.entries[x].examples.map(appendExamples)))
        .append($(document.createElement("hr")))
      );
    }
}

function appendExamples(item){
    return $(document.createElement("li")).text(item);
}

// This helper formatDate function was obtained from : 
// https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}