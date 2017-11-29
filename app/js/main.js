$(document).ready(function() {
    // $(".tab-contant_container").firstChild().addClass("active");

    $(".tab-item:first").addClass("active");
    $(".tab-contant_container .tab:first").addClass("active");
    console.log(this);

    $(".b-blockitem li").click(function() {
        event.preventDefault();
        // console.log(event.target);
        if (!$(this).hasClass("active")) {
            var i = $(this).index();
            $(".b-blockitem li.active").removeClass("active");
            $(".tab-contant_container .active").hide().removeClass("active");
            $(this).addClass("active");
            $($(".tab-contant_container").children(".tab")[i]).fadeIn(1000).addClass("active");
        }
    });
});