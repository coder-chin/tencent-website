//轮播图
var swiper = document.querySelector(".swiper-list"); //轮播图列表
var circle = document.querySelector(".circle"); //小圆点区域
var vw = document.querySelector(".develop-area .swiper"); //vw是整个轮播图区域的视图
var arrow = document.querySelector(".arrow"); //箭头
var arr_r = document.querySelector(".right"); //左箭头
var arr_l = document.querySelector(".left"); //右箭头
var Width = window.screen.width;
var num = 0;
var cir = 0;

//改变点的函数
function circleChange() {
  for (var i = 0; i < circle.children.length; i++) {
    circle.children[i].className = "";
  }
  circle.children[cir].className = "swiper_dot";
}

vw.onmouseover = function () {
  arrow.style.display = "block";
  clearInterval(timer);
  timer = null;
};
vw.onmouseout = function () {
  arrow.style.display = "none";
  timer = setInterval(function () {
    arr_r.click(); //手动开启事件，当成函数来理解
  }, 2000);
};

for (var index = 0; index < swiper.children.length; index++) {
  var li = document.createElement("li");
  li.index = index; //自定义属性

  circle.appendChild(li);
  li.addEventListener("click", function () {
    //在创建的时候就添加事件
    num = this.index;
    cir = this.index;
    for (var i = 0; i < circle.children.length; i++) {
      //排他思想
      circle.children[i].className = "";
    }
    this.className = "swiper_dot";
    var target = -this.index * Width;
    console.log(target);
    animate_row(swiper, target);
  });
}
circle.children[0].className = "swiper_dot"; //原始，第一个点激活状态

var first = swiper.children[0].cloneNode(true); //克隆节点，参数true全克隆（子节点也克隆）
swiper.appendChild(first);

//点击右箭头
arr_r.addEventListener("click", function () {
  if (num == swiper.children.length - 1) {
    swiper.style.left = "0";
    num = 0;
  }
  num++;
  cir++;
  if (cir == circle.children.length) {
    cir = 0;
  }
  circleChange();
  animate_row(swiper, -num * Width);
});

arr_l.addEventListener("click", function () {
  if (num == 0) {
    num = swiper.children.length - 1;
    swiper.style.left = -num * Width + "px";
  }
  num--;
  animate_row(swiper, -num * Width);

  cir--;
  if (cir < 0) {
    cir = 2;
  }
  circleChange();
});


var timer = setInterval(function () {
  arr_r.click();
}, 2000);
