function animate(obj,target,callback) {
  if(obj.timer){
    clearInterval(obj.timer)
  }
  obj.timer = setInterval(function(){
    let step = (target - obj.offsetTop)/7;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    obj.style.top = obj.offsetTop + step + 'px';
    if(obj.offsetTop == target){
      setInterval(obj.timer);
      if(callback){
        callback();
      }
    }
  },15)
}