
window.addEventListener("load",initializeApp);
var localUser;

function initializeApp(){
    localUser = getLocalUser();
    if (localUser === null){
        addLocalUser();
    }
}

function addLocalUser(){
    localStorage.setItem("user",JSON.stringify({"id":uuidv4()}));
}

function getLocalUser(){
    console.log("getLocalUser()...");
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    console.log(user == "null");
    if (user === null){
        console.log("There is no user key.");
        return null;
    }
    return user;
}

function addUser(){
    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function intializeFirebase(){
    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
        apiKey: apiKey,
        authDomain: 'corecodoc.firebaseapp.com',
        projectId: 'corecodoc'
        });
  
    var db = firebase.firestore();
    console.log(db);
}

function uuidv4() {
    // got this from https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}