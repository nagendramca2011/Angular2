# SimpleMVCDemo using plain javascript

MVC is a nothing but a design pattern, it is the solution for a common problem.

Controller is the one whose is going to change the model of your application. 
In this example, when we click button1 it changes the behaviour of the text.Similarly button2.

## View

Button1 Last Updated no value
Button2 Last Updated no value

## Controller

buttonOneLogic()
buttonTwoLogic()

## Model

The app.js which cannot say 
	which model belogs to which view and which model belongs to which controller.
```
function buttonOneLogic() {
    var seconds = new Date().getTime() / 1000;
    btn2State = seconds;
    $("#area1").show();
    $("#area1").text("Button1 Last Updated ")
    $("#area1").append(btn1State)

}
```	

Above snippet, if we change the btn1State model to btn2State model , it doesn't work. Because remember that, button1 controller functionality calls model2.
This is the problem of maintaining or writing the MVC framework in plain javascript. And that's why frameworks like angular comes into picture and help us saying that we will maintain and give the convention or give the architecture to the framework,that you can easily create web applications.

                                    Thanks for reading!
-
