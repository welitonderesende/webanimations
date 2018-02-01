var a = document.querySelectorAll('#a > div');
var b = document.querySelectorAll('#b > div');
a = Array.prototype.slice.call(a);

var timings = {
    easing: 'ease',
    iterations: Infinity,
    direction: 'reverse',
    fill: 'both'
}

// a.forEach(function(el, i, ra) {
//     timings.delay = i * 98;
//     timings.duration = 5000;
//     el.animate([
//         {transform: `rotate(0deg) translateY(-400px) scaleX(.8)`},
//         {transform: `rotate(-360deg) translateY(-400px) scaleX(.8)`}
//     ], timings);

//     timings.duration = 2000;
//     el.animate([
//         {opacity: 1},
//         {opacity: .5}
//     ], timings);

//     timings.duration = 3000;
//     el.animate([
//         {backgroundColor: 'rgb(239, 200, 200)'},
//         {backgroundColor: '#ee4477'}
//     ], timings);
// });

a = Array.prototype.slice.call(a);

a.forEach(function(el, i, ra) {
    var to = {
        x: Math.random() * 100,
        y: Math.random() * 50
    }

    el.animate([
        { transform: 'translate(0,0)' },
        { transform: 'translate('+to.x+'rem,'+to.y+'rem)' }
    ], {
        duration: (Math.random() + 1) * 2000,
        direction: 'alternate',
        fill: 'both',
        iterations: Infinity,
        easing: 'ease-in-out'
    });
});

b = Array.prototype.slice.call(b);
b.forEach(function(el, i, ra) {
    var to = {
        x: Math.random() * 100,
        y: Math.random() * 500
    }
    
    el.animate([
        { transform: 'translate(0,0)' },
        { transform: 'translate(-'+to.x+'px,-'+to.y+'px)' }
    ], {
        duration: (Math.random() + 1) * 2000,
        direction: 'alternate',
        fill: 'both',
        iterations: Infinity,
        easing: 'ease-in-out'
    });
});
// function loop() {
//     const x, y = 0;
//     for(let i = 0; i < 360; i++) {
//         x = cx + radius * Math.cos(i * Math.PI / 180);
//         y = cy + radius * Math.sin(i * Math.PI / 180);
//     }
//     return {x,y};
// }