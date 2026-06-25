function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ke66IUYdvU":
        Script1();
        break;
      case "5dFJ0Gm8isV":
        Script2();
        break;
      case "64ozVvDs4fL":
        Script3();
        break;
      case "6EWFo894N3N":
        Script4();
        break;
      case "5eCxtZ5Dp2r":
        Script5();
        break;
      case "6apTTY1EkvQ":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('6E5XJWMi4wO');
const duration = 750;
const easing = 'ease-out';
const id = '6NoiEvvUYvT';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5XghGhHjZTu');
const duration = 750;
const easing = 'ease-out';
const id = '5f1j3AVoEXv';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
