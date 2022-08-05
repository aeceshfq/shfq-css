// modal
$('.btn_modal').on("click", function () {
    $('.modal').addClass('visible');
    $("body").css("overflow", "hidden");
})
$(".modalBtnClose").on("click", function () {
    $(this).parents('.modal').removeClass("visible");
    $("body").css("overflow", "auto");
})
// mobile view show menu
$('.titleBar-Actions--mobileView').on("click", function () {
    $('.secondaryActions').addClass('show_menu')
})

// header avator menu
$('.popoverToggle').on("click", function () {
    $('.popoverToggleMenu').addClass('visible');
})
$('.MainBody, .MainMenu').on("click", function () {
    $('.popoverToggleMenu').removeClass('visible');
})

// pricing schedule tour booking
$('.actionMenuFields').on("click", function () {
    $('.tourListMenu').css("display", "block");
})
