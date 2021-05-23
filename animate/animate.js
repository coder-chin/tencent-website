function animate_column(obj,target,callback) {
  if(obj.timer){
    clearInterval(obj.timer)
  }
  obj.timer = setInterval(function(){
    let step = (target - obj.offsetTop)/7;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    obj.style.top = obj.offsetTop + step + 'px';
    if(obj.offsetTop == target){
      clearInterval(obj.timer);
      if(callback){
        callback();
      }
    }
  },15)
}
function animate_row(obj,target,callback) {
  if(obj.timer){
    clearInterval(obj.timer)
  }
  obj.timer = setInterval(function(){
    let step = (target - obj.offsetLeft)/10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    obj.style.left = obj.offsetLeft + step + 'px';
    if(obj.offsetLeft == target){
      clearInterval(obj.timer);
      if(callback){
        callback();
      }
    }
  },15)
}