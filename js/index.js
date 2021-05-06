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

//视频上面滚动的文字
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


//连接hover
const links = document.querySelectorAll('.link-tab .item a');
const is = document.querySelectorAll('.link-tab .item a i');
const lines = document.querySelectorAll('.link-tab .item a .line');
const contents = document.querySelectorAll('.link-content .content');
for(let i = 0;i<links.length;i++){
  links[i].index = i;
  links[i].onmouseover = function(){
    for(let j=0;j<links.length;j++){
      links[j].classList.remove('current');
    }
    for(let j=0;j<links.length;j++){
      is[j].classList.remove('db');
    }
    for(let j=0;j<lines.length;j++){
      lines[j].classList.remove('change_op');
    }
    lines[this.index].classList.add('change_op');
    this.classList.add('current');

    const i = this.getElementsByTagName('i')[0];
    i.classList.add('db'); 
    for(let j=0; j<contents.length; j++){
      contents[j].classList.remove('db');
      contents[j].classList.add('dn');
    }
    contents[this.index].classList.remove('dn');
    contents[this.index].classList.add('db');
  }
}