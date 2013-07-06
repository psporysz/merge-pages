$(function(){
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
