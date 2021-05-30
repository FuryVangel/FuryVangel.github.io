'use strict';

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainsBehind = document.getElementById('mountains_behind');
let mountainsFront = document.getElementById('mountains_front');
let header = document.querySelector('header');
let heading = document.getElementById('heading');
let btn = document.getElementById('btn');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value + 'px';
  mountainsBehind.style.top = value * 0.5 + 'px';
  mountainsFront.style.top = 0 + 'px';
  heading.style.marginRight = value * 2.5 + 'px';
  heading.style.marginTop = value * 1.6 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
})
