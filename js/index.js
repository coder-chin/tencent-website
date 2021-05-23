const link = document.getElementById('link');
const details = document.querySelectorAll('.details-area .details .item');


//连接区域右侧，鼠标移入时文字上移
var link_items = document.querySelectorAll(
  ".link-area .link .link-content .content .item a"
);

link_items.forEach(item => {
  item.onmouseenter = function(){
    animate_column(this.children[0],250)
    animate_column(this.children[1],300)
    this.children[1].style.opacity = '1'
  }
  item.onmouseleave = function(){
    animate_column(this.children[0],305)
    animate_column(this.children[1],334)
    this.children[1].style.opacity = '0'
  }
})

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


//轮播图
var swiper = document.querySelector(".swiper-list");
var circle = document.querySelector(".circle");
var vw = document.querySelector(".develop-area .swiper");
var Width = vw.offsetWidth;
var arrow = document.querySelector('.arrow');
var arr_r = document.querySelector(".right");
var arr_l = document.querySelector(".left");

vw.onmouseover = function(){
  arrow.style.display = 'block';
  clearInterval(timer);
  timer = null;
}
vw.onmouseout = function(){
  arrow.style.display = 'none';
  timer = setInterval(function () {
    arr_r.click();
  }, 2000);
}

for(var index = 0; index < swiper.children.length; index++){
  var li = document.createElement('li');
  li.index = index;
  
  circle.appendChild(li);
  li.addEventListener('click',function(){
    num = this.index;
    cir = this.index;
    for(var i = 0; i<circle.children.length;i++){
      circle.children[i].className = '';
    }
    this.className = 'swiper_dot';
    var target = - this.index * Width;
    console.log(target);
    animate_row(swiper, target)
  })
}
circle.children[0].className = 'swiper_dot';

var first = swiper.children[0].cloneNode(true);
swiper.appendChild(first);

var num = 0;
var cir = 0;
arr_r.addEventListener('click',function(){
  if (num == swiper.children.length - 1) {
    swiper.style.left = "0";
    num = 0;
  } 
  num++;
  cir++;
  if(cir == circle.children.length){
    cir = 0;
  }
  circleChange();
  animate_row(swiper, -num * Width);
})
arr_l.addEventListener('click',function(){
  if(num == 0){ 
    num = swiper.children.length-1;
    swiper.style.left = - num * Width + 'px';
  }
  num--;
  animate_row(swiper, -num * Width);

  cir--;
  if (cir < 0) {
    cir = 2;
  }
  circleChange();
})
function circleChange(){
  for (var i = 0; i < circle.children.length; i++) {
    circle.children[i].className = "";
  }
  circle.children[cir].className = "swiper_dot";
}

var timer = setInterval(function(){
  arr_r.click();
},2000)

