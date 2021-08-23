console.log("hello kgp!");

// setInterval(() => {
//     var myframe = document.getElementById("myframe");
//     var myframeDoc = myframe.contentDocument || myframe.contentWindow.document;
//     console.log("doc state: ", myframeDoc.readyState);
// }, 500);

var lastMatch = 0;
var intervalId = setInterval(() => {
    // console.log("state: ", lastMatch);
    var myframe = document.getElementById("myframe") || document.getElementById("changed");
    var frameURL = myframe.contentWindow.location.href;
    if(frameURL.indexOf("TrainingPlacementSSO/StudentForm.jsp") != -1){
        if(lastMatch === 0){
            lastMatch = 1;
            startResumeHelper();
        }
    }
    else{
        lastMatch = 0;
    }
}, 1000);