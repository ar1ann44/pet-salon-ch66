$("#knowMoreButton").click(function(){

    $("#resumeContainer").slideToggle(400);
});

$("#changeModeButton").click(function(){

    // change the css class 
    $("body").toggleClass("dark-mode");


    // change the h1 text
    const isDark = $("body").hasClass("dark-mode");

    if(isDark){
        $("h1").text("☾ Dark Mode");
    } else {
        $("h1").text("☀ Light Mode");
    }

});
