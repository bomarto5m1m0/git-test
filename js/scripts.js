$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").addClass("fa-pause");
            $("#carouselButton").children("i").remoreClass("fa-play")   
        }
    });

    /*modals toggle*/
    $(function() {
        $("#reserveButton").click(function(){
            $('#reserveModal').modal('toggle');
        })
    })

    $(function() {
        $("#loginButton").click(function(){
            $('#loginModal').modal('show');
        })
    })
    


    /*document ready function closing*/
});

