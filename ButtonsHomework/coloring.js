
var button1 = document.getElementById('first');
var button2 = document.getElementsByClassName('second');
var button3 = document.getElementsByTagName('button');
var Effect = 'click';

//Changes the first button background color to red

button1.addEventListener(Effect, function (e) {
	button1.style.backgroundColor = "rgb(255, 0, 0)";
	e.preventDefault();

},false);

//Changes the second button background color to green

button2[0].addEventListener(Effect, function (e) {
	button2[0].style.backgroundColor =" rgb(0, 255, 0)";
	e.preventDefault();

},false);

//Changes the third button background color to blue

button3[2].addEventListener(Effect, function (e) {
	button3[2].style.backgroundColor = "rgb(0, 0, 255)";
	e.preventDefault();

},false);

//Changes all the buttons background color to black and after that resets them back to white

var buttons = document.getElementsByName('Changable');
var check = 0

buttons[3].addEventListener(Effect, function (e) 
{
  if ((check) == 0) 
  {
    for (var i = 0; i < buttons.length ; i++)
    {
      //to black
      buttons[i].style.backgroundColor = "rgb(0, 0, 0)";
      e.preventDefault();

    };
    check = 1;
  }
  else if (check == 1)
  {
    for (var i = 0; i < buttons.length ; i++)
    {
      //to white
      buttons[i].style.backgroundColor = "rgb(255, 255, 255)";
      e.preventDefault();

    };
    check = 0;
  };
},false);

