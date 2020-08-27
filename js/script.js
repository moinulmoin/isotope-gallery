
//isotopeJs activating by jquery

$('.i_gallery').isotope({
    itemSelector: '.g_item',
    layoutMode: 'fitRows'
});

//filtering Click function

$('.i_top ul li').click(function(){
    $('.i_top ul li').removeClass('active');
    $(this).addClass('active');

    let filterItems = $(this).attr('data-filter');
    $('.i_gallery').isotope({
        filter: filterItems
    })
    return false;
});