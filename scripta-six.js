$("document").ready(function() {


    window.onscroll = function () {
        scrollRotate();
    };
    
    function scrollRotate() {
        let image = document.getElementById("hex");
        image.style.transform = "rotate(" + window.pageYOffset/2.85 + "deg)";
    }







});