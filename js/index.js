const link = document.getElementById('link');

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
