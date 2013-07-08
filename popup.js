$(function(){
    // bind to status change events
     chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
          if (request.method === "merge_page_status") {
            $('.progress-bar .' + request.status).show();
          }
          sendResponse({});
    });

    // prepare content
    $('.progress-bar li').hide();
    $('.progress-bar .looking').show();

    // gets tab's content and process
    chrome.tabs.getCurrent(function(tab) {
           // load jquery
           chrome.tabs.executeScript(null, {file:"jquery-1.10.2.min.js"}); 
            
           // load main script
           chrome.tabs.executeScript(null, {file:"merge.js"}); 
    });

    // close popup
    $('.close-button').click(function(){
        self.close();
    });

});
