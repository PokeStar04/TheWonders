$(() => {
    $(".popup").each(function () {
        $(this).toggleClass("active");
        $(".popup-content").toggleClass("active");
    });
    $(".btn-close").click(function () {
        $(".popup").removeClass("active");
        $(".popup-content").removeClass("active");
        $(".blur_active").removeClass("blur_active");
        $(".croix").css("display", "none");
    });
    $("#blur").each(function () {
        $(this).toggleClass("blur_active");
    });
});
