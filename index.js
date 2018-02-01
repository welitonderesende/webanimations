'use strict';
/*
*   {Object} AnimationPlayer
*   player.pause();
*   player.play();
*   player.reverse();
*   player.cancel();
*   player.finish();
*   player.onfinish = function() {};
*   player.oncancel = function() {};
*   player.playState;
*   player.currentTime;
*   player.startTime;
*/

const player = document.getElementById('toAnimate').animate([
    { transform: 'scale(1) rotate(0deg)', opacity: 1, offset: 0 },
    { transform: 'scale(.5) rotate(90deg)', opacity: .5, offset: .3 },
    { transform: 'scale(.667) rotate(180deg)', opacity: .667, offset: .7875 },
    { transform: 'scale(.6) rotate(270deg)', opacity: .6, offset: 1 }
], {
    duration: 700, // milliseconds
    easing: 'ease-in-out',
    delay: 10,
    iterations: Infinity, // or number
    direction: 'alternate',
    fill: 'forwards'
});
{Object} AnimationPlayer
player.pause();
player.play();
player.reverse();
player.cancel();
player.finish();
player.onfinish = function() {};
player.oncancel = function() {};
player.playState;
player.currentTime;
player.startTime;