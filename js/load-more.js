$(function load(){
    $('.full-row-blog').slice(0, 5).show();
    $("#load").click(function(e){
        e.preventDefault();
        $('.full-row-blog:hidden').slice(0, 5).show(); 
        if($('.full-row-blog:hidden').length == 0){
            $('#load').fadeOut();
        }
    });
});