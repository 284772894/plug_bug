/**
 * Created by Administrator on 2015/10/13.
 */
//document.getElementById("bysearchTab").click()
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
            "from the extension");

        if (request.BugType == "weekAddBug"){
            weekAddFindBug(request.startDate);
            sendResponse({farewell: "新增Bug统计"});
        }
        if (request.BugType == "WeekRsoleBug"){
            WeekRsoleBug(request.startDate);
            sendResponse({farewell: "本周实解Bug统计"});
        }
        if (request.BugType == "lastWeekNoBug") {
            lastWeekNoBug(request.startDate, request.endDate);
            sendResponse({farewell: "上周遗留Bug统计"});
        }
        if (request.BugType == "noRsoleBug"){
            noRsoleBug();
            sendResponse({farewell: "没有解决总数Bug统计"});
        }
        if (request.BugType == "resoleBug"){
            resoleBug();
            sendResponse({farewell: "解决总数Bug统计"});
        }

    });


//本周新增

function  weekAddFindBug(d)
{
//d:"2015-10-9"
    $("#bysearchTab").click();
    setTimeout(1000);
    $("#searchmore").click();
//创建日期
    $("#field2 option").eq(27).attr("selected", "selected");
//创建日期选择条件
    $("#operator2 option").eq(3).attr("selected", "selected");
//创建的具体日期
    $("#value2").val(d);
    $("#value5").val("");



    $("#submit").click();
}

//本周实解
function WeekRsoleBug(d){
    $("#bysearchTab").click();
    $("#searchmore").click();
//关闭日期
    $("#field2 option").eq(30).attr("selected","selected");
//关闭日期选择条件
    $("#operator2 option").eq(3).attr("selected","selected");
//关闭bug的具体日期
    $("#value2").val(d);
//bug状态
    $("#field3 option").eq(6).attr("selected","selected");
// 关闭状态的bug
    $("#operator3 option").eq(0).attr("selected","selected");
    setTimeout(1000);
    $("#value3 option").eq(3).attr("selected", "selected");
    $("#value5").val("");

    $("#submit").click();
}
//上周遗留bug
function lastWeekNoBug(statDate,endDate){

    $("#bysearchTab").click();
    $("#searchmore").click();
//创建日期
    $("#field2 option").eq(27).attr("selected", "selected");
//创建日期选择条件
    $("#operator2 option").eq(3).attr("selected", "selected");
//创建的具体日期
    $("#value2").val(statDate);
    setTimeout(1000);
    $("#field5 option").eq(27).attr("selected", "selected");
    $("#operator5 option").eq(4).attr("selected", "selected");
    $("#value5").val(endDate);

    //bug状态
    $("#field3 option").eq(6).attr("selected","selected");
    $("#operator3 option").eq(1).attr("selected","selected");
    $("#value3 option").eq(3).attr("selected", "selected");
    $("#value5").val(endDate);

    $("#submit").click();

}

//没有解决总数
function noRsoleBug(){
    document.location.href="http://182.254.228.211:9099/bug-browse.html";
    $("#bysearchTab").click();
}

//累计解决bug
function resoleBug(){
    $("#bysearchTab").click();

    $("#searchmore").click();

    $("#field3 option").eq(6).attr("selected","selected");
    $("#operator3 option").eq(0).attr("selected","selected");
    $("#value3 option").eq(3).attr("selected", "selected");
    $("#submit").click();

}