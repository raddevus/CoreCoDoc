
window.addEventListener("load",initializeApp);
let localUser;
let localJournal;
let localEntry;
let db;
let screenNameButton;
let screenName;
let saveEntryButton;
let notesTextArea;
let examplesHeader;
let setSecretButton;
let genQRCodeButton;
let saveSecretIdButton;
let cancelSecretButton;
let setOriginalButton;
let qrImage;
let qrFormIsVisible = false;
let secretIsDisplayed = false;
let setCurrentAsOrig = false;

function initializeApp(){
    document.body.addEventListener("mouseup", body_mouseup);
    setEntryButtonState(false);
    qrImage = document.querySelector("#qrCode");
    screenNameButton = document.querySelector("#screenNameButton");
    screenNameButton.addEventListener("click", () => {
        let screenNameCtrl = document.querySelector("#screenNameText");
        screenName = screenNameCtrl.value;
        if (screenName !== ""){
            localUser.screenName = screenName;
            updateUser();
        }
        else{
            alert("Please add a screen name and try again.");
            screenNameCtrl.focus();
            return;
        }
    });
    $("#competencyGroup").on("change", setCompetencySelection);
    $("#competency").on("change", setCompetencyDescription);
    $("#revealSecretButton").on("click", toggleSecret)

    setSecretButton = document.querySelector("#setSecretButton");
    setSecretButton.addEventListener("click", setSecretButton_Click);

    genQRCodeButton = document.querySelector("#genQRButton");
    genQRCodeButton.addEventListener("click", genQRCodeButton_Click);


    cancelSecretButton = document.querySelector("#cancelSecretIdButton");
    cancelSecretButton.addEventListener("click", cancelSecretIdButton_Click);

    cancelOriginalSecretIdButton = document.querySelector("#cancelOriginalSecretIdButton");
    cancelOriginalSecretIdButton.addEventListener("click", cancelSecretIdButton_Click);
        
    saveSecretIdButton = document.querySelector("#saveSecretIdButton");
    saveSecretIdButton.addEventListener("click", saveSecretIdButton_Click);

    setOriginalSecretIdButton = document.querySelector("#setOriginalSecretIdButton");
    setOriginalSecretIdButton.addEventListener("click", handleUserConfirmedSetOriginalSecret);

    saveEntryButton = document.querySelector("#SaveEntry");
    saveEntryButton.addEventListener("click", saveEntryButton_Click);
    notesTextArea = document.querySelector("#notes");
    notesTextArea.addEventListener("input", notesTextArea_Change);
    setOriginalButton = document.querySelector("#setOriginalButton");
    setOriginalButton.addEventListener("click", setOriginalButton_Click);

    // initially hide examples header since no examples are shown
    examplesHeader = document.querySelector("#supportingExamplesHdr");
    displayExamplesHeader(false);
    

    initializeFirebase();
    localUser = getLocalUser();
    if (localUser === null){
        addLocalUser();
        saveUserToFirebase();
    }
    displayUserId(localUser.id)
    loadUserFromFirebase(false);
    displayCurrentScreenName();
    displaySecretIdCloudButton();

    // Handles which tab is selected
    $("a[data-toggle='tab']").on("shown.bs.tab", function (e) {
        switch (e.target.id){
            case "journalTab" :{
                displayJournal();
                break;
            }
            case "mainTab" : {
                break;
            }
        }
        // console.log(e.target.id); // newly activated tab
        // console.log(e.relatedTarget); // previous active tab
      })

}

function displayUserId(userId){
    // Add secret userId to password text box so user will know
    // it is there and can display it if she wants to.
    document.querySelector("#secretId").value = userId;
}

function toggleSecret(){
    let secretIdInput = document.querySelector("#secretId");
    if (secretIdInput.type === "password") {
        secretIdInput.type = "text";
        secretIsDisplayed = true;
        document.querySelector("#revealSecretButton").innerHTML = "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-eye-slash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z'/><path d='M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z'/><path d='M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z'/><path fill-rule='evenodd' d='M13.646 14.354l-12-12 .708-.708 12 12-.708.708z'/></svg>";
    } 
    else {
        secretIdInput.type = "password";
        secretIsDisplayed = false;
        document.querySelector("#revealSecretButton").innerHTML = "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-eye' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>  <path fill-rule='evenodd' d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z'/>  <path fill-rule='evenodd' d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z'/></svg>"
    }
}

function displayCurrentScreenName(){
    // only if the localUser is valid and the screenName is set
    if (localUser !== null && localUser.screenName != ""){
        $("#screenNameText").val(localUser.screenName);
    }
    else{
        $("#screenNameText").val("");
    }
}

function displaySecretIdCloudButton(){
    let originalSecret = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-cloud-check' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z'/><path fill-rule='evenodd' d='M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z'/></svg>";
    let uploadCloud = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-cloud-download-fill' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z'/></svg>";
    let setOrigButton = document.querySelector("#setOriginalButton");
    if (isOriginalSecretLoaded()){
        setOrigButton.innerHTML = originalSecret;
        setOriginalButton = document.querySelector("#setOriginalButton");
        setOriginalButton.removeEventListener("click", setOriginalButton_Click);
        setOriginalButton.addEventListener("click", setCurrentSecretAsOrig_Click);
        setOrigButton.title="Use current value as Original Secret Key";
    }
    else{
        setOrigButton.innerHTML = uploadCloud;
        setOriginalButton = document.querySelector("#setOriginalButton");
        setOriginalButton.removeEventListener("click", setCurrentSecretAsOrig_Click);
        setOriginalButton.addEventListener("click", setOriginalButton_Click);
    
        setOrigButton.title="Restore Original Secret";
    }
}

function addLocalUser(){
    localUser = new User(uuidv4());
    saveOriginalSecretIdToLocalStorage(localUser.id);
    saveUserToLocalStorage();
}

function saveUserToLocalStorage(){
    localStorage.setItem("user",JSON.stringify(localUser));
    if (setCurrentAsOrig){
        saveOriginalSecretIdToLocalStorage(localUser.id);
        setCurrentAsOrig = false;
    }
}

function saveOriginalSecretIdToLocalStorage(id){
    // This can be used to always check to insure that
    // the user can get back to his original id.
    localStorage.setItem("originalSecret",id);
}

function updateUser(){
    // updates the localUser in localStorage and
    // update the user at firebase
    saveUserToLocalStorage();
    let docRef = db.collection("users").doc(localUser.id);
    docRef.update(JSON.parse(JSON.stringify(localUser)));
}

function getLocalUser(){
    console.log("getLocalUser()...");
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user === null){
        console.log("There is no user key.");
        return null;
    }
    return user;
}

function loadUserFromFirebase(isSettingSecret){
    // isSettingSecret is used becuase this method is
    // also called upon loading the page
    let docRef = db.collection("users").doc(localUser.id);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            localUser = doc.data();
            saveUserToLocalStorage();
            displayCurrentScreenName();
            loadJournalFromFirebase();
        } else if (isSettingSecret){
            console.log("Couldn't set Secret Id: invalid value.");
            // doc.data() will be undefined in this case
            $("#setSecretFailedModal").modal("show");
            displaySecretIdCloudButton();
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function saveUserToFirebase(){
    // REMEMBER! The odd JSON.stringify wrapped in a JSON.parse is a requirement
    // by Firebase -- this can be fixed other ways later
    db.collection("users").doc(localUser.id.toString()).set(JSON.parse(JSON.stringify(localUser)))
    .then(function() {
        console.log("Document written successfully: " + localUser.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function initializeFirebase(){
    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
        apiKey: apiKey,
        authDomain: 'corecodoc.firebaseapp.com',
        projectId: 'corecodoc'
        });
  
    db = firebase.firestore();
    console.log(db);
}

function uuidv4() {
    // got this from https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// *************************************
// *** Save Entry Work begin
// *************************************

function notesTextArea_Change(){
    notesHasValue = (notesTextArea.value.length > 0);
    setEntryButtonState(competencyIsSelected 
        && notesHasValue);
}

function saveEntryButton_Click(){
    const allExampleText = getAllExampleText();
    if (allExampleText.length < 1){
        $("#selectExampleWarnModal").modal("show");
        return;
    }
    else{
        let currentNotes = document.querySelector("#notes").value;
        if (localJournal === undefined || localJournal === null){
            let entries = [];
            entries.push(new Entry({notes:currentNotes,group:currentCompetency.group,competency:currentCompetency.text,examples:allExampleText}));
            localJournal = new Journal({ownerId:localUser.id,publicId:localUser.publicId, entries:entries})
        }
        else{
            localJournal.entries.push(new Entry({notes:currentNotes,group:currentCompetency.group,competency:currentCompetency.text,examples:allExampleText}));
        }
        
        //alert("Yep, you got it : " + allExampleText.join());
        saveEntryToFirebase();
        console.log("Yep, you got it : " + allExampleText.join());
    }
}

function loadJournalFromFirebase(){

    let journalRef;

    journalRef = db.collection("journals").doc(localUser.publicId);
    
    journalRef.get().then(function(journal) {
        if (journal.exists) {
            console.log("Journal data:", journal.data());
            localJournal = journal.data();

        } else {
            console.log("Couldn't get Journal - doesn't exist.");
            localJournal = null;
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function saveEntryToFirebase(){
    // REMEMBER! The odd JSON.stringify wrapped in a JSON.parse is a requirement
    // by Firebase -- this can be fixed other ways later
    db.collection("journals").doc(localUser.publicId.toString()).set(JSON.parse(JSON.stringify(localJournal)))
    .then(function() {
        console.log("Journal Entry written successfully: " + localUser.id);
        // Entry has been saved so reset all of the controls.
        document.querySelector("#notes").value = "";
        notesHasValue = false;
        document.querySelector("#competencyGroup").selectedIndex = 0;
        setCompetencySelection();
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function genQRCodeButton_Click(){
    let qrForm = document.querySelector("#qrForm");
    
    qrForm.style.display = "block";
    console.log(qrForm);
    let secretIdInput = document.querySelector("#secretId");
    console.log(secretIdInput.value);
    fetch("https://newlibre.com/QRCodeGen/QREncoder/GetBase64QR?inText=" + secretIdInput.value)
        .then(response => response.text())
        .then(data => qrImage.src="data:image/png;base64," + data)
        .then(qrFormIsVisible = true);
}

function body_mouseup(){
    if (qrFormIsVisible){
        let qrForm = document.querySelector("#qrForm");
        qrForm.style.display = "none";
        qrFormIsVisible = false;
    }
}

// **************************************
// *** Keeping Secret Id In Sync /w UI
// **************************************
function isOriginalSecretLoaded(){
    if (localStorage.getItem("originalSecret") != localUser.id){
        return false;
    }
    return true;
}

function setCurrentSecretAsOrig_Click(){
    console.log("test code..");
    console.log("secretIsDisplayed : " + secretIsDisplayed);
    let secretIdInput = document.querySelector("#secretId");
    // If the stored id is not any different than one in
    // the secret id input then there is no work to do.
    if (localUser.id !== secretIdInput.value){
        if (secretIsDisplayed){
            $("#setOriginalSecretIdModal").modal("show");
        }
    }
}

function handleUserConfirmedSetOriginalSecret(){
    console.log("in here...");
    localUser.id =  document.querySelector("#secretId").value;
    setCurrentAsOrig = true;
    loadUserFromFirebase(true);
}

function setOriginalButton_Click(){
    document.querySelector("#secretId").value = localStorage.getItem("originalSecret");
    saveSecretIdButton_Click();
}

// **************************************
// *** Set Secret Button work
// **************************************
function setSecretButton_Click(){

    // 1. determine that the user has indeed changed the SecretId value by 
    // comparing value in text box to value in localStorage (localUser.id).

    let secretIdInput = document.querySelector("#secretId");
    console.log(secretIdInput.value);
    if (secretIdInput.type != "text"){
        alert("To set a new Secret Id, first you need to display the value and paste a new one in.");
        return;
    }
    if (localUser.id !== secretIdInput.value){
        if (shouldWarnUser()){
            $("#saveSecretIdModal").modal("show");
        }
    }
}

function cancelSecretIdButton_Click(){
    displayUserId(localUser.id);
}

function saveSecretIdButton_Click(){
    
    localUser.id =  document.querySelector("#secretId").value;
    loadUserFromFirebase(true);
    displaySecretIdCloudButton();
}

function shouldWarnUser(){
    let secretIdWarning = localStorage.getItem("secretIdWarning");
    console.log(secretIdWarning);
    if (secretIdWarning === null || secretIdWarning == "true"){
        return true;
    }
    return false;
}

function doNotWarnUserAboutSecretId(){
    localStorage.setItem("secretIdWarning", "false");
}

class User{
    constructor(id){
        this.id = id;
        this.publicId = uuidv4();
        this.screenName = "";
        this.created = new Date();
    }
}