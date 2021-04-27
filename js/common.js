const headNav = document.querySelector(".header .header-nav .nav-list");
const header = document.getElementsByClassName('header')[0];
const logo = document.getElementsByClassName('logo')[0];
const as = document.querySelectorAll('.header .header-nav .nav-list li a');
const lis = document.querySelectorAll('.header .header-nav .nav-list > li');
const mores = document.querySelectorAll('.header .header-nav .nav-list li .more-list');
const langs = document.querySelectorAll('.header .header-nav .lang a,i');


headNav.onmouseover = function() {
  header.style.height = "442px";
  logo.classList.add('logo_hover');
  as.forEach(element => {
    element.classList.add('head-color');
  });
  langs.forEach(item => {
    item.classList.add('head-color');
  });
  
}
header.onmouseout = function() {
  header.style.height = "0";
  logo.classList.remove('logo_hover');
  as.forEach(element => {
    element.classList.remove('head-color');
  });
  langs.forEach(item => {
    item.classList.remove('head-color');
  });
}

for (let index = 0; index < lis.length; index++) {
  const element = lis[index];
  element.addEventListener('mouseover',function(){
    mores[index].style.display = 'block';
  })
  element.addEventListener('mouseout',function(){
    mores[index].style.display = 'none';
  })
}
