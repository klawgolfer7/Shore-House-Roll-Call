console.log("lets get this working!")

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA9f9-swbQH2prnoGjWPhhfuhOnVAB5JyE",
    authDomain: "shore-house-roll-call-db-9ffed.firebaseapp.com",
    databaseURL: "https://shore-house-roll-call-db-9ffed.firebaseio.com",
    projectId: "shore-house-roll-call-db-9ffed",
    storageBucket: "",
    messagingSenderId: "359042069125"
};
firebase.initializeApp(config);

var database = firebase.database();


$(document).ready(function() {


    // Image Carousel click functions

    $('.entry').on('click', function(e) {

        // THis should be working to make the image pop into the carousel
        var target = $(e.target)
        var src = target.attr('src')

        $('.lightbox img').attr('src', src);

        $('body').addClass('lightbox-active');
        $('.lightbox img').addClass('resize2');

    });
    $('.close').on('click', function() {
        $('body').removeClass('lightbox-active');
        $('.lightbox img').removeClass('resize2');
    });

    // change the speed of clicking on the nav bar to get to the section
    $('.nav-wrapper').onePageNav({
        scrollSpeed: 1000

    });

    var menu = $(".nav-wrapper nav");

    $("#menu-icon").click(function() {

        $(menu).slideToggle();

    });

    // fix bug where menu is still hidden when I make the page bigger
    $(window).resize(function() {
        var w = $(window).width();

        // width is greater than 768 and nav is hidden
        if (w > 768 && $(menu).is(":hidden")) {
            $(menu).removeAttr("style");
        }

    });



});






// want to use this to get the following weekend from the date that we are currently on.  Having issues
var d = new Date();

document.getElementById("demo").innerHTML = Date();