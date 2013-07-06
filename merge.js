$(function(){
    // page links detection
    var paginatorEl = $('a:contains(1) + a:contains(2)').parent();

    // get content from all pages
    paginatorEl.find('a').each(function(){
        var url = $(this).attr('href');
        $.ajax(url).done(function(data){
            $('body').append(data);
        });
    });
});
