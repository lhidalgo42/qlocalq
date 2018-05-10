$(document).ready(function () {

    $("#content").addClass('animated').addClass('fadeIn');
    $("a").addClass('prevented');
    $("a").click(function (e) {
        if ($(this).hasClass('prevented')) {
            e.preventDefault();
        }
    });
    setTimeout(function () {
        $("a").removeClass("prevented");
        $("a").click(function (e) {
            e.preventDefault();
            var go = $(this).attr('href');
            $("#content").removeClass('fadeIn').addClass('fadeOut');
            setTimeout(function () {
                window.location.href = go;
            }, 200);
        });
    }, 400);
});
