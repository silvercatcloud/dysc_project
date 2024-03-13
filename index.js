//模块一，滑动显示隐藏
const banner = document.querySelector('.banner');
const elevator = document.querySelector('.elevator');
 window.document.addEventListener('scroll', function() {
     let scrollTop = document.documentElement.scrollTop;
     if(scrollTop>banner.offsetTop){
         elevator.style.opacity = 1;
     }else{
         elevator.style.opacity = 0;
     }
 })
//模块二，返回顶部
const goUp = document.querySelector('.goUp');
 goUp.addEventListener('click', function() {
     document.documentElement.scrollTop = 0
 })