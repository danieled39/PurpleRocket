$(".container").click(function(){
    $(this).addClass('active');
    setTimeout(() => {
        $(this).removeClass('active');
    }, 7000);
});