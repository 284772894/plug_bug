///**
// * Created by Administrator on 2015/10/13.
// */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#weekAddBug').addEventListener('change', changeHandler);
    document.querySelector('#WeekRsoleBug').addEventListener('change', changeHandler);
    document.querySelector('#lastWeekNoBug').addEventListener('change', changeHandler);
    document.querySelector('#noRsoleBug').addEventListener('change', changeHandler);
    document.querySelector('#resoleBug').addEventListener('change', changeHandler);
});

function changeHandler(){
    //Do Something...maybe another function showAlert(), for instance
    if(document.getElementById("weekAddBug").checked){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {startDate: $("#tbStartDate").val(),BugType:"weekAddBug"}, function(response) {
                console.log(response.farewell);
            });
        });
        chrome.tabs.executeScript({
            file: 'd.js'
        });
    }
    if(document.getElementById("WeekRsoleBug").checked){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {startDate: $("#tbStartDate").val(),BugType:"WeekRsoleBug"}, function(response) {
                console.log(response.farewell);
            });
        });
        chrome.tabs.executeScript({
            file: 'd.js'
        });
    }

    if(document.getElementById("lastWeekNoBug").checked){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {startDate: $("#tbStartDate").val(),BugType:"lastWeekNoBug",endDate:$("#tbEndDate").val()}, function(response) {
                console.log(response.farewell);
            });
        });
        chrome.tabs.executeScript({
            file: 'd.js'
        });
    }
    if(document.getElementById("noRsoleBug").checked){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {BugType:"noRsoleBug"}, function(response) {
                console.log(response.farewell);
            });
        });
        chrome.tabs.executeScript({
            file: 'd.js'
        });
    }
    if(document.getElementById("resoleBug").checked){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {BugType:"resoleBug"}, function(response) {
                console.log(response.farewell);
            });
        });
        chrome.tabs.executeScript({
            file: 'd.js'
        });
    }

}
//chrome.runtime.onMessage.addListener(
//    function(request, sender, sendResponse) {
//        alert(request.message);
//    }
//);

