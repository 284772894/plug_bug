1.�˽ű���ѧϰchrome���
2.��Ҫ�����ǲ���ҳ��Ԫ��
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
popup.js��Ҫ�������popup.html�е�Ԫ�ز���������chrome.tabs.sendMessage�Ƿ���һ�������ڹ㲥����Ϣ��ȥ
d.js ��ʵ�ʲ���ҳ��Ԫ�صĽű�
popup.js���Ĵ��룺
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
			
d.js�еĺ��Ĵ��룺
       chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
            "from the extension");

        if (request.BugType == "weekAddBug"){ ����popup.js�еĹ㲥���ﵽ��popup.htmlҳ�潻���Ĺ���
         
        }