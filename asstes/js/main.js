
 const navbar = document.querySelector('.navbar');
const headerContentspan= document.querySelector('.header-content span')
const loading = document.querySelector('.loading');
const scrollTotop = document.querySelector('.scroll-top');
const aboutSection = document.querySelector('.about');
const navLinks =document.querySelectorAll('.nav-link');
console.log(navLinks);
navbar.style.transition='0.4s background-color';

window.addEventListener('scroll',function(){

 if (window.scrollY > headerContentspan.offsetTop){
    navbar.style.backgroundColor='#fff';
 }else{
  navbar.style.backgroundColor='transparent';
 }
 if (window.scrollY > scrollTotop.offsetTop ){
  
   scrollTotop.classList.remove('opacity-0','invisible')
   
 }else{
   scrollTotop.classList.add('opacity-0','invisible')  
 }

});

window.addEventListener('load',function(){
   setTimeout(function(){
   loading.classList.add('opacity-0','invisible')
   document.body.style.overflow='auto';
   },2000)
})

scrollTotop.addEventListener('click',function(){
   window.scroll({
      top :0,
      behavior:"smooth",
   })
})


