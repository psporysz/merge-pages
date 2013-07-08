$(function(){
    // page links detection
    var paginatorEl = $('a:contains(1) + a:contains(2)').parent();

    // get content from all pages
    paginatorEl.find('a').each(function(){
        var url = $(this).attr('href');
        var iframe = $('<iframe src="' + url + '" />');
        iframe.appendTo('body');
        iframe.load(function() {
            var height = iframe.contents().height() + 'px';
            console.log('height: ' + height);
            iframe.css({'border': 'none', 'width': '100%', 'height': height});
        });
    });
});
