var PAGE_LINKS_RE = /^\s*2\s*$/

$(function(){
    // page links detection
    // if have luck there are at least three pages
    // next to each other...
    var paginatorEl = $('a:contains(2) + a:contains(3)').parent();
    if(paginatorEl.length == 0) {
        // mayby we have some luck here...
        paginatorEl = $('a').filter(function() {
           return PAGE_LINKS_RE.test($(this).text());
        }).parent();
    }

    // inform tooltip about process
    var found_status = 'not_found';
    if (paginatorEl.length > 0) {
        found_status = 'found';
    }
    chrome.runtime.sendMessage({method: "merge_page_status", "status": found_status});

    // get content from all pages
    paginatorEl.find('a').each(function(){
        var url = $(this).attr('href');
        var iframe = $('<iframe src="' + url + '" />');
        iframe.appendTo('body');
        iframe.load(function() {
            var height = iframe.contents().height() + 'px';
            iframe.css({'border': 'none', 'width': '100%', 'height': height});
            chrome.runtime.sendMessage({method: "merge_page_status", "status": "done"});
        });
    });
});
