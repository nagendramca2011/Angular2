$(document).ready(function () {
    $("#area1").text("Button1 Last Updated ")
    $("#area1").append(btn1State)
    $("#area2").text("Button2 Last Updated ")
    $("#area2").append(btn2State)
});

function buttonOneLogic() {
    var seconds = new Date().getTime() / 1000;
    btn2State = seconds;

    $("#area1").show();
    $("#area1").text("Button1 Last Updated ")
    $("#area1").append(btn1State)

}
function buttonTwoLogic() {
    var seconds = new Date().getTime() / 1000;
    btn1State = seconds;

    $("#area2").show();
    $("#area2").text("Button1 Last Updated ")
    $("#area2").append(btn1State)
}