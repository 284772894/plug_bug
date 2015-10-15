/**
 * Created by Administrator on 2015/10/13.
 */
//本周新增

function  weekAddFindBug(d)
{
//d:"2015-10-9"
    $("#bysearchTab").click();
    $("#searchmore").click();
//创建日期
    $("#field2 option").eq(27).attr("selected", "selected");
//创建日期选择条件
    $("#operator2 option").eq(3).attr("selected", "selected");
//创建的具体日期
    $("#value2").val(d);
    $("#submit").click()
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
    $("#value2").val(d)
//bug状态
    $("#field3 option").eq(6).attr("selected","selected")
// 关闭状态的bug
    $("#operator3 option").eq(0).attr("selected","selected")
    $("#value3 option").eq(3).attr("selected", "selected")
    $("#submit").click()
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
    $("#value2").val(statDate)

    $("#field5 option").eq(27).attr("selected", "selected");
    $("#operator5 option").eq(4).attr("selected", "selected");
    $("#value5").val(endDate)

    //bug状态
    $("#field3 option").eq(6).attr("selected","selected");
    $("#operator3 option").eq(1).attr("selected","selected")
    $("#value3 option").eq(3).attr("selected", "selected")

    $("#submit").click()

}

//没有解决总数
function noRsoleBug(){
    document.location.href="http://182.254.228.211:9099/bug-browse.html"
    $("#bysearchTab").click()
}

//累计解决bug
function resoleBug(){
    $("#field1 option").eq(6).attr("selected","selected")
    $("#value3 option").eq(4).attr("selected", "selected")

}
$(function(){

    $("#bug").change(function(){
        var s =  $(this).children('option:selected').val();
        if(s=="本周新增"){
            weekAddFindBug($("tbAddDate").val())
        }
        if(s=="本周实解"){
            WeekRsoleBug($("tbAddDate").val());
        }
        if(s=="未解总数"){
            noRsoleBug();
        }
        if(s=="累加解决"){
            resoleBug();
        }
        if(s=="上周遗留"){
            lastWeekNoBug($("tbAddDate").val(), $("tbEndDate").val())
        }
    });

    //$("#bug option").eq(0).click(function(){
    //    weekAddFindBug($("tbAddDate").val())
    //}) ;
    // $("#bug option").eq(1).click(function(){
    //     WeekRsoleBug($("tbAddDate").val());
    // });
    // $("#bug option").eq(2).click(function(){
    //     noRsoleBug();
    // });
    // $("#bug option").eq(3).click(function(){
    //     resoleBug()
    // });
    // $("#bug option").eq(4).click(function(){
    //     lastWeekNoBug($("tbAddDate").val(), $("tbEndDate").val())
    // });
});