const link = document.getElementById('link');
const details = document.querySelectorAll('.details-area .details .item');

details[0].addEventListener('mouseover',function(){
  details[0].classList.remove('intro');
  details[0].classList.add('intro_hover');
})
details[1].addEventListener('mouseover',function(){
  details[1].classList.remove('culture');
  details[1].classList.add('culture_hover');
})
details[2].addEventListener('mouseover',function(){
  details[2].classList.remove('location');
  details[2].classList.add('location_hover');
})

details[0].addEventListener('mouseout', function () {
  details[0].classList.add('intro');
  details[0].classList.remove('intro_hover');
})
details[1].addEventListener('mouseout', function () {
  details[1].classList.add('culture');
  details[1].classList.remove('culture_hover');
})
details[2].addEventListener('mouseout', function () {
  details[2].classList.add('location');
  details[2].classList.remove('location_hover');
})

function timer(){
  var top = -243;
  var timer = setInterval(function(){
    top += 81;
    link.style.top = top + 'px';
    if(top == 0){

      setTimeout(function(){

      },2000)
      top = -324;
    }
  },2000)
}
timer()
