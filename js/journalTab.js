function displayJournal(){
    //alert("Journal tab has focus!");
    if (localJournal !== null && localJournal !== undefined){
        addEntries();
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

    for (var x = 0;x < localJournal.entries.length;x++){
        // NOTE: gen-chk is my special value used for
        // my script to determine which items are checked.
        // console.log(examples[x]);

        $("#entries").append($(document.createElement("div")).prop({
            class:"",
            text:localJournal.entries[x].created,
            // }).append(
            //     $(document.createElement("input")).prop({
            //     id: "example-"+x,
            //     name: "interest",
            //     value: x,
            //     type: "checkbox",
            //     class:"form-check-input gen-chk",
            //     })
            // ).append(
            //     $(document.createElement("label")).prop({
            //     for: "example-"+x,
            //     }).html(examples[x])
        })
        .append(localJournal.entries[x].competency)
        .append(localJournal.entries[x].created)
        //.append(document.createElement("div"))
        .append(document.createElement("br"))
        .append(localJournal.entries[x].notes)
        
        );
    }
}