1.此脚本是学习chrome插件
2.主要功能是操作页面元素
{
...
  },
  "browser_action": {
    "default_icon": "16.png",
    "default_title": "",
    "default_popup": "popup.html"
  },
  "background": {
    "scripts": ["background.js"]  
	
  },
  "content_scripts": [{
    "matches": ["http://182.254.228.211:9099/*"],
    "js": ["d.js","jquery.js"],
    "run_at": "document_end"
  }],
  "permissions": [
    "tabs",
    "http://182.254.228.211:9099/"
  ],
  "web_accessible_resources": ["popup.js"] 
}
popup.js主要是针对于popup.html中的元素操作，其中chrome.tabs.sendMessage是发送一个类似于广播的信息出去
d.js 是实际操作页面元素的脚本
popup.js核心代码：
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {startDate: $("#tbStartDate").val(),BugType:"WeekRsoleBug"}, function(response) {
                console.log(response.farewell);
            });
        });
        chrome.tabs.executeScript({
            file: 'd.js'
        });
		hrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
            "from the extension");
			
d.js中的核心代码：
       chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
            "from the extension");

        if (request.BugType == "weekAddBug"){ 接受popup.js中的广播，达到和popup.html页面交互的功能
         
        }