$(".icon").click(function () {
    $(".main").css('visibility', 'visible');
    setTimeout(function () {
        $("#card-content").css("visibility", "visible")
    }, 1000);
    setTimeout(function () {
        $(".card1").css("visibility", "visible")
    }, 2000);
    setTimeout(function () {
        $(".card2").css("visibility", "visible")
    }, 3000);
    setTimeout(function () {
        $(".card3").css("visibility", "visible")
    }, 4000);
    setTimeout(function () {
        $(".card4").css("visibility", "visible")
    }, 5000);
    setTimeout(function () {
        $(".card5").css("visibility", "visible")
    }, 6000)
})

