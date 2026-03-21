//selector accion
$("#triggerEventButton").click(function (){
    alert("Trigger event");
});

$("#hideButton").click(function (){
    $("p").hide();
});

$("#showButton").click(function (){
    $("p").show();
});

$("#toggleButton").click(function (){
    $("p").toggle();
});

$("#changeTextButton").click(function (){
    $("p").text("this is the new text");
});

$("#addCssButton").click(function (){
    $("p")
        .css("color", "blue")
        .css("background-color", "yellow")
        .css("font-size", "30px");
});

$("#applyCssClassButton").click(function (){
    $("p").addClass("my-class");
});

$("p").hover(function (){
    $(this).css("background", "red");
});

$("#registerBTN").click(function (){
    $("")
        .css("background-color", "red");
});